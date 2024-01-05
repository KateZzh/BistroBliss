'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './NavLinks.module.scss';

export default function NavLinks() {
  const pathname = usePathname();

  const navLinks = [
    { icon: 'Home', linkPage: '/' },
    { icon: 'About', linkPage: '/about' },
    { icon: 'Menu', linkPage: '/menu' },
  ];

  return (
    <>
      <nav>
        {navLinks.map((el, i) => {
          return (
            <Link href={el.linkPage} key={i}>
              <div className={pathname === el.linkPage ? style.btnNavActive : style.btnNav}>
                {el.icon}
              </div>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
