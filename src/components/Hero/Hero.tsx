import Link from 'next/link';
import React from 'react';

export default function Hero() {
    return (
        <div className="flex flex-col items-start justify-center min-h-[60vh] gap-4">
            <h1 className="text-theme text-lg font-bold">Hi, my name is</h1>
            <h2 className="text-giant text-lightest font-bold leading-[1.05]">
                Muhab Gamal
            </h2>
            <h3 className="font-bold text-3xl text-lightest">
                A Full Stack Web Developer
            </h3>
            <p className=" text-lg mr-[40%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                deleniti iste, ipsam nostrum alias, minus dolorem dignissimos
                placeat cupiditate animi ratione similique possimus earum optio!
                Adipisci quo vitae ipsa aliquid?
            </p>
            <Link href={'/resume.pdf'} className='btn'>Check Out My Resume</Link>
        </div>
    );
}
