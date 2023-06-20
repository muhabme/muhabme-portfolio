import Link from 'next/link';
import React from 'react';
import Logo from '../Logo/Logo';
import { sectionLinks } from '@/data/sections';
import Button from '../Button/Button';

export default function Navbar() {
    return (
        <nav className="min-h-[60px] ">
            <div className="relative px-16 w-full flex justify-between items-center default-transition">
                <div className="">
                    <Link
                        href={'/'}
                        className="text-theme h-12 w-12 fill-none flex-center my-8 default-transition hover:fill-[#64FAD9] default-outline"
                    >
                        <Logo />
                    </Link>
                </div>
                <div className="flex-center gap-12">
                    <ul className="flex gap-12 ">
                        {sectionLinks.map((section) => (
                            <li key={section.name} className="">
                                <Link
                                    href={section.link}
                                    className="p-3 default-outline default-transition text-sm hover:text-theme"
                                >
                                    {section.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href={'/resume.pdf'}
                        className="btn hover:text-lightest hover:bg-theme"
                    >
                        Resume
                    </Link>
                </div>
            </div>
        </nav>
    );
}
