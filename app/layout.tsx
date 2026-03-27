import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shiri Nails | מניקור ופדיקור מקצועי",
  description: "שירי - מניקוריסטית מקצועית. ג'ל, אקריל, עיצוב ייחודי. תורים בווצאפ.",
  keywords: "מניקור, פדיקור, ג'ל, שירי נייל, ציפורניים",
  openGraph: {
    title: "Shiri Nails",
    description: "מניקור ופדיקור מקצועי - שירי",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
