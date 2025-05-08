import logo from '../assets/logo.svg';
import cartLogo from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';

export function Navigation() {
  const navItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  return (
    <nav className='flex justify-between items-center border-b-1 border-b-gray px-4 md:px-0 py-4 md:py-0'>
      <div className='flex gap-12 items-center'>
        <div>
          <img src={logo} alt='Logo' />
        </div>
        <div className='md:flex justify-center lg:gap-4 md:gap-3 hidden'>
          {navItems.map((item, itemIndex) => {
            return (
              <div
                key={itemIndex}
                className='py-10 cursor-pointer hover:border-b-4 hover:border-b-orange'>
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex lg:gap-8 md:gap-4 gap-6 items-center'>
        <div>
          <img src={cartLogo} alt='CartLogo' />
        </div>
        <div className='max-h-12 max-w-12'>
          <img src={avatar} alt='CartLogo' />
        </div>
      </div>
    </nav>
  );
}
