import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div>
      <p className="text-2xl font-bold text-red-600">Hello world</p>
      <p className="text-2xl font-bold text-blue-600">Hello world</p>
    </div>
  );
}
