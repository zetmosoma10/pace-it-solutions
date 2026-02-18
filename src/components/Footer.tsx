import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { options, services } from "@/utils/constance";

const Footer = () => {
  return (
    <footer className="mt-20 text-white bg-text">
      <div className="py-16 max-container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold">Pace IT Solutions</h3>
            <p className="mt-4 text-sm text-white/80">
              Professional computer repair and IT support services for homes,
              businesses, and schools in Burgersfort and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/80">
              {options.map((option) => (
                <li key={option.to}>
                  <Link
                    {...option}
                    activeProps={{
                      className: "text-white font-bold underline",
                    }}
                    className="hover:text-white hover:underline hover:font-bold"
                  >
                    {option.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Our Services</h4>
            <ul className="space-y-3 text-sm text-white/80">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>

            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <Phone size={18} />
                <a href="tel:+27XXXXXXXXX" className="hover:text-white">
                  +27 721 334 9428
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle size={18} />
                <a
                  href="https://wa.me/277213349428"
                  className="hover:text-white"
                >
                  WhatsApp Support
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} />
                <span>
                  Burgersfort, Limpopo
                  <br />
                  South Africa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 mt-12 text-sm text-center border-t border-white/20 text-white/70">
          <p>
            {" "}
            © {new Date().getFullYear()} Pace IT Solutions. All rights reserved.
          </p>
          <p>Professional IT Services in Burgersfort, Limpopo, South Africa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
