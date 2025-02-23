
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function JoinWaitlist() {
    return (
        <section className="flex flex-col items-center p-16 justify-start gap-16 h-auto ">
           <div className="flex flex-col items-center p-16 justify-start gap-6 ">
           <h1 className="text-4xl font-bold mb-4">How It Works</h1>
           <p className="text-lg mb-8">Stride is designed to simplify your fitness journey. Whether you’re new to working out or a seasoned athlete, we’ve made it easy to plan, track, and visualize your progress—all in one place.</p>
           
           <div className="flex space-x-4">
            <input type="text" placeholder="Enter your email" />
            <Link to="/join-waitlist"><Button variant="primary">Sign up</Button></Link>
           </div>
            </div>
        </section>
    )
}       

export default JoinWaitlist;