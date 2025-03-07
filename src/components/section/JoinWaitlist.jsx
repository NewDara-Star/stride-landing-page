import { Link } from "react-router-dom";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

function JoinWaitlist() {
    return (
        <section className="w-full bg-gradient-to-b from-white via-indigo-50/30 to-white
            dark:from-gray-900 dark:via-indigo-900/20 dark:to-gray-900
            transition-colors duration-300">
            <div className="flex flex-col items-center p-8 pt-28 justify-start gap-8 h-auto mx-auto max-w-7xl">
                <SectionTitle 
                    title="Join the waitlist" 
                    text="Experience the power of a truly integrated fitness tool with Stride. Elevate your workouts and achieve your goals with features that work as hard as you do."
                />
           
                <div className="flex w-full max-w-2xl gap-4">
                    <input 
                        type="text" 
                        placeholder="Enter your email" 
                        className="px-4 py-2 w-full 
                            border border-white/10 dark:border-gray-700/30 
                            rounded-md dark:bg-gray-900/50 bg-white/50 
                            backdrop-blur-sm
                            focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                            transition-all duration-300
                            placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    />
                    <Link to="/join-waitlist" className="w-1/4">
                        <Button variant="primary">Join</Button>
                    </Link>
                </div>
            </div>
            
            {/* Gradient fade out at bottom */}
            <div className="h-24 bg-gradient-to-t from-white via-white/80 to-transparent
                dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent">
            </div>
        </section>
    )
}       

export default JoinWaitlist