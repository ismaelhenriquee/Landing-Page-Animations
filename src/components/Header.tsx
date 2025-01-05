import { iconSearch, iconUser, logo } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './Container';
import { NavBar } from './NavBar';

function Header() {
    return (
        <header className="flex w-full h-24 items-center bg-primary-green">
            <Container className=" flex items-center justify-between">
                <Image
                    className=""
                    src={logo}
                    alt="logo"
                />
                <div className=" flex items-center gap-20">
                    <NavBar />
                    <div className=" flex items-center gap-7">
                        <Image
                            src={iconSearch}
                            alt="icon Search"
                        />
                        <Link
                            className="flex items-center gap-2"
                            href={''}
                        >
                            <Image
                                src={iconUser}
                                alt="icon User"
                            />
                            <span className="text-sm text-white">Fazer login</span>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
}
export { Header };
