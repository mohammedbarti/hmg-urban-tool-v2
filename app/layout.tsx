export const metadata = {
  title: 'HMG Urban Planning Tool',
  description: 'Healthcare infrastructure planning for urban communities',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>{children}</body>
    </html>
  );
}
