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
        <section className="fixed top-0 left-0 right-0 z-50">
            <div className="backdrop-blur-md bg-white/70 dark:bg-gray-950/70 shadow-lg rounded-2xl mx-4 mt-4">
                <div className="flex justify-between items-center w-full h-[64px] px-6 mx-auto">
                    <Link to="/" className="w-1/4 md:w-1/12 items-center">
                        <img src="/images/Stride.svg" alt="logo" className="dark:invert"/>
                    </Link>
                    {/* Desktop Menu */}    
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
                        <Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact Us</Link>
                        <Link to="/pricing" className="hover:text-indigo-600 transition-colors">Pricing</Link>
                        <Link to="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
                        <Link to="/join-waitlist"><Button variant="primary">Join Waitlist</Button></Link>
                    </div>
             
                    {/* Mobile Menu Button */}
                    <button onClick={toggleMobileMenu} className="md:hidden">
                        <MenuIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute mt-2 left-4 right-4 backdrop-blur-md bg-white/70 dark:bg-gray-950/70 shadow-lg rounded-xl">
                    <div className="flex flex-col space-y-4 px-8 py-4">
                        <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
                        <Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact Us</Link>
                        <Link to="/pricing" className="hover:text-indigo-600 transition-colors">Pricing</Link>
                        <Link to="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
                        <Link to="/join-waitlist"><Button variant="primary">Join Waitlist</Button></Link>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Nav;