import Image from 'next/image';
import style from './Header.module.scss';
import Link from 'next/link';
import NavLinks from '../NavLinks/NavLinks';

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
    { icon: githubIcon, alt: 'githubIcon' },
  ];

  return (
    <>
      <div className={style.containerTop}>
        <div className={style.wrapperTop}>
          <div className={style.contacts}>
            {[
              { icon: phoneIcon, alt: 'phoneIcon', contact: '(414) 857 - 0107' },
              { icon: mailIcon, alt: 'mailIcon', contact: 'yummy@bistrobliss' },
            ].map((el, i) => (
              <div className={style.contact} key={i}>
                <Image src={el.icon} alt={el.alt}></Image>
                <p className={style.contactInfo}>{el.contact}</p>
              </div>
            ))}
          </div>

          <div className={style.socialLogos}>
            {arrIcons.map((el, i) => (
              <Link href='#' key={i}>
                <Image className={style.icon} src={el.icon} alt={el.alt}></Image>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={style.containerBottom}>
        <div className={style.wrapperBottom}>
          <div className={style.logoWrapper}>
            <Link href={'/'}>
              <Image src={logoImg} alt='logoImg'></Image>
              <h2 className={style.siteTitle}>Bistro Bliss</h2>
            </Link>
          </div>

          <NavLinks />

          <div className={style.btn}>Book A Table</div>
        </div>
      </div>
    </>
  );
}
