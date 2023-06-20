'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { skills } from '@/data/skills';
import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper';

export default function SkillsSwiper() {
    return (
        <Swiper
            className="mx-auto mb-24"
            slidesPerView={1.2}
            spaceBetween={30}
            grabCursor={true}
            breakpoints={{
                501: {
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3.3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4.3,
                    spaceBetween: 50,
                },
            }}
            loop={true}
            navigation={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            modules={[Autoplay, Navigation]}
        >
            {skills.map(({ name, img }, index) => (
                <SwiperSlide
                    key={index}
                    className="bg-slate rounded select-none"
                >
                    <div className="h-full w-full flex flex-col items-center justify-between p-3">
                        <div className="relative w-[70%] aspect-square">
                            <Image
                                src={img}
                                alt={name}
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <p className="text-black text-sm text-center mt-2">
                            {name}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
            {/* <li key={name}>{name}</li> */}
            {/* {products.map((product, index) => {
        return (
            <SwiperSlide key={index}>
                <ProductCard product={product} index={index} />
            </SwiperSlide>
        );
    })} */}
        </Swiper>
    );
}
