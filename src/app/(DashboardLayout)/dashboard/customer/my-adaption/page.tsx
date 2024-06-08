import React from "react";
import MyAdaptionWithFilter from "./MyAdaptionWithFilter";

const page = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-5">
        My Adoption Request
      </h2>
      <MyAdaptionWithFilter />
    </div>
  );
};

export default page;
