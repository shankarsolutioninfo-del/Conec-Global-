import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    description: "Get started with essential resources",
    price: "$0",
    period: "forever",
    features: [
      "Access to public research",
      "Newsletter & insights",
      "Community forums",
      "Event notifications",
      "Basic networking",
    ],
    cta: "Get Started",
    variant: "hero-outline" as const,
    popular: false,
  },
  {
    name: "Premium",
    description: "Full access for serious founders",
    price: "$99",
    period: "per month",
    features: [
      "Everything in Free",
      "Full research library",
      "Accelerator programs",
      "Leadership Academy",
      "Exclusive events",
      "Priority support",
      "Investor introductions",
    ],
    cta: "Upgrade to Premium",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Investor",
    description: "For qualified investors",
    price: "$499",
    period: "per month",
    features: [
      "Everything in Premium",
      "Curated deal flow",
      "Due diligence reports",
      "Co-investment access",
      "Private investor events",
      "Portfolio company support",
      "Dedicated relationship manager",
    ],
    cta: "Apply for Access",
    variant: "hero-outline" as const,
    popular: false,
  },
];

export function MembershipSection() {
  return (
    <section id="membership" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Membership
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Path to{" "}
            <span className="text-accent">Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Select the membership tier that best fits your goals and unlock 
            exclusive access to resources, programs, and networks.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass-card rounded-3xl p-8 hover-lift ${
                plan.popular ? "ring-2 ring-accent" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.variant} className="w-full" size="lg">
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-muted-foreground"
        >
          Need a custom solution for your organization?{" "}
          <a href="#contact" className="text-accent font-medium hover:underline">
            Contact us for Enterprise pricing
          </a>
        </motion.p>
      </div>
    </section>
  );
}
