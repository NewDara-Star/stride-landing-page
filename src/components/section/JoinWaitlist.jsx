
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function JoinWaitlist() {
    return (
        <section className="flex flex-col items-center p-16 justify-start gap-16 h-auto mx-auto ">
           <div className="flex flex-col items-center p-16 justify-start gap-6 ">
           <h1 className="text-4xl font-bold mb-4">Join the waitlist</h1>
           <p className="text-lg mb-8">Experience the power of a truly integrated fitness tool with Stride. Elevate your workouts and achieve your goals with features that work as hard as you do.</p>
           
           <div className="flex space-x-4">
            <input type="text" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-md dark:bg-zinc-50"/>
            <Link to="/join-waitlist"><Button variant="primary">Sign up</Button></Link>
           </div>
            </div>
        </section>
    )
}       

export default JoinWaitlist