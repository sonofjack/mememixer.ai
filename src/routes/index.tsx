import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Suspense } from "react";
import { tv } from "tailwind-variants";
import { LogoMemeMixerBase } from "~/components/logo-mememixer";
import { SignOutButton } from "~/components/sign-out-button";
import { ThemeToggle } from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";
import { authQueryOptions } from "~/lib/auth/queries";

const homePageVariants = tv({
  slots: {
    container: "flex min-h-svh flex-col items-center justify-center gap-10 p-2",
    headerSection: "flex flex-col items-center gap-4",
    logo: "h-24 w-auto",
    title: "text-3xl font-bold sm:text-4xl",
    pageInfo: "text-foreground/80 flex items-center gap-2 text-sm max-sm:flex-col",
    pageInfoCode: "bg-card text-card-foreground rounded-md border p-1",
    suspenseFallback: "py-6",
    footerSection: "flex flex-col items-center gap-2",
    description: "text-foreground/80 max-sm:text-xs",
    link: "text-foreground group",
    linkUnderline: "group-hover:underline",
    linksContainer: "flex items-center gap-3",
    githubLink: "text-foreground/80 hover:text-foreground underline max-sm:text-sm",
  },
});

const userActionVariants = tv({
  slots: {
    container: "flex flex-col items-center gap-2",
    dashboardButton: "mb-2 w-fit",
    sessionInfo: "text-center text-xs sm:text-sm",
    sessionPre: "max-w-screen overflow-x-auto px-2 text-start",
    loginButton: "w-fit",
  },
});

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const styles = homePageVariants();

  return (
    <div className={styles.container()}>
      <div className={styles.headerSection()}>
        <LogoMemeMixerBase className={styles.logo()} />
        <h1 className={styles.title()}>MemeMixer.ai homepage</h1>
        <div className={styles.pageInfo()}>
          This is an unprotected page:
          <pre className={styles.pageInfoCode()}>routes/index.tsx</pre>
        </div>
      </div>

      <Suspense
        fallback={<div className={styles.suspenseFallback()}>Loading user...</div>}
      >
        <UserAction />
      </Suspense>

      <div className={styles.footerSection()}>
        <p className={styles.description()}>
          A minimal starter template for{" "}
          <a
            className={styles.link()}
            href="https://tanstack.com/start/latest"
            target="_blank"
            rel="noreferrer noopener"
          >
            🏝️ <span className={styles.linkUnderline()}>TanStack Start</span>
          </a>
          .
        </p>
        <div className={styles.linksContainer()}>
          <a
            className={styles.githubLink()}
            href="https://github.com/dotnize/react-tanstarter"
            target="_blank"
            title="Template repository on GitHub"
            rel="noreferrer noopener"
          >
            dotnize/react-tanstarter
          </a>

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

function UserAction() {
  const { data: user } = useSuspenseQuery(authQueryOptions());
  const styles = userActionVariants();

  return user ? (
    <div className={styles.container()}>
      <p>Welcome back, {user.name}!</p>
      <Button type="button" asChild className={styles.dashboardButton()} size="lg">
        <Link to="/dashboard">Go to Dashboard</Link>
      </Button>
      <div className={styles.sessionInfo()}>
        Session user:
        <pre className={styles.sessionPre()}>{JSON.stringify(user, null, 2)}</pre>
      </div>

      <SignOutButton />
    </div>
  ) : (
    <div className={styles.container()}>
      <p>You are not signed in.</p>
      <Button type="button" asChild className={styles.loginButton()} size="lg">
        <Link to="/login">Log in</Link>
      </Button>
    </div>
  );
}
