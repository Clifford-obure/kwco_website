import React from "react";
import Pulkeet from "../Team Members Images/Pulkeet.png";

function OurTeam() {
  return (
    <div className="ot-container container">
      <div className="ot-content-container">
        <div className="ot-header">
          <h2>Our Team</h2>
          <h1>Meet Our Dedicated Team Of KWCO Law firm</h1>
          <h3>
            Crafting excellence at KWCO Law firm involves a relentless pursuit
            of legal mastery, fostering a culture of academic rigor, and
            nurturing future legal professionals. Our commitment to excellence
            is reflected in our dedication to shaping skilled, ethical, and
            innovative legal practitioners.
          </h3>
        </div>
        <div className="ot-team-member-container">
          <TeamMember
            name="Pulkeet Singh"
            title="Founder of KWCO Law Firm"
            image={Pulkeet}
          />
          <TeamMember
            name="Pulkeet Singh"
            title="Founder of KWCO Law Firm"
            image={Pulkeet}
          />
          <TeamMember
            name="Pulkeet Singh"
            title="Founder of KWCO Law firm"
            image={Pulkeet}
          />
          <TeamMember
            name="Pulkeet Singh"
            title="Founder of KWCO Law firm"
            image={Pulkeet}
          />
          <TeamMember
            name="Pulkeet Singh"
            title="Founder of KWCO Law firm"
            image={Pulkeet}
          />
          <TeamMember
            name="Pulkeet Singh"
            title="Founder of KWCO Law firm"
            image={Pulkeet}
          />
          <TeamMember
            name="Pulkeet Singh"
            title="Founder of KWCO Law firm"
            image={Pulkeet}
          />
          <TeamMember
            name="Pulkeet Singh"
            title="Founder of KWCO Law firm"
            image={Pulkeet}
          />
        </div>
      </div>
    </div>
  );
}

const TeamMember = ({ name, title, image }) => {
  return (
    <div className="ot-team-member-name-box">
      <div className="ot-team-member-details">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default OurTeam;
