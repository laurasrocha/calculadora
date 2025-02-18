import Image from "next/image";
import Inputs from "./components/inputs";
import Foto from "./components/foto";


export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">

      <Foto />
      <Inputs />
    </div>
  );
}
