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
      className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-12 text-center"
      style={{ backgroundColor: "#AEBE95" }}
    >
      <img
        src="/logo.png"
        alt="Logoja"
        width={240}
        height={240}
        className="h-48 w-48 object-contain sm:h-56 sm:w-56"
      />
      <div className="max-w-md space-y-3">
        <h1
          className="text-lg font-bold tracking-tight text-white sm:text-xl"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
        >
          website është në punime për momentin :/
        </h1>
        <p
          className="text-sm font-semibold text-white/95 sm:text-base"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
        >
          @bashkefit në çdo rrjet social :)
        </p>
      </div>
    </main>
  );
}
