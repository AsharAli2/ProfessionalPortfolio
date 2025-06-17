// import React, { useState } from 'react';
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { useToast } from '@/hooks/use-toast';

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Send email using EmailJS or similar service
//       const emailData = {
//         to_email: 'kkhan.ashar11@gmail.com',
//         from_name: formData.name,
//         from_email: formData.email,
//         message: formData.message,
//         subject: `New contact form message from ${formData.name}`
//       };

//       // For now, we'll simulate the email sending
//       console.log('Email would be sent with data:', emailData);

//       toast({
//         title: "Message sent!",
//         description: "Thank you for reaching out! I'll get back to you soon.",
//       });

//       setFormData({
//         name: '',
//         email: '',
//         message: ''
//       });
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to send message. Please try again.",
//         variant: "destructive"
//       });
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <section className="py-20" id="contact">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-12 text-center">
//           <span className="gold-text-gradient">Get In Touch</span>
//         </h2>

//         <div className="max-w-3xl mx-auto gold-card p-6 md:p-8 rounded-lg">
//           <p className="text-gray-400 text-center mb-8">
//             Have a project in mind? Looking for a developer for your team?
//             Or just want to say hi? Drop me a message!
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label htmlFor="name" className="text-sm text-gold-400">Name</label>
//                 <Input
//                   id="name"
//                   name="name"
//                   placeholder="Your name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="bg-black/40 border-gold-500/30 focus:border-gold-500 focus:ring-gold-500/20"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="email" className="text-sm text-gold-400">Email</label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="Your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="bg-black/40 border-gold-500/30 focus:border-gold-500 focus:ring-gold-500/20"
//                 />
//               </div>
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="message" className="text-sm text-gold-400">Message</label>
//               <Textarea
//                 id="message"
//                 name="message"
//                 placeholder="Your message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="min-h-32 bg-black/40 border-gold-500/30 focus:border-gold-500 focus:ring-gold-500/20"
//               />
//             </div>
//             <div className="text-center">
//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="gold-button min-w-40"
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </Button>
//             </div>
//           </form>

//           <div className="mt-12 pt-8 border-t border-gold-500/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//             <div>
//               <h3 className="text-gold-400 font-semibold mb-2">Email</h3>
//               <a href="mailto:kkhan.ashar11@gmail.com" className="text-gray-400 hover:text-gold-500 transition">
//                 kkhan.ashar11@gmail.com
//               </a>
//             </div>
//             <div>
//               <h3 className="text-gold-400 font-semibold mb-2">Connect</h3>
//               <div className="flex justify-center space-x-4">
//                 <a href="https://github.com/AsharAli2" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-gold-300 transition">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                   </svg>
//                 </a>
//                 <a href="https://www.linkedin.com/in/ashar-ali-khan-971633251/" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-gold-300 transition">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-gold-400 font-semibold mb-2">Location</h3>
//               <p className="text-gray-400">Remote, Worldwide</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { db } from "@/lib/firebase"; // Adjust path as needed
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { name, email, message } = formData;

      // Save to Firebase Firestore
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        timestamp: serverTimestamp(),
      });

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error("Firebase error:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gold-text-gradient">Get In Touch</span>
        </h2>

        <div className="max-w-3xl mx-auto gold-card p-6 md:p-8 rounded-lg">
          <p className="text-gray-400 text-center mb-8">
            Have a project in mind? Looking for a developer for your team? Or
            just want to say hi? Drop me a message!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gold-400">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-black/40 border-gold-500/30 focus:border-gold-500 focus:ring-gold-500/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gold-400">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black/40 border-gold-500/30 focus:border-gold-500 focus:ring-gold-500/20"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-gold-400">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-32 bg-black/40 border-gold-500/30 focus:border-gold-500 focus:ring-gold-500/20"
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="gold-button min-w-40"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-gold-500/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-gold-400 font-semibold mb-2">Email</h3>
              <a
                href="mailto:kkhan.ashar11@gmail.com"
                className="text-gray-400 hover:text-gold-500 transition"
              >
                kkhan.ashar11@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-gold-400 font-semibold mb-2">Connect</h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/AsharAli2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-500 hover:text-gold-300 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ashar-ali-khan-971633251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-500 hover:text-gold-300 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-gold-400 font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Remote, Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
