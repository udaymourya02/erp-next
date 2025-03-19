import React from 'react';
import Link from 'next/link';


const Header = () => (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-xl">ERP System</h1>
        <nav>
            <Link href="/production">
                <a className="text-white hover:underline">Production</a>
            </Link>
            <Link href="/hr">
                <a className="text-white hover:underline">HR</a>
            </Link>

        </nav>

    </header>
);

export default Header;
