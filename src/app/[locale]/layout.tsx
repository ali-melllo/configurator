import "./styles/globals.css";
import ClientProviders from "./ClientProviders";
import LangProvider from "@/contexts/LangContext";

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;

  const messages = (await import(`../../messages/${locale}.json`)).default;

  const metadata = {
    en: {
      title: "Persian Top | Home Extensions & Renovation Experts",
      description:
        "Professional home extensions and renovations in the Netherlands. Expand your living space with expert construction services tailored to your needs.",
      keywords:
        "home extensions, construction services, custom homes, building contractor, house renovation, remodeling, house expansion, Persian Top",
      ogTitle: "Home Extensions & Construction Services in the Netherlands",
      ogDescription:
        "Transform your home with expert construction and extension services tailored to your needs.",
    },
    nl: {
      title: "Persian Top | Uitbouw & Renovatie Experts in Nederland",
      description:
        "Professionele uitbouw en woningrenovatie in Nederland. Breid uw woning uit met hoogwaardige bouwdiensten, op maat gemaakt voor uw behoeften.",
      keywords:
        "uitbouw, woningrenovatie, aanbouw, aannemer Amsterdam, bouwbedrijf Nederland, woninguitbreiding, prefab uitbouw, verbouwen, Persian Top",
      ogTitle: "Uitbouw en Bouwdiensten in Nederland",
      ogDescription:
        "Verander uw woning met professionele uitbouw- en renovatiediensten op maat.",
    },
  };

  const meta = metadata[locale as keyof typeof metadata];

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="1rYXQQIab6jH7wphu_dULqaSjKdOHwx95E24IuoRW0s" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content="Persian Top" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://persiantop.nl/${locale || 'en'}`} />
        {/* <meta property="og:image" content="https://persiantop.nl/og-image.jpg" /> */}
        <title>{meta.title}</title>
      </head>
      <body className="overflow-x-hidden bg-background antialiased">
        <LangProvider locale={locale} messages={messages}>
          <ClientProviders>
            {children}
          </ClientProviders>
        </LangProvider>
      </body>
    </html>
  );
}
