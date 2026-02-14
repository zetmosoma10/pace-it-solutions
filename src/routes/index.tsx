import TrustBar from "@/components/sections/TrustBar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main>
      <TrustBar />
    </main>
  );
}
