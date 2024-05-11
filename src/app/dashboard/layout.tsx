import { Nav } from "@/components/dashboard-components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Nav />

        {children}
      </body>
    </html>
  );
}
