import Footer from "@/components/footer/Footer";
import { Banner } from "@/data/mainPage/Banner";
import Newest from "@/data/Newest";
import PopBests from "@/data/PopBests";
import Trends from "@/data/Trends";
import React from "react";

const page = () => {
  return (
    <article className="main-page-container">
      <div className="col-span-1 md:col-span-3 main-page-container">
        <div className="col-span-1 md:col-span-2 flex items-center justify-center">
          <Banner />
        </div>
        <div className="col-span-1">
          <Trends />
        </div>
      </div>
      <div className="col-span-1 md:col-span-3">
        <PopBests />
      </div>
      <div className="col-span-1 md:col-span-3">
        <PopBests />
      </div>
      <div className="col-span-1 md:col-span-3">
        <Footer />
      </div>
    </article>
  );
};

export default page;
