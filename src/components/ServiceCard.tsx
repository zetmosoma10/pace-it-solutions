import { ArrowRight } from "lucide-react";

type Props = {
  img: string;
  title: string;
  description: string;
  href: string;
};

const ServiceCard = ({ img, title, description, href }: Props) => {
  return (
    <div className="overflow-hidden bg-white shadow-lg  rounded-2xl">
      <div className="aspect-[16/9]">
        <img src={img} alt={title} className="object-cover w-full h-full" />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
        <a
          href={href}
          className="flex items-center gap-2 mt-2 text-sm font-medium text-primary group "
        >
          Learn more
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
