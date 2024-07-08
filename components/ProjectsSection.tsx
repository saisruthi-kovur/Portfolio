import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Hotel Booking Revenue Analysis",
    description:
      "The project uses Python and Hadoop MapReduce to analyse 1.5 million records across two hotel booking datasets. It generates monthly revenue rankings and provides valuable insights into booking seasonality, aiding strategic decisions in the hospitality industry.",
    image: "/HotelBookingRevenueAnalysis.png",
    github: "https://github.com/saisruthi-kovur/Maximizing-Hotel-Revenues-MapReduce-Approach"
  },
  {
    name: "Twitter Search Engine",
    description: "The project uses Python, PyLucene, BERT, and web technologies to analyze over 100,000 tweets about giveaways. It indexes tweets at a rate of 5000 per hour and features a user-friendly web application that displays tweet locations on an interactive map, supporting over 10,000 monthly users.",
    image: "/TwitterSearchEngine.jpg",
    github: "https://github.com/saisruthi-kovur/Twitter-Search-Engine/blob/main/Twitter%20Search%20Engine%20Report.pdf"
  },
  {
    name: "Image Cloning Detection",
    description:
      "This tool identifies and highlights cloned regions in digital images by segmenting them, extracting unique features, and detecting duplications. It provides a clear visual representation of tampered areas, making it valuable for ensuring image authenticity in digital forensics.",
    image: "/ImageCloningDetection.jpg",
    github: "https://github.com/saisruthi-kovur/Image-Forgery-Detection-using-key-point-based-method"
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-rose-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col md:flex-row md:items-center animate-slideUpCubiBezier animation-delay-2 md:space-x-12">
                    <div className="md:w-1/2">
                      <Link href={project.github}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="mt-8 md:mt-0 md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>


            )
          })}

        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
