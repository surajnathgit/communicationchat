"use client"

import { Box, Grid, Typography, Card, CardContent, Container, useTheme, useMediaQuery } from "@mui/material"
import { CheckCircle, AutoAwesome } from "@mui/icons-material"
import ParticleBackground from "./particle-background"

const AboutSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  const achievements = [
    "Over 10,000 enterprises trust Communication - Chat",
    "SOC 2 Type II certified security",
    "GDPR and HIPAA compliant",
    "99.9% uptime guarantee",
  ]

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        background: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #312e81 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Particle Background */}
      <ParticleBackground count={isMobile ? 20 : isTablet ? 30 : 40} speed={0.2} />

      {/* Background decoration */}
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

      <Container maxWidth="xl" sx={{ position: "relative", width: "100%" }}>
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 4, lg: 6 }}
          alignItems="center"
          sx={{
            minHeight: { sm: "70vh", md: "80vh" },
            width: "100%",
          }}
        >
          {/* Card Section - Left side on desktop */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 2, md: 1 }}
            sx={{
              // width: "50%", // Exact 50% width on desktop
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "@media (max-width: 899px)": {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                px: { xs: 2, sm: 3, md: 2, lg: 3 },
              }}
            >
              <Card
                sx={{
                  aspectRatio: { xs: "4/3", sm: "1/1", md: "4/3", lg: "1/1" },
                  width: "100%",
                  maxWidth: { xs: "100%", sm: 360, md: 400, lg: 450 },
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: { xs: 2, sm: 3, md: 4 },
                  p: { xs: 2, sm: 3, md: 3, lg: 4 },
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(244, 114, 182, 0.1))",
                  }}
                />
                <CardContent
                  sx={{
                    position: "relative",
                    zIndex: 10,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 0,
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        width: { xs: 60, sm: 72, md: 80, lg: 96 },
                        height: { xs: 60, sm: 72, md: 80, lg: 96 },
                        background: "linear-gradient(to right, #a855f7, #ec4899)",
                        borderRadius: { xs: 2, sm: 3 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: { xs: 2, sm: 2.5, md: 3 },
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <AutoAwesome
                        sx={{
                          fontSize: { xs: 30, sm: 36, md: 40, lg: 48 },
                          color: "#fff",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        color: "#fff",
                        mb: { xs: 0.5, sm: 1 },
                        fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem", lg: "1.5rem" },
                      }}
                    >
                      AI-Powered
                    </Typography>
                    <Typography
                      sx={{
                        color: "#e9d5ff",
                        fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem", lg: "1.1rem" },
                      }}
                    >
                      Next-generation communication platform
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          {/* Text Section - Right side on desktop */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 2 }}
            sx={{
              width: "65%", // Exact 50% width on desktop
              display: "flex",
              alignItems: "center",
              "@media (max-width: 899px)": {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 2.5, md: 3, lg: 4 },
                textAlign: { xs: "center", md: "left" },
                px: { xs: 2, sm: 0, md: 2, lg: 3 },
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  px: { xs: 1.5, sm: 2 },
                  py: { xs: 0.8, sm: 1 },
                  borderRadius: "9999px",
                  backgroundColor: "rgba(168, 85, 247, 0.2)",
                  border: "1px solid rgba(167, 139, 250, 0.3)",
                  backdropFilter: "blur(4px)",
                  alignSelf: { xs: "center", md: "flex-start" },
                  maxWidth: "fit-content",
                }}
              >
                <AutoAwesome
                  sx={{
                    fontSize: { xs: 14, sm: 16, md: 18 },
                    color: "#e9d5ff",
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
                  About Communication - Chat
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem", lg: "3rem", xl: "3.5rem" },
                  fontWeight: "bold",
                  color: "#fff",
                  lineHeight: { xs: 1.2, sm: 1.3 },
                }}
              >
                Transforming Team
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(to right, #c4b5fd, #f9a8d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {" "}
                  Communication
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "#ede9fe",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem", lg: "1.2rem" },
                  lineHeight: 1.6,
                  mt: { xs: 1, sm: 1.5 },
                }}
              >
                Our mission is to revolutionize how teams communicate by providing a secure, intelligent, and
                user-friendly platform that enhances productivity and collaboration. We believe that effective
                communication is the foundation of successful organizations.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 1.5, sm: 2 },
                  alignItems: { xs: "center", md: "flex-start" },
                }}
              >
                {achievements.map((achievement, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 1, sm: 1.5 },
                      width: "100%",
                    }}
                  >
                    <CheckCircle
                      sx={{
                        fontSize: { xs: 18, sm: 20, md: 22 },
                        color: "#4ade80",
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#ede9fe",
                        fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem", lg: "1.1rem" },
                      }}
                    >
                      {achievement}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutSection
