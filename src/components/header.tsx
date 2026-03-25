import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          OM Studio
        </Link>
        <nav className="flex gap-6 text-sm text-muted">
          <Link href="/apps" className="hover:text-foreground transition-colors">
            Apps
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/support" className="hover:text-foreground transition-colors">
            Support
          </Link>
        </nav>
      </div>
    </header>
  );
}
