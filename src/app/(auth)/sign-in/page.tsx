"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { signInSchema } from "@/schema/signInSchema";
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
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    setIsSubmitting(true);
    const res = await signIn("credentials", {
      redirect: false,
      phone: data.phone,
      password: data.password,
    });

    if (res?.error) {
      toast({
        title: "Login error",
        description: "Incorrect phone number or password",
        draggable: true,
        variant: "destructive",
      });
    }

    if (res?.url) {
      router.replace("/dashboard");
    }
    setIsSubmitting(false);
  };
    
  return (
    <div className="min-w-[90vw]  min-h-[80vh] p-5 flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center max-w-[600px] p-7 border rounded flex-col gap-4">
        <h2 className="w-full text-center font-semibold text-2xl">
          Login Form
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-sm ">
              Don{"'"}t have an account?{" "}
              <Link href="/sign-up" className="">
                Sign up
              </Link>
            </p>
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

export default Page;
