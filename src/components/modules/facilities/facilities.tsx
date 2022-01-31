import React from "react";
import { IconType } from "react-icons";
import { BsWifi } from "react-icons/bs";
import { FaSwimmingPool, FaUserFriends } from "react-icons/fa";
import { GiCampCookingPot, GiFilmProjector } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import { Wrapper } from "./styles";

interface facilitiesType {
  name: string;
  Icon: IconType;
}

const facilities: facilitiesType[] = [
  { name: "Free </br> Internet connection ", Icon: BsWifi },
  { name: "Wellness area & </br> Swimming Poll", Icon: FaSwimmingPool },
  { name: "Cable Tv & </br> projector", Icon: GiFilmProjector },
  { name: "Accommodation for up to 28 people", Icon: IoBedOutline },
  { name: "Disability-friendly Zone", Icon: FaUserFriends },
  { name: "Covered terrace & barbecue area", Icon: GiCampCookingPot },
];

const Facilities = () => {
  return (
    <Wrapper>
      <div className="container component-inner-gap">
        <div className="row justify-center">
          <div className="col-xl-10">
            <div className="row">
              <div className="col-lg-5">
                <div className="left">
                  <h6 className="caption caption-2">Facilities</h6>
                  <h2 className="title heading-4 bold">What awaits you</h2>
                  <p className="para sub-title-2">
                    We have put our heart and soul and creativity into making
                    your stay as pleasant as possible. The Stefanshof offers
                    everything your heart desires.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 ml-auto">
                <div className="right">
                  <div className="row">
                    {facilities.map(({ name, Icon }, key) => (
                      <div className="col-lg-6 feature" key={key}>
                        <span>{<Icon />}</span>
                        <span
                          className="sub-title-3"
                          dangerouslySetInnerHTML={{ __html: name }}></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Facilities;
