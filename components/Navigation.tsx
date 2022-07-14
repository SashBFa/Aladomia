import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center px-4 h-12 shadow-md">
      <Link href="/">
        <a className="text-lg font-bold">aladomia</a>
      </Link>
      <div>
        <Link href="/cart">
          <a className="p-2">Cart</a>
        </Link>
        <Link href="/login">
          <a className="p-2">Login</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
