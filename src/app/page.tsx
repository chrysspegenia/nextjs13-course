import Image from "next/image";
import TrialComponent from "./TrialComponent";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="p-4 flex justify-center items-center flex-col gap-20
                border-amber-900 border-8 rounded-sm w-screen h-screen
                text-red-500 hover:text-blue-500 font-extrabold text-6xl
                gradient-text hover:animate-pulse"
    >
      <div>Hello World</div>
      <div> Main page of my application</div>
      {/* <TrialComponent /> */}
      <Link
        href="./profile"
        className="text-4xl border-2 rounded-full py-2 px-6"
      >
        Profiles
      </Link>
    </main>
  );
}
