'use client';

import { useState } from 'react';
import { ItemMenu } from './ItemMenu';

interface itensMenuProps {
    title: string;
    href: string;
}

const itensMenu: itensMenuProps[] = [
    {
        title: 'Inicio',
        href: '/'
    },
    {
        title: 'Benefícios',
        href: '/'
    },
    {
        title: 'Para quem é o curso?',
        href: '/'
    },
    {
        title: 'Preços promocionais',
        href: '/'
    },
    {
        title: 'Sobre nós',
        href: '/'
    }
];

function NavBar() {
    const [selectItem, setSelectItem] = useState('Inicio');

    function handleSelectItem(item: string) {
        setSelectItem(item);
    }

    function getActive(item: string): boolean {
        return item === selectItem;
    }
    return (
        <nav className="flex items-center gap-2">
            {itensMenu.map((item, index) => (
                <ItemMenu
                    onClick={() => handleSelectItem(item.title)}
                    active={getActive(item.title)}
                    key={index}
                    href={item.href}
                >
                    {item.title}
                </ItemMenu>
            ))}
        </nav>
    );
}
export { NavBar };
