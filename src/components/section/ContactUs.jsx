import Button from "../ui/Button";
import { Link } from "react-router-dom";

function ContactUs() {
    return (
        <section className="flex flex-col items-center p-8 justify-start gap-16 h-auto mx-auto ">
           <div className="flex flex-col items-center p-8 justify-start gap-6 ">       
           <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
           <p className="text-lg mb-8">Ask us questions or suggest features that you will like us to add</p>
           
           <div className="flex flex-col items-start justify-start min-w-28 w-full gap-4">
           
                <div className=" flex flex-col md:flex-row  gap-6 w-full justify-between">

                    <label htmlFor="Name" className="flex flex-col items-start  w-full gap-4">
                        Name
                        <input type="text" placeholder="Enter your name" className="px-4 py-2 border border-gray-300 rounded-md w-full dark:bg-zinc-50"/>
                    </label>
                    
                    <label htmlFor="Email" className="flex flex-col items-start  w-full gap-4">
                        Email
                        <input type="text" placeholder="Enter your email" className="px-4 py-2 border w-full border-gray-300 rounded-md dark:bg-zinc-50"/>
                    </label>
                </div>

                <label htmlFor="Message" className="flex flex-col items-start justify-start w-full gap-4">
                    Message
                <textarea 
                    placeholder="Enter your message" 
                    className="px-4 py-2 border border-gray-300 rounded-md dark:bg-zinc-50 w-full h-32 resize-none">
                </textarea>

                </label>
               






                <Link to="/join-waitlist" className="w-full">
                <Button variant="primary" >
                    Send
                </Button>
                </Link>
           </div>
            </div>
        </section>
    )
}

export default ContactUs