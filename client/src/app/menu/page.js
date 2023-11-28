import style from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { arrCardsMenu } from '@/storage/storageMenu'

// import imgMenu1 from './assets/imgMenu1.png';
// import imgMenu2 from './assets/imgMenu2.png';
// import imgMenu3 from './assets/imgMenu3.png';
// import imgMenu4 from './assets/imgMenu4.png';
// import imgMenu5 from './assets/imgMenu5.png';
// import imgMenu6 from './assets/imgMenu6.png';
// import imgMenu7 from './assets/imgMenu7.png';
// import imgMenu8 from './assets/imgMenu8.png';

export default function Menu() {
//  const arrCardsMenu = [
//     {
//       id: '1',
//       img: imgMenu1,
//       alt: 'imgMenu1',
//       price: '$ 9.99',
//       title: 'Fried Eggs',
//       description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
//     },
//     {
//       id: '2',
//       img: imgMenu2,
//       alt: 'imgMenu2',
//       price: '$ 15.99',
//       title: 'Hawaiian Pizza',
//       description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
//     },
//     {
//       id: '3',
//       img: imgMenu3,
//       alt: 'imgMenu3',
//       price: '$ 7.25',
//       title: 'Martinez Cocktail',
//       description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
//     },
//     {
//       id: '4',
//       img: imgMenu4,
//       alt: 'imgMenu4',
//       price: '$ 20.99',
//       title: 'Butterscotch Cake',
//       description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
//     },
//     {
//       id: '5',
//       img: imgMenu5,
//       alt: 'imgMenu5',
//       price: '$ 5.89',
//       title: 'Mint Lemonade',
//       description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
//     },
//     {
//       id: '6',
//       img: imgMenu6,
//       alt: 'imgMenu6',
//       price: '$ 18.05',
//       title: 'Chocolate Icecream',
//       description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
//     },
//     {
//       id: '7',
//       img: imgMenu7,
//       alt: 'imgMenu7',
//       price: '$ 12.55',
//       title: 'Cheese Burger',
//       description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
//     },
//     {
//       id: '8',
//       img: imgMenu8,
//       alt: 'imgMenu8',
//       price: '$ 12.99',
//       title: 'Classic Waffles',
//       description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
//     },
//   ];

  return (
    <>
      <div className={style.container}>
        <div className={style.infoTitle}>
          <h1>Our Menu</h1>
          <p className={style.description}>
            We consider all the drivers of change gives you the components you need to change to
            create a truly happens.
          </p>
        </div>

        <div className={style.cardsMenuWrapper}>
          {arrCardsMenu.map((el, i) => (
            <Link href={`/card/${el.id}`} key={i}>
              <div className={style.card}>
                <Image className={style.img} src={el.img} alt={el.alt}></Image>

                <div className={style.info}>
                  <p className={style.price}>{el.price}</p>
                  <p className={style.title}>{el.title}</p>
                  <p className={style.description}>{el.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
