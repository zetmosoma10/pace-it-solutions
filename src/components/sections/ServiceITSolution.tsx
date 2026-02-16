type Props = {
  heading: string;
  subText: string;
  services: {
    header: string;
    text: string;
  }[];
};

const ServiceITSolution = ({ heading, subText, services }: Props) => {
  return (
    <article>
      <h2 className="text-primary">{heading}</h2>
      <p className="text-muted">{subText}</p>

      <div className="mt-8 space-y-6">
        {services.map((service) => (
          <div
            key={service.header}
            className="p-4 border-l-4 rounded-lg shadow-md bg-background border-primary "
          >
            <h3 className="text-text">{service.header}</h3>
            <p className="mt-1 text-black/90">{service.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ServiceITSolution;
