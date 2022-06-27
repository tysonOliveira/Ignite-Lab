import { List } from "phosphor-react";
import { Logo } from "./Logo";

interface eventProps {
  handleShowSidebar: () => void;
}

export function Header({handleShowSidebar}: eventProps) {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      
      <Logo />
      
      
      

    </header>
  )
}