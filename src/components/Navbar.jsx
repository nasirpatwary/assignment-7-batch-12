import Container from "../shard/Container";
const Navbar = () => {
  return (
    <nav className="shadow">
      <Container>
        <div className="flex items-center gap-4 justify-between py-3 px-0">
            <h1 className="text-2xl font-bold text-[#130b2d] truncate">CS — Ticket System</h1>
          <div className="flex items-center gap-4 md:gap-8">
            <ul className="menu-horizontal gap-4 text-base text-gray-500 hidden md:flex">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">FAQ</li>
              <li className="cursor-pointer">Changelog</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Dowload</li>
            </ul>
              <button className="gradient px-3 py-1 rounded font-semibold truncate text-[#ffffff]">+ New Ticket</button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
