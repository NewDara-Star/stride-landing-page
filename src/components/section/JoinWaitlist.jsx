
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function JoinWaitlist() {
    return (
        <section className="flex flex-col items-center p-8 justify-start gap-8 h-auto mx-auto ">
           
           <h1 className="text-4xl font-bold mb-4">Join the waitlist</h1>
           <p className="text-lg mb-8">Experience the power of a truly integrated fitness tool with Stride. Elevate your workouts and achieve your goals with features that work as hard as you do.</p>
           
           <div className="flex w-full gap-4">
            <input type="text" placeholder="Enter your email" className="px-4 py-2 border w-full border-gray-300 rounded-md dark:bg-zinc-50"/>
             <Link to="/join-waitlist" className="w-1/4">
                            <Button variant="primary" >
                                Join
                            </Button>
                            </Link>
           </div>
            
        </section>
    )
}       

export default JoinWaitlist