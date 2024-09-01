import React from 'react';

const ProjectCard = ({ item }) => {
  return (
    <div className="w-full h-full p-2">
      <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img
          alt={item.name}
          src={item.image}
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors duration-300">
              {item.name}
            </h3>
          </a>

          <p className="mt-2 text-sm text-gray-600 line-clamp-3">
            {item.desc}
          </p>

          <a
            href="#"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            Find out more
            <span
              aria-hidden="true"
              className="block transition-transform transform group-hover:translate-x-1 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
