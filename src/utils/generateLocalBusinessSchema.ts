export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ITService",
    name: "Pace IT Solutions",
    image: "https://paceitsolutions.co.za/logo.jpeg",
    url: "https://paceitsolutions.co.za",
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
