import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Clock, ArrowRight, Video, Ticket } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    title: "Global Innovation Summit 2025",
    date: "March 15-17, 2025",
    location: "Singapore",
    type: "In-Person",
    description: "Join 2000+ founders, investors, and leaders for three days of insights, networking, and deal-making.",
    attendees: "2000+",
    featured: true,
  },
  {
    title: "Venture Capital Masterclass",
    date: "February 8, 2025",
    location: "Virtual",
    type: "Online",
    description: "Learn how to raise capital from top VCs. Exclusive session for CONEC members.",
    attendees: "500",
    featured: false,
  },
  {
    title: "Leadership Summit Dubai",
    date: "April 5-6, 2025",
    location: "Dubai, UAE",
    type: "In-Person",
    description: "Executive leadership program featuring global business leaders and policy makers.",
    attendees: "500",
    featured: false,
  },
  {
    title: "Startup Pitch Night",
    date: "January 25, 2025",
    location: "Virtual",
    type: "Online",
    description: "Monthly pitch competition featuring top startups from our accelerator programs.",
    attendees: "300",
    featured: false,
  },
  {
    title: "Emerging Markets Forum",
    date: "May 20-21, 2025",
    location: "Mumbai, India",
    type: "In-Person",
    description: "Explore investment opportunities across South Asia's fastest-growing markets.",
    attendees: "800",
    featured: false,
  },
  {
    title: "Climate Tech Summit",
    date: "June 10-12, 2025",
    location: "New York, USA",
    type: "In-Person",
    description: "The premier gathering for climate tech investors, founders, and policy makers.",
    attendees: "1500",
    featured: true,
  },
];

const Events = () => {
  return (
    <>
      <Helmet>
        <title>Events | CONEC</title>
        <meta
          name="description"
          content="Join CONEC's global summits, conferences, and networking events connecting innovators, investors, and leaders."
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
                  Global Events
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Connect with{" "}
                  <span className="text-accent">Global Leaders</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Join our world-class summits, conferences, and networking events 
                  connecting innovators, investors, and leaders across the globe.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Events Grid */}
          <section className="py-16 sm:py-24">
            <div className="section-container">
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`glass-card rounded-2xl p-6 hover-lift group ${
                      event.featured ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.type === "Online" 
                              ? "bg-accent/10 text-accent" 
                              : "bg-primary/10 text-primary"
                          }`}>
                            {event.type === "Online" ? (
                              <span className="flex items-center gap-1">
                                <Video className="w-3 h-3" />
                                Virtual Event
                              </span>
                            ) : (
                              <span className="flex items-center gap-1">
                                <Ticket className="w-3 h-3" />
                                In-Person
                              </span>
                            )}
                          </span>
                          {event.featured && (
                            <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <h3 className="font-display text-xl lg:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                          {event.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4">
                          {event.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-accent" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-accent" />
                            {event.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-accent" />
                            {event.attendees} Attendees
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <Link to="/auth">
                          <Button variant="hero" className="w-full lg:w-auto group/btn">
                            Register Now
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
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

export default Events;
