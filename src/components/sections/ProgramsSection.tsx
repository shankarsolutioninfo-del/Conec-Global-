import { motion } from "framer-motion";
import { Rocket, TrendingUp, GraduationCap, Building2, Landmark, BookOpen, CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Rocket,
    title: "Entrepreneurs",
    description: "Accelerator programs, mentorship, and resources to help founders build and scale world-changing ventures.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: TrendingUp,
    title: "Investors",
    description: "Access curated deal flow, co-investment opportunities, and exclusive investor networks across emerging markets.",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: GraduationCap,
    title: "Leadership Academy",
    description: "Executive education and leadership development programs for the next generation of global business leaders.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Building2,
    title: "Corporate Advisory",
    description: "Strategic consulting services to help enterprises innovate, transform, and compete in the digital economy.",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: Landmark,
    title: "Government & Policy",
    description: "Partnering with governments to design and implement policies that foster innovation ecosystems.",
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    icon: BookOpen,
    title: "Research",
    description: "In-depth research, reports, and insights on global economic trends, emerging technologies, and markets.",
    color: "from-cyan-500/20 to-sky-500/20",
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Programs & Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Solutions for{" "}
            <span className="text-accent">Every Stakeholder</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From early-stage founders to global enterprises, we provide tailored 
            programs and services to drive innovation and economic growth.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-3xl p-8 hover-lift cursor-pointer relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <program.icon className="w-7 h-7 text-accent" />
                </div>
                
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                
                <span className="inline-flex items-center text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Events CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 glass-card rounded-3xl p-8 sm:p-12 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <CalendarDays className="w-8 h-8 text-accent" />
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Global Events
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join our world-class summits, conferences, and networking events 
            connecting innovators, investors, and leaders across the globe.
          </p>
          <Button variant="hero" size="lg">
            View Upcoming Events
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
