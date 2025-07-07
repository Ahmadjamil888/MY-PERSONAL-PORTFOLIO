
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('messages')
        .insert([formData]);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Drop me a message and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
              <p className="text-white/70 mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly chat about technology and innovation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-white/70">hello@ahmadjamil.dev</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-white/70">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-white/70">New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Send Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black hover:bg-white/90 font-medium py-3"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
