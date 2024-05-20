import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col p-5 lg:px-48 lg:py-11">
      <div className="card bg-base-200 p-5 mb-10">
        <div className="card-body">
          <h1 className="card-title font-bold text-2xl mb-2">
            Differences between uncontrolled and controlled components
          </h1>
          <p className="my-3">
            In React, controlled components are those whose state and behavior
            are managed by parent components. Conversely, uncontrolled
            components maintain and manage their own state and behavior
            independently.
          </p>
        </div>
      </div>
      <div className="card bg-base-200 p-5 mb-10">
        <div className="card-body">
          <h1 className="card-title font-bold text-2xl mb-2">
            How to validate React props using PropTypes?
          </h1>
          <p className="my-3">
            In React, I can validate props using the PropTypes library, which
            helps ensure that the components receive the correct data types.
            First, import PropTypes at the top of your file. Then, define the
            propTypes object within your component to specify the expected
            types.
          </p>
        </div>
      </div>
      <div className="card bg-base-200 p-5 mb-10">
        <div className="card-body">
          <h1 className="card-title font-bold text-2xl mb-2">
            Difference between nodejs and express js
          </h1>
          <p className="my-3">
            Node JS is a platform for building i/o applications that are
            server-side event-driven and made using JavaScript. Express JS is a
            framework based on Node JS which is used for building web
            applications using approaches and principles of Node JS event-driven
            architecture.
          </p>
        </div>
      </div>
      <div className="card bg-base-200 p-5 mb-10">
        <div className="card-body">
          <h1 className="card-title font-bold text-2xl mb-2">
            What is a custom hook, and why will you create a custom hook?
          </h1>
          <p className="my-3">
            Custom Hooks are a powerful feature of React that allows you to
            encapsulate common functionality into reusable functions. They are a
            great way to make your code more organized, reusable, and
            maintainable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
