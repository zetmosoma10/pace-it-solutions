import { Button } from "../Button";

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-screen hero-img">
      <div className="max-container">
        <div className="text-center md:text-start">
          <h1 className="max-w-4xl text-white">
            Professional Computer Repair & IT Support
          </h1>
          <p className="max-w-3xl mt-6 mb-8 text-white/90">
            Pace IT Solutions delivers professional IT support, networking, and
            security services for homes, businesses, and schools—keeping your
            technology running smoothly
          </p>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <div className="flex items-center gap-3">
            <Button to="/services" size="md" variant="primary">
              View Services
            </Button>
            <Button to="/contact" size="md" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
