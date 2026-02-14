import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div>
      <p className="text-2xl text-red-600 font-bold">Hello world</p>
      <p className="text-2xl text-blue-600 font-bold">Hello world</p>
    </div>
  );
}
