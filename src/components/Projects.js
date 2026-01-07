import VKcart from '../assets/VKCart.png'
import Weatherapp from '../assets/Weatherapp.jpg'
import Moviehunt from '../assets/Moviedb.jpg'
import BMIcals from '../assets/Bmi-Cals.png'
import Chatapp from '../assets/VK-chatapp.jpg'

export default function Projects() {
  return (
    <section
      id="Projects"
      className="scroll-mt-24 pt-16 pb-10 px-5 bg-13 overflow-hidden"
    >
      {/* Section Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-hero-font border-b-2 w-[200px] border-slate-900 mb-4">
          My Projects
        </h1>
        <p className="text-gray-800
        max-w-2xl">
          These are some of my recent projects built using React, MERN Stack,
          APIs, and Cloud Computing.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-5 ">
        
        {/* Project Card */}
        <ProjectCard
          link="http://16.170.224.157:8000"
          image={VKcart}
          title="Mini E-commerce Website"
          desc="Built using MERN Stack"
          className="motion-preset-wiggle duration-2000"
        />

        <ProjectCard
          link="https://venkata2405.github.io/Weather/"
          image={Weatherapp}
          title="Weather Application"
          desc="Built using React & Weather API"
          className="motion-preset-wiggle duration-2000"
        />

        <ProjectCard
          link="https://venkata2405.github.io/moviehunt"
          image={Moviehunt}
          title="Movie Info App"
          desc="Built using MERN Stack & API"
          className="motion-preset-wiggle duration-2000"
        />

        <ProjectCard
          link="https://venkata2405.github.io/BMI-calculator/"
          image={BMIcals}
          title="BMI Calculator"
          desc="Built using React"
          className="motion-preset-wiggle duration-2000"
        />

        <ProjectCard
          link="http://34.205.43.223:5000"
          image={Chatapp}
          title="Chat Application"
          desc="Built using MERN & Socket.io"
          className="motion-preset-wiggle duration-2000"
        />

      </div>
    </section>
  )
}

/* Reusable Project Card Component */
function ProjectCard({ link, image, title, desc }) {
  return (
    <div className="relative group">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={image}
          alt={title}
          className="w-full h-60 rounded-2xl object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-2xl">
          <p className="text-center text-white px-4">
            <strong>{title}</strong><br />
            {desc}
          </p>
        </div>
      </a>
    </div>
  )
}
