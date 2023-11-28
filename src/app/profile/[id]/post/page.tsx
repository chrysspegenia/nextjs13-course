"use client";
import { useParams } from "next/navigation";

export default function Post() {
  const params = useParams();

  return (
    <div className="grid place-items-center h-screen">
      This is the profile Post page
    </div>
  );
}
