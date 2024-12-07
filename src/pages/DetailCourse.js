import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import httpRequest from '../http/httpRequest';

function DetailCourse() {
    const { id } = useParams();
    const [course, setCourse] = useState(null); // Initialize as null to handle loading state
    const [openPoint,setOpenPoint]=useState(0)
    const [openDetailPoint,setOpenDetailPoint]=useState(0)


    useEffect(() => {
        // Create an asynchronous function to fetch data
        const fetchCourse = async () => {
            try {
                const data = await httpRequest.get(`/course/${id}`); // Wait for the data
                const courseData = data.course;

            // Ensure course_outputs is an array
            if (courseData.details && !Array.isArray(courseData.details.course_outputs)) {
                courseData.details.course_outputs = Object.values(courseData.details.course_outputs || {});
            }

                setCourse(data.course); // Update state with the fetched data
                
            } catch (error) {
                console.error('Error fetching course:', error); // Handle errors
            }
        };
        
        fetchCourse(); // Call the async function
    }, [id]);

    if (!course) {
        return <p>Loading...</p>; 
    }

    return (
        <div className=' mx-5 mb-20'>
           <div className='flex'>
          
            <div className='w-1/3 border-primaryOrgange border rounded-xl'>
                <img src="/detail.png" alt={course.basic_info.name} className='w-full' />
                <div className='flex justify-between px-6 mt-3' >
                    <div className='flex items-center justify-between w-3/5'>
                        <h1 className='text-center flex' dir='rtl'>20% تخفيض</h1>
                        <img src="/Hot Price.png" className='w-10 h-10'/>
                    </div>
                    <div>
                            <h1 className="font-bold text-xl" dir="rtl">{course.basic_info.course_discounted_price} دج</h1>
                            <h2 className="text-gray line-through" dir="rtl">{course.basic_info.course_original_price} دج</h2>
                    </div>
                </div>
                <h1 className='w-full text-center text-gray py-4'>صلاحية الوصول: وصول دائم للدورة</h1>
                <div className='w-full flex justify-center py-5' >
                <Link to={`/`} className='w-full flex justify-center'>
                        <h1
                            className="bg-primaryOrgange text-white px-4 py-1 rounded-md text-center flex   w-[80%] items-center justify-center "
                        >
                            تفاصيل
                        </h1>
                    </Link>
                </div>
            </div>
            <div dir='rtl' className='w-2/3 px-10 flex flex-col text-right'>
                <h1 dir='rtl' className='text-3xl my-3'>{course.basic_info.name}</h1>
                <p className='text-gray2'>{course.basic_info.description}</p>
                <div className='grid grid-cols-2 gap-y-8 mt-12 font-semibold'>
                   <div className='flex items-center gap-2'> 
                    <img src='/Target.png'/>
                        <h1>الفئة المستهدفة: {course.details.specifications.course_level}</h1>
                    </div>
                    <div className='flex items-center gap-2'> 
                    <img src='/Google Translate.png'/>
                         <h1>اللغة {course.details.specifications.course_language} </h1>
                    </div>
                    <div className='flex items-center gap-2'> 
                    <img src='/Study.png'/>
                    <h1>نمط الدورة: {course.details.specifications.course_type}</h1>
                    </div>
                    <div className='flex items-center gap-2'> 
                        <img src='/Time.png'/>
                        <h1> {course.details.specifications.course_duration} </h1>
                        </div>
                    <div className='flex items-center gap-2'> 
                        <img src='/Certificate.png'/>
                        <h1> {course.details.specifications.course_certificate}  </h1>
                        </div>
                    <div className='flex items-center gap-2'> 
                        <img src='/School Backpack.png'/>
                        <h1>بداية الدورة: {course.details.specifications.course_begin} </h1>
                        </div>
                </div>
            </div>
           </div>
           <div className='w-full mt-10'>
            <h1 className='flex justify-center text-3xl'>
            ماذا ستتعلم في نهاية هذه الدورة؟
            </h1>
            <div className='grid grid-cols-2 mt-10 gap-y-10' dir='rtl'>
                {
                   course.details.course_outputs.map((output, index) => {
                        return (
                            <div key={index}>
                                <div className='flex gap-2' dir='rtl'>
                                    <img src='/Instagram Check Mark.png'/>
                                    <h1 className='text-xl'>  {output.title}</h1>
                                </div>
                                <p className='text-gray2 pr-10'>{output.description}</p>
                           </div>
                        );

                    }
                )
                }
             
               
            </div>
           </div>
           <div className='mt-10'>
            <h1 className='flex text-center justify-center text-3xl my-3'>مسارات الدورة</h1>
            <div className='grid gap-y-2'>
                <div className='flex flex-col gap-y-2 mx-10'>
                    <div className='w-full flex justify-between' dir='rtl'>
                        <div className='flex' dir='rtl'>
                            <img src='/Back.png' className={`${openPoint==1?"hidden":"flex"} cursor-pointer`} onClick={()=>setOpenPoint(1)} />
                            <img src='/Back2.png' className={`${openPoint!==1?"hidden":""} cursor-pointer rotate-180`} onClick={()=>setOpenPoint(0)} />

                            <h1>مقدمة في عالم التصميم الجرافيكي</h1>
                        </div>
                        <div className='flex gap-3'>
                        <h1 className="bg-primaryOrgange text-white  px-4 py-1 rounded-md text-center flex    items-center justify-center " >
                        6 درس
                        </h1> 
                        <h1 className="bg-forthOrgange text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                        7 ساعات ونصف
                        </h1> 
                        
                        </div>
                    </div>
                    <div className={` gap-y-2 ${openPoint==1?"grid":"hidden"}`}>
                        <div className='mr-5'>
                            <div className='w-full flex justify-between' dir='rtl'>
                                <div className='flex' dir='rtl'>
                                <img src='/Back.png' className={`${openDetailPoint==1?"hidden":"flex"} cursor-pointer`} onClick={()=>setOpenDetailPoint(1)} />
                                <img src='/Back2.png' className={`${openDetailPoint!==1?"hidden":""} cursor-pointer rotate-180`} onClick={()=>setOpenDetailPoint(0)} />                                <h1>ما هو التصميم الجرافيكي؟</h1>
                                </div>
                                <div className='flex gap-3'>
                                <h1 className="bg-primaryOrgange text-white  px-4 py-1 rounded-md text-center flex    items-center justify-center " >
                                6 درس
                                </h1> 
                                <h1 className="bg-forthOrgange text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                7 ساعات ونصف
                                </h1> 
                                
                                </div>
                            </div>
                            <div className={`mr-8  gap-y-3 mt-3  ${openDetailPoint==1?"grid":"hidden"}`}>
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 text-primaryOrgange underline' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                            </div>
                        </div>
                        <div className='mr-5'>
                            <div className='w-full flex justify-between' dir='rtl'>
                                <div className='flex' dir='rtl'>
                                <img src='/Back.png' className={`${openDetailPoint==2?"hidden":"flex"} cursor-pointer`} onClick={()=>setOpenDetailPoint(2)} />
                                <img src='/Back2.png' className={`${openDetailPoint!==2?"hidden":""} cursor-pointer rotate-180`} onClick={()=>setOpenDetailPoint(0)} />                                <h1>ما هو التصميم الجرافيكي؟</h1>
                                </div>
                                <div className='flex gap-3'>
                                <h1 className="bg-primaryOrgange text-white  px-4 py-1 rounded-md text-center flex    items-center justify-center " >
                                6 درس
                                </h1> 
                                <h1 className="bg-forthOrgange text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                7 ساعات ونصف
                                </h1> 
                                
                                </div>
                            </div>
                            <div className={`mr-8  gap-y-3 mt-3  ${openDetailPoint==2?"grid":"hidden"}`}>
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 text-primaryOrgange underline' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                            </div>
                        </div>
                        <div className='mr-5'>
                            <div className='w-full flex justify-between' dir='rtl'>
                                <div className='flex' dir='rtl'>
                                <img src='/Back.png' className={`${openDetailPoint==3?"hidden":"flex"} cursor-pointer`} onClick={()=>setOpenDetailPoint(3)} />
                                <img src='/Back2.png' className={`${openDetailPoint!==3?"hidden":""} cursor-pointer rotate-180`} onClick={()=>setOpenDetailPoint(0)} />                                <h1>ما هو التصميم الجرافيكي؟</h1>
                                </div>
                                <div className='flex gap-3'>
                                <h1 className="bg-primaryOrgange text-white  px-4 py-1 rounded-md text-center flex    items-center justify-center " >
                                6 درس
                                </h1> 
                                <h1 className="bg-forthOrgange text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                7 ساعات ونصف
                                </h1> 
                                
                                </div>
                            </div>
                            <div className={`mr-8  gap-y-3 mt-3  ${openDetailPoint==3?"grid":"hidden"}`}>
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 text-primaryOrgange underline' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className='flex flex-col gap-y-2 mx-10'>
                    <div className='w-full flex justify-between' dir='rtl'>
                        <div className='flex' dir='rtl'>
                            <img src='/Back.png' className={`${openPoint==2?"hidden":"flex"} cursor-pointer`} onClick={()=>setOpenPoint(2)} />
                            <img src='/Back2.png' className={`${openPoint!==2?"hidden":""} cursor-pointer rotate-180`} onClick={()=>setOpenPoint(0)} />

                            <h1>مقدمة في عالم التصميم الجرافيكي</h1>
                        </div>
                        <div className='flex gap-3'>
                        <h1 className="bg-primaryOrgange text-white  px-4 py-1 rounded-md text-center flex    items-center justify-center " >
                        6 درس
                        </h1> 
                        <h1 className="bg-forthOrgange text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                        7 ساعات ونصف
                        </h1> 
                        
                        </div>
                    </div>
                    <div className={` gap-y-2 ${openPoint==2?"grid":"hidden"}`}>
                        <div className='mr-5'>
                            <div className='w-full flex justify-between' dir='rtl'>
                                <div className='flex' dir='rtl'>
                                <img src='/Back.png' className={`${openDetailPoint==1?"hidden":"flex"} cursor-pointer`} onClick={()=>setOpenDetailPoint(1)} />
                                <img src='/Back2.png' className={`${openDetailPoint!==1?"hidden":""} cursor-pointer rotate-180`} onClick={()=>setOpenDetailPoint(0)} />                                <h1>ما هو التصميم الجرافيكي؟</h1>
                                </div>
                                <div className='flex gap-3'>
                                <h1 className="bg-primaryOrgange text-white  px-4 py-1 rounded-md text-center flex    items-center justify-center " >
                                6 درس
                                </h1> 
                                <h1 className="bg-forthOrgange text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                7 ساعات ونصف
                                </h1> 
                                
                                </div>
                            </div>
                            <div className={`mr-8  gap-y-3 mt-3  ${openDetailPoint==1?"grid":"hidden"}`}>
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 text-primaryOrgange underline' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                            </div>
                        </div>
                        <div className='mr-5'>
                            <div className='w-full flex justify-between' dir='rtl'>
                                <div className='flex' dir='rtl'>
                                <img src='/Back.png' className={`${openDetailPoint==2?"hidden":"flex"} cursor-pointer`} onClick={()=>setOpenDetailPoint(2)} />
                                <img src='/Back2.png' className={`${openDetailPoint!==2?"hidden":""} cursor-pointer rotate-180`} onClick={()=>setOpenDetailPoint(0)} />                                <h1>ما هو التصميم الجرافيكي؟</h1>
                                </div>
                                <div className='flex gap-3'>
                                <h1 className="bg-primaryOrgange text-white  px-4 py-1 rounded-md text-center flex    items-center justify-center " >
                                6 درس
                                </h1> 
                                <h1 className="bg-forthOrgange text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                7 ساعات ونصف
                                </h1> 
                                
                                </div>
                            </div>
                            <div className={`mr-8  gap-y-3 mt-3  ${openDetailPoint==2?"grid":"hidden"}`}>
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 text-primaryOrgange underline' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                            </div>
                        </div>
                        <div className='mr-5'>
                            <div className='w-full flex justify-between' dir='rtl'>
                                <div className='flex' dir='rtl'>
                                <img src='/Back.png' className={`${openDetailPoint==3?"hidden":"flex"} cursor-pointer`} onClick={()=>setOpenDetailPoint(3)} />
                                <img src='/Back2.png' className={`${openDetailPoint!==3?"hidden":""} cursor-pointer rotate-180`} onClick={()=>setOpenDetailPoint(0)} />                                <h1>ما هو التصميم الجرافيكي؟</h1>
                                </div>
                                <div className='flex gap-3'>
                                <h1 className="bg-primaryOrgange text-white  px-4 py-1 rounded-md text-center flex    items-center justify-center " >
                                6 درس
                                </h1> 
                                <h1 className="bg-forthOrgange text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                7 ساعات ونصف
                                </h1> 
                                
                                </div>
                            </div>
                            <div className={`mr-8  gap-y-3 mt-3  ${openDetailPoint==3?"grid":"hidden"}`}>
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 text-primaryOrgange underline' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className='flex flex-col gap-y-2 mx-10'>
                    <div className='w-full flex justify-between' dir='rtl'>
                        <div className='flex' dir='rtl'>
                            <img src='/Back.png' className={`${openPoint==3?"hidden":"flex"} cursor-pointer`} onClick={()=>setOpenPoint(3)} />
                            <img src='/Back2.png' className={`${openPoint!==3?"hidden":""} cursor-pointer rotate-180`} onClick={()=>setOpenPoint(0)} />

                            <h1>مقدمة في عالم التصميم الجرافيكي</h1>
                        </div>
                        <div className='flex gap-3'>
                        <h1 className="bg-primaryOrgange text-white  px-4 py-1 rounded-md text-center flex    items-center justify-center " >
                        6 درس
                        </h1> 
                        <h1 className="bg-forthOrgange text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                        7 ساعات ونصف
                        </h1> 
                        
                        </div>
                    </div>
                    <div className={` gap-y-2 ${openPoint==3?"grid":"hidden"}`}>
                        <div className='mr-5'>
                            <div className='w-full flex justify-between' dir='rtl'>
                                <div className='flex' dir='rtl'>
                                <img src='/Back.png' className={`${openDetailPoint==1?"hidden":"flex"} cursor-pointer`} onClick={()=>setOpenDetailPoint(1)} />
                                <img src='/Back2.png' className={`${openDetailPoint!==1?"hidden":""} cursor-pointer rotate-180`} onClick={()=>setOpenDetailPoint(0)} />                                <h1>ما هو التصميم الجرافيكي؟</h1>
                                </div>
                                <div className='flex gap-3'>
                                <h1 className="bg-primaryOrgange text-white  px-4 py-1 rounded-md text-center flex    items-center justify-center " >
                                6 درس
                                </h1> 
                                <h1 className="bg-forthOrgange text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                7 ساعات ونصف
                                </h1> 
                                
                                </div>
                            </div>
                            <div className={`mr-8  gap-y-3 mt-3  ${openDetailPoint==1?"grid":"hidden"}`}>
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 text-primaryOrgange underline' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                            </div>
                        </div>
                        <div className='mr-5'>
                            <div className='w-full flex justify-between' dir='rtl'>
                                <div className='flex' dir='rtl'>
                                <img src='/Back.png' className={`${openDetailPoint==2?"hidden":"flex"} cursor-pointer`} onClick={()=>setOpenDetailPoint(2)} />
                                <img src='/Back2.png' className={`${openDetailPoint!==2?"hidden":""} cursor-pointer rotate-180`} onClick={()=>setOpenDetailPoint(0)} />                                <h1>ما هو التصميم الجرافيكي؟</h1>
                                </div>
                                <div className='flex gap-3'>
                                <h1 className="bg-primaryOrgange text-white  px-4 py-1 rounded-md text-center flex    items-center justify-center " >
                                6 درس
                                </h1> 
                                <h1 className="bg-forthOrgange text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                7 ساعات ونصف
                                </h1> 
                                
                                </div>
                            </div>
                            <div className={`mr-8  gap-y-3 mt-3  ${openDetailPoint==2?"grid":"hidden"}`}>
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 text-primaryOrgange underline' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                            </div>
                        </div>
                        <div className='mr-5'>
                            <div className='w-full flex justify-between' dir='rtl'>
                                <div className='flex' dir='rtl'>
                                <img src='/Back.png' className={`${openDetailPoint==3?"hidden":"flex"} cursor-pointer`} onClick={()=>setOpenDetailPoint(3)} />
                                <img src='/Back2.png' className={`${openDetailPoint!==3?"hidden":""} cursor-pointer rotate-180`} onClick={()=>setOpenDetailPoint(0)} />                                <h1>ما هو التصميم الجرافيكي؟</h1>
                                </div>
                                <div className='flex gap-3'>
                                <h1 className="bg-primaryOrgange text-white  px-4 py-1 rounded-md text-center flex    items-center justify-center " >
                                6 درس
                                </h1> 
                                <h1 className="bg-forthOrgange text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                7 ساعات ونصف
                                </h1> 
                                
                                </div>
                            </div>
                            <div className={`mr-8  gap-y-3 mt-3  ${openDetailPoint==3?"grid":"hidden"}`}>
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 text-primaryOrgange underline' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                                    <div className='w-full flex justify-between' dir='rtl'>
                                        <div className='flex gap-x-2 ' dir='rtl'>
                                            <h1>1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية </h1>
                                        </div>
                                        
                                        <h1 className="bg-gray text-white px-4 py-1 rounded-md text-center flex   items-center justify-center " >
                                        3:56
                                        </h1> 
                                        
                                    </div>   
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
}

export default DetailCourse;
