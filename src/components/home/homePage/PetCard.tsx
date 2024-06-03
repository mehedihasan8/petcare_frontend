import Image from "next/image";
import img from "../../../../public/petcare-photo.jpg";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "antd";
import { TPet } from "@/types/pets.type";

const PetCard = ({ pet }: { pet: TPet }) => {
  return (
    <div className="group shadow-md shadow-[#34405441] hover:shadow-lg rounded-[10px] overflow-hidden bg-white text-black">
      <div>
        <Image
          className="h-[10rem] mx-auto bg-cover bg-center"
          src={img}
          alt="image"
        />
      </div>
      <div className="p-4 h-full">
        <div className="flex justify-between pb-4">
          <Link href="/">
            <h1 className="font-bold text-xl">{pet?.name}</h1>
          </Link>
          <span className="font-semibold text-sm text-primaryColor lowercase">
            {"(" + pet.species + ")"}
          </span>
        </div>
        <p className="line-clamp-3 mb-2 text-accent">{pet.description}</p>
        <Link className="mt-auto" href={"/"}>
          <button className="group-hover:tracking-[0.1em] transition-all duration-300 font-semibold text-base text-primary flex items-center">
            Explore Now{" "}
            <FaArrowRightLong className="h-4 w-4 ms-2 translate-x-[-40px] group-hover:translate-x-[0px] opacity-0 group-hover:opacity-100 transition-all duration-400 pt-1 text-secondary" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PetCard;
