import Button from "../ui/Button";
import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";

function ContactUs() {
    return (
        <section className="flex flex-col items-center justify-center gap-8 p-8 h-auto mx-auto ">
            <SectionTitle title="Contact Us" text="Ask us questions or suggest features that you will like us to add"/>
          
           
           <div className="flex flex-col items-start justify-start min-w-28 w-full gap-4">
           
                <div className=" flex flex-col md:flex-row  gap-6 w-full justify-between">

                    <label htmlFor="Name" className="flex flex-col items-start  w-full gap-4">
                        Name
                        <input type="text" placeholder="Enter your name" className="px-4 py-2 border  rounded-md w-full"/>
                    </label>
                    
                    <label htmlFor="Email" className="flex flex-col items-start  w-full gap-4">
                        Email
                        <input type="text" placeholder="Enter your email" className="px-4 py-2 border w-full rounded-md "/>
                    </label>
                </div>

                <label htmlFor="Message" className="flex flex-col items-start justify-start w-full gap-4">
                    Message
                <textarea 
                    placeholder="Enter your message" 
                    className="px-4 py-2 border  rounded-md  w-full h-32 resize-none">
                </textarea>

                </label>
               






                
           </div>
           <Link to="/join-waitlist" className="w-full">
                <Button variant="primary" >
                    Send
                </Button>
                </Link>
            
        </section>
    )
}

export default ContactUs