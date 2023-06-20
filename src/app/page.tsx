import About from '@/components/About/About';
import Hero from '@/components/Hero/Hero';

export default function Home() {
    return (
        <main className="mx-60 mt-16 flex-center flex-col gap-60">
            <Hero />
            <About />
        </main>
    );
}
