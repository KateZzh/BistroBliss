import style from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import logoImg from './assets/logoImg.svg';
import imgFood1 from './assets/ImgFood1.png';
import imgFood2 from './assets/ImgFood2.png';
import imgFood3 from './assets/ImgFood3.png';
import imgFood4 from './assets/ImgFood4.png';

export default function Footer() {
  const arrPages = [
    { page: 'Home', linkPage: '/' },
    { page: 'About', linkPage: '/about' },
    { page: 'Menu', linkPage: '/menu' },
    { page: 'Pricing', linkPage: '/pricing' },
    { page: 'Blog', linkPage: '/blog' },
    { page: 'Contact', linkPage: '/contact' },
    { page: 'Delivery', linkPage: '/delivery' },
  ];

  const arrUtilityPages = [
    { page: 'Start Here', linkPage: '#' },
    { page: 'Styleguide', linkPage: '#' },
    { page: 'Password Protected', linkPage: '#' },
    { page: '404 Not Found', linkPage: '#' },
    { page: 'Licenses', linkPage: '#' },
    { page: 'Changelog', linkPage: '#' },
    { page: 'View More', linkPage: '#' },
  ];

  const arrImagesFromInstagram = [
    { img: imgFood1, alt: 'imgFood1' },
    { img: imgFood2, alt: 'imgFood2' },
    { img: imgFood3, alt: 'imgFood3' },
    { img: imgFood4, alt: 'imgFood4' },
  ];

  return (
    <>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.wrapperLeft}>
            <div className={style.logoWrapper}>
              <Image src={logoImg} alt='imgLogo'></Image>
              <h2 className={style.siteTitle}>Bistro Bliss</h2>
            </div>

            <p className={style.description}>
              In the new era of technology we look a in the future with certainty and pride to for
              our company and.
            </p>
          </div>

          <div className={style.wrapperCentre}>
            <div className={style.pagesOrUtilityWrapper}>
              <h3>Pages</h3>

              {arrPages.map((el, i) => (
                <Link href={el.linkPage}>
                  <p className={style.titlePage} key={i}>
                    {el.page}
                  </p>
                </Link>
              ))}
            </div>

            <div className={style.pagesOrUtilityWrapper}>
              <h3>Utility Pages</h3>

              {arrUtilityPages.map((el, i) => (
                <Link href={el.linkPage}>
                  <p className={style.titlePage} key={i}>
                    {el.page}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className={style.wrapperRight}>
            <Link href='#'>
              <p className={style.linkToInstagram}>Follow Us On Instagram</p>
            </Link>

            <div className={style.imagesFromInstagram}>
              {arrImagesFromInstagram.map((el, i) => (
                <Image src={el.img} alt={el.alt} key={i} className={style.img}></Image>
              ))}
            </div>
          </div>
        </div>

        <div className={style.line}></div>
        <p className={style.creatorInfo}>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
      </div>
    </>
  );
}
