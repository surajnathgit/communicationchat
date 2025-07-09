import React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./commoncomponents/header"
import Footer from "./commoncomponents/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SecureChat Pro - Enterprise Communication Platform",
  description:
    "Revolutionize team communication with real-time secure chat, file sharing, video calls, and AI-powered features",
  generator: "v0.dev",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
