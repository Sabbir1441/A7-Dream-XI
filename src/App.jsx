import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import { toast } from "react-toastify";


function App() {
  const [coin, setCoin] = useState(0);

  const handleCoinAdd = () => {
    setCoin(coin + 50000);
    toast.success("Successfully Claimed Free Coin!");
  }

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Hero handleCoinAdd={handleCoinAdd}></Hero>
      <MainSection coin={coin} setCoin={setCoin}></MainSection>
      <div className="relative">
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;