import "../../styles/globals.css";



export const metadata = {
  title: "TesoroTérmino",
  description: "This is a dictionary app!!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{fontFamily: 'Konnect'}}>{children}</body>
    </html>
  );
}
