export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ITService",
    name: "Pace IT Solutions",
    image: "https://paceitsolutions.netlify.app/logo.jpeg",
    url: "https://paceitsolutions.netlify.app",
    telephone: "+27 66 475 0081",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Burgersfort",
      addressRegion: "Limpopo",
      addressCountry: "ZA",
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Burgersfort",
      },
      {
        "@type": "Place",
        name: "Lydenburg",
      },
      {
        "@type": "Place",
        name: "Steelpoort",
      },
      {
        "@type": "Place",
        name: "Polokwane",
      },
    ],
  };
}
