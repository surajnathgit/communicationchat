"use client"

import { Card, CardContent, Box, Typography, Grid } from "@mui/material"
import { Bolt, TrendingUp, AccessTime, Lightbulb } from "@mui/icons-material"
import ParticleBackground from "./particle-background"
import ScrollAnimation from "./scroll-animation"

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Bolt,
      stat: "70%",
      description: "faster communication",
      color: "linear-gradient(to right, #facc15, #f97316)",
    },
    {
      icon: TrendingUp,
      stat: "45%",
      description: "fewer status meetings",
      color: "linear-gradient(to right, #4ade80, #10b981)",
    },
    {
      icon: AccessTime,
      stat: "80%",
      description: "faster issue resolution",
      color: "linear-gradient(to right, #60a5fa, #06b6d4)",
    },
    {
      icon: Lightbulb,
      stat: "55%",
      description: "faster decision-making",
      color: "linear-gradient(to right, #c084fc, #ec4899)",
    },
  ]

  return (
    <Box
      component="section"
      sx={{
        py: 12,
        background: "linear-gradient(to bottom, #7e22ce, #312e81, #6b21a8)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Particle Background */}
      <ParticleBackground count={45} speed={0.25} />

      <Box
        sx={{
          px: 2,
          position: "relative",
          zIndex: 10,
        }}
      >
        <ScrollAnimation direction="up" distance={50} duration={0.8} delay={0.1} triggerOnce={false}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.25rem", md: "3rem" },
                fontWeight: 700,
                color: "#fff",
                mb: 3,
              }}
            >
              Why Choose
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(to right, #c4b5fd, #f9a8d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                Communication - Chat?
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: "1.25rem",
                color: "#ede9fe",
                maxWidth: 640,
                mx: "auto",
              }}
            >
              Join thousands of teams who have transformed their communication
            </Typography>
          </Box>
        </ScrollAnimation>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 10 }}>
          <Grid container spacing={4} sx={{ maxWidth: 1200 }}>
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                  <ScrollAnimation
                    direction="up"
                    distance={100}
                    duration={0.7}
                    delay={index * 0.15}
                    triggerOnce={false}
                    threshold={0.2}
                  >
                    <Card
                      sx={{
                        width: "100%",
                        minHeight: 320,
                        textAlign: "center",
                        transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        "&:hover": {
                          transform: "translateY(-15px) scale(1.05)",
                          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
                          "& .benefit-icon": {
                            transform: "scale(1.2) rotate(10deg)",
                            background: benefit.color,
                            boxShadow: "0 15px 30px rgba(139, 92, 246, 0.4)",
                          },
                          "& .benefit-stat": {
                            transform: "scale(1.1)",
                            textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                          },
                        },
                        border: "none",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(15px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: 4,
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background: benefit.color,
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          p: 4,
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          className="benefit-icon"
                          sx={{
                            width: 80,
                            height: 80,
                            background: benefit.color,
                            borderRadius: 3,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mx: "auto",
                            mb: 3,
                            transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)",
                          }}
                        >
                          <IconComponent sx={{ fontSize: 40, color: "#fff" }} />
                        </Box>
                        <Typography
                          className="benefit-stat"
                          sx={{
                            fontSize: "3rem",
                            fontWeight: 800,
                            color: "#fff",
                            mb: 1,
                            transition: "all 0.3s ease",
                            textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                          }}
                        >
                          {benefit.stat}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#e9d5ff",
                            fontWeight: 600,
                            fontSize: "1.1rem",
                            textTransform: "capitalize",
                          }}
                        >
                          {benefit.description}
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
