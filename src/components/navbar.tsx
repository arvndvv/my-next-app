import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full flex gap-3 bg-blue-400 p-3">
      <Link href="/" className="hover:text-blue-900">
        Home
      </Link>
      <Link href="/test" className="hover:text-blue-900">
        Test
      </Link>
      <Link href="/posts" className="hover:text-blue-900">
        Posts
      </Link>
    </nav>
  );
}
