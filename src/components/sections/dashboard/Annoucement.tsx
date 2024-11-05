"use client";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Loader, PlusCircle } from "lucide-react";
import { AnnoucementDetail } from "@/@types/Cards";
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
import { useToast } from "@/hooks/use-toast";
import {
  addNewAnnoucement,
  getRecentAnnoucement,
} from "@/service/AnnoucementService";

const Annoucement = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [annoucement, setAnnoucement] = useState<AnnoucementDetail[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof addAnnoucementSchema>>({
    resolver: zodResolver(addAnnoucementSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof addAnnoucementSchema>) => {
    setIsLoading(true);
    try {
      const response = await addNewAnnoucement(data);
      if (
        response.status > 299 ||
        response.data.statusCode > 299 ||
        !response.data.success
      ) {
        throw new Error("Something went wrong.");
      }
      const annoucementData = response.data.data as AnnoucementDetail;
      setAnnoucement((prev) => [...prev, annoucementData]);
      toast({
        title: "Annoucement added.",
        draggable: true,
      });
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Error adding new annoucement" + error,
        draggable: true,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      form.reset();
      setIsOpen(false);
    }
  };
  useEffect(() => {
    const fetchAnnoucements = async () => {
      try {
        const response = await getRecentAnnoucement();
        if (
          response.status > 299 ||
          response.data.statusCode > 299 ||
          !response.data.success
        )
          throw new Error("Failed to fetch annoucements.");
        const annoucementData = response.data.data as AnnoucementDetail[];
        setAnnoucement(annoucementData);
      } catch (error) {
        toast({
          title: "Something went wrong.",
          description: `${error}`,
        });
      }
    };
    fetchAnnoucements();
    console.log(annoucement);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col justify-start items-start gap-5 border p-3 rounded-lg  w-ful flex-grow">
      <div className="w-full flex justify-between items-center gap-2">
        <h3 className="font-medium text-xl tracking-wider pl-3">Annoucement</h3>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write annoucement detail here...."
                          className="resize-none"
                          {...field}
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
      <div className="flex flex-col gap-2 justify-start items-start max-h-[800px] overflow-y-auto w-full">
        {annoucement.length < 1 ? (
          <p className="tracking-wide flex w-full justify-center items-center text-xl min-w-[300px] min-h-[300px]">
            No annoucements found!!
          </p>
        ) : (
          <>
            {annoucement.map((card) => (
              <AnnoucementCard cards={card} key={card._id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Annoucement;
