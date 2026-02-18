export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ITService", // better than LocalBusiness for you
    name: "Pace IT Solutions",
    image: "https://paceitsolutions.co.za/logo.png",
    url: "https://paceitsolutions.co.za",
    telephone: "+27XXXXXXXXX",
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
