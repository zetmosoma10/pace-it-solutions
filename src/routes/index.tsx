import { createFileRoute } from "@tanstack/react-router";
import TrustBar from "@/components/sections/TrustBar";
import CallToAction from "@/components/sections/CallToAction";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ServiceCard from "@/components/ServiceCard";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main>
      {/* <TrustBar />
      <CallToAction /> */}
      <ServicesOverview />
    </main>
  );
}
