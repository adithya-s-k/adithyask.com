import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="Logo">
                Main Nav
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/items">Items</Link>
        </nav>
    );
}

export default Navbar;