import { siteConfig } from '@/config/site';

/** A titled block of policy text. Paragraphs and lists are passed as children. */
export const LegalSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-3">
    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
    {children}
  </section>
);

/** Bulleted list used inside a LegalSection. */
export const LegalList = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc space-y-2 pr-5">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const LegalPage = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <article className="container mx-auto max-w-3xl px-4 py-16">
    <header className="mb-10 border-b border-gray-100 pb-6">
      <h1 className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">{title}</h1>
      <p className="text-sm text-gray-500">עודכן לאחרונה: {siteConfig.legalLastUpdated}</p>
    </header>

    <div className="space-y-8 leading-relaxed text-gray-700">{children}</div>
  </article>
);

export default LegalPage;
