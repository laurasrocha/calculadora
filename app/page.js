import Inputs from "./components/inputs";
import Foto from "./components/foto";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[55vw] flex items-center">
        <Foto />
        <Inputs />
      </div>
    </div>
  );
}
