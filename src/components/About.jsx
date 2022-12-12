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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          quisquam voluptatibus nam iusto temporibus illum nobis aspernatur,
          inventore non animi quos itaque sit laborum repellendus veniam vitae
          blanditiis asperiores ea unde, neque fugiat suscipit voluptas.
          Voluptates cupiditate, aperiam labore necessitatibus placeat, culpa
          eveniet commodi harum ipsam eligendi veniam delectus quidem.
              </p>
              
              <br />
              
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          similique incidunt dolorem maxime magnam quod ipsam obcaecati, at
          facere esse optio, velit rem illum iure tempore temporibus officia, a
          totam cumque! Nobis, illo. Similique error vitae quaerat, eos ex a
          explicabo consequatur atque cum corporis obcaecati rerum assumenda,
          sit molestias?
        </p>
      </div>
    </div>
  );
};

export default About;
