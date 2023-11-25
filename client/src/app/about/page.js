import style from './page.module.scss';
import Image from 'next/image';

import imgTop from './assets/imgTop.png';
import imgBottom from './assets/imgBottom.png';
import iconPhone from './assets/iconPhone.svg';
import iconMail from './assets/iconMail.svg';
import iconLocation from './assets/iconLocation.svg';

export default function About() {
  const arrContacts = [
    { icon: iconPhone, alt: 'iconPhone', contact: '(414) 857 - 0107' },
    { icon: iconMail, alt: 'iconMail', contact: 'happytummy@restaurant.com' },
    {
      icon: iconLocation,
      alt: 'iconLocation',
      contact: '837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles',
    },
  ];

  const arrStatistic = [
    { amount: '3', title: 'Locations' },
    { amount: '1995', title: 'Founded' },
    { amount: '65+', title: 'Staff Members' },
    { amount: '100%', title: 'Satisfied Customers' },
  ];

  return (
    <>
      <div className={style.containerTop}>
        <div className={style.wrapper}>
          <div className={style.wrapperLeft}>
            <Image className={style.imgLeft} src={imgTop} alt='imgTop'></Image>

            <div className={style.contactsWrapper}>
              <h2>Come and visit us</h2>

              <div className={style.contacts}>
                {arrContacts.map((el, i) => (
                  <div className={style.contact} key={i}>
                    <Image src={el.icon} alt={el.alt}></Image>
                    <p>{el.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={style.wrapperRight}>
            <h1>We provide healthy food for your family.</h1>
            <p className={style.description1}>
              Our story began with a vision to create a unique dining experience that merges fine
              dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary
              culture, we aim to honor our local roots while infusing a global palate.
            </p>

            <p className={style.description2}>
              At place, we believe that dining is not just about food, but also about the overall
              experience. Our staff, renowned for their warmth and dedication, strives to make every
              visit an unforgettable event.
            </p>
          </div>
        </div>
      </div>

      <div className={style.containerBottom}>
        <div className={style.wrapper}>
          <div className={style.wrapperLeft}>
            <div className={style.infoWrapper}>
              <h1>A little information for our valuable guest</h1>
              <p>
                At place, we believe that dining is not just about food, but also about the overall
                experience. Our staff, renowned for their warmth and dedication, strives to make
                every visit an unforgettable event.
              </p>
            </div>

            <div className={style.statisticWrapper}>
              {arrStatistic.map((el, i) => (
                <div className={style.statistic} key={i}>
                  <h2>{el.amount}</h2>
                  <p>{el.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={style.wrapperRight}>
            <Image className={style.imgRight} src={imgBottom} alt='imgBottom'></Image>
          </div>
        </div>
      </div>
    </>
  );
}
