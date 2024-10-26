import About from "@/components/mainCompos/About";
import Counter from "@/components/mainCompos/Counter";
import Enquiry from "@/components/mainCompos/Enquiry";
import Header from "@/components/mainCompos/Header";
import Products from "@/components/mainCompos/Products";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Counter />
      <About />
      <Products />
      <Enquiry />
    </div>
  );
}
