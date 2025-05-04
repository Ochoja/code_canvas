import logo from '../assets/logo.svg';
import cartLogo from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';

export function Navigation() {
  const navItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  return (
    <nav className='flex justify-between items-center border-b-1 border-b-gray'>
      <div className='flex gap-12 items-center'>
        <div>
          <img src={logo} alt='Logo' />
        </div>
        <div className='flex justify-center gap-4'>
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
      <div className='flex gap-8 items-center'>
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
