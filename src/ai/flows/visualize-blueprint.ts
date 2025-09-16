'use server';

/**
 * @fileOverview Generates a 3D visualization of a 2D blueprint using AI, allowing users to select different styles.
 *
 * - visualizeBlueprint - A function that handles the blueprint visualization process.
 * - VisualizeBlueprintInput - The input type for the visualizeBlueprint function.
 * - VisualizeBlueprintOutput - The return type for the visualizeBlueprint function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VisualizeBlueprintInputSchema = z.object({
  blueprintDataUri: z
    .string()
    .describe(
      "A 2D blueprint image as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  style: z
    .enum(['modern', 'minimalist', 'classic'])
    .describe('The desired architectural style for the 3D visualization.'),
});
export type VisualizeBlueprintInput = z.infer<typeof VisualizeBlueprintInputSchema>;

const VisualizeBlueprintOutputSchema = z.object({
  visualizationDataUri: z
    .string()
    .describe(
      'A 3D visualization of the blueprint, as a data URI that must include a MIME type and use Base64 encoding.'
    ),
});
export type VisualizeBlueprintOutput = z.infer<typeof VisualizeBlueprintOutputSchema>;

export async function visualizeBlueprint(
  input: VisualizeBlueprintInput
): Promise<VisualizeBlueprintOutput> {
  return visualizeBlueprintFlow(input);
}

const visualizeBlueprintPrompt = ai.definePrompt({
  name: 'visualizeBlueprintPrompt',
  input: {schema: VisualizeBlueprintInputSchema},
  output: {schema: VisualizeBlueprintOutputSchema},
  prompt: `You are an expert in architectural visualization. Create a 3D visualization of the provided 2D blueprint in the style specified by the user.

2D Blueprint: {{media url=blueprintDataUri}}
Style: {{{style}}}

Generate a photorealistic rendering of the blueprint in the specified style. Focus on creating an aesthetically pleasing and accurate representation of the design.

Ensure the generated image maintains high resolution and is suitable for showcasing architectural designs to potential clients.`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
    ],
  },
});

const visualizeBlueprintFlow = ai.defineFlow(
  {
    name: 'visualizeBlueprintFlow',
    inputSchema: VisualizeBlueprintInputSchema,
    outputSchema: VisualizeBlueprintOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      prompt: [
        {media: {url: input.blueprintDataUri}},
        {text: `Visualize this blueprint in a ${input.style} style.`},
      ],
      model: 'googleai/gemini-2.5-flash-image-preview',
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    return {visualizationDataUri: media.url!};
  }
);
