"use client"

import { useState, useEffect } from "react"
import { Box, Container, Typography, Button, Drawer, IconButton, useTheme, useMediaQuery } from "@mui/material"
import { Menu, Forum, Person, Event } from "@mui/icons-material"
import Link from "next/link"

export default function Header() {
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigationItems = [
    { label: "Home", href: "/" },
    // { label: "About", href: "/about" },
    { label: "Demo", href: "/demo" },
    // { label: "Contact Us", href: "/contact" },
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          zIndex: 50,
          width: "100%",
          background:
            "linear-gradient(135deg, rgba(76, 29, 149, 0.95) 0%, rgba(91, 33, 182, 0.95) 50%, rgba(49, 46, 129, 0.95) 100%)",
          backdropFilter: "blur(4px)",
          borderBottom: "1px solid rgba(126, 34, 206, 0.5)",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            height: 64,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                background: "linear-gradient(to right, #c4b5fd, #f9a8d4)",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Forum sx={{ fontSize: 20, color: "#fff" }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff" }}>
              Communication - Chat
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            {navigationItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                sx={{
                  color: "#ede9fe",
                  textTransform: "none",
                  fontWeight: 500,
                  position: "relative",
                  "&:hover": {
                    color: "#fff",
                    "&::after": {
                      width: "100%",
                    },
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: 0,
                    height: 2,
                    background: "linear-gradient(to right, #c4b5fd, #f9a8d4)",
                    transition: "width 0.3s",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Desktop Actions */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              variant="text"
              sx={{
                color: "#ede9fe",
                textTransform: "none",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "rgba(107, 33, 168, 0.5)",
                },
              }}
              component={Link}
              href="/"
              startIcon={<Person sx={{ fontSize: 16 }} />}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #8b5cf6, #ec4899)",
                color: "#fff",
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(to right, #a78bfa, #f472b6)",
                },
              }}
              startIcon={<Event sx={{ fontSize: 16 }} />}
              onClick={() => setDemoModalOpen(true)}
              component={Link}
              href="/bookdemo"
            >
              Book a Demo
            </Button>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              sx={{
                color: "#ede9fe",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "rgba(107, 33, 168, 0.5)",
                },
              }}
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: { xs: 300, sm: 400 },
            backgroundColor: "#581c87",
            borderLeft: "1px solid #7e22ce",
            p: 4,
            pt: 8,
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {navigationItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              href={item.href}
              sx={{
                fontSize: "1.125rem",
                fontWeight: 500,
                color: "#ede9fe",
                textTransform: "none",
                justifyContent: "flex-start",
                "&:hover": { color: "#fff" },
              }}
              onClick={handleDrawerToggle}
            >
              {item.label}
            </Button>
          ))}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, pt: 2 }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#c4b5fd",
                color: "#ede9fe",
                textTransform: "none",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(107, 33, 168, 0.5)",
                  borderColor: "#c4b5fd",
                },
              }}
              startIcon={<Person sx={{ fontSize: 16 }} />}
              onClick={handleDrawerToggle}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #8b5cf6, #ec4899)",
                color: "#fff",
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(to right, #a78bfa, #f472b6)",
                },
              }}
              component={Link}
              href={"/bookdemo"}
              startIcon={<Event sx={{ fontSize: 16 }} />}
              onClick={() => {
                setDemoModalOpen(true)
                handleDrawerToggle()
              }}
            >
              Book a Demo
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}
