import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          Sek<span className="text-accent">.</span>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/*mobile nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default header;
