'use client';

import { RiLinkedinFill, RiGithubFill, RiFacebookBoxFill } from 'react-icons/ri'

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.linkedin.com/in/gerald-carido/',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/GCarido',
    name: <RiGithubFill />
  },
  {
    path: 'https://www.facebook.com/GeraldCarido',
    name: <RiFacebookBoxFill />
  }
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
        <Link 
        href={icon.path} 
        key={index}
        target="_blank"
        >
          <div className={iconStyles}>{icon.name}</div>
        </Link>
        );

      })}
    </div>
  );
};

export default Socials