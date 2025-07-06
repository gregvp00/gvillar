import AppBottomDrawer from "@/components/AppBottomDrawer";
import AppNav from "@/components/AppNav";
import Image from "next/image";

export default function AppPreview() {
  return (
    <div className="w-full flex justify-center">
      <main className="relative w-full h-[70vh] bg-black overflow-hidden">
        <Image
          src="/appPreview.svg"
          alt="App Preview"
          layout="fill"
          objectFit="cover"
          className="z-0 pointer-events-none"
        />
        
        <AppNav/>
        
        <AppBottomDrawer />
      </main>
    </div>
  );
}