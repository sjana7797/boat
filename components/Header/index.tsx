import Image from "next/image";
import logoSmall from "../../assets/images/boat_logo_small.png";

type Props = {};

function Header({}: Props) {
  return (
    <header className="px-4 py-2 bg-gray-50 w-full sticky top-0 border-b border-b-slate-50 shadow-sm z-50">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        <h1>
          <Image
            src={logoSmall}
            width={100}
            height={41}
            alt="Boat Logo Small"
          />
        </h1>
        <nav className="list-none flex gap-2 items-center capitalize">
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
