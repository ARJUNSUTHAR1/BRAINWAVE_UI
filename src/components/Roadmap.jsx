import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { roadmap } from "../constants/constant";
import { check2, grid, loading1 } from "../assets";
import Tagline from "./Tagline";
const Roadmap = () => {
  return (
    <div>
      <Section className="overflow-hidden" id="roadmap">
        <div className="md:pb-10 container">
          <Heading
            tag="Ready to get started"
            title="What we're working on"
          ></Heading>
          <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pd-[7rem]">
            {roadmap.map((item) => {
              const status = item.status === "done" ? "Done" : "In Progress";
              return (
                <div key={item.div} className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`}>
                  <div className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15">
                    <div className="absolute top-0 left-0 mac-w-full">
                        <img src={grid} 
                        className="w-full"
                        width={550}
                        height={550} alt="" />
                    </div>

                    <div className="relative z-1">
                        <div className="flex justify-between items-center">
                            <Tagline>{item.date}</Tagline>
                        

                        <div className="flex  px-4 py-1 bg-n-1 rounded text-n-8">
                            <img src={item.status === "done" ? check2 : loading1 }
                            className="mr-2.5"
                            width={16}
                            height={16}
                            alt="" />
                        <div className="tagline">{status} </div>
                        </div>
                        </div>
                    </div>
                    <div className="mb-10">
                         <img src={item.imageUrl}
                         className="w-full"
                         width={640}
                         height={420} alt="" />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Roadmap;
