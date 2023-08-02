import "./globals.css";

import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

import { LANGS } from "@/config/constants";

export const metadata = {
  title: "Pokesearch - Next",
  description: "Next 13 Sample App with server components, i18n and cypress tests",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!LANGS.includes(locale)) notFound();

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className="h-screen overflow-y-hidden">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
