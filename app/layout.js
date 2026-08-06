import "./globals.css";

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
