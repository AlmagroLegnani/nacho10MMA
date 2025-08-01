import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Instagram, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

// Define form schema using zod
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters."
  })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  // Initialize form with react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  // Handle form submission
    const onSubmit = (data: ContactFormValues) => {
    // Crear mensaje para WhatsApp
    const whatsappMessage = `*Nuevo mensaje desde el sitio web de Nacho Diez MMA*

*Nombre:* ${data.name}
*Email:* ${data.email}
*Teléfono:* ${data.phone || 'No proporcionado'}

*Mensaje:*
${data.message}

---
Enviado desde: nachodiezmma.com`;

    // Número de WhatsApp de Nacho (formato internacional sin +)
    const whatsappNumber = "5521967674624";
    
    // Crear URL de WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp en nueva ventana
    window.open(whatsappUrl, '_blank');
    
    toast.success(t('messageSent'));
    form.reset();
  };

  // Contact methods
  const contactMethods = [
    {
      icon: <Phone className="h-12 w-12 text-white" />,
      title: "WhatsApp",
      value: "+55 21 96767-4624",
      action: "https://wa.me/5521967674624",
      label: t('chatWhatsApp'),
      bgColor: "bg-green-500"
    },
    {
      icon: <Instagram className="h-12 w-12 text-white" />,
      title: "Instagram",
      value: "@nacho10mma",
      action: "https://www.instagram.com/nacho10mma",
      label: t('followUs'),
      bgColor: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
    },
    {
      icon: <Mail className="h-12 w-12 text-white" />,
      title: "Email",
      value: "info@nachodiez.com",
      action: "mailto:nachodiez1990@gmail.com",
      label: t('sendEmail'),
      bgColor: "bg-orange-500"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-zinc-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/img/portrait-little-boy-child-training-boxing-isolated-black-studio-background-little-sportsman.jpg" 
            alt="Young Boxing Champion - Contact Nacho Diez MMA" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-oswald">
              {t('contact')} <span className="text-orange-500">{t('us')}</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              {t('contactDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900 border-zinc-800 h-full hover:border-orange-500 transition-colors duration-300">
                  <CardHeader className="text-center">
                    <div className={`${method.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-105 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <CardTitle className="text-white text-xl">
                      {method.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-zinc-300 mb-6 text-lg font-medium">{method.value}</p>
                    <Button 
                      asChild
                      variant="secondary"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 font-semibold transition-colors duration-300"
                    >
                      <a href={method.action} target="_blank" rel="noopener noreferrer">
                        {method.label}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-2xl font-oswald">{t('sendMessage')}</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('name')}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('yourName')}
                              className="bg-zinc-800 border-zinc-700 focus:border-orange-500"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('email')}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your.email@example.com" 
                              className="bg-zinc-800 border-zinc-700 focus:border-orange-500"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono (opcional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="+55 21 99999-9999" 
                              className="bg-zinc-800 border-zinc-700 focus:border-orange-500"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('message')}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={t('yourMessage')}
                              className="bg-zinc-800 border-zinc-700 focus:border-orange-500 min-h-32"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t('sending') : t('sendMessage')}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-zinc-950">
        <div className="h-[400px] w-full">
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-zinc-800 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2 font-oswald">{t('location')}</h3>
                <p className="text-zinc-400">Ladeira Ary Barroso, 01 - Leme, Rio de Janeiro - RJ, 22010-060, Brazil</p>
                <Button
                  variant="link"
                  className="mt-4 text-orange-500 hover:text-orange-400"
                  asChild
                >
                  <a 
                    href="https://www.google.com/maps/place/Ladeira+Ary+Barroso,+01+-+Leme,+Rio+de+Janeiro+-+RJ,+22010-060,+Brazil/@-22.9615859,-43.1740694,16z/data=!3m1!4b1!4m6!3m5!1s0x998004027a07dd:0x374ca56e709764db!8m2!3d-22.9615909!4d-43.169456!16s%2Fg%2F11xcwms56q?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {t('directions')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}