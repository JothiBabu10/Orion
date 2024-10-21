const Sidebar = () => {
  return (
    <aside className="w-20 h-screen bg-[#171735] text-white flex flex-col items-center py-6">
      {/* Logo */}
      <div className="mb-8">
        <img
          src="/images/orionlogo.jpg"
          alt="Logo"
          className="h-10 w-10 rounded-full"
        />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4">
        <a href="/" className="flex items-center space-x-2">
          <i className="fas fa-question-circle"></i>
          <span className="text-sm">Upload</span>
        </a>
        <a href="/data-extraction" className="flex items-center space-x-2">
          <i className="fas fa-tachometer-alt"></i>
          <span className="text-sm">Data Extraction</span>
        </a>
        <a href="/profile" className="flex items-center space-x-2">
          <i className="fas fa-user"></i>
          <span className="text-sm">Profile</span>
        </a>
        <a href="/history" className="flex items-center space-x-2">
          <i className="fas fa-cog"></i>
          <span className="text-sm">History</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
