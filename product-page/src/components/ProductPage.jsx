import productImg from '../assets/image-product-1.jpg';
import { useState } from 'react';

export default function ProductPage() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className='mt-12 w-[90%] mx-auto grid grid-cols-2 gap-20'>
      <div>
        <div>
          <img className='rounded-xl' src={productImg} alt='Product-img' />
        </div>
        <div></div>
      </div>
      <div>
        <div className='capitalize'>sneaker company</div>
        <div>Fall Limited Edition Sneaker</div>
        <div>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </div>
        <div>
          $125.00 <span>50%</span>
        </div>
        <div className='strikethrough'>$250.00</div>

        <div className='flex'>
          <div className='flex'>
            <button
              className='cursor-pointer'
              onClick={() => {
                setQuantity(quantity + 1);
              }}>
              +
            </button>
            <div>{quantity}</div>
            <button>-</button>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
