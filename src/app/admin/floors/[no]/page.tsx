"use client";
import React, { useEffect, useState } from "react";
import BoilerPlate from "../../BoilerPlate";
import { Loader, PlusCircle } from "lucide-react";
import RoomsPreview from "@/components/cards/RoomsPreviewCard";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { roomSchema } from "@/schema/RoomSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { storeImageInFirebase } from "@/helpers/storage";
import {
  addRoomServices,
  getRoomsBasedOnFloorService,
} from "@/service/RoomService";
import { RoomData } from "@/@types/Room";
import { ScrollArea } from "@/components/ui/scroll-area";
import { addRentservice } from "@/service/RentService";
import { useParams } from "next/navigation";

const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [rooms, setRooms] = useState<RoomData[]>([]);
  const { toast } = useToast();
  const params = useParams<{ no: string }>();
  useEffect(() => {
    const roomsDetail = async () => {
      setIsFetching(true);
      try {
        const response = await getRoomsBasedOnFloorService(params.no);
        if (response && "data" in response) {
          if (!response.data.success) {
            toast({
              title: "Operation failed.",
              description: `Error getting rooms detail.`,
              draggable: true,
              variant: "destructive",
            });
            return;
          }
          const rooms = response.data.data as RoomData[];
          setRooms([...rooms]);
        }
      } catch (error) {
        toast({
          title: "Operation failed.",
          description: `Error getting rooms detail. ${error}`,
          draggable: true,
          variant: "destructive",
        });
      } finally {
        setIsFetching(false);
      }
    };
    roomsDetail();
    console.log(rooms);
  }, []);
  const form = useForm<z.infer<typeof roomSchema>>({
    resolver: zodResolver(roomSchema),
    defaultValues: {
      roomNo: "",
      size: {
        height: "",
        width: "",
      },
      image: "",
      isBooked: false,
      amount: "",
      electricity: "",
      water: "",
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
  const onSubmit = async (data: z.infer<typeof roomSchema>) => {
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
      const imageUrl = await storeImageInFirebase(image, "room");
      const response = await addRoomServices({
        roomNo: +data.roomNo,
        size: {
          width: +data.size.width,
          height: +data.size.height,
        },
        isBooked: data.isBooked,
        image: imageUrl,
        floor: params.no,
      });
      if (response && "data" in response) {
        if (!response.data.success) {
          toast({
            title: "Operation failed.",
            description: `Error creating new room.`,
            draggable: true,
            variant: "destructive",
          });
          return;
        }
        const newRoom = response.data.data as RoomData;

        const rentResponse = await addRentservice({
          roomId: newRoom._id,
          price: +data.amount,
          electricity: +data.electricity,
          water: +data.water,
        });

        if (rentResponse && "data" in rentResponse) {
          if (!rentResponse.data.success) {
            toast({
              title: "Operation failed.",
              description: `Error while adding rent detail to room.`,
              draggable: true,
              variant: "destructive",
            });
            return;
          }
        }
        setRooms([...rooms, newRoom]);
      }

      toast({
        title: "Added Successfully.",
        description: "Room detail added successfully.",
        draggable: true,
      });
    } catch (error) {
      toast({
        title: "Operation failed.",
        description: `Error creating new room. ${error}`,
        draggable: true,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setImagePreview("");
      form.reset();
    }
  };
  return (
    <BoilerPlate>
      <div className="w-full max-w-[1500px] flex flex-col justify-start items-start p-5 font-light ">
        <div className="w-full flex justify-between px-3 pt-10 items-center">
          <h2 className="text-2xl font-extrabold tracking-wide">Rooms</h2>

          <Dialog>
            <DialogTrigger>
              <p className="flex  gap-1 items-center justify-start p-2 text-sm hover:bg-brandPrimary-dark cursor-pointer bg-brandPrimary text-brandPrimary-content rounded">
                <PlusCircle size={20} />
                <span>Add</span>
              </p>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-xl tracking-wide">
                  Add new rooms.
                </DialogTitle>
                <DialogDescription className="text-sm text-brandCopy-light">
                  Add detail about new room in current floor.
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className=" max-h-[700px] overflow-y-auto">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 px-2"
                  >
                    <FormField
                      control={form.control}
                      name="roomNo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Room No</FormLabel>
                          <FormControl>
                            <Input {...field} type="number" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="w-full grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="size.width"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Width</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="number"
                                placeholder="in meter"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="size.height"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Height</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="number"
                                placeholder="in meter"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />{" "}
                    </div>
                    <FormField
                      control={form.control}
                      name="isBooked"
                      render={() => (
                        <FormItem>
                          <FormLabel>Booked</FormLabel>
                          <FormControl>
                            <RadioGroup
                              defaultValue="false"
                              className="flex items-center gap-4"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="true" id="true" />
                                <Label htmlFor="true">True</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="false" id="false" />
                                <Label htmlFor="false">False</Label>
                              </div>
                            </RadioGroup>
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
                                className="cursor-pointer"
                                onChange={(e) => {
                                  handleImageChange(e);
                                }}
                              />
                              {form.getValues("image")?.length > 0 && (
                                <span className="ml-2 text-gray-600">
                                  {form.getValues("image")[0].name}
                                </span>
                              )}
                            </div>
                          </FormControl>
                          {imagePreview && (
                            <div className="max-h-[200px] overflow-y-auto">
                              <Image
                                src={imagePreview}
                                alt="Image Preview"
                                width={500}
                                height={200}
                                className=" rounded-md border h-full"
                              />
                            </div>
                          )}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="w-full grid grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Rent</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="number"
                                placeholder="Rs"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />{" "}
                      <FormField
                        control={form.control}
                        name="electricity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Electricity</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="number"
                                placeholder="Rs xx /kWh"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="water"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Water</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="number"
                                placeholder="Rs xx /month"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button type="submit">
                      {isLoading ? (
                        <Loader className="animate-spin" />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </form>
                </Form>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-2 w-full lg:grid-cols-4 px-3 py-8 gap-6">
          {rooms.map((room) => (
            <RoomsPreview room={room} key={room._id} />
          ))}
        </div>
      </div>
    </BoilerPlate>
  );
};

export default Page;
