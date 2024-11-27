
import "./globals.css"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Menu />
        {children}
        <Footer />
        </body>
    </html>
  )
}
