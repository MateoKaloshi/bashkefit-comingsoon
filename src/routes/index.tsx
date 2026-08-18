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
        width={160}
        height={160}
        className="h-32 w-32 object-contain sm:h-36 sm:w-36"
      />
      <div className="max-w-md space-y-4">
        <h1
          className="text-lg font-bold tracking-tight text-white sm:text-xl"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
        >
          website është në punime për momentin :/
        </h1>
        <p
          className="text-base font-bold text-white sm:text-lg"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.25)" }}
        >
          @bashkefit në çdo rrjet social :)
        </p>
      </div>
    </main>
  );
}
