import { createFileRoute } from "@tanstack/react-router";
import TrustBar from "@/components/sections/TrustBar";
import CallToAction from "@/components/sections/CallToAction";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main>
      <TrustBar />
      <CallToAction />
    </main>
  );
}
