import React from "react";
import { BsArrowRight } from "react-icons/bs";
import defaultBgImage from "/public/WelcometotheUrbanHound.png";
import image1 from "/public/Img1-6.jpg";
import image2 from "/public/Img1-7.jpg";
import image3 from "/public/Img1-8.jpg";
import { Image } from "antd";

const AboutUs = () => {
  return (
    <div
      className=""
      style={{
        // backgroundColor: "red",
        backgroundImage:
          "radial-gradient(#f77b191a 1px, transparent 4px), radial-gradient(#332E331a 1px, transparent 4px)",
        backgroundSize: "100px 100px",
        backgroundPosition: "0 0, 50px 50px",
        backgroundRepeat: "repeat",
      }}
    >
      <section
        className="h-[calc(100vh-152px)] relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${defaultBgImage.src})`,
        }}
      >
        <div className="w-[600px] absolute top-1/4 right-[10%]">
          <h2 className="text-4xl font-bold capitalize text-right text-primary">
            Introducing our new small dog daycare & partnership with st.
            <br />
            Francis house
          </h2>
          <div className="flex gap-2 items-center justify-end mt-5">
            <button className="font-semibold text-sm">All Pets</button>
            <BsArrowRight />
          </div>
        </div>
      </section>
      <section className="py-10 md:py-16 lg:py-24">
        <div className="w-[800px] mx-auto">
          <h2 className="text-4xl font-bold capitalize text-center text-primary">
            Welcome to The Urban Hound
          </h2>
          <p className="text-center text-lg mt-3">
            The Urban Hound is Boston’s premier full-service dog care facility.
            We offer daycare, boarding, walking, grooming, and training. Located
            in the South End of Boston, we are easy to access from 93, The Mass
            Pike, and Logan Airport. With certified dog trainers on staff and
            24-hour supervised care 365 days a year, you know your dog is always
            in a safe and in a loving environment. <br /> <br />
            <strong>Become an Urban Hound today,</strong>
            and see what all the WOOF is about! <br />
            Call us at <strong>(617) 755-5775</strong> for more info.
          </p>
        </div>
      </section>
      <section className="py-7 md:py-10 lg:py-12">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-[1250px] mx-auto">
          <div className="w-[40%]">
            <Image
              className="w-full"
              src={image1.src}
              // width={500}
              // height={300}
              alt="image"
              preview={false}
            />
          </div>
          <div className="w-[60%]">
            <h2 className="text-5xl font-semibold">Our Vision</h2>
            <p className="text-lg mt-3">
              The Urban Hound is Boston’s premier full-service dog care
              facility. We offer daycare, boarding, walking, grooming, and
              training. Located in the South End of Boston, we are easy to
              access from 93, The Mass Pike, and Logan Airport. With certified
              dog trainers on staff and 24-hour supervised care 365 days a year,
              you know your dog is always in a safe and in a loving environment.
              The Urban Hound is Boston’s premier full-service dog care
              facility. We offer daycare, boarding, walking, grooming, and
              training. Located in the South End of Boston, we are easy to
              access from 93, The Mass Pike, and Logan Airport. With certified
              dog trainers on staff and 24-hour supervised care 365 days a year,
              you know your dog is always in a safe and in a loving environment.
            </p>
          </div>
        </div>
      </section>
      <section className="py-7 md:py-10 lg:py-12">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-[1250px] mx-auto">
          <div className="w-[60%]">
            <h2 className="text-5xl font-semibold">Our Vision</h2>
            <p className="text-lg mt-3">
              The Urban Hound is Boston’s premier full-service dog care
              facility. We offer daycare, boarding, walking, grooming, and
              training. Located in the South End of Boston, we are easy to
              access from 93, The Mass Pike, and Logan Airport. With certified
              dog trainers on staff and 24-hour supervised care 365 days a year,
              you know your dog is always in a safe and in a loving environment.
              The Urban Hound is Boston’s premier full-service dog care
              facility. We offer daycare, boarding, walking, grooming, and
              training. Located in the South End of Boston, we are easy to
              access from 93, The Mass Pike, and Logan Airport. With certified
              dog trainers on staff and 24-hour supervised care 365 days a year,
              you know your dog is always in a safe and in a loving environment.
            </p>
          </div>
          <div className="w-[40%]">
            <Image
              className="w-full"
              src={image2.src}
              alt="image"
              preview={false}
            />
          </div>
        </div>
      </section>
      <section className="py-7 md:py-10 lg:py-12">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-[1250px] mx-auto">
          <div className="w-[40%]">
            <Image
              className="w-full"
              src={image3.src}
              preview={false}
              alt="image"
            />
          </div>
          <div className="w-[60%]">
            <h2 className="text-5xl font-semibold">Our Values</h2>
            <p className="text-lg mt-3">
              The Urban Hound is Boston’s premier full-service dog care
              facility. We offer daycare, boarding, walking, grooming, and
              training. Located in the South End of Boston, we are easy to
              access from 93, The Mass Pike, and Logan Airport. With certified
              dog trainers on staff and 24-hour supervised care 365 days a year,
              you know your dog is always in a safe and in a loving environment.
              The Urban Hound is Boston’s premier full-service dog care
              facility. We offer daycare, boarding, walking, grooming, and
              training. Located in the South End of Boston, we are easy to
              access from 93, The Mass Pike, and Logan Airport. With certified
              dog trainers on staff and 24-hour supervised care 365 days a year,
              you know your dog is always in a safe and in a loving environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
