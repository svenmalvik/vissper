import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="flex flex-1 items-center justify-center px-4 py-32">
        <div className="text-center max-w-2xl">
          <h1 className="mb-4 text-6xl font-black">404</h1>
          <p className="mb-8 text-2xl text-muted-foreground">Oops! Page not found</p>
          <p className="mb-12 text-lg text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
