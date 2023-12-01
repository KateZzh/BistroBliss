import style from './page.module.scss';
import Image from 'next/image';
import { arrCardsMenu } from '@/storage/storageMenu';

export default function Id({ params }) {
  const { id } = params;

  const filteredCardsById = arrCardsMenu.find((el) => el.id == id);

  return (
    <>
      <div className={style.container}>
        <Image
          className={style.img}
          alt={filteredCardsById.alt}
          src={filteredCardsById.imgForCard}
        ></Image>

        <div className={style.infoWrapper}>
          <h2>{filteredCardsById.title}</h2>
          <p className={style.description}>{filteredCardsById.description}</p>

          <div className={style.priceWrapper}>
            <p>Total:</p>
            <p>{filteredCardsById.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
