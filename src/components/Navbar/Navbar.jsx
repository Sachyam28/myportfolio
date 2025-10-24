import React,{useEffect} from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const[activeSection, setActiveSection] = React.useState("");
  const [isScrolled, setIsScrolled] = React.useState(false);

//change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  })

//scroll to section
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[10vw] 
    ${isScrolled ? 'bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="text-white py-5 flex justify-between items-center">
        {/*  LOGO  */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Sachyam&lt;</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Shakya</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/*  DESKTOP ITEMS  */}
        <ul className="hidden md:flex space-x-8 text-gray-300 ">
          {menuItems.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
              <button onClick={() => handleMenuItemClick(item.id)} >{item.label}</button>
            </li>
          ))}
        </ul>

        {/* SOCIAL ICONS */}
      <div className="hidden md:flex space-x-4">
        <a href="https://github.com/Sachyam28"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#8245ec]">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sachyam-shakya/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#8245ec]">
            <FaLinkedin size={20} />
          </a>


      </div>
      </div>
    </nav>
  );
};

export default Navbar;
