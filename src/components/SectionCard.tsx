import {
    mockupMain,
    image01,
    image02,
    image03,
    image04,
    image05,
    image06
} from '@/assets';
import Image from 'next/image';

function SectionCard() {
    return (
        <section className="pb-[80px]">
            <Image
                className="sticky top-80 z-10 -mt-80 mx-auto mb-16 "
                src={mockupMain}
                alt="mockup Main"
            />
            <h2 className="text-center text-7xl	mb-60 font-semibold">
                Faça <span className="text-secondary-green">você</span> mesmo de
                casa
            </h2>
            <div>
                <div className="relative w-full  mx-auto max-w-[1320px] h-[562px]">
                    <Image
                        className="absolute top-0 right-[139px]"
                        src={image04}
                        alt="image 04"
                    />
                    <Image
                        className="absolute top-[33px] left-[184px]"
                        src={image01}
                        alt="image 01"
                    />
                    <Image
                        className="absolute left-0 bottom-[123px]"
                        src={image02}
                        alt="image 02"
                    />
                    <Image
                        className="absolute right-0 bottom-[108px]"
                        src={image05}
                        alt="image 05"
                    />
                    <Image
                        className="absolute bottom-0 left-[337px]"
                        src={image03}
                        alt="image image03"
                    />
                    <Image
                        className="absolute bottom-0 right-[334px]"
                        src={image06}
                        alt="image 06"
                    />
                </div>
            </div>
        </section>
    );
}
export { SectionCard };
