import { createFileRoute } from "@tanstack/react-router";
import { Clock4 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="mt-16">
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

      <div className="px-6 py-4 mt-6 bg-opacity-50 border rounded-lg max-container border-primary/60 bg-primary/10">
        <h3 className="mb-2 text-primary">Quick Response</h3>
        <p className="text-black/80">
          Free diagnostics on all services. We typically respond to inquiries
          within 24 hours.
        </p>
      </div>

      <section className="py-16 md:py-20 bg-background">
        <div className="container px-4 mx-auto sm:px-6">
          <h2 className="mb-12 text-center text-text">Find Us</h2>
          <div className="overflow-hidden rounded-lg shadow-lg h-96">
            <iframe
              title="Pace IT Solutions"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d821.6267173187381!2d30.32033499979771!3d-24.641245028461963!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sza!4v1771233215516!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </section>
  );
}
