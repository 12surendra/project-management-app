'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/auth/login");
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dashboard" className="text-white text-xl font-bold">
          Project Management
        </Link>
        <div className="space-x-4">
          <Link href="/dashboard/projects" className="text-white hover:underline">
            Projects
          </Link>
          <Link href="/dashboard/map" className="text-white hover:underline">
            Map
          </Link>
          <Link href="/dashboard/charts" className="text-white hover:underline">
            Charts
          </Link>
          <button
            onClick={handleLogout}
            className="text-white hover:underline"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}