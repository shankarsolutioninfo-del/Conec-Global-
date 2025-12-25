import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, TrendingUp, Globe, Lightbulb, Download, ArrowRight, Lock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const reports = [
  {
    title: "Global Innovation Index 2024",
    category: "Annual Report",
    description: "Comprehensive analysis of innovation ecosystems across 130+ countries.",
    premium: false,
    icon: Globe,
  },
  {
    title: "Venture Capital Trends",
    category: "Market Analysis",
    description: "Deep dive into VC investment patterns, sector focus, and emerging opportunities.",
    premium: true,
    icon: TrendingUp,
  },
  {
    title: "Future of Work Report",
    category: "Industry Report",
    description: "How AI, automation, and remote work are reshaping the global workforce.",
    premium: true,
    icon: Lightbulb,
  },
  {
    title: "Startup Ecosystem Ranking",
    category: "Research",
    description: "Top 50 cities for startups based on talent, capital, and policy support.",
    premium: false,
    icon: FileText,
  },
  {
    title: "Emerging Markets Outlook",
    category: "Market Analysis",
    description: "Investment opportunities and risks in high-growth emerging economies.",
    premium: true,
    icon: Globe,
  },
  {
    title: "Climate Tech Investment Guide",
    category: "Sector Report",
    description: "Comprehensive guide to climate technology investments and opportunities.",
    premium: true,
    icon: Lightbulb,
  },
];

const Research = () => {
  return (
    <>
      <Helmet>
        <title>Research & Insights | CONEC</title>
        <meta
          name="description"
          content="Access CONEC's research reports, market analysis, and insights on global innovation and economic trends."
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
                  Research & Intelligence
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Data-Driven{" "}
                  <span className="text-accent">Insights</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Access our comprehensive research library with reports, analysis, and 
                  insights on global innovation, investment trends, and economic development.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Reports Grid */}
          <section className="py-16 sm:py-24">
            <div className="section-container">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports.map((report, index) => (
                  <motion.div
                    key={report.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card rounded-2xl p-6 hover-lift group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <report.icon className="w-6 h-6 text-accent" />
                      </div>
                      {report.premium && (
                        <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                          <Lock className="w-3 h-3" />
                          Premium
                        </span>
                      )}
                    </div>
                    
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {report.category}
                    </span>
                    
                    <h3 className="font-display text-lg font-bold mt-2 mb-3 group-hover:text-accent transition-colors">
                      {report.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-6">
                      {report.description}
                    </p>
                    
                    <Link to={report.premium ? "/auth" : "#"}>
                      <Button 
                        variant={report.premium ? "hero-outline" : "hero"} 
                        size="sm" 
                        className="w-full group/btn"
                      >
                        {report.premium ? "Unlock Access" : "Download Report"}
                        {report.premium ? (
                          <Lock className="w-4 h-4" />
                        ) : (
                          <Download className="w-4 h-4" />
                        )}
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-16 glass-card rounded-3xl p-8 sm:p-12 text-center"
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                  Need Custom Research?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Our research team can provide tailored analysis and insights 
                  specific to your industry, market, or investment thesis.
                </p>
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Request Custom Research
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Research;
