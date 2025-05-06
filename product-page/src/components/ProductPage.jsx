import productImg1 from '../assets/image-product-1.jpg';
import productImg2 from '../assets/image-product-2.jpg';
import productImg3 from '../assets/image-product-3.jpg';
import productImg4 from '../assets/image-product-4.jpg';
import carIcon from '../assets/icon-cart.svg';
import thumbnail1 from '../assets/image-product-1-thumbnail.jpg';
import thumbnail2 from '../assets/image-product-2-thumbnail.jpg';
import thumbnail3 from '../assets/image-product-3-thumbnail.jpg';
import thumbnail4 from '../assets/image-product-4-thumbnail.jpg';

import { useState } from 'react';

export default function ProductPage() {
  const buttonStyle =
    'bg-light-gray px-4 cursor-pointer font-bold text-orange text-2xl h-full';
  const [quantity, setQuantity] = useState(0);
  const imgs = [
    {
      id: 1,
      thumbnail: thumbnail1,
      img: productImg1,
    },
    {
      id: 2,
      thumbnail: thumbnail2,
      img: productImg2,
    },
    {
      id: 3,
      thumbnail: thumbnail3,
      img: productImg3,
    },
    {
      id: 4,
      thumbnail: thumbnail4,
      img: productImg4,
    },
  ];

  const [img, setImg] = useState(imgs[0].img);

  const handleQuantity = (operation) => {
    if (operation === 'add') {
      setQuantity(quantity + 1);
    } else if (operation === 'minus') {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    }
  };

  return (
    <div className='mt-12 w-[90%] mx-auto grid grid-cols-2 gap-28'>
      <div>
        <div>
          <img className='rounded-xl' src={img} alt='Product-image' />
        </div>
        <div className='flex gap-10 mt-6'>
          {imgs.map((img, imgId) => {
            return (
              <div key={imgId}>
                <img
                  className='rounded-xl'
                  src={img.thumbnail}
                  alt={thumbnail1 + `${imgId}`}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex flex-col justify-center'>
        <div className='uppercase text-xs tracking-widest font-semibold mb-4'>
          sneaker company
        </div>
        <h1 className='text-black font-bold text-5xl mb-8'>
          Fall Limited Edition Sneaker
        </h1>
        <div>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </div>

        <div className='mt-4 mb-2 flex gap-2 items-center'>
          <div className='text-black text-2xl font-bold justify-center'>
            $125.00
          </div>
          <div className='h-[70%] bg-black text-white text-xs px-2 rounded-sm font-medium flex justify-center items-center'>
            50%
          </div>
        </div>
        <div className='line-through font-bold text-sm'>$250.00</div>

        <div className='flex gap-4 mt-8 h-14'>
          <div className='flex items-center'>
            <button
              className={buttonStyle + ' rounded-tl-xl rounded-bl-xl'}
              onClick={() => {
                handleQuantity('minus');
              }}>
              -
            </button>
            <div className='font-bold text-black bg-light-gray px-4 h-full flex items-center'>
              {quantity}
            </div>
            <button
              className={buttonStyle + ' rounded-tr-xl rounded-br-xl'}
              onClick={() => {
                handleQuantity('add');
                console.log('add');
              }}>
              +
            </button>
          </div>
          <button className='bg-orange text-black font-semibold flex justify-center items-center rounded-xl px-16 gap-4'>
            <img className='text-black h-4' src={carIcon} alt='Cart Icon' />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
