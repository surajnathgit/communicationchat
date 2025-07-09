"use client"
import { useEffect, useState } from "react"
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  TextField,
  IconButton,
  Grid,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { ArrowForward, PlayArrow, Security, Bolt, People, Star, SmartToy, Message } from "@mui/icons-material"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import ParticleBackground from "./particle-background"
import ScrollAnimation from "./scroll-animation"
import StaggeredScrollAnimation from "./staggered-scroll-animation"

const ChatAnimation = () => {
  const [messages, setMessages] = useState([])
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  const chatMessages = [
    {
      id: 1,
      type: "user",
      text: "Hey Communication - Chat Pro, can you help me schedule a team meeting?",
      delay: 1000,
    },
    {
      id: 2,
      type: "bot",
      text: "Absolutely! I can schedule that for you. What time works best for your team?",
      delay: 2000,
    },
    {
      id: 3,
      type: "user",
      text: "Tomorrow at 2 PM would be perfect",
      delay: 1500,
    },
    {
      id: 4,
      type: "bot",
      text: "✅ Meeting scheduled for tomorrow at 2 PM. I've sent calendar invites to all team members!",
      delay: 2500,
    },
    {
      id: 5,
      type: "user",
      text: "Thanks! Can you also summarize our last project meeting?",
      delay: 1800,
    },
    {
      id: 6,
      type: "bot",
      text: "Here's a quick summary: Key decisions made, action items assigned, and next steps planned. Full report sent to your email! 📊",
      delay: 3000,
    },
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const timer = setTimeout(() => {
      if (currentMessageIndex < chatMessages.length) {
        setIsTyping(true)

        setTimeout(() => {
          setMessages((prev) => [...prev, chatMessages[currentMessageIndex]])
          setIsTyping(false)
          setCurrentMessageIndex((prev) => prev + 1)
        }, chatMessages[currentMessageIndex].delay)
      } else {
        setTimeout(() => {
          setMessages([])
          setCurrentMessageIndex(0)
        }, 3000)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [currentMessageIndex, isClient])

  if (!isClient) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box
        sx={{
          maxWidth: 500,
          width: { xs: 300, sm: 350, md: 400 },
          mx: "auto",
        }}
      >
        <Card
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: { xs: 2, sm: 4 },
            overflow: "hidden",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          {/* Chat Header */}
          <Box
            sx={{
              background: "linear-gradient(to right, #8b5cf6, #ec4899)",
              p: { xs: 1.5, sm: 2, md: 2.5 },
              color: "white",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1.5, sm: 2 } }}>
              <Box sx={{ position: "relative" }}>
                <Avatar
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                    width: { xs: 32, sm: 40, md: 48 },
                    height: { xs: 32, sm: 40, md: 48 },
                  }}
                >
                  <SmartToy sx={{ fontSize: { xs: 18, sm: 24, md: 28 } }} />
                </Avatar>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: -2, sm: -4 },
                    right: { xs: -2, sm: -4 },
                    width: { xs: 10, sm: 12, md: 16 },
                    height: { xs: 10, sm: 12, md: 16 },
                    bgcolor: "#4ade80",
                    borderRadius: "50%",
                    border: "2px solid white",
                    animation: "pulse 1.5s infinite",
                    "@keyframes pulse": {
                      "0%": { transform: "scale(1)", opacity: 1 },
                      "50%": { transform: "scale(1.2)", opacity: 0.7 },
                      "100%": { transform: "scale(1)", opacity: 1 },
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.25rem" } }}
                >
                  Communication - Chat Pro
                </Typography>
                <Typography variant="caption" sx={{ fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.75rem" } }}>
                  AI Assistant • Online
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Chat Messages */}
          <Box
            sx={{
              height: { xs: 250, sm: 300, md: 384 },
              overflowY: "auto",
              p: { xs: 1, sm: 1.5, md: 2 },
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1.5, sm: 2 },
            }}
          >
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  style={{ display: "flex", justifyContent: message.type === "user" ? "flex-end" : "flex-start" }}
                >
                  <Box
                    sx={{
                      maxWidth: { xs: "85%", sm: "80%" },
                      px: { xs: 1.2, sm: 1.5, md: 2 },
                      py: { xs: 1, sm: 1.2, md: 1.5 },
                      borderRadius: { xs: 3, sm: 4 },
                      background: message.type === "user" ? "linear-gradient(to right, #8b5cf6, #ec4899)" : "#f3f4f6",
                      color: message.type === "user" ? "white" : "text.primary",
                      boxShadow: 1,
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" } }}>
                      {message.text}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Box
                  sx={{
                    bgcolor: "#f3f4f6",
                    px: { xs: 1.2, sm: 1.5, md: 2 },
                    py: { xs: 1, sm: 1.2, md: 1.5 },
                    borderRadius: { xs: 3, sm: 4 },
                  }}
                >
                  <Box sx={{ display: "flex", gap: 0.5 }}>
                    {[0, 0.2, 0.4].map((delay, i) => (
                      <Box
                        key={i}
                        sx={{
                          width: { xs: 5, sm: 6, md: 8 },
                          height: { xs: 5, sm: 6, md: 8 },
                          bgcolor: "#9ca3af",
                          borderRadius: "50%",
                          animation: `bounce 1.2s infinite ${delay}s`,
                          "@keyframes bounce": {
                            "0%, 80%, 100%": { transform: "scale(0)" },
                            "40%": { transform: "scale(1)" },
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>

          {/* Chat Input */}
          <Box
            sx={{
              p: { xs: 1, sm: 1.5, md: 2 },
              bgcolor: "rgba(249, 250, 251, 0.8)",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(4px)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 0.5, sm: 1 },
                bgcolor: "white",
                borderRadius: "50px",
                px: { xs: 1, sm: 1.5, md: 2 },
                py: { xs: 0.5, sm: 0.8, md: 1 },
                boxShadow: 1,
              }}
            >
              <Message
                sx={{
                  color: "#9ca3af",
                  fontSize: { xs: 12, sm: 14, md: 16 },
                }}
              />
              <TextField
                placeholder="Type your message..."
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.875rem" },
                    color: "#4b5563",
                  },
                }}
                inputProps={{ readOnly: true }}
              />
              <IconButton
                sx={{
                  background: "linear-gradient(to right, #8b5cf6, #ec4899)",
                  color: "white",
                  borderRadius: "50%",
                  p: { xs: 0.5, sm: 0.75, md: 1 },
                  minWidth: "auto",
                  width: { xs: 28, sm: 32, md: 40 },
                  height: { xs: 28, sm: 32, md: 40 },
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "rotate(20deg)",
                  },
                }}
              >
                <ArrowForward sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }} />
              </IconButton>
            </Box>
          </Box>
        </Card>
      </Box>
    </motion.div>
  )
}

const HeroSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
    }),
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  }

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
        background: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #312e81 100%)",
        position: "relative",
        pt: { xs: "6rem", sm: "6rem", md: "6rem", lg: "2rem" },
      }}
    >
      {/* Particle Background */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <ParticleBackground count={isMobile ? 30 : isTablet ? 45 : 60} speed={0.3} />
      </motion.div>

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to right, rgba(76, 29, 149, 0.5), transparent)",
        }}
      />

      <Container maxWidth={false} sx={{ position: "relative", height: "100%" }}>
        <Box
          sx={{
            pl: { xs: 0, sm: 4, md: 4, lg: 4 },
            pr: { xs: 0, sm: 4, md: 4, lg: 4 },
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container justifyContent="center" spacing={{ xs: 2, sm: 2, md: 4, lg: 4 }} sx={{ width: "100%" }}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  zIndex: 10,
                  textAlign: { xs: "center", md: "center", lg: "left" },
                  justifyContent: { xs: "center", md: "center", lg: "flex-start" },
                  alignItems: { xs: "center", md: "center", lg: "flex-start" },
                }}
              >
                {/* Badge */}
                <ScrollAnimation direction="up" distance={30} duration={0.6} delay={0.1}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      px: { xs: 1.5, sm: 2, md: 2.5 },
                      py: { xs: 0.8, sm: 1, md: 1.2 },
                      borderRadius: "9999px",
                      backgroundColor: "rgba(168, 85, 247, 0.2)",
                      border: "1px solid rgba(167, 139, 250, 0.3)",
                      backdropFilter: "blur(4px)",
                      alignSelf: { xs: "center", md: "flex-start" },
                      maxWidth: "fit-content",
                    }}
                  >
                    <Bolt
                      sx={{
                        fontSize: { xs: 14, sm: 16, md: 18 },
                        color: "#d8b4fe",
                        mr: { xs: 0.5, sm: 1 },
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "medium",
                        color: "#e9d5ff",
                        fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.875rem" },
                      }}
                    >
                      Enterprise AI Solution
                    </Typography>
                  </Box>
                </ScrollAnimation>

                <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, sm: 3 } }}>
                  <ScrollAnimation direction="up" distance={40} duration={0.8} delay={0.2}>
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: {
                          xs: "1.9rem",
                          sm: "2.5rem",
                          md: "3rem",
                          lg: "4rem",
                          xl: "4rem",
                        },
                        fontWeight: "bold",
                        lineHeight: { xs: 1.1, sm: 1.2 },
                      }}
                    >
                      Meet{" "}
                      <Box
                        component="span"
                        sx={{
                          background: "linear-gradient(to right, #c4b5fd, #f9a8d4)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Communication
                      </Box>
                      {isTablet ? <br /> : " "}
                      <Box
                        component="span"
                        sx={{
                          background: "linear-gradient(to right, #67e8f9, #60a5fa)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Chat
                      </Box>
                    </Typography>
                  </ScrollAnimation>
                  <ScrollAnimation direction="up" distance={30} duration={0.7} delay={0.3}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem", lg: "1.7rem" },
                        color: "#ede9fe",
                        fontWeight: "light",
                      }}
                    >
                      Your AI-Powered{" "}
                      <Box component="span" sx={{ color: "#67e8f9", fontWeight: "medium" }}>
                        Communication Partner
                      </Box>
                    </Typography>
                  </ScrollAnimation>
                  <ScrollAnimation direction="up" distance={30} duration={0.6} delay={0.4}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#e9d5ff",
                        maxWidth: { xs: "100%", sm: "90%", md: "600px" },
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        lineHeight: { xs: 1.5, sm: 1.6 },
                      }}
                    >
                      Transform your team communication with intelligent automation. Communication - Chat Pro
                      streamlines collaboration from messaging to file sharing, working around the clock to enhance your
                      productivity.
                    </Typography>
                  </ScrollAnimation>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: 2, sm: 2.5, md: 3 },
                    alignItems: { xs: "stretch", sm: "center" },
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <ScrollAnimation direction="up" distance={30} duration={0.6} delay={0.5}>
                    <motion.div variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
                      <Button
                        variant="contained"
                        size={isMobile ? "medium" : "large"}
                        component={Link}
                        href="/demo"
                        sx={{
                          background: "linear-gradient(to right, #a855f7, #ec4899)",
                          "&:hover": { background: "linear-gradient(to right, #9333ea, #db2777)" },
                          color: "#fff",
                          textTransform: "none",
                          boxShadow: "0 4px 15px rgba(168, 85, 247, 0.25)",
                          px: { xs: 2, sm: 2.5, md: 3 },
                          py: { xs: 1, sm: 1.2, md: 1.5 },
                          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                          borderRadius: { xs: 2, sm: 2.5 },
                        }}
                        startIcon={<PlayArrow />}
                      >
                        View Demo
                      </Button>
                    </motion.div>
                  </ScrollAnimation>
                  <ScrollAnimation direction="up" distance={30} duration={0.6} delay={0.5}>
                    <motion.div variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
                      <Button
                        variant="outlined"
                        size={isMobile ? "medium" : "large"}
                        sx={{
                          borderColor: "rgba(167, 139, 250, 0.5)",
                          color: "#fff",
                          backgroundColor: "transparent",
                          backdropFilter: "blur(4px)",
                          "&:hover": {
                            backgroundColor: "rgba(168, 85, 247, 0.2)",
                            borderColor: "rgba(167, 139, 250, 0.8)",
                          },
                          textTransform: "none",
                          px: { xs: 2, sm: 2.5, md: 3 },
                          py: { xs: 1, sm: 1.2, md: 1.5 },
                          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                          borderRadius: { xs: 2, sm: 2.5 },
                        }}
                        endIcon={<ArrowForward />}
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </ScrollAnimation>
                </Box>

                {/* Feature Cards */}
                <StaggeredScrollAnimation direction="up" distance={30} duration={0.5} staggerDelay={0.1}>
                  <Grid
                    container
                    spacing={{ xs: 1, sm: 1.2, md: 1.5 }}
                    sx={{
                      pt: { xs: 1.5, sm: 2.5, md: 3.5 },
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    {[
                      { Icon: Security, title: "Automated Job Posted", subtitle: "Streamlined job distribution" },
                      { Icon: People, title: "AI Resume Screening", subtitle: "Intelligent candidate matching" },
                      { Icon: Star, title: "Analytics & Insights", subtitle: "Data-driven hiring decisions" },
                      { Icon: Bolt, title: "Smart Candidate Matching", subtitle: "Perfect fit every time" },
                    ].map((feature, index) => (
                      <Grid item key={index} xs={6} sm={6} md={3} lg={3} xl={3}>
                        <motion.div
                          custom={index}
                          variants={cardVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover="hover"
                        >
                          <Card
                            sx={{
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              backdropFilter: "blur(4px)",
                              border: "1px solid rgba(255, 255, 255, 0.2)",
                              borderRadius: { xs: 1.2, sm: 1.5, md: 2 },
                              p: { xs: 0.8, sm: 1, md: 1.2 },
                              height: "100%",
                              transition: "all 0.3s ease",
                            }}
                          >
                            <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                              <feature.Icon
                                sx={{
                                  fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
                                  color: "#67e8f9",
                                  mb: { xs: 0.5, sm: 0.7, md: 0.8 },
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: "medium",
                                  color: "#fff",
                                  mb: { xs: 0.2, sm: 0.3, md: 0.4 },
                                  fontSize: {
                                    xs: "0.65rem",
                                    sm: "0.75rem",
                                    md: "0.8rem",
                                    lg: "0.875rem",
                                  },
                                }}
                              >
                                {feature.title}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "#e9d5ff",
                                  fontSize: {
                                    xs: "0.55rem",
                                    sm: "0.6rem",
                                    md: "0.65rem",
                                    lg: "0.7rem",
                                  },
                                  lineHeight: 1.3,
                                }}
                              >
                                {feature.subtitle}
                              </Typography>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </StaggeredScrollAnimation>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <ScrollAnimation direction="right" distance={60} duration={0.8} delay={0.3}>
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    justifyContent: "center",
                    mt: { xs: 2, sm: 3, md: 0 },
                    px: { xs: 1, sm: 2 },
                  }}
                >
                  <ChatAnimation />
                </Box>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection
