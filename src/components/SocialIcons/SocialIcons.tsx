import React from 'react';
import {
    FiGithub,
    FiInstagram,
    FiYoutube,
    FiLinkedin,
    FiTwitter,
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SocialIcons() {
    const socialLinks = [
        { name: 'Github', icon: <FiGithub />, link: 'https://www.github.com' },
        {
            name: 'LinkedIn',
            icon: <FiLinkedin />,
            link: 'https://www.linkedin.com/in/koolkishan/',
        },
    ];

    return (
        <div className="flex flex-col fixed bottom-0 left-16 gap-8">
            <ul className="flex flex-col gap-2">
                {socialLinks.map(({ name, icon, link }) => (
                    <li key={name} className="flex-center">
                        <Link
                            target="_blank"
                            href={link}
                            className="p-3 text-lg default-transition default-outline rounded-full hover:text-theme hover:-translate-y-1 focus:-translate-y-1"
                        >
                            {icon}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="w-1 h-32 bg-light mx-auto rounded rounded-b-none" />
        </div>
    );
}
