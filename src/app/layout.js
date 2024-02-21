import "./globals.css";



export const metadata = {
  title: "Cambiar nombre",
  description: "This is a dictionary app!!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{fontFamily: 'Konnect'}}>{children}</body>
    </html>
  );
}
