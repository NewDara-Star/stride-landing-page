import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <section className="flex justify-between items-center w-full h-[64px] px-6 mx-auto">

            <Link to="/" className=" w-1/4 md:w-1/12 items-center">
            <img src="/images/Stride.svg" alt="logo" className="  dark:invert"/>
            </Link>
            {/* Desktop Menu */}    
            <div className="hidden md:flex items-center space-x-8 ">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/join-waitlist"><Button variant="primary">Join Waitlist</Button></Link>
            </div>
         
          {/* Mobile Menu */}
        <button onClick={toggleMobileMenu} className="md:hidden">
            <MenuIcon className="w-6 h-6" />
        </button>

        {isMobileMenuOpen && (
                <div className="md:hidden absolute top-32 left-16 right-16 bg-white shadow-lg z-50 rounded-lg">
                    <div className="flex flex-col space-y-4 px-8 py-4">
                        <Link to="/contact" className="hover:text-indigo-600">Contact Us</Link>
                        <Link to="/pricing" className="hover:text-indigo-600">Pricing</Link>
                        <Link to="/blog" className="hover:text-indigo-600">Blog</Link>
                        <Link to="/join-waitlist"><Button variant="primary">Join Waitlist</Button></Link>
                    </div>
                </div>
            )}
        
        
        
        
        
        
        
        
        
        </section>
                
    )
}


export default Nav;