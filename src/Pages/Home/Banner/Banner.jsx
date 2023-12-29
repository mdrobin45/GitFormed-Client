import { Link } from "react-router-dom";
import bgImage from "../../../assets/images/banner.jpg";

const Banner = () => {
   return (
      <div
         className="text-center h-[100vh] flex flex-col items-center justify-center"
         style={{
            background: `linear-gradient(rgba(45,55,60,0.7) 100%,rgba(45,55,60,0.7) 100%), url(${bgImage})`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
         }}>
         <h2 className="text-4xl px-2 md:text-6xl leading-tight font-bold text-white lg:w-2/4">
            GitFormed Repository Management
         </h2>
         <div className="mt-10">
            <Link
               to="/login"
               className="bg-secondary px-10 mt-6 py-4 hover:bg-secondary text-white rounded">
               Let’s Explore
            </Link>
         </div>
      </div>
   );
};

export default Banner;
