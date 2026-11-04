import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import TecThaVitalApp from "../components/TecThaVitalApp";

const TITLE = "Tec Tha Vital — Hospital OS by Tec Tha";
const DESCRIPTION =
  "Tec Tha Vital connects your hospital's ERP and CRM, talks to patients on WhatsApp, and gives doctors, staff and owners one view across every branch.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#121214" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Tec Tha Vital" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tec Tha Consultancy Services",
            url: "https://www.tectha.com",
            email: "team@tectha.com",
            slogan: "Technology That Shapes the Future.",
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Tec Tha Vital",
            applicationCategory: "HealthApplication",
            operatingSystem: "Web",
            publisher: { "@type": "Organization", name: "Tec Tha Consultancy Services" },
          },
        ]),
      },
    ],
  }),
  component: Index,
});

// The demo uses the browser (theme, language, local demo data), so it renders on the client.
function Index() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F5F5F7] text-[#121214]">
        <h1 className="text-3xl font-semibold tracking-tight">Tec Tha Vital</h1>
      </main>
    );
  }
  return <TecThaVitalApp />;
}
