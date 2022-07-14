import Link from "next/link";
import { useContext } from "react";
import { Store } from "../utils/Store";

interface quantityProps {
  quantity: number;
}

const Navigation = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  return (
    <nav className="flex justify-between items-center px-4 h-12 shadow-md">
      <Link href="/">
        <a className="text-lg font-bold">aladomia</a>
      </Link>
      <div>
        <Link href="/cart">
          <a className="p-2">
            Panier
            {cart.cartItems.length > 0 && (
              <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                {cart.cartItems.reduce(
                  (a: number, c: quantityProps) => a + c.quantity,
                  0
                )}
              </span>
            )}
          </a>
        </Link>
        <Link href="/login">
          <a className="p-2">Se connecter</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
