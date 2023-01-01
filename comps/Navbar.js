import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Main Nav</div>
      <Link href="/">Home</Link>
      <Link href="/items">Projects</Link>
    </nav>
  );
};

export default Navbar;
