import Image from 'next/image';
import style from './Header.module.scss';
import Link from 'next/link';

import phoneIcon from './assets/phoneIcon.svg';
import mailIcon from './assets/mailIcon.svg';
import twitterIcon from './assets/twitterIcon.svg';
import facebookIcon from './assets/facebookIcon.svg';
import instagramIcon from './assets/instagramIcon.svg';
import githubIcon from './assets/githubIcon.svg';
import logoImg from './assets/logoImg.svg';

export default function Header() {
  const arrIcons = [
    { icon: twitterIcon, alt: 'twitterIcon' },
    { icon: facebookIcon, alt: 'facebookIcon' },
    { icon: instagramIcon, alt: 'instagramIcon' },
    { icon: githubIcon, alt: 'instagramIcon' },
  ];

  const arrNav = [
    { icon: 'Home', linkPage: '/' },
    { icon: 'About', linkPage: '/about' },
    { icon: 'Menu', linkPage: '/menu' },
  ];

  return (
    <>
      <div className={style.containerTop}>
        <div className={style.wrapperTop}>
          <div className={style.contacts}>
            {[
              { icon: phoneIcon, alt: 'phoneIcon' },
              { icon: mailIcon, alt: 'mailIcon' },
            ].map((el, i) => (
              <div className={style.contact} key={i}>
                <Image src={el.icon} alt={el.alt}></Image>
                <p className={style.contactInfo}>(414) 857 - 0107</p>
              </div>
            ))}
          </div>

          <div className={style.socialLogos}>
            {arrIcons.map((el, i) => (
              <Link href='#'>
                <Image className={style.icon} src={el.icon} key={i} alt={el.alt}></Image>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={style.containerBottom}>
        <div className={style.wrapperBottom}>
          <div className={style.logoWrapper}>
            <Image src={logoImg} alt='logoImg'></Image>
            <h2 className={style.siteTitle}>Bistro Bliss</h2>
          </div>

          <nav>
            {arrNav.map((el, i) => (
              <Link href={el.linkPage}>
                <div className={style.btnNav} key={i}>
                  {el.icon}
                </div>
              </Link>
            ))}
          </nav>

          <div className={style.btn}>Book A Table</div>
        </div>
      </div>
    </>
  );
}
