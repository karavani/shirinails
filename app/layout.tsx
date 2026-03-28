import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://shiri-nails.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "מניקור + לק ג׳ל ב-120 ₪ | שירי נייל כפר סבא",
    template: "%s | Shiri Nails",
  },
  description:
    "מניקור + לק ג׳ל ב-120 ₪ בלבד בכפר סבא. שירי – מניקוריסטית מקצועית. בילד אפ, קישוטים ונייל ארט. אסף שמחה 1, כפר סבא. קביעת תור בווצאפ.",
  keywords: [
    "מניקור לק ג׳ל כפר סבא",
    "מניקור לק ג׳ל 120",
    "לק ג׳ל 120 שח",
    "מניקור 120 שח",
    "מניקור",
    "מניקור ג׳ל",
    "לק ג׳ל",
    "לק ג׳ל כפר סבא",
    "מניקור כפר סבא",
    "בילד אפ",
    "בניה בג׳ל",
    "נייל ארט",
    "קישוטי ציפורניים",
    "מניקוריסטית",
    "מניקוריסטית כפר סבא",
    "שירי נייל",
    "Shiri Nails",
    "ציפורניים",
    "פרנץ׳",
    "תוספת אורך",
    "מילוי ג׳ל",
    "כפר סבא",
  ],
  authors: [{ name: "Shiri Nails" }],
  creator: "Shiri Nails",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Shiri Nails",
    locale: "he_IL",
    title: "מניקור + לק ג׳ל ב-120 ₪ | שירי נייל כפר סבא",
    description:
      "מניקור + לק ג׳ל ב-120 ₪ בלבד בכפר סבא. שירי – מניקוריסטית מקצועית. בילד אפ, קישוטים ונייל ארט. קביעת תור בווצאפ.",
    images: [
      {
        url: "/SN light.png",
        width: 800,
        height: 800,
        alt: "Shiri Nails – לוגו",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "מניקור + לק ג׳ל ב-120 ₪ | שירי נייל כפר סבא",
    description:
      "מניקור + לק ג׳ל ב-120 ₪ בלבד בכפר סבא. שירי – מניקוריסטית מקצועית. בילד אפ, קישוטים ונייל ארט.",
    images: ["/SN light.png"],
  },
  icons: {
    icon: "/SN light.png",
    apple: "/SN light.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Shiri Nails",
  description:
    "מניקור + לק ג׳ל ב-120 ₪ בלבד בכפר סבא. מניקוריסטית מקצועית – בילד אפ, בניה בג׳ל, קישוטים ונייל ארט.",
  url: SITE_URL,
  telephone: "+972545824337",
  image: `${SITE_URL}/SN light.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "אסף שמחה 1",
    addressLocality: "כפר סבא",
    addressCountry: "IL",
  },
  priceRange: "₪₪",
  sameAs: ["https://www.instagram.com/shiris_nails/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+972545824337",
    contactType: "customer service",
    availableLanguage: "Hebrew",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "שירותי מניקור",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "מניקור" }, price: "89", priceCurrency: "ILS" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "מניקור + לק ג׳ל בכפר סבא" }, price: "120", priceCurrency: "ILS" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "מילוי בבילד אפ" }, price: "159", priceCurrency: "ILS" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
