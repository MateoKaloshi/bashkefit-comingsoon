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
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 text-center"
      style={{ backgroundColor: "#A9BE95" }}
    >
      <img
        src="/logo.jpg"
        alt="Logoja"
        width={200}
        height={200}
        className="h-48 w-48 object-contain"
      />
      <h1 className="text-lg font-medium tracking-tight text-white">
        Website eshte ne punime per momentin :/
      </h1>
    </main>
  );
}
