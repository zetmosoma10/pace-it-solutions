import ServiceCard from "../ServiceCard";

import graphics from "@/assets/graphics.png";
import homeIT from "@/assets/homeIT.webp";
import businessIT from "@/assets/businessIT-2.png";
import security from "@/assets/security.png";
import schoolIT from "@/assets/schoolIT.png";
import network from "@/assets/cloud-networking.webp";

const services = [
  {
    img: homeIT,
    title: "Home IT Solutions",
    description: "Reliable IT support for home networks and personal devices.",
    href: "/services/home",
  },
  {
    img: businessIT,
    title: "Business IT Solutions",
    description: "Complete IT management and support for growing businesses.",
    href: "/services/business",
  },
  {
    img: schoolIT,
    title: "School IT Solutions",
    description: "Modern, secure IT systems for learning environments.",
    href: "/services/schools",
  },
  {
    img: security,
    title: "IT Security & CCTV",
    description: "Protect your systems, data, and premises from threats.",
    href: "/services/security",
  },
  {
    img: network,
    title: "Networks & Cloud",
    description: "Network setup, optimization, cloud and backup solutions.",
    href: "/services/networks",
  },
  {
    img: graphics,
    title: "Web & Graphic Design",
    description: "Websites, branding, and digital solutions for your business.",
    href: "/services/web",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 mt-12 bg-background">
      <div className="max-container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-primary">Our Services</h2>
          <p className="mt-4 text-muted">
            We provide professional IT solutions for homes, businesses, and
            schools — from technical support to security, networking, and
            digital services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {services.map(({ img, title, description, href }) => (
            <ServiceCard
              key={title}
              img={img}
              title={title}
              description={description}
              href={href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
