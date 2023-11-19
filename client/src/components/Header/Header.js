import Image from 'next/image';
import style from './Header.module.scss';
import phoneIcon from './assets/phoneIcon.svg';
import mailIcon from './assets/mailIcon.svg';
import twitterIcon from './assets/twitterIcon.svg';
import facebookIcon from './assets/facebookIcon.svg';
import instagramIcon from './assets/instagramIcon.svg';
import githubIcon from './assets/githubIcon.svg';
import logoImg from './assets/logoImg.svg';

export default function Header() {
  return (
    <>
      <div className={style.containerTop}>
        <div className={style.wrapperTop}>
          <div className={style.contacts}>
            <div className={style.contact}>
              <Image src={mailIcon} alt='mailIcon'></Image>
              <p className={style.contactInfo}>(414) 857 - 0107</p>
            </div>

            <div className={style.contact}>
              <Image src={phoneIcon} alt='phoneIcon'></Image>
              <p className={style.contactInfo}>yummy@bistrobliss</p>
            </div>
          </div>

          <div className={style.socialLogos}>
            <Image src={twitterIcon} alt='twitterIcon'></Image>
            <Image src={facebookIcon} alt='facebookIcon'></Image>
            <Image src={instagramIcon} alt='instagramIcon'></Image>
            <Image src={githubIcon} alt='githubIcon'></Image>
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
            <div className={style.btnNav}>Home</div>
            <div className={style.btnNav}>About</div>
            <div className={style.btnNav}>Menu</div>
          </nav>

          <div className={style.btn}>Book A Table</div>
        </div>
      </div>
    </>
  );
}
