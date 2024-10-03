const Sidebar = () => {
  return (
    <aside className="w-20 h-screen bg-[#171735] text-white flex flex-col items-center py-6">
      {/* Logo */}
      <div className="mb-8">
        <img src="/images/orionlogo.jpg" alt="Logo" className="h-10 w-10 rounded-full" />
      </div>
      
      {/* Navigation */}
      <nav className="flex flex-col space-y-6">
        <a href="/" className="flex flex-col items-center hover:text-gray-300">
          <i className="fas fa-home text-2xl"></i>
        </a>
        <a href="/about" className="flex flex-col items-center hover:text-gray-300">
          <i className="fas fa-calendar-alt text-2xl"></i>
        </a>
        <a href="/projects" className="flex flex-col items-center hover:text-gray-300">
          <i className="fas fa-file-alt text-2xl"></i>
        </a>
        <a href="/profile" className="flex flex-col items-center hover:text-gray-300">
          <i className="fas fa-user text-2xl"></i>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
