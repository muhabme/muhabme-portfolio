import Email from '@/components/Email/Email';
import Hero from '@/components/Hero/Hero';
import SocialIcons from '@/components/SocialIcons/SocialIcons';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex-center">
            <SocialIcons />
            <Hero />
            <Email />
        </main>
    );
}
