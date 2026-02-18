import CallToAction from "@/components/sections/CallToAction";
import ServiceITSolution from "@/components/sections/ServiceITSolution";
import {
  businessITServices,
  cloudServicesIT,
  homeITServices,
  schoolITServices,
  securityITServices,
  webServicesIT,
} from "@/utils/constance";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="mt-16 bg-white">
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

      <div className="my-20 space-y-20 max-container">
        {/* Home IT */}
        <div id="homeIT">
          <ServiceITSolution
            heading="Home IT Solutions"
            subText="Complete IT support and services designed for homeowners and residential users."
            services={homeITServices}
          />
        </div>

        {/* Business IT */}
        <div id="businessIT">
          <ServiceITSolution
            heading="Business IT Solutions"
            subText="Comprehensive IT management and support tailored for small to medium-sized businesses."
            services={businessITServices}
          />
        </div>

        {/* School IT */}
        <div id="schoolsIT">
          <ServiceITSolution
            heading="School IT Solutions"
            subText="Educational IT services designed to support learning environments."
            services={schoolITServices}
          />
        </div>

        {/* Security & Surveillance IT */}
        <div id="securityIT">
          <ServiceITSolution
            heading="Security & Surveillance"
            subText="Advanced security solutions for homes, businesses, and schools."
            services={securityITServices}
          />
        </div>

        {/* Cloud Services IT */}
        <div id="networksIT">
          <ServiceITSolution
            heading="Cloud Services"
            subText="Cloud solutions for modern businesses and organizations."
            services={cloudServicesIT}
          />
        </div>

        {/* Web & Graphic Design Services IT */}
        <div id="webIT">
          <ServiceITSolution
            heading="Web & Graphic Design"
            subText="Professional web and graphic design services for businesses."
            services={webServicesIT}
          />
        </div>
      </div>

      <CallToAction />
    </section>
  );
}
