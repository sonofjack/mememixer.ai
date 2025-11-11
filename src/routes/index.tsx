import { createFileRoute } from "@tanstack/react-router";
import { LinkOut, Star } from "akar-icons";
import { ArrowRight } from "lucide-react";
// import { tv } from "tailwind-variants";
import { Container } from "~/components/container";
import { LogoMemeMixerBase } from "~/components/logo-mememixer";
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
      <div className="flex w-full flex-row">
        <Container className="flex py-1">
          <LogoMemeMixerBase className="h-auto max-w-24" />
          <div className="flex flex-1 justify-end gap-1">
            <Button>Filter</Button>
            <Button>Profile</Button>
          </div>
        </Container>
      </div>
      <div className="relative flex max-h-[calc(100vh-150px)] w-full flex-1 flex-col overflow-scroll pt-2">
        <Container>
          <div className="sticky top-0 w-full border border-green-200">
            <Input placeholder="Search" type="text" className="w-full" />
          </div>
          <div>
            <div>
              <ArrowRight />
            </div>
            <Star color="yellow" size={32} strokeWidth={3} style={{ display: "block" }} />
            <LinkOut />
          </div>
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i}>
              <p>hello</p>
            </div>
          ))}
        </Container>
      </div>
      <div className="fixed right-0 bottom-0 left-0 flex h-[100px] w-full flex-row">
        <Container>
          <div className="w-full border border-green-200">
            <Input placeholder="Ask MemeMixer" type="text" className="w-full" />
          </div>

          <ThemeToggle />
        </Container>
      </div>
    </div>
  );
}
