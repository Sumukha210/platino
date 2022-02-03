import React from "react";
import NextImg from "next/image";
import styled from "styled-components";
import contactFormImg from "@/assets/images/pricing.jpg";
import FormField from "./FormField";

const ContactForm = () => {
  return (
    <Wrapper className="margin-top">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-10">
            <div className="row gap-3 align-center">
              <div className="col-lg-6">
                <div className="left">
                  <NextImg
                    src={contactFormImg}
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="right">
                  <div className="header">
                    <Caption className="caption-3">
                      QUESTIONS OR SUGGESTIONS
                    </Caption>
                    <Title className="heading-3 bold">Write to us</Title>
                  </div>

                  <FormField />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactForm;

const Wrapper = styled.div`
  .left {
    & > span {
      height: 700px !important;
      width: 100%;
    }
  }
`;

const Caption = styled.h6`
  color: var(--dark-color);
`;

const Title = styled.h2`
  color: var(--dark-color);
`;
