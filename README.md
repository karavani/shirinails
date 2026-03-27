# Shiri Nails 💅

דף נחיתה מודרני למניקוריסטית שירי — בנוי עם Next.js, Tailwind CSS ו-Framer Motion.

## טכנולוגיות

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — אנימציות scroll-triggered וטרנזישנים חלקים
- **Lucide React** — אייקונים

## סעיפי הדף

| סעיף | תיאור |
|------|--------|
| Hero | תמונת רקע עם parallax, כותרת אנימציה ו-CTA לווצאפ |
| שירותים | 6 כרטיסי שירות עם hover animations |
| גלריה | גריד masonry עם lightbox ולינק לאינסטגרם |
| ביקורות | 3 עדויות של לקוחות |
| יצירת קשר | כפתורי ווצאפ ואינסטגרם גדולים |

## התקנה מקומית

```bash
npm install
npm run dev
```

פתחי [http://localhost:3000](http://localhost:3000) בדפדפן.

## פריסה ל-Vercel

### אפשרות א׳ — Vercel CLI

```bash
npm install -g vercel
vercel
```

### אפשרות ב׳ — GitHub + Vercel

1. העלי את הפרויקט ל-GitHub
2. היכנסי ל-[vercel.com](https://vercel.com) → **New Project**
3. בחרי את הריפו → לחצי **Deploy**

## עדכון פרטי התקשורת

חפשי בקוד את:
- `https://wa.me/972501234567` — החליפי במספר האמיתי
- `https://instagram.com/shirinails` — החליפי בשם המשתמש האמיתי

## מבנה הפרויקט

```
app/
├── components/
│   ├── AnimatedSection.tsx   # wrapper לאנימציות scroll
│   ├── Navbar.tsx            # ניווט קבוע + responsive
│   ├── Hero.tsx              # סעיף Hero עם parallax
│   ├── Services.tsx          # כרטיסי שירותים
│   ├── Gallery.tsx           # גלריה + lightbox
│   ├── Testimonials.tsx      # ביקורות לקוחות
│   ├── Contact.tsx           # יצירת קשר
│   ├── Footer.tsx            # פוטר
│   └── FloatingWhatsApp.tsx  # כפתור ווצאפ צף
├── globals.css
├── layout.tsx
└── page.tsx
```
