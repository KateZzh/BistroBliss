import style from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { arrCardsMenu } from '@/storage/storageMenu';

export default function Menu() {
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
            <Link href={`/menu/${el.id}`} key={i}>
              <div className={style.card}>
                <Image className={style.img} src={el.imgForMenu} alt={el.alt}></Image>

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
