import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{slug: string}>()
  
  const [sidebar, setSidebar] = useState(true);

  function handleShowSidebar() {
    setSidebar(!sidebar);
    console.log(sidebar);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header handleShowSidebar={handleShowSidebar} />
        
      <main className="flex flex-1">
        { slug ? <Video lessonSlug={slug} /> : <div className="flex-1" /> }

      
        { sidebar &&  <Sidebar />}
      </main>
    </div>
  )
}
