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
        pt: { xs: 3, sm: 4, md: 6 },
        pb: { xs: 2, sm: 3 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: { xs: 2, sm: 2.5, md: 3 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 1.5, sm: 2, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", sm:"column", md:"row", lg:"row" },
            alignItems: { xs: "center", sm: "center" },
            textAlign: { xs: "center", sm: "center",md:"left" },
            gap:{ xs: "1rem", sm:"1rem", md:"6rem", lg:"6rem" },
          }}
        >
          {/* Product Logo and Copyright */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, alignItems: { xs: "center", sm: "flex-start" } }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: { xs: 28, sm: 32 },
                    height: { xs: 28, sm: 32 },
                    background: "linear-gradient(to right, #c4b5fd, #f9a8d4)",
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Forum sx={{ fontSize: { xs: 18, sm: 20 }, color: "#fff" }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" } }}>
                  Communication - Chat
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: { xs: 1, sm: 1.5 }, fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" } }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
              <Link
                href="/"
                sx={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.875rem" },
                  "&:hover": { color: "#fff" },
                }}
              >
                Home
              </Link>
              <Link
                href="/demo"
                sx={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.875rem" },
                  "&:hover": { color: "#fff" },
                }}
              >
                Product Demo
              </Link>
            </Box>
          </Grid>

          {/* Policies */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: { xs: 1, sm: 1.5 }, fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" } }}>
              Legal
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
              <Link
                href="/privacy"
                sx={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.875rem" },
                  "&:hover": { color: "#fff" },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                sx={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.875rem" },
                  "&:hover": { color: "#fff" },
                }}
              >
                Terms of Service
              </Link>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: { xs: 1, sm: 1.5 }, fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" } }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: { xs: 1, sm: 1.5, md: 2 }, justifyContent: { xs: "center", sm: "flex-start" } }}>
              <Link href="#" target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center" }}>
                <X
                  sx={{
                    fontSize: { xs: 16, sm: 18, md: 20 },
                    color: "#9ca3af",
                    "&:hover": { color: "#fff" },
                  }}
                />
                <Typography sx={{ display: "none" }}>Twitter</Typography>
              </Link>
              <Link href="https://www.linkedin.com/company/fin-coopers-tech-india-private-limited/?viewAsMember=true" target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center" }}>
                <LinkedIn
                  sx={{
                    fontSize: { xs: 16, sm: 18, md: 20 },
                    color: "#9ca3af",
                    "&:hover": { color: "#fff" },
                  }}
                />
                <Typography sx={{ display: "none" }}>LinkedIn</Typography>
              </Link>
              <Link href="https://www.instagram.com/fincoopers.tech?igsh=MXM1aTN3eno3Y3Vobg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center" }}>
                <Instagram
                  sx={{
                    fontSize: { xs: 16, sm: 18, md: 20 },
                    color: "#9ca3af",
                    "&:hover": { color: "#fff" },
                  }}
                />
                <Typography sx={{ display: "none" }}>Instagram</Typography>
              </Link>
              <Link href="https://www.facebook.com/share/16cozxSfFt/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center" }}>
                <Facebook
                  sx={{
                    fontSize: { xs: 16, sm: 18, md: 20 },
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
        <Box sx={{ mt: { xs: 2, sm: 3 }, pt: { xs: 1.5, sm: 2 } }}>
          <Divider sx={{ borderColor: "#1f2937", mb: { xs: 1.5, sm: 2 } }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 1, sm: 1.5 },
            }}
          >
            <Typography sx={{ color: "#9ca3af", fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.875rem" }, textAlign: "center" }}>
              © {currentYear} Communication - Chat. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}