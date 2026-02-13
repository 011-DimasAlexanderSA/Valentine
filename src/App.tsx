import React from "react";
import {Route,Routes} from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";


export default function App(): React.ReactElement{
  return (
    <main className="flex flex-col items-center justify-center gap-10 min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(255,138,182,0.95)_0%,rgba(255,138,182,0.45)_25%,transparent_50%),radial-gradient(circle_at_bottom_right,rgba(255,138,182,0.95)_0%,rgba(255,138,182,0.45)_25%,transparent_50%),linear-gradient(135deg,#ffffff_0%,#ffffff_100%)] bg-no-repeat">
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/sec" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
      </Routes>

  </main>
  )
}