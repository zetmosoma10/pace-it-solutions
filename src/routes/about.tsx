import CallToAction from "@/components/sections/CallToAction";
import { coreValues } from "@/utils/constance";
import { generateLocalBusinessSchema } from "@/utils/generateLocalBusinessSchema";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "About Pace IT Solutions | Trusted IT Services in Burgersfort",
      },
      {
        name: "description",
        content:
          "Learn about Pace IT Solutions, a trusted IT services company in Burgersfort providing reliable and affordable technology solutions",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        content: JSON.stringify(generateLocalBusinessSchema()),
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <section className="mt-16 bg-white ">
      {/* Page Hero */}
      <div className="py-20 about-img">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <h1 className="text-4xl text-white md:text-5xl">
            About Pace IT Solutions
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-white/70">
            Delivering reliable and professional IT support services in
            Burgersfort and surrounding areas.
          </p>
        </div>
      </div>

      {/* About Pace IT Solutions */}
      <div className="mt-20 max-container">
        <div className="text-center">
          <h2 className="text-text">Who We Are</h2>
          <p className="mt-4 text-muted">
            <span className="font-semibold text-primary">
              Pace IT Solutions
            </span>{" "}
            is a trusted IT services provider based in Burgersfort, Limpopo,
            South Africa. We specialize in delivering cost-effective, high-value
            IT management and technical support to homes, businesses, and
            schools throughout the region.<br></br> <br></br> With over a decade
            of experience in the IT industry, our team of certified technicians
            has built a reputation for reliability, professionalism, and
            customer-focused service. We understand the unique IT challenges
            faced by different sectors and provide tailored solutions to meet
            those needs. Whether you're a homeowner dealing with a virus, a
            small business needing infrastructure support, or a school requiring
            security solutions, Pace IT Solutions is here to help you succeed
            with technology.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="py-20 mt-20 bg-background">
        <div className="space-y-10 text-center max-container">
          <div>
            <h2 className="text-primary">Our Mission</h2>
            <p className="mt-3 text-black/70">
              To provide accessible, professional, and reliable IT services that
              empower homes, businesses, and schools in Burgersfort and
              surrounding areas to succeed in the digital world. We're committed
              to solving IT problems quickly and efficiently, while building
              lasting relationships with our clients based on trust and
              excellent service.
            </p>
          </div>
          <div>
            <h2 className="text-primary">Our Vision</h2>
            <p className="mt-3 text-black/70">
              To be the most trusted and respected IT services provider in
              Limpopo, known for our technical expertise, customer service
              excellence, and commitment to community. We envision a future
              where every home, business, and school has access to professional,
              affordable IT support that drives their success and growth.
            </p>
          </div>
        </div>
      </div>

      {/* Our Core Values */}
      <div className="my-20 max-container">
        <h2 className="mb-6 text-center text-text">Our Core Values</h2>
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {coreValues.map((value) => (
            <div
              key={value.header}
              className="p-6 border-t-4 rounded-lg border-t-primary hover:shadow-md bg-background"
            >
              <h3 className="text-primary">{value.header}</h3>
              <p className="mt-2 text-black/70">{value.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="py-20 mb-20 bg-background">
        <div className="mx-auto space-y-8 text-center max-container">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="text-3xl font-bold text-primary">500+</h4>
              <p className=" text-black/90">Happy Clients</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary">10+</h4>
              <p>Years of Experience</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="text-3xl font-bold text-primary">1000+</h4>
              <p>Customer Support</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary">95%</h4>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </section>
  );
}
