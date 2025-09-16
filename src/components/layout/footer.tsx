import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer id="contact" className="border-t bg-background">
      <div className="container grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Logo />
          <p className="text-muted-foreground">
            The new standard for real estate & architecture marketing.
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
          <div>
            <h3 className="mb-2 font-semibold">Funnel Stages</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-muted-foreground hover:text-primary">Awareness</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary">Interest</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary">Decision</a></li>
              <li><a href="#process" className="text-muted-foreground hover:text-primary">Action</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex max-w-7xl items-center justify-center py-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} 3Dviewzz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
