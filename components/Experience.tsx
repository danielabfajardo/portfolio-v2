import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section id="experience">
        <h1 className='text-md heading'>Experience</h1>
        <div className="w-full mt-12 grid grid-cols-1 gap-10">
            {workExperience.map((card) => (
            <Button
                key={card.id}
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
                }}
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
                <div className="p-6 lg:p-10">
                    <div className="flex flex-col justify-center items-start gap-2">
                        <h1 className="text-lg font-bold">
                        {card.title} ∙ <span className="font-light">{card.company}</span>
                        </h1>
                        <p className="text-start text-white-100 font-semibold">
                        {card.desc}
                        </p>
                        <span className="text-start text-sm text-gray-400">{card.years} ∙ {card.type}</span>
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center space-x-2">
                            {card.iconLists.map((icon, index) => (
                                <img key={index} src={icon} alt="icon" className="h-6 w-6" />
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Button>
            ))}
        </div>
    </section>
  );
};

export default Experience;