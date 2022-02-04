import Button from "@/element/button";
import React from "react";

const Info = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-center">
          <div className="col-md-11 col-lg-8">
            <div className="content">
              <h4 className="heading-3 bold">
                Are you ready <br /> to enjoy with us ?
              </h4>
              <p className="sub-title-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus, distinctio laboriosam quibusdam doloribus officiis
                nostrum animi voluptate mollitia, architecto, voluptatum dolores
                at accusantium laborum voluptatem nemo reprehenderit in est
                enim!
              </p>
              <Button name="Book now" isDarkBtn={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
