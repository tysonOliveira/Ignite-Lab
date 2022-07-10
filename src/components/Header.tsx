import { List } from "phosphor-react";
import { Logo } from "./Logo";
import { motion } from "framer-motion";

interface eventProps {
  handleShowSidebar: () => void;
}

export function Header({handleShowSidebar}: eventProps) {

  
  return (
  
    
    
    
    /*w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 */
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
      
      <div className="absolute right-[20px]" onClick={() => handleShowSidebar() }>
        <List size={32}  />
      </div>
    </header>
    
  )
}