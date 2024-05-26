import Image from "next/image";
import img from "../../../../public/petcare-photo.jpg";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "antd";

const PetCard = () => {
  return (
    <div className="group shadow-md shadow-[#34405441] hover:shadow-lg rounded-[10px] overflow-hidden bg-white text-black">
      <div>
        <Image
          className="h-[10rem] mx-auto bg-cover bg-center"
          src={img}
          alt="image"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between pb-4">
          <Link href="/">
            <h1 className="font-bold text-xl">Tokio Japan</h1>
          </Link>
          <span className="font-semibold text-xl text-primaryColor">$240</span>
        </div>
        <p className="line-clamp-3 mb-2 text-accent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          hic veritatis! Expedita repudiandae, ab enim reiciendis tempora
          dolorum non eum tenetur, qui pariatur dolore repellendus aut autem
          dolor ut molestiae, ducimus est harum laboriosam! At voluptate
          incidunt nostrum cumque? Voluptatum ratione eum fugit a hic commodi
          nulla debitis corrupti ullam.
        </p>
        <Link href={"/"}>
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
