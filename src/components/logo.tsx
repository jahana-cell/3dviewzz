import { Building2 } from 'lucide-react';

export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <Building2 className="h-8 w-8 text-accent" />
      <span className="text-xl font-bold tracking-tight text-foreground">
        3Dviewzz
      </span>
    </a>
  );
}
