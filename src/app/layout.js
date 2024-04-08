import "../../styles/globals.css";
import Loading from "./loading";
import { Suspense } from "react";

export const metadata = {
  title: "TesoroTérmino",
  description: "This is a dictionary app!!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{fontFamily: 'Konnect'}}>
        <Suspense fallback={<Loading/>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
