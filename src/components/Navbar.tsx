import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "/logo.jpeg";
import { options } from "@/utils/constance";
import { Button } from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border">
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
          <div className="absolute left-0 right-0 bg-white border-t top-full md:hidden border-border">
            <nav className="flex flex-col gap-6 px-4 py-6">
              <div className="flex flex-col">
                {options.map((option) => (
                  <Link
                    {...option}
                    key={option.to}
                    onClick={() => setOpen(false)}
                    activeProps={{
                      className: "text-primary bg-background rounded-md p-3",
                    }}
                    className="p-3 rounded-md text-muted hover:text-primary hover:bg-background"
                  >
                    {option.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <Button
                variant="secondary"
                href="tel:+27 712991085"
                className="flex items-center gap-2"
              >
                <Phone size={18} />
                Get IT Support
              </Button>
            </nav>
          </div>
        )}
      </header>
      {open && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/20"></div>
      )}
    </>
  );
};

export default Navbar;
