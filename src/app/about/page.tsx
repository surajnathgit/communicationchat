// import { Card, CardContent } from "@/components/ui/card"
// import {
//   LockIcon as Security,
//   FastForwardIcon as Speed,
//   BrainIcon as Psychology,
//   Group,
//   CheckCircle,
//   Users,
//   Award,
//   Globe,
// } from "lucide-react"
// import ParticleBackground from "../components/particle-background"

// export default function About() {
//   const values = [
//     {
//       icon: Security,
//       title: "Security First",
//       description: "We prioritize your privacy and data security above all else.",
//     },
//     {
//       icon: Speed,
//       title: "Performance",
//       description: "Lightning-fast communication that keeps up with your business.",
//     },
//     {
//       icon: Psychology,
//       title: "Innovation",
//       description: "Cutting-edge AI features that enhance productivity.",
//     },
//     {
//       icon: Group,
//       title: "Collaboration",
//       description: "Tools designed to bring teams together effectively.",
//     },
//   ]

//   const achievements = [
//     "Over 10,000 enterprises trust SecureChat Pro",
//     "SOC 2 Type II certified",
//     "GDPR and HIPAA compliant",
//     "99.9% uptime guarantee",
//     "Award-winning customer support",
//     "Zero data breaches since inception",
//   ]

//   const stats = [
//     { icon: Users, number: "10,000+", label: "Enterprise Customers" },
//     { icon: Globe, number: "50+", label: "Countries Served" },
//     { icon: Award, number: "99.9%", label: "Uptime Guarantee" },
//     { icon: Security, number: "0", label: "Data Breaches" },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
//       {/* Particle Background */}
//       <ParticleBackground count={60} speed={0.3} />

//       <div className="relative z-10">
//         {/* Hero Section */}
//         <section className="py-24">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-16">
//               <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
//                 About{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
//                   SecureChat Pro
//                 </span>
//               </h1>
//               <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
//                 We're on a mission to revolutionize enterprise communication with secure, intelligent, and user-friendly
//                 solutions that empower teams to achieve more.
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//               {stats.map((stat, index) => {
//                 const IconComponent = stat.icon
//                 return (
//                   <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 text-center">
//                     <CardContent className="p-6">
//                       <IconComponent className="w-8 h-8 text-purple-300 mx-auto mb-4" />
//                       <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
//                       <p className="text-purple-200 text-sm">{stat.label}</p>
//                     </CardContent>
//                   </Card>
//                 )
//               })}
//             </div>
//           </div>
//         </section>

//         {/* Mission & Vision */}
//         <section className="py-16">
//           <div className="container mx-auto px-4">
//             <div className="grid md:grid-cols-2 gap-8 mb-16">
//               <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
//                 <CardContent className="p-8">
//                   <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
//                   <p className="text-purple-100 leading-relaxed">
//                     To transform how teams communicate by providing a secure, intelligent, and user-friendly platform
//                     that enhances productivity and collaboration. We believe that effective communication is the
//                     foundation of successful organizations, and our AI-powered features help teams work smarter, not
//                     harder.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
//                 <CardContent className="p-8">
//                   <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
//                   <p className="text-purple-100 leading-relaxed">
//                     To become the world's most trusted enterprise communication platform, where security meets
//                     innovation. We envision a future where every team can communicate freely and securely, with AI
//                     assistance that makes collaboration effortless and productive.
//                   </p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>

//         {/* Core Values */}
//         <section className="py-16">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
//               <p className="text-purple-200">The principles that guide everything we do</p>
//             </div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//               {values.map((value, index) => {
//                 const IconComponent = value.icon
//                 return (
//                   <Card
//                     key={index}
//                     className="bg-white/10 backdrop-blur-sm border border-white/20 text-center group hover:bg-white/20 transition-all duration-300"
//                   >
//                     <CardContent className="p-6">
//                       <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                         <IconComponent className="w-8 h-8 text-white" />
//                       </div>
//                       <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
//                       <p className="text-purple-200 text-sm">{value.description}</p>
//                     </CardContent>
//                   </Card>
//                 )
//               })}
//             </div>
//           </div>
//         </section>

//         {/* Company Story */}
//         <section className="py-16">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-white mb-4">Our Story</h2>
//             </div>
//             <Card className="bg-white/10 backdrop-blur-sm border border-white/20 mb-16">
//               <CardContent className="p-8">
//                 <div className="space-y-6 text-purple-100 leading-relaxed">
//                   <p>
//                     Founded in 2020 by a team of cybersecurity experts and communication specialists, SecureChat Pro was
//                     born from the need for truly secure enterprise communication. After witnessing numerous data
//                     breaches and privacy violations in existing platforms, our founders set out to create a solution
//                     that would never compromise on security.
//                   </p>
//                   <p>
//                     Starting with a small team of passionate developers, we built our platform from the ground up with
//                     security as the foundation. Our zero-knowledge architecture ensures that even we cannot access your
//                     data, giving you complete privacy and control.
//                   </p>
//                   <p>
//                     Today, we serve over 10,000 enterprises worldwide, from startups to Fortune 500 companies, helping
//                     them communicate securely while boosting productivity with our AI-powered features.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </section>

//         {/* Achievements */}
//         <section className="py-16">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
//             </div>
//             <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
//               <CardContent className="p-8">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {achievements.map((achievement, index) => (
//                     <div key={index} className="flex items-center space-x-3">
//                       <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
//                       <span className="text-purple-100">{achievement}</span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }
