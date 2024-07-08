"use client";
import React from "react";
import { FaBriefcase, FaUniversity } from "react-icons/fa";
import SlideUp from "./SlideUp";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

const experiences = [
    {
        title: "Software Engineer, Arizona State University",
        location: "Remote",
        description: "I develop and integrate REST APIs and MVC applications using C# and ASP.NET, enhancing web solutions. I improve user interfaces with CSS, JavaScript/TypeScript, and React, leading to better responsiveness. My role includes managing SQL database architecture and optimizing queries. I also address performance bottlenecks in SSIS and SSRS solutions for system efficiency. Additionally, I configure ServiceNow, automate workflows, and enhance efficiency. Using Git and GitHub, I streamline code reviews and deploy code on Microsoft Azure. I utilize JIRA, Grafana, and Confluence for project management, system monitoring, and improving team collaboration.",
        date: "Mar 2024 - Now",
        icon: <FaBriefcase />,
    },
    {
        title: "Student Employee (Full Stack Web Developer), University of California Riverside",
        location: "Riverside, California",
        description: "Improved the Drupal website, leading to a 40% increase in visitors, by enhancing SDLC and test automation processes. Also, implemented an automation framework with test suites to enhance system functionality verification. Additionally, engaged in full stack development with a multi-disciplinary team, integrating Python, PHP, MySQL, REST, Docker, JavaScript, and HTML+CSS (Tailwind), and added four core features to the portal.",
        date: "Jan 2023 - Mar 2023",
        icon: <FaBriefcase />,
    },
    {
        title: "University of California",
        location: "Riverside, CA",
        description: (
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Graduated with an 3.61 GPA in Master of Science, Computer Science.</li>
                <li>Relevant Coursework:  Advanced Operating Systems, Advanced Computer Architecture, Artificial Intelligence, Data Mining Techniques, Information Retrieval and Web Search, Big Data Management, Database Management Systems.</li>
            </ul>
        ),
        date: "2022 - 2023",
        icon: <FaUniversity />,
    },
    {
        title: "Software Engineer (Full Stack), EPIKInDiFi Software Solutions Pvt Ltd",
        location: "Chennai, India",
        description: "Developed high-performance RESTful web services using Django for Python, employing TDD methodologies with PyTest and TCL scripting, resulting in a 35% reduction in bug rates. Enhanced API development with NodeJS, Jest, and MongoDB, increasing system reliability by 20%. Integrated Python, PHP, MySQL, REST, Docker, and JavaScript, adding four core features to the portal. Configured applications on Jetty and Tomcat servers and incorporated Terraform for infrastructure management. Utilized Postman for testing and managed Jenkins and Docker within CI/CD pipelines, significantly enhancing deployment efficiency. Improved development cycles by 40% and enhanced teamwork and code quality through Git and JIRA.",
        date: "Mar 2021 - Dec 2021",
        icon: <FaBriefcase />,
    },
    {
        title: "SRM University, AP",
        location: "Andhra Pradesh, India",
        description: (
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Graduated with an 3.8 GPA in Bachelor of Technology, Computer Science & Engineering.</li>
                <li>Relevant Coursework: Data Structures and Algorithms, Object Oriented Programming, Computer Networks, Algorithm Analysis and Design, Cloud Foundation (Google Cloud Platform), Probability and Statistics for Engineers, Theory of Computation.</li>
            </ul>
        ),
        date: "2017 - 2021",
        icon: <FaUniversity />,
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="my-10 text-center font-bold text-4xl">
                    Experience and Education
                    <hr className="w-6 h-1 mx-auto my-4 bg-rose-400 border-0 rounded"></hr>
                </h1>

                <div className="relative border-l-4 border-neon-green">
                    {experiences.map((experience, idx) => (
                        <div key={idx} className="mb-8 ml-6 relative">
                            <SlideUp offset="-300px 0px -300px 0px">
                                <span className="absolute -left-7 flex items-center justify-center w-12 h-12 border-4 border-neon-green bg-zinc-400 rounded-full">
                                    {experience.icon}
                                </span>
                                <div className="p-6 rounded-lg shadow-lg hover:bg-zinc-400 transition-colors duration-300">
                                    <h1 className="text-2xl font-bold">{experience.title}</h1>
                                    <p className="text-sm">
                                        {experience.date} - {experience.location}
                                    </p>
                                    <div className="text-lg leading-7 mt-4">
                                        {experience.description}
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-row items-center text-center justify-center">
                <Link
                    to="projects"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <HiArrowDown size={35} className="animate-bounce" />
                </Link>
            </div>

        </section>
    );
};

export default ExperienceSection;
