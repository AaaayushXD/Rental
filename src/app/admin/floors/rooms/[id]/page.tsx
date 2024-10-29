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

const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [room, setRoom] = useState<RoomData>();
  const [floorName, setFloorName] = useState<string>("");
  const [rent, SetRent] = useState<number>(0);
  const params = useParams<{ id: string }>();
  const { toast } = useToast();
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
        toast({
          title: "Room Data Fetched",
          description: "Room data has been fetched successfully",
          draggable: true,
        });
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
  }, []);
  return (
    <BoilerPlate>
      {room ? (
        <div className="w-full max-w-[1500px] flex flex-col justify-start items-start p-5 font-light ">
          <h2 className="text-xl tracking-wider font-extrabold px-5 py-8">
            Room no {room?.roomNo}
          </h2>
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
                    Aayush Lamichhane
                  </span>
                </p>
                <p>
                  Total People: <span className="font-medium text-lg">10</span>
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
