import React from "react";

const About = () => {
  return (
    <div id="about" className="p-5 sm:p-10 mb-5">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full">
        <div className="w-full lg:w-1/2 mb-5 lg:mb-0">
          <h2 className="text-lg font-bold mb-4 relative">
            <span className="relative z-10 bg-white px-4 md:px-6">
              I'M NIYOMUGABO FIDELE
            </span>
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-gray-500 opacity-75 h-px"></div>
          </h2>
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="text-sm text-gray-700">
           I'm a passionate software engineer
            with expertise in building modern web applications. My core skills
            include Node.js, TypeScript, and Express for backend development,
            along with Next.js 14 for building powerful front-end experiences. I
            work comfortably with databases like MongoDB and PostgreSQL,
            ensuring robust data management. I also use Tailwind CSS to create
            responsive and visually appealing user interfaces. My focus is on
            delivering high-quality, scalable solutions that meet the needs of
            users.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          {/* Add content or an image here if needed */}
        </div>
      </div>
    </div>
  );
};

export default About;
