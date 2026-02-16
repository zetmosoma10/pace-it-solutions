import { createFileRoute } from "@tanstack/react-router";
import { Clock4 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      {/* Page Hero */}
      <div className="py-20 contact-img">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <h1 className="text-4xl text-white md:text-5xl">Contact Us</h1>
          <p className="max-w-2xl mx-auto mt-4 text-white/70">
            Get in touch for professional IT support and solutions.
          </p>
        </div>
      </div>

      {/* Contacts */}
      <div className="mt-20 max-container">
        <h2 className="text-text">Business Information</h2>
        <div className="mt-8 space-y-5">
          <div>
            <h3 className="mb-2 text-primary">Location</h3>
            <p className=" text-muted">Burgersfort, Limpopo, South Africa</p>
          </div>
          <div>
            <h3 className="mb-2 text-primary">Phone</h3>
            <p className="text-muted">+27 15 234 5678</p>
          </div>
          <div>
            <h3 className="mb-2 text-primary">Email</h3>
            <p className="text-muted">info@paceitsolutions.co.za</p>
          </div>
          <div>
            <h3 className="mb-2 text-primary">Operating Hours</h3>
            <div className="flex items-center space-x-2 text-muted">
              <Clock4 className=" text-muted" />
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            </div>
            <div className="flex items-center space-x-2 text-muted">
              <Clock4 className=" text-muted" />
              <p>Saturday: 9:00 AM - 03:00 PM</p>
            </div>
            <div className="flex items-center space-x-2 text-muted">
              <Clock4 className=" text-muted" />
              <p>24/7 Emergency Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
