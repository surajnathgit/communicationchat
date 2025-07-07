import { Card, CardContent, Box, Typography, Grid } from "@mui/material";
import { Security, Group, AttachFile, Videocam, AutoAwesome, SmartToy, Translate, CalendarToday } from "@mui/icons-material";
import ParticleBackground from "./particle-background";

export default function FeaturesSection() {
  const features = [
    {
      icon: Security,
      title: "Secure Messaging",
      description: "End-to-end encryption ensures your conversations stay private and secure.",
    },
    {
      icon: Group,
      title: "Group Chats",
      description: "Unlimited participants in group conversations with advanced moderation tools.",
    },
    {
      icon: AttachFile,
      title: "File Sharing",
      description: "Share files securely with built-in virus scanning and access controls.",
    },
    {
      icon: Videocam,
      title: "Video/Audio Calls",
      description: "Crystal-clear HD video and audio calls with screen sharing capabilities.",
    },
    {
      icon: AutoAwesome,
      title: "Smart Note-Taking",
      description: "AI-enhanced note-taking that automatically organizes and summarizes content.",
    },
    {
      icon: SmartToy,
      title: "Chatbots",
      description: "Intelligent chatbots with typing indicators and read receipts.",
    },
    {
      icon: Translate,
      title: "Message Translation",
      description: "Real-time message translation supporting over 100 languages.",
    },
    {
      icon: CalendarToday,
      title: "Scheduling",
      description: "Integrated scheduling tools for meetings and reminders.",
    },
  ];

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

        <Grid container spacing={3} justifyContent={"center"}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Card
                  sx={{
                    width: 280,
                    minHeight: 220,
                    transition: "all 0.5s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                    },
                    border: "none",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        background: "linear-gradient(to right, #8b5cf6, #ec4899)",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                        transition: "transform 0.3s",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <IconComponent sx={{ fontSize: 28, color: "#fff" }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: "#fff", mb: 1.5 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      sx={{ color: "#e9d5ff", fontSize: "0.875rem", lineHeight: 1.5 }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}