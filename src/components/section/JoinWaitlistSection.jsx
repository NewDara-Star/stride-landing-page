import SectionTitle from "../ui/SectionTitle";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function JoinWaitlistSection() {
    return (
        <section className="flex flex-col-reverse items-center p-8 justify-around gap-16 md:flex-row"> 

            <div className="flex flex-col md:justify-start min-w-28w-full md:w-1/2 md:text-left md:items-start text-start">
            <SectionTitle className="md:text-left"
            title="Join the waitlist" 
            text="Experience the power of a truly integrated fitness tool with Stride. Elevate your workouts and achieve your goals with features that work as hard as you do.Be among the first to try Stride’s advanced progress tracking and social sharing features. Your fitness journey starts here!"/> 

            <div className="flex w-full gap-4 px-8">

            <input type="text" placeholder="Enter your email" className="px-4 py-2 border w-full border-gray-300 rounded-md dark:bg-zinc-800"/>

             <Link to="/join-waitlist" className="w-1/4">
                <Button variant="primary" >
                    Join
                </Button>
                </Link>
           </div>


            </div>

<img src="public/images/Context Menu - iPhone.png" alt=""  className=" w-1/2 md:w-1/4 animate-fadeIn"/>


        </section>
    )
};

export default JoinWaitlistSection;
