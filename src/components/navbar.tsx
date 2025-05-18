"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "../../data";

const Navbar = () => {
  const router = usePathname();
  return ( 
    <div className="fixed z-40 left-5 top-1/2 -translate-y-1/2 flex flex-col 
      items-center justify-center h-max w-max">
      <nav>
        <div className="flex items-center justify-center gap-2 
          rounded-full bg-white/15 background-blur-sm flex-col">
        {itemsNavbar.map((item) => (
          <div key={item.id} className={`px-3 py-3 rounded-full cursor-pointer 
            transition-colors duration-150 
            hover:bg-white/50 
            ${router === item.link ? "bg-white/40" : "bg-transparent"}`}
            data-tooltip-target="tooltip-default"
          >
            <Link href={item.link}>{item.icon}</Link>
          </div>  
        ))}
        </div>
      </nav>
    </div>
  );
}
 
export default Navbar;