import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Së shpejti | Coming Soon" },
      { name: "description", content: "Website është në punime për momentin. Kthehuni së shpejti." },
      { property: "og:title", content: "Së shpejti | Coming Soon" },
      { property: "og:description", content: "Website është në punime për momentin. Kthehuni së shpejti." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      <img
        src="/logo.png"
        alt="Logoja"
        width={128}
        height={128}
        className="h-32 w-32 object-contain"
      />
      <h1 className="text-xl font-medium tracking-tight text-foreground">
        Website eshte ne punime per momentin :/
      </h1>
    </main>
  );
}
