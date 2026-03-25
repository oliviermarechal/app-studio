export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between text-sm text-muted">
        <span>&copy; {new Date().getFullYear()} OM Studio</span>
        <a
          href="mailto:contact@getevox.fit"
          className="hover:text-foreground transition-colors"
        >
          contact@getevox.fit
        </a>
      </div>
    </footer>
  );
}
