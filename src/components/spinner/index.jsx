import Logo from '../../assets/img/D.png';

const Spinner = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center pb-64 bg-black'>
      <img src={Logo} alt='Loading...' className='rounded-full shadow-lg h-42 w-42 animate-pulse' />
    </div>
  );
};

export default Spinner;
