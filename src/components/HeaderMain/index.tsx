import Link from "next/link";

// fixed top-0 fixar o hearder no topo da pagina
export const HeaderMain = (): JSX.Element => {
  return (
    <header className="bg-yellow-600 flex items-center h-16 w-full">
      <h1 className="tracking-wider text-2xl font-bold text-white m-5">
        Cappuccino
      </h1>

      <nav className="tracking-wider flex items-center justify-end h-full w-full">
        <Link
          href="/"
          className="relative font-bold text-white m-5 inline-block hover:scale-125 hover:text-blue-800"
        >
          Home
        </Link>

        <Link
          href="/carrinho"
          className="relative font-bold text-white m-10 inline-block hover:scale-125 hover:text-blue-800"
        >
          Carrinho
        </Link>
      </nav>
    </header>
  );
};
