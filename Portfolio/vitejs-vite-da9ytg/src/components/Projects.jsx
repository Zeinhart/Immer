import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="max-w[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <h2 className="text-2xl font-bold text-center text-[#06CAFF]">
        {' '}
        STI Parking{' '}
      </h2>
      <p className="text-center py-8 ">
        {' '}
        The parking reservation is a web-based project for the process of
        reserving a parking space for STI College Alabang. This system aims to
        provide users with a convenient and efficient way to reserve a parking
        reservation, reducing the hassle of searching for available spaces upon
        arriving at the site.
      </p>

      <div className="flex justify-center">
        <img
          src="https://www.sti.edu/cms/images/school/all/alabang.jpg"
          title="Parking Reservation"
        />
      </div>
      <br />
      <p className="font-bold text-center">Key Features:</p>
      <br />
      <p className="text-center d-flex p-2">
        {' '}
        <b> User Registration and Login - </b> Users can create accounts and log
        in to the system to access reservation functionalities
      </p>

      <p className="text-center d-flex p-2">
        <b> Reservation Management - </b>  Admin can view, modify, and cancel their parking reservations if the
        client doesnt meet the requirements like a permit for parking the
        client's vehicle.
      </p>
      <br />

      <p className="text-center"> <b> Benefits </b> - Time saving, Convenience and Efficiency </p>
      <div class=" container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
      <button class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg items-center"
      href="https://github.com/Zeinhart/Project.github.io ">
      Click me!
      </button>
      </div>
    </div>
  );
};

export default Projects;
