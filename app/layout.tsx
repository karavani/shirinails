import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://shiri-nails.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "מניקור + לק ג׳ל ב-130 ₪ | שירי נייל כפר סבא",
    template: "%s | Shiri Nails",
  },
  description:
    "מניקור + לק ג׳ל ב-130 ₪ בלבד בכפר סבא. שירי – מניקוריסטית מקצועית. בילד אפ, קישוטים ונייל ארט. כפר סבא. קביעת תור בווצאפ.",
  keywords: [
    "מניקור לק ג׳ל כפר סבא",
    "מניקור לק ג׳ל 130",
    "לק ג׳ל 130 שח",
    "מניקור 130 שח",
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
    title: "מניקור + לק ג׳ל ב-130 ₪ | שירי נייל כפר סבא",
    description:
      "מניקור + לק ג׳ל ב-130 ₪ בלבד בכפר סבא. שירי – מניקוריסטית מקצועית. בילד אפ, קישוטים ונייל ארט. קביעת תור בווצאפ.",
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
    title: "מניקור + לק ג׳ל ב-130 ₪ | שירי נייל כפר סבא",
    description:
      "מניקור + לק ג׳ל ב-130 ₪ בלבד בכפר סבא. שירי – מניקוריסטית מקצועית. בילד אפ, קישוטים ונייל ארט.",
    images: ["/SN light.png"],
  },
  icons: {
    icon: "/SN light.png",
    apple: "/SN light.png",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: "Shiri Nails",
    description:
      "מניקור + לק ג׳ל ב-130 ₪ בלבד בכפר סבא. מניקוריסטית מקצועית – בילד אפ, בניה בג׳ל, קישוטים ונייל ארט.",
    url: SITE_URL,
    telephone: "+972545824337",
    image: `${SITE_URL}/SN light.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "כפר סבא",
      addressCountry: "IL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.1759,
      longitude: 34.9078,
    },
    areaServed: {
      "@type": "City",
      name: "כפר סבא",
    },
    openingHours: ["Su-Th 09:00-20:00", "Fr 09:00-14:00"],
    priceRange: "₪",
    sameAs: ["https://www.instagram.com/shiris_nails/"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+972545824337",
      contactType: "customer service",
      availableLanguage: "Hebrew",
      contactOption: "ByAppointment",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "שירותי מניקור",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "מניקור" }, price: "89", priceCurrency: "ILS" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "מניקור + לק ג׳ל בכפר סבא" }, price: "130", priceCurrency: "ILS" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "מילוי בבילד אפ" }, price: "159", priceCurrency: "ILS" },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "כמה עולה מניקור + לק ג׳ל בכפר סבא?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "בשירי נייל מניקור + לק ג׳ל עולה 130 ₪ בלבד, כולל מע״מ. המחיר כולל הכנת הציפורן, לק ג׳ל בצבע לבחירתך ועיגון.",
        },
      },
      {
        "@type": "Question",
        name: "איך קובעים תור אצל שירי נייל?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "קביעת תור מתבצעת דרך וואטסאפ בלבד. שולחים הודעה למספר 054-5824337 ומתאמים יום ושעה שמתאימים.",
        },
      },
      {
        "@type": "Question",
        name: "איפה נמצאת הקליניקה של שירי נייל?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "הקליניקה נמצאת בכפר סבא. הכתובת המדויקת נמסרת עם קביעת התור.",
        },
      },
      {
        "@type": "Question",
        name: "מה זה בילד אפ לציפורניים?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "בילד אפ הוא חומר קשיח המעניק חוזק ועובי לציפורן, שונה מבייס רגיל. מתאים להארכה, שיקום ציפורניים שבירות, או לאלו שרוצות ציפורן ארוכה ועמידה לאורך זמן.",
        },
      },
      {
        "@type": "Question",
        name: "האם המחירים כוללים מע״מ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "כן, כל המחירים בשירי נייל כוללים מע״מ ואין תוספות מפתיעות.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="h-full">
      <head>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
