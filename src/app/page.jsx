import { Box } from "@mui/material"
import HeroSection from "./components/hero-section"
import AboutSection from "./components/about-section"
import FeaturesSection from "./components/features-section"
import WhyChooseUsSection from "./components/why-choose-us-section"
import ChatSecureComparison from "./components/chat-secure-comparison"

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <WhyChooseUsSection />
      <ChatSecureComparison />
    </Box>
  )
}
