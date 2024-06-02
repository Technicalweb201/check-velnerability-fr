import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
import Scanoptions from "./components/scanContent/ScanOptions"

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Scanoptions/>
   </div>
  );
}
