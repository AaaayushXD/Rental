"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { signUpSchema } from "@/schema/signUpSchema";
import { Loader2 } from "lucide-react";
import { signUpService } from "@/service/Authentication";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const Page = () => {
  const { toast } = useToast();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      password: "",
      confirmPassword: "",
      totalPeople: "1",
      married: "false",
      children: "0",
    },
  });

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await signUpService(
        {
          ...data,
          totalPeople: +data.totalPeople,
          children: +data.children,
          married: Boolean(data.married),
        },
        "tenant"
      );
      if (response.status === 400) {
        toast({
          title: "User already exist.",
          description:
            "User already exist with same number. Please use another phone number.",
          variant: "destructive",
        });
        return;
      }
      toast({
        title: "Sign up successful",
        description: "You have been signed up successfully",
      });
      router.replace("/");
    } catch (error) {
      toast({
        title: "Sign Up error",
        description: (error as string) || "Error while signing in new user.",
        draggable: true,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-w-[90vw]  min-h-[90vh] p-5 flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center max-w-[600px] p-7 border rounded flex-col gap-4">
        <h2 className="w-full text-center font-semibold text-2xl">Sign up</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 w-full h-full"
          >
            <div className="w-full gap-5 grid sm:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        {...field}
                        style={{
                          width: "100%",
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        {...field}
                        className="max-w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="married"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Married</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value.toString()}
                      className="flex justify-start items-center gap-8"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel>Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
                        </FormControl>
                        <FormLabel>No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full gap-5 grid sm:grid-cols-2">
              <FormField
                control={form.control}
                name="totalPeople"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total People </FormLabel>
                    <FormControl>
                      <Input
                        min={1}
                        type="number"
                        placeholder="Number of people"
                        {...field}
                        style={{
                          width: "100%",
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="children"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Children</FormLabel>
                    <FormControl>
                      <Input
                        min={0}
                        type="number"
                        placeholder="No of children"
                        {...field}
                        className="max-w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <p className="text-sm ">
              Already have an account?{" "}
              <Link href="/login" className="">
                Login here
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
