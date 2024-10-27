"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { floorSchema } from "@/schema/FloorSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import BoilerPlate from "../BoilerPlate";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { storeImageInFirebase } from "@/helpers/storage";
import { useToast } from "@/hooks/use-toast";
import {
  addFloorService,
} from "@/service/FloorService";

const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  // const [floors, setFloors] = useState<FloorDetail>([]);

  const { toast } = useToast();

  // useEffect(() => {
  //   const fetchFloors = async () => {
  //     try {
  //       const response = await getFloorsDetailService();
  //       if (response.status !== 200) {
  //         throw new Error("Error getting floors information.");
  //       }
  //       const floorsDetail = response!.data.data;
  //       setFloors(floorsDetail);
  //     } catch (error) {
  //       toast({
  //         title: "No image found",
  //         description: `Please select an image for creatinng new floor. ${error}`,
  //         draggable: true,
  //         variant: "destructive",
  //       });
  //     }
  //   };
  //   fetchFloors();
  // }, []);

  const form = useForm<z.infer<typeof floorSchema>>({
    resolver: zodResolver(floorSchema),
    defaultValues: {
      title: "",
      image: "",
    },
  });
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      form.setValue("image", file);
    }
  };
  const onSubmit = async (data: z.infer<typeof floorSchema>) => {
    setIsLoading(true);
    if (!image) {
      toast({
        title: "No image found",
        description: "Please select an image for creatinng new floor.",
        draggable: true,
        variant: "destructive",
      });
      setIsLoading(false);

      return;
    }
    try {
      const imageUrl = await storeImageInFirebase(image, "floor");
      await addFloorService({
        title: data.title,
        image: imageUrl,
      });
      toast({
        title: "Added Successfully.",
        description: "Floor detail added successfully.",
        draggable: true,
      });
    } catch (error) {
      toast({
        title: "Operation failed.",
        description: `Error creating new floor. ${error}`,
        draggable: true,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setImagePreview("");
      form.setValue("image", "");
      form.setValue("title", "");
    }
  };
  return (
    <BoilerPlate>
      <div className="w-full max-w-[1500px] flex flex-col justify-start items-start p-5 font-light ">
        <div className="w-full flex justify-between px-3 pt-10 items-center">
          <h2 className="text-2xl font-extrabold tracking-wide">Floors</h2>
          <Dialog>
            <DialogTrigger>
              <p className="flex  gap-1 items-center justify-start p-2 text-sm hover:bg-brandPrimary-dark cursor-pointer bg-brandPrimary text-brandPrimary-content rounded">
                <span>Add floor</span>
              </p>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-xl tracking-wide">
                  Add new floor.
                </DialogTitle>
                <DialogDescription className="text-sm text-brandCopy-light">
                  Add detail about new floor in your building.
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
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="image"
                    render={() => (
                      <FormItem>
                        <FormLabel>Image</FormLabel>
                        <FormControl>
                          <div className="flex items-center">
                            <Input
                              type="file"
                              accept="image/*"
                              name="image"
                              onChange={(e) => {
                                handleImageChange(e);
                              }}
                              className="cursor-pointer"
                            />
                            {form.getValues("image")?.length > 0 && (
                              <span className="ml-2 text-gray-600">
                                {form.getValues("image")[0].name}
                              </span>
                            )}
                          </div>
                        </FormControl>
                        {imagePreview && (
                          <Image
                            src={imagePreview}
                            alt="Image Preview"
                            width={500}
                            height={200}
                            className="h-auto rounded-md border"
                          />
                        )}
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
        <div className="flex flex-col justify-start items-start px-3  py-5 gap-8">
          <h4 className="font-light tracking-wider text-xl">
            Select a floor:{" "}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between">
            <Link
              href={"/admin/floors/ground"}
              className="border px-5 py-8 rounded-lg w-full flex flex-grow relative h-full hover:bg-[#0c0b0b57]"
            >
              <Image
                src={"/ground_floor.png"}
                alt="ground floor"
                className="w-full h-full flex flex-grow items-center z-[-1]"
                width={"500"}
                height={"300"}
              />
              <p className="text-5xl text-nowrap flex flex-col gap-3 font-extrabold pl-5 pr-9 absolute top-0 left-0 rounded-lg w-full h-full bg-[#0c0b0b57] justify-center items-center text-brandPrimary-content z-10 tracking-wider">
                Ground Floor
                <span className="font-light text-lg">Total rooms: 4</span>
              </p>
            </Link>
            <Link
              href={"/admin/floors/first"}
              className="border px-5 py-8 rounded-lg w-full flex flex-grow relative h-full hover:bg-[#0c0b0b57]"
            >
              <Image
                src={"/first_floor.png"}
                alt="ground floor"
                className="w-full h-full flex flex-grow items-center z-[-1]"
                width={"500"}
                height={"300"}
              />
              <p className="text-5xl text-nowrap flex flex-col gap-3 font-extrabold pl-5 pr-9 absolute top-0 left-0 rounded-lg w-full h-full bg-[#0c0b0b57] justify-center items-center text-brandPrimary-content z-10 tracking-wider">
                First Floor
                <span className="font-light text-lg">Total rooms: 5</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </BoilerPlate>
  );
};

export default Page;
