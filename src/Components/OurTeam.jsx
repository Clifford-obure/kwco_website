import React from "react";
import Pulkeet from "../Team Members Images/Pulkeet.png";
import sk from "../Team Members Images/sk.jpg";
import Boniface from "../Team Members Images/Boniface.jpg";
import seif from "../Team Members Images/seif.jpg";
import jackline from "../Team Members Images/Jackline.jpg";
import Eddie from "../Team Members Images/Eddie.jpg";
import Alexander from "../Team Members Images/alexander Mtua.jpg";
import agwine from "../Team Members Images/angwine.jpg";

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
          <TeamMember name="Sammy Waweru" title="Managing Partner" image={sk} />
        </div>
        <div className="ot-team-member-container">
          <TeamMember
            name="Agwine OTieno"
            title="Head of Knowledge Management"
            image={agwine}
          />
          <TeamMember
            name="Boniface Wambua Munuve"
            title="Head of Credit Management"
            image={Boniface}
          />
          <TeamMember
            name="Seif Mohammed "
            title="Credit Managemen"
            image={seif}
          />
          <TeamMember
            name="Jackline Jowi"
            title="Credit Management"
            image={jackline}
          />
          <TeamMember
            name="Eddie Mwiti"
            title="Associate Lawyer"
            image={Eddie}
          />
          <TeamMember
            name="Alexander Mutua"
            title="Trainee Lawyer"
            image={Alexander}
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
