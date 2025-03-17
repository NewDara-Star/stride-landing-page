
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function JoinWaitlistSection() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-16 p-8 mx-auto animate-slideIn 
            bg-gradient-to-br from-white via-indigo-50/50 to-white
            dark:from-gray-900 dark:via-indigo-950/30 dark:to-gray-900
            transition-colors duration-300 pt-28 w-full h-auto">

         <div className="flex flex-col items-center md:items-start justify-center md:justify-start w-full md:w-1/2 ">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:text-left">Join the waitlist.</h1>
            <p className="text-lg md:text-2xl mb-8 md:text-left">Experience the power of a truly integrated fitness tool with Stride. Elevate your workouts and achieve your goals with features that work as hard as you do. Be among the first to try Stride's advanced progress tracking and social sharing features. Your fitness journey starts here!</p>
            <div className="flex w-full gap-4 mt-6">
                        <input 
                            type="text" 
                            placeholder="Enter your email" 
                            className="px-4 py-2 border border-white/10 dark:border-gray-700/30 
                                rounded-md dark:bg-gray-900/50 bg-white/50 backdrop-blur-sm
                                focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                                transition-all duration-300 w-3/4 md:w-auto"
                        />
                        <Link to="/join-waitlist" className="min-w-1/8">
                            <Button variant="primary">Join</Button>
                        </Link>
                </div>
            </div>
            

                <img 
                    src="/images/iphone 1.png" 
                    alt="" 
                    className="md:w-1/4 w-full animate-fadeIn hover:scale-105 transition-transform duration-300 
                        drop-shadow-2xl"
                />
            
            {/* Gradient fade out at bottom */}
            <div className="h-24 bg-gradient-to-t from-white via-white/80 to-transparent
                dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent">
            </div>
        </section>
    )
};

export default JoinWaitlistSection;
