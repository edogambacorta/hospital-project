import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface TeamProps {
  id?: string;
}

const Team: React.FC<TeamProps> = ({ id }) => {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Alexandra Foster",
      role: "Chief AI Officer",
      bio: "With over 15 years of experience in AI and healthcare, Dr. Foster leads our AI strategy and innovation.",
      image: "/images/team-member-1.jpg"
    },
    {
      name: "Michael Chang",
      role: "Head of Hospital Partnerships",
      bio: "Michael brings 20 years of healthcare management experience to ensure seamless integration of our AI solutions.",
      image: "/images/team-member-2.jpg"
    },
    {
      name: "Dr. Olivia Martinez",
      role: "Lead AI Researcher",
      bio: "Dr. Martinez specializes in developing cutting-edge AI algorithms for improved patient care and hospital efficiency.",
      image: "/images/team-member-3.jpg"
    },
    {
      name: "Robert Johnson",
      role: "Chief Technology Officer",
      bio: "With a background in both healthcare IT and AI, Robert oversees the technical implementation of our solutions.",
      image: "/images/team-member-4.jpg"
    }
  ];

  return (
    <section id={id} className="team">
      <div className="container">
        <h2>The People Behind the Magic</h2>
        <p className="section-description">Meet our team of experts dedicated to revolutionizing hospital management through AI.</p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <img src={member.image} alt={member.name} className="team-member-image" />
              <h3>{member.name}</h3>
              <div className="team-member-role">{member.role}</div>
              <p className="team-member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
