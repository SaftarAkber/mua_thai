import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';

const ProfileCard = ({ name, position, imageSrc, linkedInUrl }) => {
  return (
    <div className="bg-[#ECDBBA] shadow-md rounded-lg p-4">
      <div className="flex items-center justify-between">
        <img src={imageSrc} alt={name} className="w-24 h-24 rounded-full h-[100%] w-[30%]"/>
        <div className="ml-4">
          <h2 className="text-xl font-medium text-[#C84B31]">{name}</h2>
          <p className="text-[#C84B31]">{position}</p>
        </div>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-[#C84B31] flex mx-10 items-center hover:text-blue-700">
          <AiFillLinkedin className="w-[20px] h-[20px]" size={24}/>
        </a>
      </div>
    </div>
  );
};

const exampleProfiles = [
  {
    name: 'ARIF MAMMADOV',
    position: 'CEO & Founder',
    imageSrc: require('../images/web1.jpg'),
    linkedInUrl: 'https://www.linkedin.com/in/john-doe/',
  },
  {
    name: 'SAFTAR AKBAROV',
    position: 'Fullstack Developer',
    imageSrc: require('../images/web1.jpg'),
    linkedInUrl: 'https://www.linkedin.com/in/jane-smith/',
  },
  {
    name: 'JAMSHID NAKHCHIVANSKI',
    position: 'CTO',
    imageSrc: require('../images/web1.jpg'),
    linkedInUrl: 'https://www.linkedin.com/in/mike-johnson/',
  },
  {
    name: 'TAGHI ZARBALIYEV',
    position: 'Head Of Partnerships',
    imageSrc: require('../images/web1.jpg'),
    linkedInUrl: 'https://www.linkedin.com/in/alice-davis/',
  },
  {
    name: 'Baleli',
    position: 'Planet Researcher',
    imageSrc: require('../images/web1.jpg'),
    linkedInUrl: '../images/baleli.jpeg',
  },
  {
    name: 'UFO',
    position: 'Messi',
    imageSrc: require('../images/web1.jpg'),
    linkedInUrl: '../images/messi.jpeg',
  },
];

const ProfileCardList = () => {
  return (
      <div className="mx-auto bg-[#C84B31] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-4 px-2 sm:px-4 md:px-6 lg:px-8 py-10">
        {exampleProfiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
  );
};

export default ProfileCardList;