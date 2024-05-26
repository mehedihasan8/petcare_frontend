import Pets from "@/components/home/homePage/Pets";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="relative min-h-screen">
        <div className="bg-heroBackground min-h-[80vh] bg-center bg-cover">
          <div className="absolute bottom-0 left-0 bg-secondary w-[50%] rounded-r-md px-5 py-5">
            <h2 className="text-white text-4xl font-bold mb-2">Petcare</h2>
            <p className="text-white">
              The bond between people and pets is as old as humanity itself, but
              the connection between each individual and their pet remains
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

export default Home;
