import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Shape the{" "}
              <span className="text-accent">Future Economy?</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Join a global community of innovators, investors, and leaders 
              building the next era of economic growth. Your journey starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="hero"
                size="xl"
                className="group"
              >
                Join CONEC Today
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="glass"
                size="xl"
                className="text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-primary-foreground/10"
          >
            <p className="text-sm text-primary-foreground/60 mb-6">
              Trusted by leading organizations worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {["World Bank", "UN Development", "McKinsey", "Goldman Sachs", "Sequoia"].map(
                (partner) => (
                  <span
                    key={partner}
                    className="text-primary-foreground font-semibold text-lg"
                  >
                    {partner}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
