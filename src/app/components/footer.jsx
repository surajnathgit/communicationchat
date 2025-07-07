import { Box, Container, Typography, Grid, Link, Divider } from "@mui/material";
import { Forum, X, LinkedIn, Instagram, Facebook } from "@mui/icons-material";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, rgba(76, 29, 149, 0.95) 0%, rgba(91, 33, 182, 0.95) 50%, rgba(49, 46, 129, 0.95) 100%)",
        color: "#fff",
        pt: 8,
        pb:4
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: 2,
        }}
      >
        <Grid container spacing={4} sx={{display:"flex", gap:"10rem", justifyContent:"center"}}>
          {/* Product Logo and Copyright */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    background: "linear-gradient(to right, #c4b5fd, #f9a8d4)",
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Forum sx={{ fontSize: 20, color: "#fff" }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Communication - Chat
                </Typography>
              </Box>
              {/* <Typography sx={{ color: "#9ca3af", fontSize: "0.875rem" }}>
                © {currentYear} Communication - Chat. All rights reserved.
              </Typography> */}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="/"
                sx={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#fff" },
                }}
              >
                Home
              </Link>
              {/* <Link
                href="/about"
                sx={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#fff" },
                }}
              >
                About
              </Link> */}
              <Link
                href="/demo"
                sx={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#fff" },
                }}
              >
                Product Demo
              </Link>
              {/* <Link
                // href="/contact"
                sx={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#fff" },
                }}
              >
                Contact Us
              </Link> */}
            </Box>
          </Grid>

          {/* Policies */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Legal
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                // href="/privacy"
                sx={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#fff" },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                // href="/terms"
                sx={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#fff" },
                }}
              >
                Terms of Service
              </Link>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link href="#" target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center" }}>
                <X
                  sx={{
                    fontSize: 20,
                    color: "#9ca3af",
                    "&:hover": { color: "#fff" },
                  }}
                />
                <Typography sx={{ display: "none" }}>Twitter</Typography>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center" }}>
                <LinkedIn
                  sx={{
                    fontSize: 20,
                    color: "#9ca3af",
                    "&:hover": { color: "#fff" },
                  }}
                />
                <Typography sx={{ display: "none" }}>LinkedIn</Typography>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center" }}>
                <Instagram
                  sx={{
                    fontSize: 20,
                    color: "#9ca3af",
                    "&:hover": { color: "#fff" },
                  }}
                />
                <Typography sx={{ display: "none" }}>Instagram</Typography>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center" }}>
                <Facebook
                  sx={{
                    fontSize: 20,
                    color: "#9ca3af",
                    "&:hover": { color: "#fff" },
                  }}
                />
                <Typography sx={{ display: "none" }}>Facebook</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Border */}
        <Box sx={{ mt: 4, pt: 4,display:"flex", justifyContent:"center", flexDirection:"column"}} >
          <Divider sx={{ borderColor: "#1f2937", mb: 2 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 2, md: 0 },
            }}
          >
            <Typography sx={{ color: "#9ca3af", fontSize: "0.875rem",textAlign: 'center', }} >
              © {currentYear} Communication - Chat. All rights reserved.
            </Typography>
            {/* <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Link
                href="/privacy"
                sx={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#fff" },
                }}
              >
                Privacy Policy
              </Link>
              <Typography sx={{ color: "#4b5563", fontSize: "0.875rem" }}>•</Typography>
              <Link
                href="/terms"
                sx={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#fff" },
                }}
              >
                Terms of Service
              </Link>
            </Box> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}