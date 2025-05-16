'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [hideHeader, setHideHeader] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!hasScrolled && window.scrollY > 50) {
                setHasScrolled(true);
                setHideHeader(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasScrolled]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 bg-white shadow ${hideHeader ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <div className="flex items-center justify-between px-6 py-2 border-b bg-gray-100 text-sm">
                <div className="text-red-600 font-semibold flex items-center gap-2">
                    <span>🎓</span>
                    <span>ÁREA DO ALUNO</span>
                </div>
                {/* <div className="flex gap-2">
                    <a href="#"><Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} /></a>
                    <a href="#"><Image src="/icons/twitter.svg" alt="Twitter" width={20} height={20} /></a>
                    <a href="#"><Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} /></a>
                    <a href="#"><Image src="/icons/youtube.svg" alt="YouTube" width={20} height={20} /></a>
                    <a href="#"><Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} /></a>
                </div> */}
            </div>


            <div className="flex items-center justify-between px-6 py-3 bg-white">
                <div className="text-2xl font-extrabold text-black">
                    <span className="text-red-600">C</span>LOGO
                </div>
                <nav>
                    <ul className="flex gap-6 text-gray-800 text-sm font-medium">
                        <li><Link href="#">Institucional</Link></li>
                        <li><Link href="#">Cursos</Link></li>
                        <li><Link href="#">Concursos</Link></li>
                        <li><Link href="#">OAB</Link></li>
                        <li><Link href="#">Corpo Docente</Link></li>
                        <li><Link href="#">Novidades</Link></li>
                        <li><Link href="#">Eventos</Link></li>
                        <li><Link href="#">Clube de Parceiros</Link></li>
                        <li><Link href="#">Contato</Link></li>
                        <li><Link href="#">Loja</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
