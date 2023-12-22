import React from "react";
import Himage from "./Himage.jpg";

const Herosection = () => {
  const profile = {
    name: "V Akash",
    role: "Full Stack Web Developer | UI/UX Designer",
    description: `I'm a skilled MERN stack developer passionate about crafting top-tier web applications. With expertise in MongoDB, Express.js, React, and Node.js, I excel in building seamless and innovative solutions. My focus on user-centric design, coupled with strong problem-solving abilities, ensures the delivery of high-quality, performance-driven applications. I thrive in collaborative environments and continuously seek to leverage emerging technologies to create impactful digital experiences.`,
    imageUrl: Himage,
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center px-4">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-semibold mb-4 font-heading">
            {profile.name}
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 font-title">
            {profile.role}
          </p>
          <p className=" mt-4 text-lg leading-6 text-gray-700 font-paragraph">
            {profile.description}
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src={profile.imageUrl}
            alt="Profile"
            className="rounded-full shadow-xl h-40 lg:h-56 w-40 lg:w-56 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
