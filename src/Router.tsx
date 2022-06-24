import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path={`/event`} element={<Event />} />
      {/*O parâmetro ":" indica que a informação que vamos receber é dinâmica */}
      <Route path={`/event/lesson/:slug`} element={<Event />} />
    </Routes>
  )
}