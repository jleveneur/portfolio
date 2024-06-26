"use client";

import { sendEmail } from "../actions";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, SendHorizonal } from "lucide-react";
import { personalInfo } from "@/constants";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { LoadingSpinner } from "@/components/shared/loading-spinner";

const ContactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Entrer un nom valide.",
  }),
  email: z.string().email({
    message: "Entrer une adresse email valide.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
});

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ContactFormSchema>) => {
    setIsLoading(true);
    const { error, success } = await sendEmail(values);

    setIsLoading(false);
    if (success) {
      toast({
        title: "Email envoyé!",
        description:
          "Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.",
      });
      form.reset();
    }

    if (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
      });
    }
  };

  return (
    <section className="flex flex-col gap-4 md:flex-row">
      <div className="flex-1">
        <h1 className="text-4xl font-bold md:text-5xl">Contactez-moi</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-500">
          Vous avez une question ou un projet en tête ? N&apos;hésitez pas à me
          contacter en remplissant le formulaire ci-dessous.
        </p>
        <div className="hidden md:mt-20 md:flex md:flex-col md:gap-2">
          <p className="flex items-center gap-4">
            <Phone className="h-4 w-4" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:underline"
            >
              {personalInfo.email}
            </a>
          </p>
          <p className="flex items-center gap-4">
            <Mail className="h-4 w-4" />
            <a href={`tel:${personalInfo.phone}`} className="hover:underline">
              {personalInfo.phone}
            </a>
          </p>
        </div>
      </div>
      <div className="flex-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Nom complet <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" required {...field} />
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
                  <FormLabel>
                    Adresse email <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@yourdomain.com"
                      required
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
                  <FormLabel>
                    Message <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Hi there..." required {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="font-bold">
              {isLoading ? (
                <>
                  Envoi en cours...
                  <LoadingSpinner className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Envoyer
                  <SendHorizonal className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
