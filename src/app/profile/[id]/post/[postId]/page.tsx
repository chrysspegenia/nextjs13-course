"use client";
import { useParams } from "next/navigation";

export default function PostID() {
  const params = useParams();

  console.log(params.id);
  console.log(params.postId);

  return (
    <div className="grid place-items-center h-screen">
      This is the profile PostID
    </div>
  );
}
