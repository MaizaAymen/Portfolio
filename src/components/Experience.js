import React from "react";
import { FaAws, FaFreeCodeCamp, FaDatabase } from "react-icons/fa";

const Experience = () => {
  const internships = [
    {
      title: "Web Development Intern",
      company: "Itqan",
      duration: "February 2023 - July 2023",
      description: (
        <>
          <ul className="list-disc pl-5">
  <li>
    Assisted in developing and maintaining a dynamic web application using <span className="font-medium text-purple-700 dark:text-purple-100">Angular</span>, focusing on enhancing user experience and optimizing performance.
  </li>
  <li>
    Contributed to backend development by building and integrating <span className="font-medium text-purple-700 dark:text-purple-100">RESTful APIs</span> with <span className="font-medium text-purple-700 dark:text-purple-100">Node.js</span> and <span className="font-medium text-purple-700 dark:text-purple-100">MySQL</span> for efficient data management.
  </li>
  <li>
    Supported the design and implementation of a secure <span className="font-medium text-purple-700 dark:text-purple-100">authentication system</span> using <span className="font-medium text-purple-700 dark:text-purple-100">Firebase</span> to ensure data protection.
  </li>
  <li>
    Collaborated on designing and testing <span className="font-medium text-purple-700 dark:text-purple-100">database structures</span> to ensure smooth data integration across the platform.
  </li>
  <li>
    Actively participated in both <span className="font-medium text-purple-700 dark:text-purple-100">front-end</span> and <span className="font-medium text-purple-700 dark:text-purple-100">back-end development</span>, helping to deliver scalable and user-friendly solutions.
  </li>
</ul>

        </>
      ),      
    },
    {
      title: "Member",
      company: "Solutions Lab Club",
      duration: "Present",
      description: (
        <>
         <ul className="list-disc pl-5">
  <li>
    Collaborated with fellow members to solve coding challenges and develop innovative problem-solving solutions across multiple <span className="font-medium text-purple-700 dark:text-purple-100">programming languages</span>.
  </li>
  <li>
    Contributed to the development and optimization of <span className="font-medium text-purple-700 dark:text-purple-100">algorithms</span> for various problems, ensuring efficient and scalable solutions.
  </li>
  <li>
    Actively participated in <span className="font-medium text-purple-700 dark:text-purple-100">team discussions</span> and brainstorming sessions to address complex problems and explore different approaches.
  </li>
  <li>
    Led <span className="font-medium text-purple-700 dark:text-purple-100">problem-solving workshops</span> to help peers improve their coding skills and enhance their approach to algorithmic challenges.
  </li>
  <li>
    Assisted in organizing <span className="font-medium text-purple-700 dark:text-purple-100">coding competitions</span> and hackathons to encourage student engagement and showcase problem-solving talents.
  </li>
</ul>

        </>
      ),
    }
  ];

  const certifications = [
    {
      title: "JavaScript Algorithms and Data Structures",
      provider: (<><div className="flex items-center gap-2"><FaFreeCodeCamp />"freeCodeCamp"</div></>),
      link: "",
    },
    {
      title: "Responsive Web Design",
      provider: (<><div className="flex items-center gap-2"><FaFreeCodeCamp />"freeCodeCamp"</div></>),
      link: "",
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-purple-600 mb-12">
          Experience & Certifications
        </h2>

        {/* Timeline Section */}
        <div className="relative">
          <div className="border-l-4 border-purple-600">
            {internships.map((internship, index) => (
              <div key={index} className="mb-10 ml-6">
                <div className="absolute w-6 h-6 bg-purple-600 rounded-full -left-3.5"></div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {internship.title}
                  </h4>
                  <p className="text-lg font-semibold flex gap-2 text-purple-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                      </svg>{internship.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    {internship.duration}
                  </p>
                  <div className="text-gray-700 dark:text-gray-300 mt-4">
                    {internship.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-3xl font-bold text-purple-600 mb-6">
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification, index) => (
              <a
                key={index}
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {certification.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {certification.provider}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
