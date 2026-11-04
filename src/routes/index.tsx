import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tec Tha Vital" },
      { name: "description", content: "Tec Tha Vital — a fresh start." },
      { property: "og:title", content: "Tec Tha Vital" },
      { property: "og:description", content: "Tec Tha Vital — a fresh start." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">Tec Tha Vital</h1>
    </main>
  );
}
