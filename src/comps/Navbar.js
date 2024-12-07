import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const 
  location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? 'bg-primaryOrgange text-white px-4 py-1 rounded-md' : 'text-xl';
    console.log(location.pathname);
    
  };

  return (
    <div className="flex flex-row-reverse justify-around h-[10vh] items-center">
      <img
        src="/FB-PHOTO_1 2.png"
        className="h-10 w-10 rounded-full"
        alt=''
      />
      <Link to="/" className={getLinkClass('/')}>الرئيسية</Link>
      <Link to="/courses" className={getLinkClass('/courses')}>الدورات</Link>
      <Link to="/articles" className={getLinkClass('/articles')}>المقالات</Link>
      <div className="flex flex-row-reverse justify-between gap-10">
        <Link
          to="/login"
          className={location.pathname === '/login' ? 'bg-primaryOrgange text-white px-4 py-1 rounded-md' : 'bg-primaryOrgange text-white px-4 py-1 rounded-md'}
        >
          دخول
        </Link>
        <Link
          to="/register"
          className={location.pathname === '/register' ? 'bg-primaryOrgange text-white px-4 py-1 rounded-md' : 'bg-thirdOrgange text-secondaryOrgange px-4 py-1 rounded-md'}
        >
          تسجيل
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
