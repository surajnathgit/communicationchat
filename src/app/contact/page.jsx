"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  Button,
  TextField,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material"
import { CheckCircle, Mail, Phone, ExpandMore, X, LinkedIn, Instagram, Facebook } from "@mui/icons-material"
import ParticleBackground from "../components/particle-background"
import ScrollAnimation from "../components/scroll-animation"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setShowSuccess(true)
      setLoading(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
      setTimeout(() => setShowSuccess(false), 5000)
    }, 1000)
  }

  const faqs = [
    {
      question: "How secure is Communication - Chat?",
      answer:
        "We use military-grade end-to-end encryption to ensure your messages are completely private. We follow zero-knowledge architecture, meaning we cannot access your data.",
    },
    {
      question: "Can I integrate with existing tools?",
      answer:
        "Yes! Communication - Chat offers integrations with popular business tools like Slack, Microsoft Teams, Google Workspace, and many more.",
    },
    {
      question: "What platforms are supported?",
      answer:
        "Communication - Chat works on all major platforms including Web browsers, iOS, Android, Windows, macOS, and Linux.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide 24/7 customer support via chat, email, and phone. Enterprise customers also get dedicated account managers.",
    },
  ]

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #312e81 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Particle Background */}
      <ParticleBackground count={50} speed={0.3} />

      <Box sx={{ position: "relative", zIndex: 10, py: 12 }}>
        <Container maxWidth="xl">
          <ScrollAnimation direction="up" distance={50} duration={0.8} delay={0.1}>
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", md: "4rem" },
                  fontWeight: "bold",
                  color: "#fff",
                  mb: 3,
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#e9d5ff",
                  maxWidth: 600,
                  mx: "auto",
                }}
              >
                Get in touch with our team - we're here to help you succeed
              </Typography>
            </Box>
          </ScrollAnimation>

          <ScrollAnimation direction="up" distance={40} duration={0.7} delay={0.2}>
            <Grid container spacing={4} sx={{ mb: 8 }}>
              {/* Contact Form */}
              <Grid item xs={12} lg={8}>
                <Card
                  sx={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff", mb: 3 }}>
                      Send us a message
                    </Typography>

                    {showSuccess && (
                      <Alert
                        severity="success"
                        sx={{
                          mb: 3,
                          backgroundColor: "rgba(34, 197, 94, 0.2)",
                          border: "1px solid rgba(74, 222, 128, 0.3)",
                          color: "#bbf7d0",
                        }}
                        icon={<CheckCircle sx={{ color: "#4ade80" }} />}
                      >
                        Thank you for your message! We'll get back to you soon.
                      </Alert>
                    )}

                    <Box
                      component="form"
                      onSubmit={handleSubmit}
                      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Name *"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                "& fieldset": {
                                  borderColor: "rgba(255, 255, 255, 0.2)",
                                },
                                "&:hover fieldset": {
                                  borderColor: "rgba(255, 255, 255, 0.3)",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#8b5cf6",
                                },
                              },
                              "& .MuiInputLabel-root": {
                                color: "#e9d5ff",
                              },
                              "& .MuiOutlinedInput-input": {
                                color: "#fff",
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Email *"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                "& fieldset": {
                                  borderColor: "rgba(255, 255, 255, 0.2)",
                                },
                                "&:hover fieldset": {
                                  borderColor: "rgba(255, 255, 255, 0.3)",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#8b5cf6",
                                },
                              },
                              "& .MuiInputLabel-root": {
                                color: "#e9d5ff",
                              },
                              "& .MuiOutlinedInput-input": {
                                color: "#fff",
                              },
                            }}
                          />
                        </Grid>
                      </Grid>
                      <TextField
                        fullWidth
                        label="Phone (Optional)"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.2)",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.3)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#8b5cf6",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "#e9d5ff",
                          },
                          "& .MuiOutlinedInput-input": {
                            color: "#fff",
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Message *"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.2)",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.3)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#8b5cf6",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "#e9d5ff",
                          },
                          "& .MuiOutlinedInput-input": {
                            color: "#fff",
                          },
                        }}
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={loading || !formData.name || !formData.email || !formData.message}
                        sx={{
                          background: "linear-gradient(to right, #8b5cf6, #ec4899)",
                          color: "#fff",
                          textTransform: "none",
                          "&:hover": {
                            background: "linear-gradient(to right, #a78bfa, #f472b6)",
                          },
                          "&:disabled": {
                            background: "rgba(139, 92, 246, 0.3)",
                            color: "rgba(255, 255, 255, 0.5)",
                          },
                        }}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Contact Info */}
              <Grid item xs={12} lg={4}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}>
                        Contact Information
                      </Typography>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Mail sx={{ color: "#c4b5fd" }} />
                          <Box>
                            <Typography sx={{ color: "#e9d5ff", fontSize: "0.875rem" }}>Email</Typography>
                            <Typography sx={{ color: "#fff" }}>contact@communicationchat.com</Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Phone sx={{ color: "#c4b5fd" }} />
                          <Box>
                            <Typography sx={{ color: "#e9d5ff", fontSize: "0.875rem" }}>Phone</Typography>
                            <Typography sx={{ color: "#fff" }}>+1 (555) 123-4567</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}>
                        Follow Us
                      </Typography>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Button
                            variant="outlined"
                            size="small"
                            fullWidth
                            sx={{
                              borderColor: "rgba(196, 181, 253, 0.5)",
                              color: "#e9d5ff",
                              backgroundColor: "transparent",
                              textTransform: "none",
                              "&:hover": {
                                backgroundColor: "rgba(139, 92, 246, 0.2)",
                                borderColor: "#c4b5fd",
                              },
                            }}
                            startIcon={<X sx={{ fontSize: 16 }} />}
                          >
                            Twitter
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            variant="outlined"
                            size="small"
                            fullWidth
                            sx={{
                              borderColor: "rgba(196, 181, 253, 0.5)",
                              color: "#e9d5ff",
                              backgroundColor: "transparent",
                              textTransform: "none",
                              "&:hover": {
                                backgroundColor: "rgba(139, 92, 246, 0.2)",
                                borderColor: "#c4b5fd",
                              },
                            }}
                            startIcon={<LinkedIn sx={{ fontSize: 16 }} />}
                          >
                            LinkedIn
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            variant="outlined"
                            size="small"
                            fullWidth
                            sx={{
                              borderColor: "rgba(196, 181, 253, 0.5)",
                              color: "#e9d5ff",
                              backgroundColor: "transparent",
                              textTransform: "none",
                              "&:hover": {
                                backgroundColor: "rgba(139, 92, 246, 0.2)",
                                borderColor: "#c4b5fd",
                              },
                            }}
                            startIcon={<Instagram sx={{ fontSize: 16 }} />}
                          >
                            Instagram
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            variant="outlined"
                            size="small"
                            fullWidth
                            sx={{
                              borderColor: "rgba(196, 181, 253, 0.5)",
                              color: "#e9d5ff",
                              backgroundColor: "transparent",
                              textTransform: "none",
                              "&:hover": {
                                backgroundColor: "rgba(139, 92, 246, 0.2)",
                                borderColor: "#c4b5fd",
                              },
                            }}
                            startIcon={<Facebook sx={{ fontSize: 16 }} />}
                          >
                            Facebook
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </ScrollAnimation>

          <ScrollAnimation direction="up" distance={50} duration={0.8} delay={0.3}>
            <Box sx={{ maxWidth: 1000, mx: "auto" }}>
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}>
                  Frequently Asked Questions
                </Typography>
                <Typography sx={{ color: "#e9d5ff" }}>
                  Find answers to common questions about Communication - Chat
                </Typography>
              </Box>
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {faqs.map((faq, index) => (
                    <Accordion
                      key={index}
                      sx={{
                        backgroundColor: "transparent",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        mb: 1,
                        "&:before": {
                          display: "none",
                        },
                        "&.Mui-expanded": {
                          margin: "0 0 8px 0",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMore sx={{ color: "#c4b5fd" }} />}
                        sx={{
                          "& .MuiAccordionSummary-content": {
                            margin: "12px 0",
                          },
                        }}
                      >
                        <Typography sx={{ color: "#fff", fontWeight: 500 }}>{faq.question}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={{ color: "#e9d5ff" }}>{faq.answer}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </CardContent>
              </Card>
            </Box>
          </ScrollAnimation>
        </Container>
      </Box>
    </Box>
  )
}
