"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Tooltip,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import {
  Security as SecurityIcon,
  FlashOn as SpeedIcon,
  Psychology as PsychologyIcon,
  Group as GroupIcon,
  Videocam as VideoCallIcon,
  AttachFile as PaperclipIcon,
  CheckCircle as CheckCircleIcon,
  Lock as LockIcon,
} from "@mui/icons-material";
import ParticleBackground from "../components/particle-background";
import ScrollAnimation from "../components/scroll-animation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const screenshots = [
  "/screenshots/screenshot-1.png",
  "/screenshots/screenshot-2.png",
  "/screenshots/screenshot-4.png",
  "/screenshots/screenshot-3.png",
];

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
      premium: true,
    },
    {
      name: "Video Conferencing",
      explanation: "HD video calls with screen sharing and recording capabilities.",
      icon: VideoCallIcon,
      premium: true,
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

  const screenshotDetails = [
    {
      heading: "Secure Desktop Dashboard",
      icon: <ChatIcon sx={{ color: "#c084fc", fontSize: 36, mr: 1 }} />,
      description:
        "Get a complete overview of your organization’s communication in one place. From direct messages to group collaboration, manage everything with role-based access and powerful admin tools.",
      points: [
        "End-to-end encrypted messaging",
        "Admin & access control panel",
        "Real-time desktop notifications",
        "Smart message search system",
      ],
    },
    {
      heading: "Mobile Messaging Interface",
      icon: <SmartphoneIcon sx={{ color: "#c084fc", fontSize: 36, mr: 1 }} />,
      description:
        "Stay connected on the go with our intuitive mobile app. Real-time notifications, media sharing, and smart chat features ensure smooth communication — anytime, anywhere.",
      points: [
        "Optimized for all mobile devices",
        "Push notifications with sound/vibration",
        "Media sharing with auto compression",
        "Battery-efficient background sync",
      ],
    },
    {
      heading: "Group Collaboration Workspace",
      icon: <GroupWorkIcon sx={{ color: "#c084fc", fontSize: 36, mr: 1 }} />,
      description:
        "Create group channels for departments, teams, or projects. Use mentions, pinned messages, and custom permissions to collaborate efficiently and keep discussions focused.",
      points: [
        "Unlimited members in group chats",
        "Message pinning & reactions",
        "Custom permissions for moderation",
        "Role-specific announcement channels",
      ],
    },
    {
      heading: "File Sharing & Preview Center",
      icon: <AttachFileIcon sx={{ color: "#c084fc", fontSize: 36, mr: 1 }} />,
      description:
        "Easily share files across chats with built-in virus scanning and version control. Preview documents, track sharing history, and keep sensitive data secure within your organization.",
      points: [
        "Preview PDFs, Docs, Images instantly",
        "Antivirus scan before upload",
        "Version control with rollback",
        "Detailed access & download logs",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isContentComplete, setIsContentComplete] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;

      const section = sectionRef.current;
      const container = containerRef.current;
      const rect = section.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const winH = window.innerHeight;
      const scrollTop = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      const shouldBeSticky = scrollTop >= sectionTop - winH * 0.2;
      setIsSticky(shouldBeSticky);

      if (shouldBeSticky) {
        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (scrollTop - sectionTop + winH * 0.5) / (sectionHeight * 1.2)
          )
        );

        if (scrollProgress >= 0.99) {
          setIsContentComplete(true);
          return;
        } else {
          setIsContentComplete(false);
        }

        const newIndex = Math.min(
          screenshotDetails.length - 1,
          Math.floor(scrollProgress * screenshotDetails.length * 1.2)
        );
        setCurrentIndex(newIndex >= 0 ? newIndex : 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [screenshotDetails.length]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #312e81 100%)",
        position: "relative",
        overflow: "hidden",
        pt: 2,
      }}
      ref={containerRef}
    >
      <Box sx={{ position: "relative", zIndex: 10, pt: 10, pb: 12 }}>
        <Container maxWidth="xl">
          <ParticleBackground count={50} speed={0.3} />
          <ScrollAnimation direction="up" distance={50} duration={0.8} delay={0.1}>
            <Grid container spacing={4} alignItems="center" justifyContent={"center"}>
              <Grid item size={{ xs: 12, md: 12 }}>
                <ScrollAnimation direction="up" distance={30} duration={0.7} delay={0.3}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      lineHeight: { xs: 1.1, sm: 1.2 },
                      textAlign: "center"
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        background: "linear-gradient(to right, #c4b5fd, #f9a8d4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Communication - Chat
                    </Box>
                  </Typography>
                </ScrollAnimation>

                <ScrollAnimation direction="up" distance={30} duration={0.6} delay={0.4}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#e9d5ff",
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      lineHeight: { xs: 1.5, sm: 1.6 },
                      textAlign: "center",
                    }}
                  >
                    Transform your team communication with intelligent automation. Communication - Chat Pro
                    streamlines collaboration from messaging to file sharing, working around the clock to enhance your
                    productivity.
                  </Typography>
                </ScrollAnimation>
              </Grid>
              <Grid item size={{ xs: 12, md: 10 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  style={{ textAlign: "center" }}
                >
                  <video
                    src="/videos/chatvideo2.mp4"
                    autoPlay
                    loop
                    muted
                    style={{
                      width: "100%",
                      borderRadius: "16px",
                      border: "3px solid black",
                      boxShadow: "0 0 20px rgba(0,0,0,0.4)",
                    }}
                  />
                </motion.div>
              </Grid>
            </Grid>
          </ScrollAnimation>
        </Container>
      </Box>
      <Box
        ref={sectionRef}
        sx={{
          position: "relative",
          height: `${screenshots.length * 100}vh`,
          pointerEvents: isSticky && !isContentComplete ? "none" : "auto",
        }}
      >
        <Box
          sx={{
            position: isSticky ? "fixed" : "relative",
            top: isSticky ? 0 : "auto",
            left: 0,
            right: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9,
            opacity: isSticky && isContentComplete ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
        >
          <ParticleBackground count={50} speed={0.3} />
          <Container maxWidth="xl">
            <Grid container spacing={2} alignItems="center">
              <Grid item size={{ xs: 12, md: 6 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      {screenshotDetails[currentIndex].icon}
                      <Typography variant="h4" sx={{ color: "white" }}>
                        {screenshotDetails[currentIndex].heading}
                      </Typography>
                    </Box>
                    <Typography sx={{ color: "#e9d5ff", mb: 2 }}>
                      {screenshotDetails[currentIndex].description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: "#e9d5ff" }}>
                      {screenshotDetails[currentIndex].points.map((point, idx) => (
                        <Box
                          key={idx}
                          sx={{ display: "flex", alignItems: "center", mb: 1 }}
                        >
                          <CheckCircleIcon
                            sx={{ color: "#c084fc", fontSize: 20, mr: 1 }}
                          />
                          <Typography component="li">{point}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </motion.div>
                </AnimatePresence>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`img-${currentIndex}`}
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Box
                      component="img"
                      src={screenshots[currentIndex]}
                      alt={screenshotDetails[currentIndex].heading}
                      sx={{
                        width: {
                          xs: "100%", 
                          sm: "90%", 
                          md: "100%", 
                        },
                        height: {
                          xs: "auto", 
                          md: "65vh", 
                        },
                        borderRadius: 4,
                        objectFit: "contain",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box sx={{ position: "relative", zIndex: 10, py: 6, background: "linear-gradient(to right, #5b21b6, #4c1d95)", }}>
        <Container maxWidth="xl">
          <ParticleBackground count={50} speed={0.3} />
          <ScrollAnimation direction="up" distance={50} duration={0.8} delay={0.1}>
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: "bold", color: "white", mb: 2 }}
              >
                Introducing Our Product
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="/screenshots/mobilimg.png"
                  style={{ maxWidth: "50%", height: "90vh" }}
                  alt="Communication - Chat Product"
                />
              </Box>
            </Box>
          </ScrollAnimation>
          <ScrollAnimation direction="up" distance={40} duration={0.7} delay={0.1}>
            <Box sx={{ mb: 10 }}>
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography variant="h3" sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "white", mb: 2 }}>
                  Detailed Features
                </Typography>
                <Typography sx={{ color: "#e9d5ff" }}>Explore what makes Communication - Chat special</Typography>
              </Box>
              <ScrollAnimation direction="up" distance={60} duration={0.7} staggerDelay={0.15}>
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
                            width: { xs: "100%", sm: "100%", md: 400, lg: 400 },
                            minHeight: 210,
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
                                {feature.premium && (
                                  <Tooltip
                                    title={
                                      <Box sx={{ p: 2, bgcolor: "white", borderRadius: 2, maxWidth: 300 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                          <LockIcon sx={{ mr: 1, color: "#f472b6" }} />
                                          <Typography sx={{ color: "#6b21a8", fontWeight: "bold" }}>
                                            PREMIUM FEATURE
                                          </Typography>
                                        </Box>
                                        <Typography sx={{ color: "#6b21a8", mb: 1 }}>
                                          Upgrade to a business plan today to unlock this premium feature for 10% off.
                                        </Typography>
                                        <Box sx={{ textAlign: "center" }}>
                                          <Box
                                            sx={{
                                              bgcolor: "#dbeafe",
                                              color: "#6b21a8",
                                              px: 2,
                                              py: 1,
                                              borderRadius: 9999,
                                              display: "inline-block",
                                              cursor: "pointer",
                                              "&:hover": { bgcolor: "#bfdbfe" },
                                            }}
                                          >
                                            Upgrade
                                          </Box>
                                        </Box>
                                      </Box>
                                    }
                                    placement="top"
                                    arrow
                                    enterDelay={200}
                                    leaveDelay={100}
                                    sx={{
                                      "& .MuiTooltip-tooltip": {
                                        bgcolor: "transparent",
                                        boxShadow: 2,
                                      },
                                      "& .MuiTooltip-arrow": {
                                        color: "white",
                                      },
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        ml: 1,
                                        display: "inline-block",
                                        bgcolor: "#f472b6",
                                        color: "white",
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 9999,
                                        fontSize: 12,
                                        cursor: "pointer",
                                      }}
                                    >
                                      PREMIUM FEATURE
                                    </Box>
                                  </Tooltip>
                                )}
                              </Typography>
                            </Box>
                            <Typography sx={{ color: "#e9d5ff", lineHeight: "1.5" }}>{feature.explanation}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </ScrollAnimation>
            </Box>
          </ScrollAnimation>
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
                    <Grid item xs={12} md={6}>
                      {advantages.slice(0, 3).map((advantage, index) => (
                        <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 2 }}>
                          <CheckCircleIcon sx={{ fontSize: 20, color: "#4ade80", mt: "3px" }} />
                          <Typography sx={{ color: "#e9d5ff", lineHeight: 1.6 }}>{advantage}</Typography>
                        </Box>
                      ))}
                    </Grid>
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
          <ScrollAnimation scaleRange={[0.95, 1]} threshold={0.2}>
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
          </ScrollAnimation>
        </Container>
      </Box>
    </Box>
  );
}

export default ProductDemo;