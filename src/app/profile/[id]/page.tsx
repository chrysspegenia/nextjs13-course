"use client";
import { useParams, useRouter } from "next/navigation";

export default function ProfileID() {
  const params = useParams();
  const router = useRouter();

  return (
    <div className="grid justify-center items-center h-screen text-2xl">
      Profile page id: {params.id}
      <button
        className="border-2 p-2 rounded-[30px]"
        onClick={() => {
          router.push("../profile");
        }}
      >
        Back to list of profiles
      </button>
    </div>
  );
}
