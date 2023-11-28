'use client';

import style from './page.module.scss';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { arrCardsMenu } from '@/storage/storageMenu';
import { useState, useEffect } from 'react';

export default function Id() {
  const [card, setCard] = useState({});
  const { id } = useParams();

  const filteredCards = () => {
    const findCard = arrCardsMenu.find((el) => el.id == id);
    setCard(findCard);
  };

  useEffect(() => {
    filteredCards();
  }, []);

  console.log(card);

  return (
    <>
      <div className={style.container}>
        <Image className={style.img} alt={card.alt} src={card.img}></Image>

        <div className={style.infoWrapper}>
          <h2>{card.title}</h2>
          <p className={style.description}>{card.description}</p>
          <p className={style.price}>{card.price}</p>
        </div>
      </div>
    </>
  );
}
