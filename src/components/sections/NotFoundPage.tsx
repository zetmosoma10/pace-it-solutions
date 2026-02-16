import { Link } from "@tanstack/react-router";
import { Button } from "../Button";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-16 bg-gray-50">
      <div className="max-w-md text-center">
        <div className="mb-8">
          <h1 className="mb-4 font-bold text-7xl md:text-8xl text-primary">
            404
          </h1>
          <h2 className="mb-4 text-3xl font-bold text-text md:text-4xl">
            Page Not Found
          </h2>
        </div>
        <p className="mb-8 text-lg text-muted">
          Sorry, the page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button to="/" size="md" variant="secondary">
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
