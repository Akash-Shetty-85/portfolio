import React from "react";

const About = () => {
  const email = "aakashvshetty@gmail.com";
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "UI/UX Design",
    "Responsive Design",
    "Java",
    // Add more skills as needed
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 " id="about">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl leading-9 font-bold font-heading text-gray-900 sm:text-4xl sm:leading-10">
          About Me
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-700 font-paragraph">
          Hi! I'm Akash, a passionate and dedicated full-stack web developer
          striving to create meaningful and innovative applications. With
          expertise in the MERN stack and a flair for design, I specialize in
          building responsive, user-friendly, and scalable web solutions.
        </p>
        <p className="mt-4 text-lg leading-6 text-gray-700 font-paragraph">
          My journey began with a deep interest in technology and a commitment
          to continuous learning. I love exploring new tools and frameworks to
          stay up-to-date with the latest industry trends. When I'm not coding,
          you can find me exploring new technologies, or enjoying a good book
          with a cup of coffee.
        </p>
        <div className="mt-8">
          <h3 className="text-2xl leading-8 font-bold text-gray-900 mb-4 font-heading">
            Skills
          </h3>
          <div className="flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold m-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl leading-8 font-bold text-gray-900 mb-4 font-heading">
            Let's Connect
          </h3>
          <p className="mt-4 text-lg leading-6 text-gray-700 font-paragraph">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out to me at{" "}
            <a href={`mailto:${email}`} className="text-blue-500">
              {email}
            </a>
            . Let's create something awesome together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
