import { Link } from "react-router-dom";


function Footer(){

    return(
        <div className="md:h-[30vh] h-[40vh] bg-footorColor grid grid-cols-4 text-center " dir="rtl">
            <div>
                <h1 className="text-xl border-b-8 pb-6 text-white w-fit border-primaryOrgange text-right">
                عن هوسكا التعليمية
                </h1>
                <div className=" flex flex-col mt-5 gap-2">
                    <Link to="/" className="text-white text-right">عن المنصة</Link>
                    <Link to="/" className="text-white text-right">سياسة الخصوصية </Link>
                    <Link to="/" className="text-white text-right">قواعد عامة </Link>

                </div>
            </div>
            <div>
                <h1 className="text-xl border-b-8 pb-6 text-white w-fit border-primaryOrgange text-right">
                روابط                
                </h1>
                <div className=" flex flex-col mt-5 gap-2">
                    <Link to="/" className="text-white text-right">الدورات </Link>
                    <Link to="/" className="text-white text-right">المقالات </Link>

                </div>
            </div>
            <div>
                <h1 className="text-xl pb-3 text-white w-fit text-right">
                تحقق من شهادتك                
                </h1>
                <div className="flex mt-10 items-center mx-2" dir="rtl">
                    <input type="text" placeholder="" className="w-full h-10  p-2 "/>
                    <button className="w-fit h-10 bg-primaryOrgange text-white  px-3">تحقق</button>
                </div>
                <img src="/ed242e32a82b1bacde110bb6e777503b.jpeg" className="w-20 h-12 mt-3 mx-2 rounded-xl" />
            </div>
            <div>
                <h1 className="text-xl border-b-8 pb-6 text-white w-fit border-primaryOrgange text-right">
                تابعنا
                </h1>
                <div className=" grid md:grid-cols-3 grid-cols-2  mt-5 gap-2">
                    <Link to="/" className="text-white w-10 h-10 grid place-items-center rounded-md border border-white p-3 bg-socialMediaColor">
                         <i className="fab fa-facebook-f"></i>
                     </Link>
                     <Link to="/" className="text-white w-10 h-10 grid place-items-center rounded-md border border-white p-3 bg-socialMediaColor">
                     <i className="fab fa-tiktok"></i> 
                    </Link>
                    <Link to="/" className="text-white w-10 h-10 grid place-items-center rounded-md border border-white p-3 bg-socialMediaColor">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="/" className="text-white w-10 h-10 grid place-items-center rounded-md border border-white p-3 bg-socialMediaColor">
                        <i className="fab fa-telegram"></i>  
                    </Link>
                    <Link to="/" className="text-white w-10 h-10 grid place-items-center rounded-md border border-white p-3 bg-socialMediaColor">
                        <i className="fab fa-whatsapp"></i>  
                    </Link>


                </div>
            </div>

        </div>
    )
}
export default Footer;