import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Së shpejti | Coming Soon" },
      { name: "description", content: "Website është në punime për momentin. @bashkefit në çdo rrjet social." },
      { property: "og:title", content: "Së shpejti | Coming Soon" },
      { property: "og:description", content: "Website është në punime për momentin. @bashkefit në çdo rrjet social." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-12 text-center"
      style={{ backgroundColor: "#AEBE95" }}
    >
      <img
        src="/logo.jpg"
        alt="Logoja"
        width={200}
        height={200}
        className="h-40 w-40 object-contain sm:h-48 sm:w-48"
      />
      <div className="space-y-2">
        <h1 className="text-base font-medium tracking-tight text-white sm:text-lg">
          website është në punime për momentin :/
        </h1>
        <p className="text-sm font-medium text-white/90 sm:text-base">
          @bashkefit në çdo rrjet social :)
        </p>
      </div>
    </main>
  );
}
