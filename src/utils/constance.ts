import graphics from "@/assets/graphics.png";
import homeIT from "@/assets/homeIT.webp";
import businessIT from "@/assets/businessIT-2.png";
import security from "@/assets/security.png";
import schoolIT from "@/assets/schoolIT.png";
import network from "@/assets/cloud-networking.webp";

export const options = [
  {
    to: "/",
    label: "Home",
    activeOptions: { exact: true },
  },
  {
    to: "/services",
    label: "Services",
    activeOptions: { exact: true },
  },
  {
    to: "/about",
    label: "About",
    activeOptions: { exact: true },
  },
  {
    to: "/contact",
    label: "Contact",
    activeOptions: { exact: true },
  },
];

export const services = [
  "Home IT Support",
  "Business IT Solutions",
  "School IT Systems",
  "IT Security & CCTV",
  "Networks & Cloud",
  "Web & Graphic Design",
];

export const servicesData = [
  {
    img: homeIT,
    title: "Home IT Solutions",
    description: "Reliable IT support for home networks and personal devices.",
    href: "/services/home",
  },
  {
    img: businessIT,
    title: "Business IT Solutions",
    description: "Complete IT management and support for growing businesses.",
    href: "/services/business",
  },
  {
    img: schoolIT,
    title: "School IT Solutions",
    description: "Modern, secure IT systems for learning environments.",
    href: "/services/schools",
  },
  {
    img: security,
    title: "IT Security & CCTV",
    description: "Protect your systems, data, and premises from threats.",
    href: "/services/security",
  },
  {
    img: network,
    title: "Networks & Cloud",
    description: "Network setup, optimization, cloud and backup solutions.",
    href: "/services/networks",
  },
  {
    img: graphics,
    title: "Web & Graphic Design",
    description: "Websites, branding, and digital solutions for your business.",
    href: "/services/web",
  },
];

export const coreValues = [
  {
    header: "Reliability",
    text: "We deliver consistent, dependable IT solutions you can count on every time",
  },
  {
    header: "Professionalism",
    text: "Our team maintains the highest standards of technical expertise and service quality",
  },
  {
    header: "Customer Focus",
    text: "Your success is our priority, and we tailor solutions to your specific needs",
  },
  {
    header: "Innovation",
    text: "We stay current with technology trends to provide cutting-edge solutions",
  },
  {
    header: "Integrity",
    text: "We conduct business with honesty and transparency in all dealings",
  },
  {
    header: "Community",
    text: "We're proud to serve and support the Burgersfort and Limpopo community",
  },
];

export const homeITServices = [
  {
    header: "Hardware & Software Problem Resolution",
    text: "Expert troubleshooting and repair of computer and software issues",
  },
  {
    header: "WiFi Installation & Network Setup",
    text: "Professional installation and configuration of home networks for optimal speed and coverage",
  },
  {
    header: "IP Camera Installation",
    text: "Professional installation of security cameras for home surveillance",
  },
  {
    header: "Email & Internet Troubleshooting",
    text: "Diagnosis and resolution of email configuration and internet connectivity issues",
  },
];
