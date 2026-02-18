import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles.css?url";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NotFoundPage from "@/components/sections/NotFoundPage";
import { generateLocalBusinessSchema } from "@/utils/generateLocalBusinessSchema";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title:
          "Professional Computer Repair & IT Support in Burgersfort | Pace IT Solutions",
      },
      {
        name: "description",
        content:
          "Reliable IT support for homes, businesses and schools in Burgersfort. Computer repair, CCTV, networking, cloud solutions and more.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/public/favicon.png",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        content: JSON.stringify(generateLocalBusinessSchema()),
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => <NotFoundPage />,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
