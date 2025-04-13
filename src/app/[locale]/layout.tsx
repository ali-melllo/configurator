import "./styles/globals.css";
import ClientProviders from "./ClientProviders";
import { notFound } from 'next/navigation';
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

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="1rYXQQIab6jH7wphu_dULqaSjKdOHwx95E24IuoRW0s" />
        <meta name="description" content="Professional home extensions and construction services. Expand your living space with trusted, high-quality building solutions tailored to your needs." />
        <meta name="keywords" content="home extensions, construction services, remodeling, building contractor, renovation, house expansion, custom homes" />
        <meta name="author" content="Persian Top" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Home Extensions & Construction Services" />
        <meta property="og:description" content="Transform your home with expert construction and extension services tailored to your needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://persiantop.nl" />
        {/* <meta property="og:image" content="https://yourdomain.com/og-image.jpg" /> */}

        <title>Persian Top | Home Extensions & Construction</title>
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
