// import { useState } from "react";
import Header from "./Components/Header";
import CoffeeCard from "./Components/CoffeeCard";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="h-screen bg-stone-100">
        <Header />
        <CoffeeCard />
      </div>
    </>
  );
}
