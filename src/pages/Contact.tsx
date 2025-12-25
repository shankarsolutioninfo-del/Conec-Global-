import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin, Twitter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | CONEC</title>
        <meta
          name="description"
          content="Get in touch with CONEC. Contact Kota Bhaswanth and our team for inquiries about programs, partnerships, and more."
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
                  Get in Touch
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Let's Build the{" "}
                  <span className="text-accent">Future Together</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Whether you're a founder, investor, or enterprise leader, we'd love 
                  to hear from you and explore how we can work together.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 sm:py-24">
            <div className="section-container">
              <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="font-display text-2xl font-bold mb-6">
                      Contact Information
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Email</p>
                          <a href="mailto:hello@conec.global" className="text-muted-foreground hover:text-accent transition-colors">
                            hello@conec.global
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Phone</p>
                          <a href="tel:+919398386704" className="text-muted-foreground hover:text-accent transition-colors">
                            +91 9398386704
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Headquarters</p>
                          <p className="text-muted-foreground">
                            Global Innovation Center<br />
                            Singapore • Dubai • New York
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Founder Info */}
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="font-semibold mb-4">Leadership</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="text-accent font-bold text-xl">KB</span>
                      </div>
                      <div>
                        <p className="font-semibold">Kota Bhaswanth</p>
                        <p className="text-sm text-muted-foreground">Founder & CEO</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h4 className="font-medium mb-4">Follow Us</h4>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-background/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="How can we help?"
                        required
                        className="bg-background/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={4}
                        required
                        className="bg-background/50 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
