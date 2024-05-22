import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="text-center p-8">
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Why to choose US?
      </h2>

      <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src="https://i.ibb.co/XkY6PMj/a1.jpg"
            alt=""
            className="inline-block rounded shadow-lg border border-merino-400 h-72"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Authentic Italian Cuisine
          </h3>
          <p className="sm:text-lg mt-6">
            Your restaurant offers authentic Italian dishes made with
            traditional recipes and high-quality ingredients. This commitment to
            authenticity gives diners a genuine taste of Italy, differentiating
            your restaurant from others that might offer a more generic Italian
            menu.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src="https://i.ibb.co/cTmXZ2m/a3.jpg"
            alt="project members"
            className="inline-block rounded shadow-lg border border-merino-400"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Exceptional Dining Experience
          </h3>
          <p className="sm:text-lg mt-6">
            Customers choose your restaurant for the exceptional dining
            experience, which includes not just the food, but also the ambiance,
            service, and attention to detail.Warm, friendly, and knowledgeable
            staff who provide outstanding service and can recommend dishes and
            wine pairings.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-20 text-left  text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src="https://i.ibb.co/QmYRkWx/a4.jpg"
            alt="editor"
            className="inline-block rounded shadow-lg border border-merino-400"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Commitment to Quality and Freshness
          </h3>
          <p className="sm:text-lg mt-6">
            Your restaurant is renowned for its commitment to using fresh,
            locally sourced, and seasonal ingredients, ensuring every dish is of
            the highest quality and bursting with flavor.Daily specials that
            highlight seasonal produce and fresh catches, keeping the menu
            dynamic and exciting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
