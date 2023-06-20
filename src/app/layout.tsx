import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import { Poppins } from 'next/font/google';

import Email from '@/components/Email/Email';
import SocialIcons from '@/components/SocialIcons/SocialIcons';

const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'Muhab Gamal',
    description: "Muhab Gamal's Portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Navbar />
                <SocialIcons />
                <Email />
                {children}
            </body>
        </html>
    );
}
