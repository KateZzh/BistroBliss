// 'use client';

import style from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import birthdaysImg from '../../public/birthdaysImg.png';
import cateringsImg from '../../public/cateringsImg.png';
import eventsImg from '../../public/eventsImg.png';
import weddingsImg from '../../public/weddingsImg.png';
import cakeIcon from '../../public/cakeIcon.svg';
import cupIcon from '../../public/cupIcon.svg';
import glassIcon from '../../public/glassIcon.svg';
import plateIcon from '../../public/plateIcon.svg';

import mainImg from '../../public/mainImg.png'

export default function Home() {
  const arrMenuCards = [
    {
      iconCard: cupIcon,
      alt: 'cupIcon',
      title: 'Breakfast',
      description:
        'In the new era of technology we look in the future with certainty and pride for our life.',
      link: '#',
    },
    {
      iconCard: plateIcon,
      alt: 'plateIcon',
      title: 'Main Dishes',
      description:
        'In the new era of technology we look in the future with certainty and pride for our life.',
      link: '#',
    },
    {
      iconCard: glassIcon,
      alt: 'glassIcon',
      title: 'Drinks',
      description:
        'In the new era of technology we look in the future with certainty and pride for our life.',
      link: '#',
    },
    {
      iconCard: cakeIcon,
      alt: 'cakeIcon',
      title: 'Desserts',
      description:
        'In the new era of technology we look in the future with certainty and pride for our life.',
      link: '#',
    },
  ];

  const arrEventCard = [
    {
      iconCard: cateringsImg,
      alt: 'cateringsImg',
      title: 'Caterings',
      description: 'In the new era of technology we look in the future with certainty for life.',
    },
    {
      iconCard: birthdaysImg,
      alt: 'birthdaysImg',
      title: 'Birthdays',
      description: 'In the new era of technology we look in the future with certainty for life.',
    },
    {
      iconCard: weddingsImg,
      alt: 'weddingsImg',
      title: 'Weddings',
      description: 'In the new era of technology we look in the future with certainty for life.',
    },
    {
      iconCard: eventsImg,
      alt: 'eventsImg',
      title: 'Events',
      description: 'In the new era of technology we look in the future with certainty for life.',
    },
  ];

  return (
    <>
      <div className={style.containerTop}>
        <Image className={style.backgroundImg} src={mainImg}></Image>

        <div className={style.outsideWrapperInfo}>
          <div className={style.wrapperInfo}>
            <h1 className={style.slogan}>Best food for your taste</h1>
            <p className={style.description}>
              Discover delectable cuisine and unforgettable moments in our welcoming, culinary
              haven.
            </p>

            <div className={style.buttons}>
              <div className={style.btnPurple}>Book A Table</div>

              <div className={style.btnWhite}>Explore Menu</div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.containerCentre}>
        <div className={style.wrapper}>
          <h2>Browse Our Menu</h2>

          <div className={style.menuCardsWrapper}>
            {arrMenuCards.map((el, i) => (
              <div className={style.menuCard} key={i}>
                <Image className={style.iconMenuCard} alt={el.alt} src={el.iconCard}></Image>

                <div className={style.descriptionMenuCard}>
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                </div>

                <Link href={el.link}>
                  <p className={style.linkToExploreMenu}>Explore Menu</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={style.containerBottom}>
        <div className={style.wrapper}>
          <h2>We also offer unique services for your events</h2>

          {arrEventCard.map((el, i) => (
            <div className={style.eventCard} key={i}>
              <Image className={style.imgEventCard} alt={el.alt} src={el.iconCard}></Image>

              <div className={style.descriptionEventCard}>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
              </div>
            </div>
          ))}
          <div className={style.eventsCardsWrapper}></div>
        </div>
      </div>
    </>
  );
}
