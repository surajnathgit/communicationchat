import { Card, CardContent, Box, Typography, Grid } from "@mui/material";
import { Bolt, TrendingUp, AccessTime, Lightbulb, FormatQuote } from "@mui/icons-material";
import ParticleBackground from "./particle-background";

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
  ];

  const testimonials = [
    {
      quote: "Communication - Chat transformed our team's productivity. The AI features are game-changing!",
      author: "Sarah Johnson",
      position: "CTO, TechCorp",
      avatar: "SJ",
    },
    {
      quote: "The security features give us peace of mind when handling sensitive client data.",
      author: "Michael Chen",
      position: "IT Director, FinanceFlow",
      avatar: "MC",
    },
  ];

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

        <Grid container spacing={3} sx={{ mb: 10 }} justifyContent={"center"}>
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Card
                  sx={{
                    textAlign: "center",
                    transition: "all 0.3s",
                    "&:hover": {
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                    },
                    border: "none",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",

                    width: 300,
                    height: 300,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex"
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        background: benefit.color,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                        transition: "transform 0.3s",
                        "&:hover": {
                          transform: "scale(1 Xie.1)",
                        },
                      }}
                    >
                      <IconComponent sx={{ fontSize: 32, color: "#fff" }} />
                    </Box>
                    <Typography
                      sx={{ fontSize: "2.25rem", fontWeight: 700, color: "#fff", mb: 1 }}
                    >
                      {benefit.stat}
                    </Typography>
                    <Typography sx={{ color: "#e9d5ff", fontWeight: 500 }}>
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{ fontSize: "1.875rem", fontWeight: 700, color: "#fff", mb: 1 }}
          >
            What Our Customers Say
          </Typography>
          <Typography sx={{ color: "#e9d5ff" }}>
            Real feedback from real users
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ maxWidth: 1024, mx: "auto" }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.3s",
                  "&:hover": {
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <FormatQuote sx={{ fontSize: 32, color: "#c4b5fd", mb: 2 }} />
                  <Typography
                    component="blockquote"
                    sx={{
                      fontSize: "1.125rem",
                      color: "#ede9fe",
                      mb: 3,
                      fontStyle: "italic",
                      lineHeight: 1.5,
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        background: "linear-gradient(to right, #8b5cf6, #ec4899)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: 700,
                      }}
                    >
                      {testimonial.avatar}
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: "#fff" }}>
                        {testimonial.author}
                      </Typography>
                      <Typography sx={{ fontSize: "0.875rem", color: "#e9d5ff" }}>
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid> */}
      </Box>
    </Box>
  );
}