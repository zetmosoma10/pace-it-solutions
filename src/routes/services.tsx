import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="bg-white">
      {/* Page Hero */}
      <div className="py-20 service-img">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <h1 className="text-4xl text-white md:text-5xl">Our Services</h1>
          <p className="max-w-2xl mx-auto mt-4 text-white/70">
            Complete professional IT support, networking, and security services
            for homes, businesses, and schools.
          </p>
        </div>
      </div>
    </section>
  );
}
