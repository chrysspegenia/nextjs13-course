"use client";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  return (
    <div
      className="flex flex-col items-center justify-center gap-5
                    h-screen w-screen"
    >
      <h1 className="font-bold text-5xl">My profile page</h1>
      <h3 className="font-semibold text-3xl">List of Profiles:</h3>
      <ul>
        <li
          className="m-2 text-xl cursor-pointer"
          onClick={() => router.push("./profile/1")}
        >
          Profile 1
        </li>
        <li
          className="m-2 text-xl cursor-pointer"
          onClick={() => router.push("./profile/2")}
        >
          Profile 2
        </li>
        <li
          className="m-2 text-xl cursor-pointer"
          onClick={() => router.push("./profile/3")}
        >
          Profile 3
        </li>
      </ul>
      <button className="self-start mx-52" onClick={() => router.push("..")}>
        Back to main
      </button>
    </div>
  );
}
