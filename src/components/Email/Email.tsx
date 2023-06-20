import Link from 'next/link';
import React from 'react';

export default function Email() {
    return (
        <div className="flex flex-col fixed bottom-0 right-16 gap-8 group">
            <Link
                href={'mailto:muhabme@gmail.com'}
                className="[writing-mode:vertical-lr] p-3 default-transition default-outline rounded hover:text-theme"
            >
                muhabme@gmail.com
            </Link>
            <div className="w-1 h-28 bg-light mx-auto rounded rounded-b-none group-hover:h-32 default-transition" />
        </div>
    );
}
