"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  IconButton,
  Snackbar,
  Alert,
  Modal,
} from "@mui/material"
import { CheckCircle, Close, Star, People, FlashOn } from "@mui/icons-material"
import ParticleBackground from "../components/particle-background"
import { submitDemoRequest } from "../apis/apis"

const BookDemoForm = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" })
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    phoneNumber: "",
    jobTitle: "",
    numberOfEmployees: "",
    industryType: "",
    otherIndustry: "",
    howDidYouHearAboutUs: "",
    communicationNeeds: "",
    consent: false,
  })

  // Hide navbar and footer when form is open
  useEffect(() => {
    const navbar = document.querySelector("nav")
    const footer = document.querySelector("footer")

    if (open) {
      document.body.classList.add("no-scroll")
      if (navbar) navbar.style.display = "none"
      if (footer) footer.style.display = "none"
    } else {
      document.body.classList.remove("no-scroll")
      if (navbar) navbar.style.display = ""
      if (footer) footer.style.display = ""
    }

    return () => {
      document.body.classList.remove("no-scroll")
      if (navbar) navbar.style.display = ""
      if (footer) footer.style.display = ""
    }
  }, [open])

  // Industry options
  const industryOptions = [
    "Technology & Software",
    "Healthcare & Medical",
    "Financial Services",
    "Education & Training",
    "Manufacturing",
    "Retail & E-commerce",
    "Consulting & Professional Services",
    "Real Estate",
    "Media & Entertainment",
    "Government & Public Sector",
    "Non-profit Organizations",
    "Other",
  ]

  // Employee count options
  const employeeOptions = ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"]

  // How did you hear about us options
  const hearAboutUsOptions = [
    "Google Search",
    "Social Media (LinkedIn, Twitter, etc.)",
    "Industry Conference/Event",
    "Referral from Colleague",
    "Online Advertisement",
    "Blog/Article",
    "Partner Recommendation",
    "Other",
  ]

  // Communication needs options
  const communicationNeedsOptions = [
    "Team Collaboration",
    "Customer Support",
    "Project Management",
    "Remote Work Communication",
    "Client Communication",
    "Internal Messaging",
    "Video Conferencing",
    "File Sharing & Collaboration",
    "Other",
  ]

  const sanitizeInput = (input) => {
    return input.replace(/[<>{}]/g, "")
  }

  const handleInputChange = (field, value) => {
    if (field === "phoneNumber") {
      value = value.replace(/\D/g, "").slice(0, 10)
    } else if (typeof value === "string") {
      value = sanitizeInput(value)
    }
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  const validateForm = () => {
    const requiredFields = [
      "fullName",
      "workEmail",
      "companyName",
      "phoneNumber",
      "jobTitle",
      "numberOfEmployees",
      "industryType",
      "howDidYouHearAboutUs",
      "communicationNeeds",
    ]

    for (const field of requiredFields) {
      if (!formData[field]) {
        setSnackbar({
          open: true,
          message: "Please fill in all required fields.",
          severity: "error",
        })
        return false
      }
    }

    if (!formData.consent) {
      setSnackbar({
        open: true,
        message: "You must agree to be contacted to proceed.",
        severity: "error",
      })
      return false
    }

    const phoneRegex = /^\d{10}$/
    if (!phoneRegex.test(formData.phoneNumber)) {
      setSnackbar({
        open: true,
        message: "Phone number must be exactly 10 digits.",
        severity: "error",
      })
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.workEmail)) {
      setSnackbar({
        open: true,
        message: "Please enter a valid email address.",
        severity: "error",
      })
      return false
    }

    if (formData.industryType === "Other" && !formData.otherIndustry) {
      setSnackbar({
        open: true,
        message: "Please specify your industry.",
        severity: "error",
      })
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      const payload = {
        fullName: formData.fullName.trim(),
        workEmail: formData.workEmail.trim(),
        companyName: formData.companyName.trim(),
        phoneNumber: formData.phoneNumber,
        jobTitle: formData.jobTitle.trim(),
        numberOfEmployees: formData.numberOfEmployees,
        industryType: formData.industryType === "Other" ? formData.otherIndustry.trim() : formData.industryType,
        howDidYouHearAboutUs: formData.howDidYouHearAboutUs,
        communicationNeeds: formData.communicationNeeds,
        consent: formData.consent,
        timestamp: new Date().toISOString(),
        platform: "Communication - Chat",
      }
      const resp = await submitDemoRequest(payload)

      if (!resp.success) {
        throw new Error(resp.message || "Failed to submit demo request")
      }

      setShowThankYou(true)
      setSnackbar({
        open: true,
        message: resp.message || "We'll contact you shortly to schedule your demo.",
        severity: "success",
      })

      setTimeout(() => {
        setFormData({
          fullName: "",
          workEmail: "",
          companyName: "",
          phoneNumber: "",
          jobTitle: "",
          numberOfEmployees: "",
          industryType: "",
          otherIndustry: "",
          howDidYouHearAboutUs: "",
          communicationNeeds: "",
          consent: false,
        })
        setShowThankYou(false)
        onClose()
      }, 4000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSnackbar({
        open: true,
        message: error.message || "There was an error submitting your request. Please try again.",
        severity: "error",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    if (!loading) {
      setShowThankYou(false)
      setFormData({
        fullName: "",
        workEmail: "",
        companyName: "",
        phoneNumber: "",
        jobTitle: "",
        numberOfEmployees: "",
        industryType: "",
        otherIndustry: "",
        howDidYouHearAboutUs: "",
        communicationNeeds: "",
        consent: false,
      })
      onClose()
    }
  }

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(147, 51, 234, 0.4)",
    color: "#E2E8F0",
    transition: "all 0.3s ease",
    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(147, 51, 234, 0.6)",
      },
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#9333EA",
        borderWidth: "2px",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiOutlinedInput-input": {
      padding: "12px 16px",
      fontSize: "0.9rem",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#FFFFFF", 
    fontSize: "0.9rem",
    "&.Mui-focused": {
      color: "#FFFFFF", 
    },
    "&.MuiFormLabel-filled": {
      color: "#FFFFFF",
    },
  },
}


  const selectStyles = {
    color: "#E2E8F0",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(147, 51, 234, 0.4)",
    transition: "all 0.3s ease",
    "& .MuiSelect-select": {
      padding: "12px 16px",
      fontSize: "0.9rem",
    },
    "& .MuiSelect-icon": {
      color: "rgba(203, 213, 225, 0.7)",
    },
    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(147, 51, 234, 0.6)",
      },
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#9333EA",
        borderWidth: "2px",
      },
    },
  }

const labelStyles = {
  color: "#FFFFFF", 
  fontSize: "0.9rem",
  "&.Mui-focused": {
    color: "#FFFFFF",
  },
  "&.MuiFormLabel-filled": {
    color: "#FFFFFF", 
  },
}

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="book-demo-form-title"
      aria-describedby="book-demo-form-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "transparent",
        backdropFilter: "blur(8px)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          maxWidth: 720,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          bgcolor: "transparent",
          background: "linear-gradient(145deg, #1E293B 0%, #2D3748 100%)",
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          // pt: { xs: "3rem", sm: "3rem", md: "2rem", lg: "2rem" },
          // pb: "2rem",
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.6 }}>
          <ParticleBackground
            count={100}
            colors={["#9333EA", "#D8B4FE", "#A855F7", "#F3E8FF", "#8B5CF6"]}
            minSize={1}
            maxSize={4}
            speed={0.3}
            connected={true}
            opacity={0.7}
          />
        </Box>
        <Box sx={{ position: "relative", zIndex: 10, maxHeight: "100%" }}>
          <Box sx={{ p: 4, pb: 2, position: "relative" }}>
            <IconButton
              onClick={handleClose}
              disabled={loading}
              sx={{
                position: "absolute",
                right: 12,
                top: 12,
                color: "rgba(203, 213, 225, 0.7)",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
                transition: "all 0.3s ease",
              }}
            >
              <Close />
            </IconButton>
            <Box
              sx={{
                textAlign: "center",
                pr: 6,
                color: "#E2E8F0",
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: 700,
              }}
            >
              {showThankYou ? (
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5 }}>
                  <Box sx={{ position: "relative" }}>
                    <CheckCircle sx={{ fontSize: 28, color: "#34D399" }} />
                    <CheckCircle
                      sx={{
                        fontSize: 28,
                        color: "#34D399",
                        opacity: 0.3,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                        "@keyframes ping": {
                          "75%, 100%": { transform: "scale(1.2)", opacity: 0 },
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      background: "linear-gradient(to right, #34D399, #10B981)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "inherit",
                    }}
                  >
                    Thank You, {formData.fullName}!
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5 }}>
                  <Box sx={{ position: "relative" }}>
                    <CheckCircle sx={{ fontSize: 28, color: "#9333EA" }} />
                    <Star
                      sx={{
                        fontSize: 14,
                        color: "#FBBF24",
                        position: "absolute",
                        top: -4,
                        right: -4,
                        animation: "pulse 2s infinite",
                        "@keyframes pulse": {
                          "0%": { opacity: 1 },
                          "50%": { opacity: 0.5 },
                          "100%": { opacity: 1 },
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      background: "linear-gradient(to right, #9333EA, #A855F7, #D8B4FE)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "inherit",
                    }}
                  >
                    Book Your Demo
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>

          <Box sx={{ px: 4, pb: 4 }}>
            {showThankYou ? (
              <Box
                sx={{
                  p: 4,
                  bgcolor: "rgba(20, 83, 45, 0.15)",
                  border: "1px solid rgba(52, 211, 153, 0.2)",
                  borderRadius: "8px",
                  backdropFilter: "blur(6px)",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                <Box sx={{ position: "relative", mb: 3 }}>
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 100,
                        height: 100,
                        bgcolor: "rgba(52, 211, 153, 0.15)",
                        borderRadius: "50%",
                        animation: "pulse 3s infinite",
                        "@keyframes pulse": {
                          "0%": { transform: "scale(1)", opacity: 0.4 },
                          "50%": { transform: "scale(1.1)", opacity: 0.2 },
                          "100%": { transform: "scale(1)", opacity: 0.4 },
                        },
                      }}
                    />
                  </Box>
                  <CheckCircle sx={{ fontSize: 64, color: "#34D399", position: "relative", zIndex: 10 }} />
                </Box>
                <Typography variant="h5" sx={{ color: "#34D399", mb: 2, fontWeight: 600 }}>
                  Demo Request Received!
                </Typography>
                <Typography sx={{ color: "rgba(209, 250, 229, 0.9)", mb: 3, fontSize: "1rem" }}>
                  Thank you for your interest in Communication - Chat. Our team will contact you within 24 hours to schedule your personalized demo.
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, alignItems: "center", mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "rgba(167, 243, 208, 0.9)" }}>
                    <People sx={{ fontSize: 18 }} />
                    <Typography sx={{ fontSize: "0.9rem" }}>
                      Our experts will show you how to transform your team's communication
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "rgba(167, 243, 208, 0.9)" }}>
                    <FlashOn sx={{ fontSize: 18 }} />
                    <Typography sx={{ fontSize: "0.9rem" }}>
                      Get ready to boost your productivity by 40%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  p: 4,
                  bgcolor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(147, 51, 234, 0.2)",
                  borderRadius: "8px",
                  backdropFilter: "blur(6px)",
                  transition: "all 0.3s ease",
                }}
              >
                <Box sx={{ textAlign: "center", mb: 3 }}>
                  <Typography variant="h6" sx={{ color: "#E2E8F0", mb: 1, fontWeight: 600 }}>
                    Schedule Your Personal Demo
                  </Typography>
                  <Typography sx={{ color: "rgba(203, 213, 225, 0.9)", fontSize: "1rem" }}>
                    Discover how Communication - Chat can enhance your team's collaboration
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 3,
                      mt: 2,
                      color: "rgba(203, 213, 225, 0.9)",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: "#34D399",
                          borderRadius: "50%",
                          animation: "pulse 2s infinite",
                        }}
                      />
                      <Typography sx={{ fontSize: "0.85rem" }}>15-min setup</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: "#9333EA",
                          borderRadius: "50%",
                          animation: "pulse 2s infinite",
                        }}
                      />
                      <Typography sx={{ fontSize: "0.85rem" }}>Live demo</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: "#D8B4FE",
                          borderRadius: "50%",
                          animation: "pulse 2s infinite",
                        }}
                      />
                      <Typography sx={{ fontSize: "0.85rem" }}>Custom solutions</Typography>
                    </Box>
                  </Box>
                </Box>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }}>
                    <TextField
                      label="Full Name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      sx={inputStyles}
                      required
                      fullWidth
                      aria-label="Full Name"
                    />
                    <TextField
                      label="Work Email"
                      type="email"
                      value={formData.workEmail}
                      onChange={(e) => handleInputChange("workEmail", e.target.value)}
                      sx={inputStyles}
                      required
                      fullWidth
                      aria-label="Work Email"
                    />
                  </Box>
                  <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }}>
                    <TextField
                      label="Company Name"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      sx={inputStyles}
                      required
                      fullWidth
                      aria-label="Company Name"
                    />
                    <TextField
                      label="Job Title"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                      sx={inputStyles}
                      required
                      fullWidth
                      aria-label="Job Title"
                    />
                  </Box>
                  <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }}>
                    <Box>
                      <TextField
                        label="Phone Number"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                        sx={inputStyles}
                        required
                        fullWidth
                        aria-label="Phone Number"
                      />
                      <Typography sx={{ color: "rgba(203, 213, 225, 0.7)", fontSize: "0.8rem", mt: 0.5 }}>
                        {formData.phoneNumber.length}/10 digits
                      </Typography>
                    </Box>
                    <FormControl fullWidth>
                      <InputLabel sx={labelStyles}>Industry Type</InputLabel>
                      <Select
                        value={formData.industryType}
                        onChange={(e) => handleInputChange("industryType", e.target.value)}
                        sx={selectStyles}
                        required
                        aria-label="Industry Type"
                      >
                        <MenuItem value="" disabled>
                          Select your industry
                        </MenuItem>
                        {industryOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  {formData.industryType === "Other" && (
                    <TextField
                      label="Please specify your industry"
                      value={formData.otherIndustry}
                      onChange={(e) => handleInputChange("otherIndustry", e.target.value)}
                      sx={inputStyles}
                      required
                      fullWidth
                      aria-label="Other Industry"
                    />
                  )}
                  <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }}>
                    <FormControl fullWidth>
                      <InputLabel sx={labelStyles}>Number of Employees</InputLabel>
                      <Select
                        value={formData.numberOfEmployees}
                        onChange={(e) => handleInputChange("numberOfEmployees", e.target.value)}
                        sx={selectStyles}
                        required
                        aria-label="Number of Employees"
                      >
                        <MenuItem value="" disabled>
                          Select company size
                        </MenuItem>
                        {employeeOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel sx={labelStyles}>Primary Communication Need</InputLabel>
                      <Select
                        value={formData.communicationNeeds}
                        onChange={(e) => handleInputChange("communicationNeeds", e.target.value)}
                        sx={selectStyles}
                        required
                        aria-label="Primary Communication Need"
                      >
                        <MenuItem value="" disabled>
                          Select primary need
                        </MenuItem>
                        {communicationNeedsOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <FormControl fullWidth>
                    <InputLabel sx={labelStyles}>How did you hear about us?</InputLabel>
                    <Select
                      value={formData.howDidYouHearAboutUs}
                      onChange={(e) => handleInputChange("howDidYouHearAboutUs", e.target.value)}
                      sx={selectStyles}
                      required
                      aria-label="How did you hear about us?"
                    >
                      <MenuItem value="" disabled>
                        Select how you found us
                      </MenuItem>
                      {hearAboutUsOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.consent}
                        onChange={(e) => handleInputChange("consent", e.target.checked)}
                        sx={{
                          color: "rgba(147, 51, 234, 0.4)",
                          "&.Mui-checked": { color: "#9333EA" },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ color: "rgba(203, 213, 225, 0.9)", fontSize: "0.85rem" }}>
                        I agree to be contacted by Communication - Chat for demo scheduling and product updates.
                      </Typography>
                    }
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.03)",
                      p: 1.5,
                      borderRadius: "8px",
                      border: "1px solid rgba(147, 51, 234, 0.2)",
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    sx={{
                      py: 1.5,
                      borderRadius: "8px",
                      background: "linear-gradient(to right, #9333EA, #A855F7)",
                      color: "#F3F4F6",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      textTransform: "none",
                      "&:hover": {
                        background: "linear-gradient(to right, #7E22CE, #9333EA)",
                        transform: "translateY(-2px)",
                        transition: "all 0.3s ease",
                      },
                      "&:disabled": {
                        bgcolor: "rgba(100, 116, 139, 0.3)",
                        color: "rgba(255, 255, 255, 0.5)",
                      },
                      display: "flex",
                      gap: 1,
                      boxShadow: "0 4px 12px rgba(147, 51, 234, 0.3)",
                    }}
                  >
                    {loading ? (
                      <>
                        <CircularProgress size={18} color="inherit" />
                        Booking Your Demo...
                      </>
                    ) : (
                      <>
                        <CheckCircle sx={{ fontSize: 18 }} />
                        Book My Demo Now
                        <Star sx={{ fontSize: 14 }} />
                      </>
                    )}
                  </Button>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 3,
                      pt: 2,
                      color: "rgba(203, 213, 225, 0.9)",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box sx={{ width: 8, height: 8, bgcolor: "#34D399", borderRadius: "50%" }} />
                      <Typography sx={{ fontSize: "0.85rem" }}>Secure & Private</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box sx={{ width: 8, height: 8, bgcolor: "#9333EA", borderRadius: "50%" }} />
                      <Typography sx={{ fontSize: "0.85rem" }}>No Spam</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box sx={{ width: 8, height: 8, bgcolor: "#D8B4FE", borderRadius: "50%" }} />
                      <Typography sx={{ fontSize: "0.85rem" }}>Free Demo</Typography>
                    </Box>
                  </Box>
                </form>
              </Box>
            )}
          </Box>

          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity={snackbar.severity}
              sx={{
                width: "100%",
                borderRadius: "8px",
                bgcolor: snackbar.severity === "success" ? "rgba(20, 83, 45, 0.9)" : "rgba(127, 29, 29, 0.9)",
                color: "#F3F4F6",
              }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Modal>
  )
}

export default BookDemoForm