import { Zap, ShieldCheck, Clock, Users } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "We resolve issues quickly to minimize downtime.",
  },
  {
    icon: ShieldCheck,
    title: "Free Diagnostics",
    description: "We assess your problem before any work is done.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Remote and on-site assistance when you need it.",
  },
  {
    icon: Users,
    title: "Experienced Technicians",
    description: "Skilled professionals with real-world IT experience.",
  },
];

const TrustBar = () => {
  return (
    <section className="bg-white  max-container">
      <h2 className="mb-4 text-center text-text">Why Choose Us?</h2>
      <div className="py-10">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Icon className="text-primary" size={22} />
              </div>

              <h3 className="font-semibold text-text">{title}</h3>

              <p className="max-w-xs text-sm text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
