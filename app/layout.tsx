import "@/app/ui/global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={'font-inter antialiased'}>
      <body>{children}</body>
    </html>
  );
}
