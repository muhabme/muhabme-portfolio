import { skills } from '@/data/skills';
import Image from 'next/image';
import React from 'react';
import SkillsSwiper from '../Swiper/SkillsSwiper';
import profile from '../../../public/profile.png';

export default function About() {
    return (
        <div id="about">
            <div className="grid grid-cols-5 gap-8">
                <div className="col-span-3">
                    <div className="flex-center mb-8 gap-8">
                        <h2 className="text-lightest text-3xl font-bold">
                            About Me
                        </h2>
                        <div className="grow h-1 bg-lightestnavy mx-auto rounded" />
                    </div>
                    <div className="flex flex-col text-slate gap-4 text-lg">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi incidunt voluptatem ipsum suscipit soluta
                            tempore!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.{' '}
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi incidunt voluptatem ipsum suscipit soluta
                            tempore!
                        </p>
                        <p>Here are a few technologies I've used recently:</p>
                    </div>
                    {/* TODO: Add SwiperJS */}
                    <SkillsSwiper />
                </div>
                <div className="col-span-2 py-12">
                    <div className="relative w-full aspect-square group">
                        <div className="absolute z-50 bg-theme opacity-20 w-full h-full rounded-lg group-hover:opacity-0 default-transition" />
                        <div className="absolute top-4 left-4 border-2 border-theme -z-10 w-full h-full rounded-lg group-hover:top-2 group-hover:left-2 default-transition" />
                        <Image
                            src={profile}
                            alt="Muhab Gamal"
                            fill
                            style={{ objectFit: 'cover' }}
                            className="[filter:grayscale(100%)] rounded-lg group-hover:[filter:none] transition-all duration-700"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
