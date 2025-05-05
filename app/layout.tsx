// app/layout.tsx

export const metadata = {
  title: 'HMG Urban Planning Tool',
  description: 'Healthcare planning based on urban data inputs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
