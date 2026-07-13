/**
 * Shell for the policy + support pages linked from the footer.
 * The route group keeps the URLs flat (/terms, /privacy, /refund, /support).
 */
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-white">{children}</div>;
}
