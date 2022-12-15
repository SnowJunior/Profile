import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am George Onyango a Full Stack Developer/ Software Engineer. I have 2 years experience building and designing software. I enjoy what I do and always aim to perform at the highest stage possible in all my projects.
          My main focus is on mobile application development using techonologies like React Native, Flutter, and Kotlin. I also have experience in web development using technologies like React, and Ruby.
          I am also a fast learner and I am always willing to learn new technologies and improve my skills.
              </p>
              
              <br />
              
        <p className="text-xl mt-5">
          I am currently looking for a job as a Software Engineer/ Full Stack Developer. I am also open to freelance projects. I am interested in working with companies that are willing to invest in their employees and help them grow. I am also willing to conform with the company's culture and work environment whether it is remote or on-site. <br />
          If you have any questions or want to work with me, feel free to contact me. You can send me an email at onyangogeorge954@gmail.com. I will get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default About;
