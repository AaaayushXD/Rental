"use client";
import React, { useEffect, useState } from "react";
import { RoomData } from "@/@types/Room";
import BoilerPlate from "@/app/admin/BoilerPlate";
import { getRoomsBasedOnIdService } from "@/service/RoomService";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { getFloorDetailService } from "@/service/FloorService";
import { FloorDetail } from "@/@types/Floor";
import { getRentDetailService } from "@/service/RentService";
import { RentDetail } from "@/@types/Rent";
import { Button } from "@/components/ui/button";
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
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { TenantSchema } from "@/schema/TenantSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getUSerBasedOnPhoneService,
  getUserOnIdService,
} from "@/service/UserService";
import { UserDetail } from "@/@types/User";
import {
  assignTenantService,
  getTenantInfoService,
} from "@/service/TenantService";
import { TenantDetail } from "@/@types/Tenant";

const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [room, setRoom] = useState<RoomData>();
  const [floorName, setFloorName] = useState<string>("");
  const [rent, SetRent] = useState<number>(0);
  const [user, setUser] = useState<UserDetail>();
  const params = useParams<{ id: string }>();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof TenantSchema>>({
    resolver: zodResolver(TenantSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });
  useEffect(() => {
    const fetchRoomData = async () => {
      setIsLoading(true);
      try {
        const response = await getRoomsBasedOnIdService(params.id);
        if (response && "data" in response) {
          const roomData = response.data.data as RoomData;
          const floorResponse = await getFloorDetailService(roomData.floor);
          if (floorResponse && "data" in floorResponse) {
            const floorInfo = floorResponse.data.data as FloorDetail;
            setFloorName(floorInfo.title);
          }
          const rentResponse = await getRentDetailService(roomData._id);
          if (rentResponse && "data" in rentResponse) {
            const rentInfo = rentResponse.data.data as RentDetail;
            SetRent(rentInfo.price);
          }
          setRoom(roomData);
        }
        const tenantInfo = await getTenantInfoService(params.id);
        if (tenantInfo && "data" in tenantInfo) {
          const tenant = tenantInfo.data.data as TenantDetail;
          if (!tenant) return;
          const userResponse = await getUserOnIdService(tenant.uid);
          if (userResponse && "data" in userResponse) {
            const userInfo = userResponse.data.data as UserDetail;
            setUser(userInfo);
          }
        }
      } catch (error) {
        toast({
          title: "Error Fetching Room Data",
          description: "Failed to fetch room data" + error,
          draggable: true,
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchRoomData();
    console.log(user);
  }, []);

  const onSubmit = async (data: z.infer<typeof TenantSchema>) => {
    try {
      setIsLoading(true);
      const userResponse = await getUSerBasedOnPhoneService(data.phoneNumber);
      if (userResponse && "data" in userResponse) {
        const user = userResponse.data.data as UserDetail;
        console.log(user);
        await assignTenantService({
          uid: user._id,
          roomId: params.id,
          isBooked: true,
          role: "tenant",
        });

        setUser(user);
      }
    } catch (error) {
      toast({
        title: "Error assigning tenant to their room.",
        description: "Something went wrong." + error,
        draggable: true,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      form.setValue("phoneNumber", "");
    }
  };
  return (
    <BoilerPlate>
      {room ? (
        <div className="w-full max-w-[1500px] flex flex-col justify-start items-start p-5 font-light ">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-xl tracking-wider font-extrabold px-5 py-8">
              Room no {room?.roomNo}
            </h2>

            <Dialog>
              <DialogTrigger>
                <p className="py-2 px-3 bg-brandPrimary hover:bg-brandPrimary-dark rounded-md text-brandPrimary-content text-sm">
                  Assign
                </p>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-xl tracking-wide">
                    Assign a tenant.
                  </DialogTitle>
                  <DialogDescription className="text-sm text-brandCopy-light">
                    Provide user phone number to assign them as tenant for the
                    room.
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
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone number</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

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
          <div className="px-5 grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center place-items-center">
            <Image
              src={`${room.image}`}
              alt={`${room.roomNo}`}
              width={200}
              height={100}
              className="w-full"
            />
            <div className="flex flex-col justify-start items-start gap-2 px-5">
              <div className="flex flex-col gap-2 text-sm tracking-wide">
                <p>
                  Floor:
                  <span className="font-medium text-lg">{floorName}</span>
                </p>
                <p>
                  Room No:{" "}
                  <span className="font-medium text-lg">{room.roomNo}</span>
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm tracking-wide">
                <p>
                  Tenant Name:
                  <span className="font-medium text-lg">
                    {" "}
                    {user ? `${user.firstName} ${user.lastName}` : "N/A"}
                  </span>
                </p>
                <p>
                  Total People:{" "}
                  <span className="font-medium text-lg">
                    {user ? user.totalPeople : 0}
                  </span>
                </p>
              </div>
              <div className="text-lg font-medium ">
                <p>Size</p>
                <p className="font-light text-sm">
                  Width:{" "}
                  <span className="text-lg font-medium">
                    {room?.size.width}
                  </span>{" "}
                  <span className="text-brandCopy-light">meter</span>
                </p>
                <p className="font-light text-sm">
                  Height:{" "}
                  <span className="text-lg font-medium">
                    {room?.size.height}
                  </span>{" "}
                  <span className="text-brandCopy-light">meter</span>
                </p>
              </div>
              <p className="text-sm tracking-wide ">
                Rent: Rs <span className="text-lg font-medium">{rent}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>Sorry. Room doesnt exist</>
      )}
    </BoilerPlate>
  );
};

export default Page;
