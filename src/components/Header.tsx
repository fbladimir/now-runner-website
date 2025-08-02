import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-[#5ABDA7]">
              Now Runner
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/download" 
              className="text-gray-700 hover:text-[#5ABDA7] transition-colors duration-200 font-medium"
            >
              Download the App
            </Link>
            <Link 
              href="/become-runner" 
              className="text-gray-700 hover:text-[#5ABDA7] transition-colors duration-200 font-medium"
            >
              Become a Runner
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-[#5ABDA7] transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
