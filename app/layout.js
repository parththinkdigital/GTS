import "./globals.css";
import SiteShell from "./components/SiteShell";

export const metadata = {
  title: "GTS Finlabs",
  description: "GTS Finlabs — Global Trade Solutions",
  icons: {
    icon: "/gts-favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
