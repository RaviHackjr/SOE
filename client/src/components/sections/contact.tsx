import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useScrollAnimation } from "@/hooks/use-scroll";

interface ContactForm {
  name: string;
  email: string;
  experience: string;
  interests: string;
}

export default function Contact() {
  const { ref, isInView } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    experience: "",
    interests: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", form);
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });
      setForm({ name: "", email: "", experience: "", interests: "" });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Join Our Club
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to innovate with us? Join our community of robotics enthusiasts
            and shape the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyber-cyan">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-center" data-testid="contact-email">
                <Mail className="text-electric-blue text-xl mr-4" />
                <span className="text-gray-300">soerobotics@engineering.edu</span>
              </div>
              <div className="flex items-center" data-testid="contact-phone">
                <Phone className="text-electric-blue text-xl mr-4" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center" data-testid="contact-address">
                <MapPin className="text-electric-blue text-xl mr-4" />
                <span className="text-gray-300">
                  Engineering Building, Room 301<br />
                  School of Engineering Campus
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="tech-card p-8 rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="block text-gray-300 mb-2">Full Name</Label>
                <Input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan focus:outline-none transition-colors duration-300"
                  placeholder="Enter your full name"
                  required
                  data-testid="input-name"
                />
              </div>

              <div>
                <Label className="block text-gray-300 mb-2">Email Address</Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan focus:outline-none transition-colors duration-300"
                  placeholder="Enter your email"
                  required
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label className="block text-gray-300 mb-2">Experience Level</Label>
                <Select
                  value={form.experience}
                  onValueChange={(value) => handleInputChange("experience", value)}
                  required
                >
                  <SelectTrigger
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan focus:outline-none transition-colors duration-300"
                    data-testid="select-experience"
                  >
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="block text-gray-300 mb-2">Areas of Interest</Label>
                <Textarea
                  value={form.interests}
                  onChange={(e) => handleInputChange("interests", e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan focus:outline-none transition-colors duration-300 h-24"
                  placeholder="Tell us about your interests in robotics..."
                  required
                  data-testid="textarea-interests"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-electric-blue hover:bg-deep-electric text-white font-bold py-3 rounded-lg hover-glow transition-all duration-300"
                data-testid="button-submit-application"
              >
                <NotebookPen className="mr-2 w-5 h-5" />
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
