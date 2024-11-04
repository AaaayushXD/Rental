"use client";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Loader, PlusCircle } from "lucide-react";
import { Annoucements } from "@/@types/Cards";
import AnnoucementCard from "@/components/cards/AnnoucementCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { addAnnoucementSchema } from "@/schema/AnnoucementFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";

const AnnoucementData: Annoucements = {
  title: "No electricity",
  description:
    "There won't be any electricity in the area for this evening. Please charge your battries and wait for further detail.",
  dateAndTime: "18th Aug, 2024. 01:00 PM",
};
const Annoucement = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof addAnnoucementSchema>>({
    resolver: zodResolver(addAnnoucementSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const onSubmit = () => {
    //   Onsubmit function
    setIsLoading(true);
  };
  useEffect(() => {
    // read latest annoucements.
  }, []);
  return (
    <div className="flex flex-col justify-start items-start gap-5 border p-3 rounded-lg  w-ful flex-grow">
      <div className="w-full flex justify-between items-center gap-2">
        <h3 className="font-medium text-xl tracking-wider pl-3">Annoucement</h3>

        <Dialog>
          <DialogTrigger>
            <p className="flex  gap-1 items-center justify-start p-2 text-sm hover:bg-brandPrimary-dark cursor-pointer bg-brandPrimary text-brandPrimary-content rounded">
              Create
              <PlusCircle size={15} />
            </p>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-xl tracking-wide">
                Create new annoucement.
              </DialogTitle>
              <DialogDescription className="text-sm text-brandCopy-light">
                Create new annoucement to broadcast for all tenants.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Title here" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={(field) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Write annoucement detail here...."
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">
                  {isLoading ? <Loader className="animate-spin" /> : "Submit"}
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col gap-2 justify-start items-start max-h-[800px] overflow-y-auto">
        <AnnoucementCard cards={AnnoucementData} />
        <AnnoucementCard cards={AnnoucementData} />
      </div>
    </div>
  );
};

export default Annoucement;
