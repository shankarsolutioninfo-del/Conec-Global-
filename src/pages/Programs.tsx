import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Rocket, TrendingUp, GraduationCap, Building2, Landmark, BookOpen, ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Rocket,
    title: "Entrepreneurs",
    description: "Accelerator programs, mentorship, and resources to help founders build and scale world-changing ventures.",
    features: ["12-week accelerator", "Mentorship network", "Funding access", "Global expansion support"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: TrendingUp,
    title: "Investors",
    description: "Access curated deal flow, co-investment opportunities, and exclusive investor networks across emerging markets.",
    features: ["Deal flow access", "Due diligence support", "Co-investment network", "Portfolio support"],
    color: "from-cyan-500/20 to-sky-500/20",
  },
  {
    icon: GraduationCap,
    title: "Leadership Academy",
    description: "Executive education and leadership development programs for the next generation of global business leaders.",
    features: ["Executive programs", "Leadership coaching", "Peer networks", "Certification"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Building2,
    title: "Corporate Advisory",
    description: "Strategic consulting services to help enterprises innovate, transform, and compete in the digital economy.",
    features: ["Digital transformation", "Innovation strategy", "Market entry", "Partnership development"],
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: Landmark,
    title: "Government & Policy",
    description: "Partnering with governments to design and implement policies that foster innovation ecosystems.",
    features: ["Policy design", "Ecosystem development", "Public-private partnerships", "Capacity building"],
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    icon: BookOpen,
    title: "Research",
    description: "In-depth research, reports, and insights on global economic trends, emerging technologies, and markets.",
    features: ["Industry reports", "Market analysis", "Trend insights", "Custom research"],
    color: "from-teal-500/20 to-emerald-500/20",
  },
];

const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Programs & Services | CONEC</title>
        <meta
          name="description"
          content="Explore CONEC's programs for entrepreneurs, investors, corporate leaders, and government partners."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-24 sm:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
            
            <div className="section-container relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  Programs & Services
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Comprehensive Solutions for{" "}
                  <span className="text-accent">Every Stakeholder</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  From early-stage founders to global enterprises, we provide tailored 
                  programs and services to drive innovation and economic growth.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Programs Grid */}
          <section className="py-16 sm:py-24">
            <div className="section-container">
              <div className="grid md:grid-cols-2 gap-8">
                {programs.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group glass-card rounded-3xl p-8 hover-lift relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                        <program.icon className="w-7 h-7 text-accent" />
                      </div>
                      
                      <h2 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {program.title}
                      </h2>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {program.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {program.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-accent" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link to="/auth">
                        <Button variant="hero" size="sm" className="group/btn">
                          Apply Now
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Programs;
