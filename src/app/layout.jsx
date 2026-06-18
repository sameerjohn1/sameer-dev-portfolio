import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '../context/ThemeContext';
import { ToastContainer } from 'react-toastify';
import Script from 'next/script';
import dynamic from 'next/dynamic';

const Cursor = dynamic(() => import('../components/Cursor'), { ssr: false });

export const metadata = {
  metadataBase: new URL("https://portfolio-82me.vercel.app"),
  title: "Sameer John — React.js & Next.js Developer | MERN Stack",
  description:
    "Frontend-focused Full-Stack Developer specializing in React.js, Next.js, TypeScript, Redux Toolkit, and TanStack Query. MERN Stack developer with hands-on production experience.",
  keywords: [
    "Sameer John",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "TypeScript",
    "Redux Toolkit",
    "TanStack Query",
    "Node.js",
    "MongoDB",
    "Portfolio",
  ],
  authors: [{ name: "Sameer John" }],
  creator: "Sameer John",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-82me.vercel.app",
    title: "Sameer John — React.js & Next.js Developer",
    description:
      "Frontend-focused Full-Stack Developer specializing in React.js, Next.js, TypeScript, Redux Toolkit, and MERN Stack. Check out my projects and work experience.",
    siteName: "Sameer John Portfolio",
    images: [
      {
        url: "/assets/images/portimg.png",
        width: 1200,
        height: 630,
        alt: "Sameer John - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer John — React.js & Next.js Developer",
    description:
      "Frontend-focused Full-Stack Developer | React.js | Next.js | TypeScript | MERN Stack",
    images: ["/assets/images/portimg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/sj-crown-logo.avif",
    apple: "/logo192.png",
  },
};

export const viewport = {
  themeColor: "#0a192f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Cursor />
          {children}
          <ToastContainer position="top-right" autoClose={5000} theme="dark" />
        </ThemeProvider>
        <Script
          src="https://ai-customer-support-b4dw.vercel.app/chatBot.js"
          data-owner-id="usr_110976091308425731"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
