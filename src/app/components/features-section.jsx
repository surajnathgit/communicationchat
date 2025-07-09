"use client"

import { Card, CardContent, Box, Typography, Grid } from "@mui/material"
import {
  Security,
  Group,
  AttachFile,
  Videocam,
  AutoAwesome,
  SmartToy,
  Translate,
  CalendarToday,
} from "@mui/icons-material"
import ParticleBackground from "./particle-background"
import ScrollAnimation from "./scroll-animation"

export default function FeaturesSection() {
  const features = [
    {
      icon: Security,
      title: "Secure Messaging",
      description: "End-to-end encryption ensures your conversations stay private and secure.",
      color: "linear-gradient(45deg, #667eea, #764ba2)",
    },
    {
      icon: Group,
      title: "Group Chats",
      description: "Unlimited participants in group conversations with advanced moderation tools.",
      color: "linear-gradient(45deg, #f093fb, #f5576c)",
    },
    {
      icon: AttachFile,
      title: "File Sharing",
      description: "Share files securely with built-in virus scanning and access controls.",
      color: "linear-gradient(45deg, #4facfe, #00f2fe)",
    },
    {
      icon: Videocam,
      title: "Video/Audio Calls",
      description: "Crystal-clear HD video and audio calls with screen sharing capabilities.",
      color: "linear-gradient(45deg, #43e97b, #38f9d7)",
    },
    {
      icon: AutoAwesome,
      title: "Smart Note-Taking",
      description: "AI-enhanced note-taking that automatically organizes and summarizes content.",
      color: "linear-gradient(45deg, #fa709a, #fee140)",
    },
    {
      icon: SmartToy,
      title: "Chatbots",
      description: "Intelligent chatbots with typing indicators and read receipts.",
      color: "linear-gradient(45deg, #a8edea, #fed6e3)",
    },
    {
      icon: Translate,
      title: "Message Translation",
      description: "Real-time message translation supporting over 100 languages.",
      color: "linear-gradient(45deg, #ff9a9e, #fecfef)",
    },
    {
      icon: CalendarToday,
      title: "Scheduling",
      description: "Integrated scheduling tools for meetings and reminders.",
      color: "linear-gradient(45deg, #a18cd1, #fbc2eb)",
    },
  ]

  return (
    <Box
      component="section"
      sx={{
        py: 12,
        background: "linear-gradient(to bottom, #312e81, #6b21a8, #7e22ce)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Particle Background */}
      <ParticleBackground count={50} speed={0.3} />

      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(88, 28, 135, 0.3), transparent)",
        }}
      />

      <Box
        sx={{
          px: 2,
          position: "relative",
          zIndex: 10,
        }}
      >
        <ScrollAnimation direction="up" distance={50} duration={0.8} delay={0.1} triggerOnce={false}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                px: 2,
                py: 1,
                borderRadius: "9999px",
                backgroundColor: "rgba(139, 92, 246, 0.2)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(167, 139, 250, 0.3)",
                color: "#e9d5ff",
                fontSize: "0.875rem",
                fontWeight: 500,
                mb: 4,
              }}
            >
              ✨ Powerful Features
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.25rem", md: "3rem" },
                fontWeight: 700,
                color: "#fff",
                mb: 3,
              }}
            >
              Everything You Need for
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(to right, #c4b5fd, #f9a8d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                Modern Communication
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: "1.25rem",
                color: "#ede9fe",
                maxWidth: 768,
                mx: "auto",
              }}
            >
              Enhance team communication and productivity with our comprehensive suite of AI-powered tools
            </Typography>
          </Box>
        </ScrollAnimation>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container spacing={3} sx={{ maxWidth: 1200 }}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                  <ScrollAnimation
                    direction="up"
                    distance={80}
                    duration={0.6}
                    delay={index * 0.1}
                    triggerOnce={false}
                    threshold={0.2}
                  >
                    <Card
                      sx={{
                        width: 280,
                        height: 250,
                        transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        "&:hover": {
                          transform: "translateY(-12px) scale(1.03)",
                          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                          "& .feature-icon": {
                            transform: "scale(1.15) rotate(5deg)",
                            background: feature.color,
                          },
                          "& .feature-title": {
                            color: "#c4b5fd",
                          },
                        },
                        border: "none",
                        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: 4,
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        alignItems:"center",
                        flexDirection: "column",
                        justifyContent:"center",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background: feature.color,
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          p: 3,
                          textAlign: "center",
                          // height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Box
                            className="feature-icon"
                            sx={{
                              width: 64,
                              height: 64,
                              background: "linear-gradient(to right, #8b5cf6, #ec4899)",
                              borderRadius: 3,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mx: "auto",
                              // mb: 3,
                              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                              boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3)",
                            }}
                          >
                            <IconComponent sx={{ fontSize: 32, color: "#fff" }} />
                          </Box>
                          <Typography
                            variant="h6"
                            className="feature-title"
                            sx={{
                              fontWeight: 700,
                              color: "#fff",
                              // mb: 2,
                              transition: "color 0.3s ease",
                              fontSize: "1.1rem",
                              minHeight: "2.2rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {feature.title}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            color: "#e9d5ff",
                            fontSize: "0.875rem",
                            lineHeight: 1.5,
                            opacity: 0.9,
                            minHeight: "3.75rem",
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
