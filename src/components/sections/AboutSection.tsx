import { motion } from "framer-motion";
import { Target, Lightbulb, Heart } from "lucide-react";

const values = [
  "Global mindset",
  "Leadership",
  "Innovation",
  "Integrity",
  "Sustainability",
  "Economic impact",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />

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
            About Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Shaping the Future of{" "}
            <span className="text-accent">Global Economy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            CONEC is a multinational innovation, entrepreneurship, and economic 
            development organization supporting founders, mobilizing capital, 
            producing leadership talent, and modernizing industries.
          </p>
        </motion.div>

        {/* Vision, Mission, Values Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-3xl p-8 hover-lift"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the world's leading multinational institution for entrepreneurial 
              leadership, innovation ecosystems, investment access, and economic 
              transformation.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 hover-lift"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To build the next global economy by developing founders, scaling 
              ventures, accelerating industries, and mobilizing investment for 
              sustainable growth.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-3xl p-8 hover-lift"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Our Values</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((value, index) => (
                <motion.span
                  key={value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="px-3 py-1.5 rounded-full bg-secondary text-sm font-medium"
                >
                  {value}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Strategic Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Strategic Pillars
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive approach to building economic transformation
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Venture Acceleration",
            "Innovation & Modernization",
            "Leadership & Talent",
            "Investment & Capital Networks",
            "Corporate Strategy Advisory",
            "Government Partnership",
            "Research & Intelligence",
            "International Expansion",
          ].map((pillar, index) => (
            <motion.div
              key={pillar}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card rounded-xl p-5 text-center hover-lift group cursor-pointer"
            >
              <span className="text-xs font-bold text-accent mb-2 block">
                0{index + 1}
              </span>
              <span className="font-medium text-sm group-hover:text-accent transition-colors">
                {pillar}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
