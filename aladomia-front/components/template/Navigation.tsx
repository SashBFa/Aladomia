import Link from "next/link";
import { roads } from "../../utils/roads";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex justify-around p-4">
        {roads.map((road) => (
          <li key={road.id}>
            <Link href={road.link}>
              <a>{road.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
