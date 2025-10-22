import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
          <Link to="/" className="text-blue-500 underline hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </main>
      <footer className="border-t border-gray-200 bg-white/80">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-4 py-4 text-sm text-gray-600 md:flex-row">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Vissper.</p>
          <Link to="/privacy" className="underline decoration-gray-400 hover:text-blue-600">
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
