import {
  Card,
  CardContent,
  Box,
  Typography,
  Grid,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material"
import {
  AccessTime,
  Email,
  Forum,
  CheckCircle,
  Cancel,
  ArrowForward,
  Bolt,
  Group,
  Description,
  Smartphone,
  Search,
  Security,
} from "@mui/icons-material"
import ParticleBackground from "./particle-background"
import ScrollAnimation from "./scroll-animation"
import StaggeredScrollAnimation from "./staggered-scroll-animation"
import { ScaleScrollAnimation } from "./advanced-scroll-animations"

export default function ChatSecureComparison() {
  const beforeAfterData = {
    before: {
      title: "Email-Dependent Communication",
      subtitle: "Current Challenges",
      challenges: [
        "Heavy reliance on email for all communication",
        "Delayed responses and slow decision making",
        "Difficulty tracking conversation threads",
        "Limited real-time collaboration",
        "Information silos between departments",
        "Inefficient file sharing methods.",
      ],
      painPoints: [
        { icon: AccessTime, metric: "4-6 hours", description: "for email responses" },
        { icon: Email, metric: "Lost emails", description: "and missed communications" },
        { icon: Description, metric: "Fragmented", description: "conversation history" },
        { icon: Smartphone, metric: "Limited", description: "mobile communication capabilities" },
      ],
    },
    after: {
      title: "Real-Time Unified Communication",
      subtitle: "New Capabilities",
      capabilities: [
        "Instant messaging and real-time communication",
        "Immediate responses and quick decisions",
        "Organized conversation threads and channels",
        "Enhanced real-time collaboration",
        "Seamless cross-department communication",
        "Integrated file sharing and collaboration",
      ],
      improvements: [
        { icon: Bolt, metric: "5-10 minutes", description: "for responses" },
        { icon: Security, metric: "Zero lost", description: "communications" },
        { icon: Search, metric: "Complete", description: "conversation history" },
        { icon: Smartphone, metric: "Full mobile", description: "communication capabilities" },
      ],
    },
  }

  const comparisonData = [
    {
      feature: "Response Time",
      ourProduct: "5-10 minutes",
      competitor1: "2-4 hours",
      competitor2: "1-3 hours",
      highlight: true,
    },
    {
      feature: "Real-time Messaging",
      ourProduct: "Yes",
      competitor1: "Limited",
      competitor2: "Yes",
      highlight: true,
    },
    {
      feature: "File Sharing",
      ourProduct: "Integrated & Secure",
      competitor1: "Basic",
      competitor2: "External Tools",
      highlight: true,
    },
    {
      feature: "Mobile Support",
      ourProduct: "Full Native App",
      competitor1: "Web Only",
      competitor2: "Basic App",
      highlight: true,
    },
    {
      feature: "Search & History",
      ourProduct: "Advanced Search",
      competitor1: "Basic Search",
      competitor2: "Limited History",
      highlight: true,
    },
    {
      feature: "Department Integration",
      ourProduct: "Seamless",
      competitor1: "Manual Setup",
      competitor2: "Limited",
      highlight: true,
    },
    {
      feature: "Security & Encryption",
      ourProduct: "End-to-End",
      competitor1: "Transport Layer",
      competitor2: "Basic SSL",
      highlight: true,
    },
    {
      feature: "Offline Sync",
      ourProduct: "Yes",
      competitor1: "No",
      competitor2: "Limited",
      highlight: false,
    },
    {
      feature: "Custom Integrations",
      ourProduct: "API + Webhooks",
      competitor1: "Limited API",
      competitor2: "No API",
      highlight: true,
    },
    {
      feature: "Admin Controls",
      ourProduct: "Advanced",
      competitor1: "Basic",
      competitor2: "Limited",
      highlight: false,
    },
  ]

  const communicationMetrics = [
    {
      title: "Response Speed",
      before: "4-6 hours",
      after: "5-10 minutes",
      improvement: "95% faster",
      icon: AccessTime,
      color: "linear-gradient(to right, #3b82f6, #06b6d4)",
    },
    {
      title: "Communication Loss",
      before: "15-20% lost",
      after: "0% lost",
      improvement: "100% reliability",
      icon: Security,
      color: "linear-gradient(to right, #22c55e, #059669)",
    },
    {
      title: "Mobile Usage",
      before: "20% mobile",
      after: "80% mobile",
      improvement: "4x increase",
      icon: Smartphone,
      color: "linear-gradient(to right, #8b5cf6, #ec4899)",
    },
    {
      title: "File Sharing",
      before: "Email attachments",
      after: "Instant sharing",
      improvement: "Real-time collaboration",
      icon: Description,
      color: "linear-gradient(to right, #f97316, #ef4444)",
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
      <ParticleBackground count={50} speed={0.3}
        minSize={2}
        maxSize={3} />

      <Box
        sx={{
          px: 2,
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Section Header */}
        <ScrollAnimation direction="up" distance={50} duration={0.8} delay={0.1}>
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
              💬 Communication Revolution
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
              Transform Your
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(to right, #c4b5fd, #f9a8d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                Team Communication
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
              See how Communication-Chat eliminates email dependency and creates seamless real-time collaboration
            </Typography>
          </Box>
        </ScrollAnimation>

        {/* Communication Metrics */}
        <StaggeredScrollAnimation direction="up" distance={60} duration={0.7} staggerDelay={0.15}>
          <Grid container spacing={3} sx={{ mb: 10 }} justifyContent={"center"}>
            {communicationMetrics.map((metric, index) => {
              const IconComponent = metric.icon
              return (
                <Grid item xs={12} md={6} lg={3} key={index}>
                  <Card
                    sx={{
                      width: 280,
                      minHeight: 220,
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      textAlign: "center",
                      transition: "all 0.3s",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          background: metric.color,
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
                      <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff", mb: 1, textAlign: "center" }}>
                        {metric.title}
                      </Typography>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, textAlign: "left" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Typography sx={{ color: "#fca5a5", fontSize: "0.875rem" }}>Before:</Typography>
                          <Typography sx={{ color: "#fecaca", fontSize: "0.875rem" }}>{metric.before}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Typography sx={{ color: "#86efac", fontSize: "0.875rem" }}>After:</Typography>
                          <Typography sx={{ color: "#bbf7d0", fontSize: "0.875rem" }}>{metric.after}</Typography>
                        </Box>
                        <Box sx={{ pt: 1, textAlign: "center" }}>
                          <Chip
                            label={metric.improvement}
                            sx={{
                              background: "linear-gradient(to right, #22c55e, #059669)",
                              color: "#fff",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                            }}
                          />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </StaggeredScrollAnimation>

        {/* Before vs After Comparison */}
        <ScrollAnimation direction="up" distance={50} duration={0.8} delay={0.2}>
          <Grid container spacing={4} sx={{ mb: 10 }} justifyContent={"center"}>
            {/* Before - Email Communication */}
            <Grid item xs={12} lg={6}>
              <Card
                sx={{
                  width: "100%",
                  minHeight: 400,
                  background: "rgba(239, 68, 68, 0.1)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(248, 113, 113, 0.3)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 4,
                    background: "linear-gradient(to right, #ef4444, #f97316)",
                  }}
                />
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        background: "rgba(239, 68, 68, 0.2)",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      <Email sx={{ fontSize: 24, color: "#f87171" }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: "#fff", mb: 0.5 }}>
                        {beforeAfterData.before.title}
                      </Typography>
                      <Typography sx={{ color: "#fecaca", fontSize: "0.875rem" }}>
                        {beforeAfterData.before.subtitle}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mb: 4, display: "flex", flexDirection: "column", gap: 1 }}>
                    {beforeAfterData.before.challenges.map((challenge, index) => (
                      <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Cancel sx={{ fontSize: 16, color: "#f87171", flexShrink: 0 }} />
                        <Typography sx={{ color: "#fee2e2", fontSize: "0.875rem" }}>{challenge}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#fff", mb: 1.5 }}>
                      Key Pain Points:
                    </Typography>
                    {beforeAfterData.before.painPoints.map((point, index) => {
                      const IconComponent = point.icon
                      return (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            background: "rgba(239, 68, 68, 0.1)",
                            borderRadius: 1,
                            p: 1.5,
                            mb: 1,
                          }}
                        >
                          <IconComponent sx={{ fontSize: 20, color: "#f87171" }} />
                          <Box>
                            <Typography component="span" sx={{ fontWeight: 600, color: "#fff", mr: 1 }}>
                              {point.metric}
                            </Typography>
                            <Typography component="span" sx={{ color: "#fecaca", fontSize: "0.875rem" }}>
                              {point.description}
                            </Typography>
                          </Box>
                        </Box>
                      )
                    })}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* After - Communication-Chat Communication */}
            <Grid item xs={12} lg={6}>
              <Card
                sx={{
                  width: "100%",
                  minHeight: 400,
                  background: "rgba(34, 197, 94, 0.1)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(74, 222, 128, 0.3)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 4,
                    background: "linear-gradient(to right, #22c55e, #059669)",
                  }}
                />
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        background: "rgba(34, 197, 94, 0.2)",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      <Forum sx={{ fontSize: 24, color: "#4ade80" }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: "#fff", mb: 0.5 }}>
                        {beforeAfterData.after.title}
                      </Typography>
                      <Typography sx={{ color: "#bbf7d0", fontSize: "0.875rem" }}>
                        {beforeAfterData.after.subtitle}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mb: 4, display: "flex", flexDirection: "column", gap: 1 }}>
                    {beforeAfterData.after.capabilities.map((capability, index) => (
                      <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <CheckCircle sx={{ fontSize: 16, color: "#4ade80", flexShrink: 0 }} />
                        <Typography sx={{ color: "#dcfce7", fontSize: "0.875rem" }}>{capability}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#fff", mb: 1.5 }}>
                      Achieved Improvements:
                    </Typography>
                    {beforeAfterData.after.improvements.map((improvement, index) => {
                      const IconComponent = improvement.icon
                      return (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            background: "rgba(34, 197, 94, 0.1)",
                            borderRadius: 1,
                            p: 1.5,
                            mb: 1,
                          }}
                        >
                          <IconComponent sx={{ fontSize: 20, color: "#4ade80" }} />
                          <Box>
                            <Typography component="span" sx={{ fontWeight: 600, color: "#fff", mr: 1 }}>
                              {improvement.metric}
                            </Typography>
                            <Typography component="span" sx={{ color: "#bbf7d0", fontSize: "0.875rem" }}>
                              {improvement.description}
                            </Typography>
                          </Box>
                        </Box>
                      )
                    })}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </ScrollAnimation>

        {/* Transformation Arrow */}
        <ScaleScrollAnimation scaleRange={[0.8, 1]} threshold={0.3}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 10 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(4px)",
                borderRadius: "9999px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                px: 4,
                py: 2,
              }}
            >
              <Email sx={{ fontSize: 24, color: "#f87171" }} />
              <Typography sx={{ color: "#fff", fontWeight: 600 }}>Email Communication</Typography>
              <ArrowForward sx={{ fontSize: 24, color: "#c4b5fd" }} />
              <Forum sx={{ fontSize: 24, color: "#4ade80" }} />
              <Typography sx={{ color: "#fff", fontWeight: 600 }}>Communication-Chat</Typography>
            </Box>
          </Box>
        </ScaleScrollAnimation>

        {/* Competitive Comparison Table */}
        <ScrollAnimation direction="up" distance={60} duration={0.8} delay={0.3}>
          <Box sx={{ mb: 8 }} mx={"auto"} maxWidth={"lg"}>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography variant="h3" sx={{ fontSize: "1.875rem", fontWeight: 700, color: "#fff", mb: 1 }}>
                How Communication-Chat Compares
              </Typography>
              <Typography sx={{ color: "#e9d5ff", fontSize: "1rem" }}>
                See why Communication-Chat leads in enterprise communication
              </Typography>
            </Box>

            <Card
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255, 255, 255, 0.2q)",
                overflow: "hidden",
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ overflowX: "auto" }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ background: "linear-gradient(to right, #7c3aed, #ec4899)" }}>
                        <TableCell sx={{ color: "#fff", fontWeight: 700, p: 2, textAlign: "left" }}>Feature</TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: 700, p: 2, textAlign: "center", minWidth: 150 }}>
                          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Chip
                              label="Communication-Chat"
                              sx={{
                                background: "#fff",
                                color: "#7c3aed",
                                fontWeight: 700,
                                mb: 0.5,
                              }}
                            />
                            <Typography sx={{ fontSize: "0.75rem", opacity: 0.9 }}>Our Platform</Typography>
                          </Box>
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: 700, p: 2, textAlign: "center", minWidth: 120 }}>
                          <Box sx={{ textAlign: "center" }}>
                            <Typography sx={{ fontWeight: 700 }}>Slack</Typography>
                            <Typography sx={{ fontSize: "0.75rem", opacity: 0.75 }}>Popular Alternative</Typography>
                          </Box>
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: 700, p: 2, textAlign: "center", minWidth: 120 }}>
                          <Box sx={{ textAlign: "center" }}>
                            <Typography sx={{ fontWeight: 700 }}>Microsoft Teams</Typography>
                            <Typography sx={{ fontSize: "0.75rem", opacity: 0.75 }}>Enterprise Solution</Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {comparisonData.map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            backgroundColor: index % 2 === 0 ? "rgba(255, 255, 255, 0.05)" : "transparent",
                            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                          }}
                        >
                          <TableCell
                            sx={{
                              p: 2,
                              color: "#fff",
                              fontWeight: 500,
                              borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                            }}
                          >
                            {row.feature}
                          </TableCell>
                          <TableCell
                            sx={{
                              p: 2,
                              textAlign: "center",
                              borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                            }}
                          >
                            <Chip
                              label={row.ourProduct}
                              sx={{
                                background: row.highlight
                                  ? "linear-gradient(to right, #22c55e, #059669)"
                                  : "rgba(139, 92, 246, 0.2)",
                                color: row.highlight ? "#fff" : "#e9d5ff",
                                border: row.highlight ? "none" : "1px solid rgba(167, 139, 250, 0.3)",
                                fontWeight: 600,
                              }}
                            />
                          </TableCell>
                          <TableCell
                            sx={{
                              p: 2,
                              textAlign: "center",
                              color: "#e9d5ff",
                              borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                            }}
                          >
                            <Box
                              sx={{
                                px: 1.5,
                                py: 0.5,
                                background: "rgba(249, 115, 22, 0.2)",
                                color: "#fed7aa",
                                borderRadius: "9999px",
                                fontSize: "0.875rem",
                              }}
                            >
                              {row.competitor1}
                            </Box>
                          </TableCell>
                          <TableCell sx={{ p: 2, textAlign: "center", color: "#e9d5ff" }}>
                            <Box
                              sx={{
                                px: 1.5,
                                py: 0.5,
                                background: "rgba(59, 130, 246, 0.2)",
                                color: "#bfdbfe",
                                borderRadius: "9999px",
                                fontSize: "0.875rem",
                              }}
                            >
                              {row.competitor2}
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </ScrollAnimation>

        {/* Key Benefits Summary */}
        <StaggeredScrollAnimation direction="up" distance={50} duration={0.6} staggerDelay={0.2}>
          <Grid container spacing={3} sx={{ mb: 3 }} justifyContent={"center"}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  width: 280,
                  minHeight: 220,
                  background: "linear-gradient(to bottom right, rgba(34, 197, 94, 0.2), rgba(5, 150, 105, 0.2))",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(74, 222, 128, 0.3)",
                }}
              >
                <CardContent sx={{ p: 3, textAlign: "center" }}>
                  <Bolt sx={{ fontSize: 48, color: "#4ade80", mx: "auto", mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff", mb: 1 }}>
                    95% Faster
                  </Typography>
                  <Typography sx={{ color: "#bbf7d0", fontSize: "0.875rem" }}>
                    Response times compared to email communication
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  width: 280,
                  minHeight: 220,
                  background: "linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(96, 165, 250, 0.3)",
                }}
              >
                <CardContent sx={{ p: 3, textAlign: "center" }}>
                  <Security sx={{ fontSize: 48, color: "#60a5fa", mx: "auto", mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff", mb: 1 }}>
                    100% Secure
                  </Typography>
                  <Typography sx={{ color: "#bfdbfe", fontSize: "0.875rem" }}>
                    End-to-end encryption with zero data loss
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  width: 280,
                  minHeight: 220,
                  background: "linear-gradient(to bottom right, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(167, 139, 250, 0.3)",
                }}
              >
                <CardContent sx={{ p: 3, textAlign: "center" }}>
                  <Group sx={{ fontSize: 48, color: "#c4b5fd", mx: "auto", mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff", mb: 1 }}>
                    Seamless
                  </Typography>
                  <Typography sx={{ color: "#e9d5ff", fontSize: "0.875rem" }}>
                    Cross-department collaboration and integration
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </StaggeredScrollAnimation>

        {/* Bottom CTA
        <ScaleScrollAnimation scaleRange={[0.9, 1]} threshold={0.2}>
          <Box sx={{ textAlign: "center" }}>
            <Card
              sx={{
                width: 800,
                minHeight: 200,
                background: "linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(167, 139, 250, 0.3)",
                display: "inline-block",
              }}
            >
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#fff", mb: 1.5 }}>
                  Ready to Revolutionize Your Communication?
                </Typography>
                <Typography sx={{ color: "#e9d5ff", mb: 3, maxWidth: 512, mx: "auto" }}>
                  Join thousands of teams who have eliminated email dependency and embraced real-time collaboration
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#4ade80" }}>
                    <CheckCircle sx={{ fontSize: 20 }} />
                    <Typography sx={{ fontWeight: 600, fontSize: "0.875rem" }}>5-10 minute responses</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#4ade80" }}>
                    <CheckCircle sx={{ fontSize: 20 }} />
                    <Typography sx={{ fontWeight: 600, fontSize: "0.875rem" }}>Zero lost communications</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#4ade80" }}>
                    <CheckCircle sx={{ fontSize: 20 }} />
                    <Typography sx={{ fontWeight: 600, fontSize: "0.875rem" }}>Full mobile support</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </ScaleScrollAnimation> */}
      </Box>
    </Box>
  )
}
