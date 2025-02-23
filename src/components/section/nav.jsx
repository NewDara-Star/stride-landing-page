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
        <section className="flex justify-between items-center w-full h[64px] px-6">

            <img src="/Stride.svg" alt="logo" className="w-1/6 h-full"/>
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
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
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