import { createFileRoute } from "@tanstack/react-router";
import { LinkOut, Person, SettingsHorizontal, Star } from "akar-icons";
import { ArrowRight, Search } from "lucide-react";
// import { tv } from "tailwind-variants";
import { Container } from "~/components/container";
import { LogoMemeMixerGlow } from "~/components/logo-mememixer";
import { ThemeToggle } from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

// const homePageVariants = tv({
//   slots: {
//     container: "flex min-h-svh flex-col items-center justify-center gap-10 p-2",
//     headerSection: "flex flex-col items-center gap-4",
//     logo: "h-24 w-auto",
//     title: "text-3xl font-bold sm:text-4xl",
//     pageInfo: "text-foreground/80 flex items-center gap-2 text-sm max-sm:flex-col",
//     pageInfoCode: "bg-card text-card-foreground rounded-md border p-1",
//     suspenseFallback: "py-6",
//     footerSection: "flex flex-col items-center gap-2",
//     description: "text-foreground/80 max-sm:text-xs",
//     link: "text-foreground group",
//     linkUnderline: "group-hover:underline",
//     linksContainer: "flex items-center gap-3",
//     githubLink: "text-foreground/80 hover:text-foreground underline max-sm:text-sm",
//   },
// });

// const userActionVariants = tv({
//   slots: {
//     container: "flex flex-col items-center gap-2",
//     dashboardButton: "mb-2 w-fit",
//     sessionInfo: "text-center text-xs sm:text-sm",
//     sessionPre: "max-w-screen overflow-x-auto px-2 text-start",
//     loginButton: "w-fit",
//   },
// });

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  // const styles = homePageVariants();

  return (
    <div className="relative flex flex-col">
      <div className="bg-sidebar border-sidebar-border flex w-full flex-row border-b">
        <Container className="flex items-center py-2">
          <div className="relative">
            <a href="#" className="block transition-opacity hover:opacity-90">
              <LogoMemeMixerGlow />
            </a>
          </div>
          <div className="flex flex-1 items-center justify-end gap-1">
            <Button variant="outline" size="icon">
              <SettingsHorizontal className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="outline" size="icon">
              <Person className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </Container>
      </div>
      <div className="relative flex max-h-[calc(100vh-150px)] w-full flex-1 flex-col overflow-scroll pt-4">
        <Container>
          <div className="border- sticky top-0 w-full border-green-200">
            <div className="relative">
              <Input
                placeholder="Search"
                type="text"
                className="h-12 w-full rounded-full pl-10"
                style={{
                  backgroundColor: "#111118",
                }}
              />
              <Search className="absolute top-0 left-0 mt-[17px] ml-[15px] size-4" />
            </div>
          </div>
          <div>
            <div className="hidden">
              <ArrowRight />
              <Star
                color="yellow"
                size={32}
                strokeWidth={3}
                style={{ display: "block" }}
              />
              <LinkOut />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="col my-10 flex w-full flex-row gap-3">
              <Button variant="default">default</Button>
              <Button variant="secondary">secondary</Button>
              <Button variant="outline">outline</Button>
            </div>
            <div>
              {/* Default/Primary Buttons */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-cyan-400">Default (Primary)</h2>
                <div className="flex flex-wrap gap-4">
                  <button className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-cyan-500/50 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-400/60">
                    Create Meme
                  </button>
                  <button className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-cyan-500/50 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-400/60">
                    Generate
                  </button>
                  <button
                    className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-cyan-500/50 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-400/60 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled
                  >
                    Disabled
                  </button>
                </div>
              </div>

              {/* Secondary Buttons */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-cyan-400">Secondary</h2>
                <div className="flex flex-wrap gap-4">
                  <button className="rounded-lg border border-slate-600/50 bg-slate-700/80 px-6 py-3 font-medium text-white transition-all hover:border-slate-500/50 hover:bg-slate-600/80">
                    Save Draft
                  </button>
                  <button className="rounded-lg border border-slate-600/50 bg-slate-700/80 px-6 py-3 font-medium text-white transition-all hover:border-slate-500/50 hover:bg-slate-600/80">
                    Cancel
                  </button>
                  <button
                    className="rounded-lg border border-slate-600/50 bg-slate-700/80 px-6 py-3 font-medium text-white transition-all hover:border-slate-500/50 hover:bg-slate-600/80 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled
                  >
                    Disabled
                  </button>
                </div>
              </div>

              {/* Outline Buttons */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-cyan-400">Outline</h2>
                <div className="flex flex-wrap gap-4">
                  <button className="rounded-lg border-2 border-cyan-500 bg-transparent px-6 py-3 font-medium text-cyan-400 transition-all hover:border-cyan-400 hover:bg-cyan-500/10">
                    Browse Templates
                  </button>
                  <button className="rounded-lg border-2 border-cyan-500 bg-transparent px-6 py-3 font-medium text-cyan-400 transition-all hover:border-cyan-400 hover:bg-cyan-500/10">
                    Learn More
                  </button>
                  <button
                    className="rounded-lg border-2 border-cyan-500 bg-transparent px-6 py-3 font-medium text-cyan-400 transition-all hover:border-cyan-400 hover:bg-cyan-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled
                  >
                    Disabled
                  </button>
                </div>
              </div>
            </div>

            {Array.from({ length: 100 }, (_, i) => (
              <div
                key={i}
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 py-6 shadow-sm"
              >
                <p>hello</p>
                {/* <div className="col flex w-full flex-col gap-1">
                  <Button variant="default">default</Button>
                  <Button variant="secondary">secondary</Button>
                  <Button variant="outline">outline</Button>
                </div> */}
                <div className="bg-muted text-muted-foreground rounded-xl border p-4">
                  <p>mute</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className="fixed right-0 bottom-0 left-0 flex h-[100px] w-full flex-row">
        <Container>
          <div className="border- w-full border-green-200">
            <Input placeholder="Ask MemeMixer" type="text" className="w-full" />
          </div>

          <div className="fixed right-0 bottom-0">
            <ThemeToggle />
          </div>
        </Container>
      </div>
    </div>
  );
}
