import {
  Home,
  Building2,
  GraduationCap,
  Shield,
  Cloud,
  Palette,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home IT Solutions",
    description: "Reliable IT support for home networks and personal devices.",
    href: "/services/home",
  },
  {
    icon: Building2,
    title: "Business IT Solutions",
    description: "Complete IT management and support for growing businesses.",
    href: "/services/business",
  },
  {
    icon: GraduationCap,
    title: "School IT Solutions",
    description: "Modern, secure IT systems for learning environments.",
    href: "/services/schools",
  },
  {
    icon: Shield,
    title: "IT Security & CCTV",
    description: "Protect your systems, data, and premises from threats.",
    href: "/services/security",
  },
  {
    icon: Cloud,
    title: "Networks & Cloud",
    description: "Network setup, optimization, cloud and backup solutions.",
    href: "/services/networks",
  },
  {
    icon: Palette,
    title: "Web & Graphic Design",
    description: "Websites, branding, and digital solutions for your business.",
    href: "/services/web",
  },
];

const ServicesOverview = () => {
  return (
    <section className="bg-background py-20 mt-12">
      <div className="max-container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-primary">Our IT Services</h2>
          <p className="mt-4 text-muted">
            We provide professional IT solutions for homes, businesses, and
            schools — from technical support to security, networking, and
            digital services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description, href }) => (
            <a
              key={title}
              href={href}
              className="group bg-white border border-border rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                <Icon className="text-primary" size={24} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-text group-hover:text-primary">
                {title}
              </h3>

              <p className="mt-2 text-sm text-muted">{description}</p>

              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                Learn more
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
