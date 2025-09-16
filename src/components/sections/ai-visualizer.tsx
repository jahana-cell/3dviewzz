'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { visualizeBlueprint } from '@/ai/flows/visualize-blueprint';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Loader2, Upload } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const formSchema = z.object({
  blueprint: z
    .any()
    .refine((files) => files?.length === 1, 'Blueprint image is required.')
    .refine((files) => files?.[0]?.size <= 5000000, `Max file size is 5MB.`)
    .refine(
      (files) => ['image/jpeg', 'image/png', 'image/webp'].includes(files?.[0]?.type),
      '.jpg, .png, and .webp files are accepted.'
    ),
  style: z.enum(['modern', 'minimalist', 'classic'], {
    required_error: 'You need to select a style.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function AiVisualizer() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const defaultBlueprint = PlaceHolderImages.find((p) => p.id === 'default-blueprint');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      style: 'modern',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResultImage(null);
    try {
      const file = data.blueprint[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64data = reader.result as string;
        const response = await visualizeBlueprint({
          blueprintDataUri: base64data,
          style: data.style,
        });
        setResultImage(response.visualizationDataUri);
      };
      reader.onerror = () => {
        throw new Error('Could not read file.');
      };
    } catch (error) {
      console.error('Visualization error:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with visualizing your blueprint. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  return (
    <section id="visualizer" className="py-12 lg:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            AI-Powered Project Visualizer
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Upload a 2D blueprint, select a style, and let our AI generate an initial 3D rendering in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                  <CardTitle>Create Your Vision</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="blueprint"
                    render={({ field }) => (
                      <FormItem>
                        <Label>1. Upload Blueprint</Label>
                        <FormControl>
                          <div className="relative flex justify-center items-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary transition-colors">
                            <Input
                              type="file"
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              accept="image/png, image/jpeg, image/webp"
                              onChange={(e) => {
                                field.onChange(e.target.files);
                                handleFileChange(e);
                              }}
                            />
                            {previewImage ? (
                              <Image src={previewImage} alt="Blueprint preview" fill className="object-contain rounded-lg p-2" />
                            ) : (
                              <div className="text-center">
                                <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
                                <p className="mt-2 text-sm text-muted-foreground">
                                  <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-muted-foreground">PNG, JPG, or WEBP (max 5MB)</p>
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                      <FormItem>
                        <Label>2. Select Style</Label>
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-3 gap-2">
                            {['modern', 'minimalist', 'classic'].map((style) => (
                              <FormItem key={style}>
                                <FormControl>
                                  <Label className="flex flex-col items-center justify-center gap-2 p-2 border rounded-lg cursor-pointer has-[:checked]:bg-muted has-[:checked]:border-primary h-20">
                                    <RadioGroupItem value={style} className="sr-only" />
                                    <span className="font-medium capitalize text-sm">{style}</span>
                                  </Label>
                                </FormControl>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Visualizing...</> : 'Generate Visualization'}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">Your 3D Visualization</h3>
            <Card className="aspect-video">
              <CardContent className="p-2 h-full">
                <div className="relative w-full h-full bg-muted rounded-lg flex items-center justify-center">
                  {isLoading && <Loader2 className="h-12 w-12 text-primary animate-spin" />}
                  {!isLoading && resultImage && <Image src={resultImage} alt="Generated 3D visualization" fill className="object-contain" />}
                  {!isLoading && !resultImage && defaultBlueprint && <Image src={defaultBlueprint.imageUrl} data-ai-hint={defaultBlueprint.imageHint} alt="Example visualization" fill className="object-contain p-4 opacity-30" />}
                  {!isLoading && !resultImage && <p className="absolute text-muted-foreground">Your render will appear here</p>}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
