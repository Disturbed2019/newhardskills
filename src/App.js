import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  const [visible, setVisible] = useState(false)

  const scrollToTop = () => {
    if (window.scrollY >= 700) {
      setVisible(true)
    } else if (window.scrollY < 700) {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollToTop)
  })
  return (
    <>
      <Navbar/>
      <main>
        <AppRoutes/>
      </main>

      <Footer/>
      {visible ? <ScrollToTop/> : null}
    </>
  );
}

export default App;
