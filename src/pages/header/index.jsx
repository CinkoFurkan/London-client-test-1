import { useLocation } from 'react-router-dom';
import Card from './card';
import Logos from './logo';
import Navbar from './navbar';
import useFetch from '../../hooks/custom';
import Links from './navbar/links';

const Header = ({ checker }) => {
  const { data  } = useFetch(`${process.env.REACT_APP_API_URL}/api/categories`);
  const location = useLocation();

  const categories = data ? data.slice(0, 9) : [];

  return (
    <header className='flex w-full items-center justify-between px-4 lg:w-[1200px] mx-auto pt-2'>
      <div className='flex-shrink-0 hidden md:block'>
        <Logos />
      </div>
      {location.pathname === '/' ? (
        <Navbar />
      ) : (
        <Links categories={categories} />
      )}
      <Card checker={checker}  />
    </header>
  );
};

export default Header;