'use client';
import { iconFile, mockup } from '@/assets';
import { Container } from './Container';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function SectionHero() {
    const textHeroRef = useRef(null);
    const mockupLeftRef = useRef(null);
    const mockupRightRef = useRef(null);

    useEffect(() => {
        const textHero = textHeroRef.current;
        gsap.fromTo(textHero, {}, {});
    }, []);
    return (
        <section className="pt-16 bg-primary-green border-t w-full h-section-hero border-green-border bg-background-hero bg-no-repeat bg-top overflow-hidden">
            <Container className="flex flex-col items-center opacity-1">
                <h3 className="text-2xl text-secondary-green mb-6">
                    Novo curso focado em instagram
                </h3>
                <h1 className="text-7xl text-white mb-6 font-semibold">
                    Destrave as suas habilidades
                </h1>
                <div className="flex gap-10 items-center">
                    <button className="flex gap-2 items-center ">
                        <Image
                            src={iconFile}
                            alt="icon File"
                        />
                        <span className="text-white">
                            Assinar lista de espera
                        </span>
                    </button>
                    <button className="text-primary-green px-5 font-bold py-4 rounded-full bg-primary-yellow ">
                        Começar agora
                    </button>
                </div>
            </Container>
            <Container className="flex w-full justify-center gap-36 mt-36">
                <Image
                    ref={mockupLeftRef}
                    src={mockup}
                    alt="logo"
                />
                <Image
                    ref={mockupRightRef}
                    src={mockup}
                    alt="logo"
                />
            </Container>
        </section>
    );
}
export { SectionHero };
