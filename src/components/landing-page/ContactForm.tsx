"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schema/contactSchema";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { contactFormService } from "@/service/FormSubmission";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      phone: "",
      message: "",
    },
  });

  const formSubmission = async (data: z.infer<typeof contactSchema>) => {
    setIsSubmitting(true);
    const res = await contactFormService({
      phone: data.phone,
      message: data.message,
    });

    if (res.status === 200) {
      toast({
        title: "Message sent successfully.",
        description: "Your inquiry was submitted successfully.",
        draggable: true,
        variant: "default",
      });
    } else {
      toast({
        title: "Something went wrong.",
        description: "Something went wrong while sending message",
        draggable: true,
        variant: "destructive",
      });
    }
    form.setValue("phone", "");
    form.setValue("message", "");
    setIsSubmitting(false);
  };

  return (
    <div className="w-full h-full flex justify-center items-center min-w-[400px]">
      <div className="w-full h-full flex justify-center items-center max-w-[600px] p-7 border rounded flex-col gap-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(formSubmission)}
            className="space-y-8 w-full h-full"
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="98XX-XXXXXX" {...field} />
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Write your message here..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              {isSubmitting ? (
                <div className="animate-spin">
                  <Loader2 />
                </div>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
