import { Logo } from "@/components/Logo";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Programs: [
    { name: "Entrepreneurs", href: "#entrepreneurs" },
    { name: "Investors", href: "#investors" },
    { name: "Leadership Academy", href: "#academy" },
    { name: "Corporate Advisory", href: "#corporate" },
  ],
  Resources: [
    { name: "Research", href: "#research" },
    { name: "Events", href: "#events" },
    { name: "Blog", href: "#blog" },
    { name: "News", href: "#news" },
  ],
  Company: [
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo size="md" showTagline />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Building the next global economy through innovation, leadership, and investment.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CONEC. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Headquarters: India 
          </p>
        </div>
      </div>
    </footer>
  );
}
