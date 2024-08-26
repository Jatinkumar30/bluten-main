import Image from "next/image";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Header2 from "./components/Header/Header2";

export default function Home() {
  return (
    <div className="container m-auto">
      <NavBar />
      <Header2 />
      <Header />

      <div className=" flex gap-12">
        <SideBar />
        <Products />
      </div>
      <Footer />
    </div>
  );
}
