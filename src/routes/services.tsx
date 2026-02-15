import { homeITServices } from "@/utils/constance";
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

      <div className="mt-12 max-container">
        {/* Home IT */}
        <div>
          <h2 className="text-primary">Home IT Solutions</h2>
          <p className="text-muted">
            Complete IT support and services designed for homeowners and
            residential users.
          </p>

          <div className="mt-8 space-y-6">
            {homeITServices.map((service) => (
              <div className="p-4 border-l-4 rounded-lg shadow-md bg-background border-primary ">
                <h3 className="text-text">{service.header}</h3>
                <p className="mt-1 text-black/90">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
