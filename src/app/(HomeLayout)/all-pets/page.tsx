import Pets from "@/components/home/homePage/Pets";
import React from "react";

const AllPets = () => {
  return (
    <div>
      <div className="relative min-h-[88vh]">
        <div className="bg-allPetsBackground min-h-[70vh] bg-center bg-cover">
          <div className="absolute bottom-3 left-0 bg-secondary bg-cardBackground w-[65%] rounded-r-md pl-20 pr-5 py-8">
            <h2 className="text-white text-4xl font-bold mb-2">See All Pets</h2>
            <p className="text-white">
              The connection between each individual and their pet remains
              unique. It’s out of respect for these one-of-a-kind relationships
              that we’ve spent 70+ years advancing care for our treasured
              companions.
            </p>
          </div>
        </div>
      </div>
      <Pets />
    </div>
  );
};

export default AllPets;

{
  /* <div className="relative min-h-screen">
      <div className="absolute top-1/4 left-[21%]  bg-primary  w-[60%] mx-auto rounded-md px-5 py-8 text-center">
        <h2 className="text-white text-4xl font-bold mb-2">All Pets</h2>
      </div>
      <div className="absolute left-40 bottom-[400px] rounded-lg w-[200px] border-2 border-primary">
        <Image
          className=" rounded-lg"
          src={"https://i.ibb.co/5xsGCnD/dog2.jpg"}
          alt="pet"
        />
      </div>
      <div className="absolute left-[500px]  bottom-[280px] rounded-lg w-[80px] !h-[80px] border-2 border-primary">
        <Image
          preview={false}
          className=" rounded-lg !h-[80px]"
          src={"https://i.ibb.co/3y4BghY/dog3.jpg"}
          alt="pet"
        />
      </div>
      <div className="absolute left-[400px]  bottom-[460px] rounded-lg w-[100px] !h-[100px] border-2 border-primary">
        <Image
          className=" rounded-lg !h-[100px]"
          src={"https://i.ibb.co/1GLkFKs/cat11.jpg"}
          alt="pet"
        />
      </div>
      <div className="absolute right-40 bottom-[250px] rounded-lg w-[200px] border-primary">
        <Image
          preview={false}
          className="w-full rounded-lg"
          src={"https://i.ibb.co/K54rV1W/dog12.jpg"}
          alt="pet"
        />
      </div>
      <div className="absolute right-[400px] bottom-[400px] rounded-lg w-[150px] border-2 border-primary">
        <Image
          preview={false}
          className="w-full !h-full rounded-lg"
          src={"https://i.ibb.co/hWWmjb7/cat12.jpg"}
          alt="pet"
        />
      </div>
    </div> */
}
