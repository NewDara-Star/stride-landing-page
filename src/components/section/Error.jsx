import Button from "../ui/Button";
import { Link } from "react-router-dom";


function Hero() {
    return (
        <section className="flex flex-col items-center justify-center gap-6 p-16 mx-auto animate-slideIn 
            bg-gradient-to-br from-white via-indigo-50/50 to-white
            dark:from-gray-900 dark:via-indigo-950/30 dark:to-gray-900
            transition-colors duration-300 pt-20 w-full h-dvh">

            <img 
                        src="/images/Gemini_Generated_Image_dtkmhwdtkmhwdtkm.jpg" 
                        alt="Animated preview" 
                        className=" aspect-[4/3] w-full md:w-1/2 rounded-xl max-w-[500px] mt-8
                        h-full object-cover md:object-top object-left animate-slideIn z-[1] shadow-2xl"
            />

            <div className="flex flex-col items-center justify-center w-full ">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">404 Error</h1>
            <p className="text-lg md:text-2xl mb-8">Urhm, doesn't exist</p>
            <Link to="/"><Button variant="primary">Go Home</Button></Link>
            
            </div>

          
          
            
    
        </section>
    )
}

export default Hero