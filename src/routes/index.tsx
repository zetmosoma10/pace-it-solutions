import { createFileRoute } from "@tanstack/react-router";
import TrustBar from "@/components/sections/TrustBar";
import CallToAction from "@/components/sections/CallToAction";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Hero from "@/components/sections/Hero";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main>
      <Hero />
      <div className="my-20">
        <TrustBar />
      </div>
      <ServicesOverview />
      <div className="mt-20">
        <CallToAction />
      </div>
    </main>
  );
}
