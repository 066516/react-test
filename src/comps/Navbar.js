import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex flex-row-reverse justify-around h-[10vh] items-center">
      <img
        src="FB-PHOTO_1 2.png"
        className="h-10 w-10 rounded-full"
        alt=''
      />
      <Link to="/" className="text-xl">الرئيسية</Link>
      <Link to="/courses" className="text-xl">الدورات</Link>
      <Link to="/articles" className="text-xl">المقالات</Link>
      <div className="flex flex-row-reverse justify-between gap-10">
        <Link
          to="/login"
          className="bg-primaryOrgange text-white px-4 py-1 rounded-md"
        >
          دخول
        </Link>
        <Link
          to="/register"
          className="bg-thirdOrgange text-secondaryOrgange px-4 py-1 rounded-md"
        >
          تسجيل
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
