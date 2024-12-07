import { useEffect, useState } from "react";
import { courses as data } from "../data/courses";
import { Link } from "react-router-dom";
import httpRequest from "../http/httpRequest";

function Home() {
  const [courses, setCourses] = useState(data);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await httpRequest.get(`/courses`);
        setCourses(data.courses);
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchCourses();
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else if (i === fullStars && halfStar) {
        stars.push(<span key={i} className="text-yellow-400">☆</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">☆</span>);
      }
    }
    return stars;
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center h-[20vh]">
        <h1 className="text-3xl border-b-8 pb-6 border-primaryOrgange text-right">
          جميع الدورات
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <div className="w-full text-center">Loading...</div>
          ) : (
            courses.map((course, index) => {
              return (
                <div key={index} className="w-full text-right bg-white rounded-lg shadow-md p-4">
                  <img
                    src="Graphic-designer1 1.png"
                    className="w-full h-auto object-cover rounded-sm"
                    alt="course"
                  />
                  <div className="w-full pt-2">
                    <h2 className="text-sm font-bold text-right">
                      {course.name}
                    </h2>
                    <div className="flex">
                      <div className="w-full flex items-center justify-end">
                        <p className="text-sm text-gray-600" dir="rtl">({course.number_of_ratings} تقييم)</p>
                        <h1 className="text-primaryOrgange font-semibold px-1">{course.rating}</h1>
                      </div>
                      <div className="flex items-center pt-1">
                        {renderStars(course.rating)}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 justify-between items-center" dir="rtl">
                      <h2 className="text-sm text-gray-700" dir="rtl">
                        <i className="fas fa-clock mr-1" style={{ color: "#918E8E" }}></i> {course.course_duration}
                      </h2>
                      <h2 className="text-sm text-gray-700" dir="rtl">
                        <i className="fas fa-book mr-1" style={{ color: "#918E8E" }}></i> {course.course_lessons} دروس
                      </h2>
                      <h2 className="bg-thirdOrgange text-secondaryOrgange text-sm px-4 py-1 rounded-md" dir="rtl">
                        {course.course_level}
                      </h2>
                    </div>
                    <div className="flex justify-around mt-4">
                      <Link to={`/detailCourse/` + course.id}>
                        <h1 className="bg-primaryOrgange text-white px-4 py-1 rounded-md text-center flex items-center">
                          تفاصيل
                        </h1>
                      </Link>
                      <div>
                        <h1 className="font-bold text-xl" dir="rtl">{course.course_discounted_price} دج</h1>
                        <h2 className="text-gray line-through" dir="rtl">{course.course_original_price} دج</h2>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
