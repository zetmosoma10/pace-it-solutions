import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/Button";

const CallToAction = () => {
  return (
    <section className="py-20 mt-12 bg-primary">
      <div className="max-w-4xl px-4 mx-auto text-center">
        {/* Heading */}
        <h2 className="text-white">Ready to solve your IT problems?</h2>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto mt-4 text-white/90">
          Our experienced technicians are ready to assist you with fast,
          reliable IT support for your home, business, or school.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
          <Button href="tel:+27XXXXXXXXX" size="md">
            <Phone size={18} className="mr-2" />
            Contact Us
          </Button>

          <Button
            href="https://wa.me/27XXXXXXXXX"
            className="text-blue-700 bg-white hover:bg-white/90"
            size="md"
          >
            <MessageCircle size={18} className="mr-2" />
            WhatsApp Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
