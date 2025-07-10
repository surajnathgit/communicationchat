import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  Lock as SecurityIcon,
  FlashOn as SpeedIcon,
  Psychology as PsychologyIcon,
  Group as GroupIcon,
  Videocam as VideoCallIcon,
  AttachFile as PaperclipIcon,
  CheckCircle as CheckCircleIcon,
  PlayArrow as PlayIcon,
} from "@mui/icons-material";
import ParticleBackground from "../components/particle-background";
import ScrollAnimation from "../components/scroll-animation";
import StaggeredScrollAnimation from "../components/staggered-scroll-animation";
import { ScaleScrollAnimation } from "../components/advanced-scroll-animations";

function ProductDemo() {
  const features = [
    {
      name: "End-to-End Encryption",
      explanation: "Military-grade encryption ensures your messages are completely secure and private.",
      icon: SecurityIcon,
    },
    {
      name: "Real-time Messaging",
      explanation: "Instant message delivery with typing indicators and read receipts.",
      icon: SpeedIcon,
    },
    {
      name: "AI-Powered Features",
      explanation: "Smart suggestions, auto-translation, and intelligent note-taking.",
      icon: PsychologyIcon,
    },
    {
      name: "Group Collaboration",
      explanation: "Unlimited participants with advanced moderation and organization tools.",
      icon: GroupIcon,
    },
    {
      name: "Video Conferencing",
      explanation: "HD video calls with screen sharing and recording capabilities.",
      icon: VideoCallIcon,
    },
    {
      name: "File Management",
      explanation: "Secure file sharing with virus scanning and version control.",
      icon: PaperclipIcon,
    },
  ];

  const advantages = [
    "Zero-knowledge architecture - we can't see your data",
    "Cross-platform compatibility (Web, iOS, Android, Desktop)",
    "Offline message sync when connection is restored",
    "Custom integrations with popular business tools",
    "Advanced search with AI-powered content discovery",
    "Compliance with GDPR, HIPAA, and SOC 2 standards",
  ];

  const comparisonData = [
    {
      feature: "Message Encryption",
      ourProduct: "End-to-End",
      competitor1: "Transport Only",
      competitor2: "End-to-End",
    },
    {
      feature: "File Storage",
      ourProduct: "Unlimited",
      competitor1: "10GB",
      competitor2: "100GB",
    },
    {
      feature: "AI Features",
      ourProduct: "Advanced",
      competitor1: "Basic",
      competitor2: "None",
    },
    {
      feature: "Video Quality",
      ourProduct: "4K",
      competitor1: "1080p",
      competitor2: "720p",
    },
    {
      feature: "Support",
      ourProduct: "24/7",
      competitor1: "Business Hours",
      competitor2: "Email Only",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #312e81 100%)",
        position: "relative",
        overflow: "hidden",
        pt: 8,
      }}
    >
      {/* Particle Background */}
      <ParticleBackground count={50} speed={0.3} />

      <Box sx={{ position: "relative", zIndex: 10, py: 12 }}>
        <Container maxWidth="xl">
          {/* Hero Section */}
          <ScrollAnimation direction="up" distance={50} duration={0.8} delay={0.1}>
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: "bold", color: "white", mb: 3 }}
              >
                Product{" "}
                <span
                  style={{
                    background: "linear-gradient(to right, #c4b5fd, #f9a8d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Demo
                </span>
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: "1.25rem", color: "#e9d5ff", maxWidth: "32rem", mx: "auto", mb: 4 }}
              >
                Experience the power of Communication - Chat with our interactive demonstration
              </Typography>

              {/* Demo Video/Image Placeholder */}
              <Card
                sx={{
                  maxWidth: 896,
                  mx: "auto",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  mb: 8,
                  borderRadius: 30,
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: 1,
                      aspectRatio: "16/9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(to bottom right, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))",
                      }}
                    />
                    <Box sx={{ textAlign: "center", color: "white", zIndex: 10 }}>
                      <PlayIcon sx={{ fontSize: 80, mb: 2, opacity: 0.8 }} />
                      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                        Product Demo Video
                      </Typography>
                      <Typography sx={{ color: "#e9d5ff" }}>See Communication - Chat in action</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </ScrollAnimation>

          {/* Screenshots Section */}
          <ScrollAnimation direction="up" distance={40} duration={0.7} delay={0.2}>
            <Box sx={{ mb: 10 }}>
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography variant="h3" sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "white", mb: 2 }}>
                  Product Screenshots
                </Typography>
                <Typography sx={{ color: "#e9d5ff" }}>Get a closer look at our interface and features</Typography>
              </Box>
              <StaggeredScrollAnimation direction="up" distance={50} duration={0.6} staggerDelay={0.1}>
                <Grid container spacing={3} justifyContent="center">
                  {[1, 2, 3, 4].map((item) => (
                    <Grid item xs={12} sm={6} md={6} lg={3} key={item}>
                      <Card
                        sx={{
                          width: 280,
                          height: 200,
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(4px)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          transition: "all 0.3s",
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            transform: "translateY(-4px)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 0, height: "100%" }}>
                          <Box
                            sx={{
                              height: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Typography sx={{ color: "#e9d5ff", fontSize: "1.1rem", fontWeight: 500 }}>
                              Screenshot {item}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </StaggeredScrollAnimation>
            </Box>
          </ScrollAnimation>

          {/* Detailed Features */}
          <ScrollAnimation direction="up" distance={40} duration={0.7} delay={0.1}>
            <Box sx={{ mb: 10 }}>
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography variant="h3" sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "white", mb: 2 }}>
                  Detailed Features
                </Typography>
                <Typography sx={{ color: "#e9d5ff" }}>Explore what makes Communication - Chat special</Typography>
              </Box>
              <StaggeredScrollAnimation direction="up" distance={60} duration={0.7} staggerDelay={0.15}>
                <Grid container spacing={3} justifyContent="center">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={4}
                        key={index}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Card
                          sx={{
                            width: {xs:"100%", sm:"100%", md:400, lg:400},
                            minHeight: 220,
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(4px)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            transition: "all 0.3s",
                            "&:hover": {
                              backgroundColor: "rgba(255, 255, 255, 0.2)",
                              transform: "translateY(-4px)",
                            },
                          }}
                        >
                          <CardContent sx={{ p: 3 }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                              <Box
                                sx={{
                                  width: 48,
                                  height: 48,
                                  background: "linear-gradient(to right, #8b5cf6, #ec4899)",
                                  borderRadius: 2,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  mr: 2,
                                  transition: "transform 0.3s",
                                  "&:hover": { transform: "scale(1.1)" },
                                }}
                              >
                                <IconComponent sx={{ fontSize: 24, color: "white" }} />
                              </Box>
                              <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
                                {feature.name}
                              </Typography>
                            </Box>
                            <Typography sx={{ color: "#e9d5ff", lineHeight: "1.5" }}>{feature.explanation}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </StaggeredScrollAnimation>
            </Box>
          </ScrollAnimation>

          {/* How It's Different */}
          <ScrollAnimation direction="up" distance={40} duration={0.7} delay={0.2}>
            <Box sx={{ mb: 10 }}>
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography variant="h3" sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "white", mb: 2 }}>
                  How It's Different
                </Typography>
                <Typography sx={{ color: "#e9d5ff" }}>
                  What sets Communication - Chat apart from the competition
                </Typography>
              </Box>
<Card
  sx={{
    maxWidth: 1000,
    mx: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(4px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  }}
>
  <CardContent sx={{ p: 4 }}>
    <Grid container spacing={4}>
      {/* Left Column */}
      <Grid item xs={12} md={6}>
        {advantages.slice(0, 3).map((advantage, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 2 }}>
            <CheckCircleIcon sx={{ fontSize: 20, color: "#4ade80", mt: "3px" }} />
            <Typography sx={{ color: "#e9d5ff", lineHeight: 1.6 }}>{advantage}</Typography>
          </Box>
        ))}
      </Grid>

      {/* Right Column */}
      <Grid item xs={12} md={6}>
        {advantages.slice(3, 6).map((advantage, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 2 }}>
            <CheckCircleIcon sx={{ fontSize: 20, color: "#4ade80", mt: "3px" }} />
            <Typography sx={{ color: "#e9d5ff", lineHeight: 1.6 }}>{advantage}</Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  </CardContent>
</Card>

            </Box>
          </ScrollAnimation>

          {/* Comparison Table */}
          <ScaleScrollAnimation scaleRange={[0.95, 1]} threshold={0.2}>
            <Box>
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography variant="h3" sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "white", mb: 2 }}>
                  Feature Comparison
                </Typography>
                <Typography sx={{ color: "#e9d5ff" }}>See how we stack up against the competition</Typography>
              </Box>
              <Card
                sx={{
                  maxWidth: 1200,
                  mx: "auto",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  overflow: "hidden",
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow sx={{ background: "linear-gradient(to right, #8b5cf6, #ec4899)" }}>
                          <TableCell sx={{ color: "white", fontWeight: "bold", p: 2 }}>Feature</TableCell>
                          <TableCell sx={{ textAlign: "center", color: "white", fontWeight: "bold", p: 2 }}>
                            <Box
                              sx={{
                                backgroundColor: "white",
                                color: "#8b5cf6",
                                px: 2,
                                py: 1,
                                borderRadius: "9999px",
                                fontSize: "0.875rem",
                                fontWeight: "bold",
                                display: "inline-block",
                              }}
                            >
                              Communication - Chat
                            </Box>
                          </TableCell>
                          <TableCell sx={{ textAlign: "center", color: "white", fontWeight: "bold", p: 2 }}>
                            Slack
                          </TableCell>
                          <TableCell sx={{ textAlign: "center", color: "white", fontWeight: "bold", p: 2 }}>
                            Microsoft Teams
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {comparisonData.map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              backgroundColor: index % 2 === 0 ? "rgba(255, 255, 255, 0.05)" : "transparent",
                              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                            }}
                          >
                            <TableCell sx={{ color: "white", fontWeight: "medium", p: 2 }}>{row.feature}</TableCell>
                            <TableCell sx={{ textAlign: "center", p: 2 }}>
                              <Box
                                sx={{
                                  background: "linear-gradient(to right, #22c55e, #059669)",
                                  color: "white",
                                  px: 2,
                                  py: 1,
                                  borderRadius: "9999px",
                                  fontSize: "0.875rem",
                                  fontWeight: "medium",
                                  display: "inline-block",
                                }}
                              >
                                {row.ourProduct}
                              </Box>
                            </TableCell>
                            <TableCell sx={{ textAlign: "center", color: "#e9d5ff", p: 2 }}>
                              <Box
                                sx={{
                                  px: 1.5,
                                  py: 0.5,
                                  background: "rgba(249, 115, 22, 0.2)",
                                  color: "#fed7aa",
                                  borderRadius: "9999px",
                                  fontSize: "0.875rem",
                                  display: "inline-block",
                                }}
                              >
                                {row.competitor1}
                              </Box>
                            </TableCell>
                            <TableCell sx={{ textAlign: "center", color: "#e9d5ff", p: 2 }}>
                              <Box
                                sx={{
                                  px: 1.5,
                                  py: 0.5,
                                  background: "rgba(59, 130, 246, 0.2)",
                                  color: "#bfdbfe",
                                  borderRadius: "9999px",
                                  fontSize: "0.875rem",
                                  display: "inline-block",
                                }}
                              >
                                {row.competitor2}
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Box>
          </ScaleScrollAnimation>

          
        </Container>
      </Box>
    </Box>
  );
}

export default ProductDemo;