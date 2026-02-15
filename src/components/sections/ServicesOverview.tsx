import { servicesData } from "@/utils/constance";
import ServiceCard from "../ServiceCard";

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-background">
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
          {servicesData.map(({ img, title, description, href }) => (
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
