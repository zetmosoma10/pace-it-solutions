import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "/logo.jpeg";
import { options } from "@/utils/constance";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky z-50 bg-white border">
      <div className="flex items-center justify-between py-4 max-container">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          <img src={logo} className="h-[40px]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="items-center hidden gap-8 md:flex">
          {options.map((option) => (
            <Link
              {...option}
              key={option.to}
              activeProps={{ className: "text-primary font-semibold" }}
              className="text-muted hover:text-primary"
            >
              {option.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-white border-t md:hidden border-border">
          <nav className="flex flex-col gap-6 px-4 py-6">
            {options.map((option) => (
              <Link
                {...option}
                key={option.to}
                onClick={() => setOpen(false)}
                className="text-muted hover:text-primary"
              >
                {option.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <a
              href="tel:+27XXXXXXXXX"
              className="flex items-center justify-center gap-2 py-3 text-white rounded-lg bg-accent"
            >
              <Phone size={18} />
              Get IT Support
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
