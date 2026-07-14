// import {
//   Box,
//   Button,
//   Stack,
//   Typography,
//   styled,
// } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
// import LosPageShell from "../components/layout/LosPageShell";

// const HeroSection = styled("section")(({ theme }) => ({
//   position: "relative",
//   minHeight: "calc(100vh - 96px)",
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(9, 6),
//   overflow: "hidden",
//   backgroundColor: "transparent",

//   [theme.breakpoints.down("md")]: {
//     minHeight: "calc(100vh - 76px)",
//     padding: theme.spacing(8, 3),
//   },

//   [theme.breakpoints.down("sm")]: {
//     alignItems: "flex-start",
//     padding: theme.spacing(8, 2),
//   },
// }));

// const HeroContent = styled(Box)(() => ({
//   position: "relative",
//   zIndex: 2,
//   width: "100%",
//   maxWidth: 1440,
//   margin: "0 auto",
// }));

// const HeroTitle = styled("h1")(({ theme }) => ({
//   maxWidth: 930,
//   margin: 0,
//   color: "#ffffff",
//   fontFamily: '"Arial Black", Impact, sans-serif',
//   fontSize: "clamp(5rem, 10vw, 11.5rem)",
//   fontWeight: 900,
//   lineHeight: 0.82,
//   letterSpacing: "-0.075em",
//   textTransform: "uppercase",
//   textShadow: `
//     0 0 3px rgba(255, 255, 255, 1),
//     0 0 10px rgba(255, 255, 255, 0.85),
//     0 0 24px rgba(255, 73, 165, 0.66),
//     0 0 52px rgba(255, 38, 144, 0.52),
//     0 0 90px rgba(84, 130, 255, 0.26)
//   `,
//   filter: "drop-shadow(0 8px 12px rgba(0, 0, 0, 0.68))",

//   [theme.breakpoints.down("md")]: {
//     maxWidth: 720,
//     fontSize: "clamp(4.5rem, 13vw, 8rem)",
//   },

//   [theme.breakpoints.down("sm")]: {
//     fontSize: "clamp(3.5rem, 18vw, 5.8rem)",
//     lineHeight: 0.86,
//   },
// }));

// const HeroDescription = styled(Typography)(({ theme }) => ({
//   maxWidth: 330,
//   marginTop: theme.spacing(4),
//   color: "rgba(245, 241, 232, 0.82)",
//   fontSize: "0.92rem",
//   fontWeight: 500,
//   lineHeight: 1.65,
//   letterSpacing: "0.035em",
//   textShadow: "0 2px 12px rgba(0, 0, 0, 0.85)",

//   [theme.breakpoints.down("sm")]: {
//     marginTop: theme.spacing(3),
//   },
// }));

// const HeroActions = styled(Stack)(({ theme }) => ({
//   marginTop: theme.spacing(3),
//   flexDirection: "row",
//   alignItems: "center",
//   gap: theme.spacing(2),

//   [theme.breakpoints.down("sm")]: {
//     width: "100%",
//     maxWidth: 340,
//     flexDirection: "column",
//     alignItems: "stretch",
//   },
// }));

// const HeroButton = styled(Button)(() => ({
//   minHeight: 48,
//   borderRadius: 0,
//   padding: "12px 28px",
//   fontSize: "0.72rem",
//   fontWeight: 800,
//   letterSpacing: "0.13em",
//   textTransform: "uppercase",
//   transition: "all 180ms ease",
// })) as typeof Button;

// const ShopButton = styled(HeroButton)(() => ({
//   color: "#050506",
//   background: "linear-gradient(90deg, #ff3b8d, #ff49aa)",
//   boxShadow: `
//     0 0 16px rgba(255, 59, 141, 0.34),
//     0 0 34px rgba(255, 59, 141, 0.2)
//   `,

//   "&:hover": {
//     color: "#050506",
//     background: "linear-gradient(90deg, #ff5fae, #ff3b8d)",
//     boxShadow: `
//       0 0 20px rgba(255, 59, 141, 0.56),
//       0 0 46px rgba(255, 59, 141, 0.32)
//     `,
//     transform: "translateY(-2px)",
//   },
// })) as typeof Button;

// const CollectionButton = styled(HeroButton)(() => ({
//   color: "#f5f1e8",
//   borderColor: "rgba(245, 241, 232, 0.48)",
//   backgroundColor: "rgba(3, 3, 5, 0.3)",
//   backdropFilter: "blur(8px)",

//   "&:hover": {
//     color: "#ffffff",
//     borderColor: "rgba(255, 255, 255, 0.9)",
//     backgroundColor: "rgba(255, 255, 255, 0.06)",
//     boxShadow: "0 0 24px rgba(116, 247, 255, 0.18)",
//     transform: "translateY(-2px)",
//   },
// })) as typeof Button;





// const SidePrompt = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   left: theme.spacing(2.5),
//   top: "50%",
//   zIndex: 3,
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(2),
//   transform: "translateY(-50%) rotate(-90deg)",
//   transformOrigin: "center",
//   color: "rgba(255, 255, 255, 0.74)",
//   fontSize: "0.62rem",
//   fontWeight: 700,
//   letterSpacing: "0.2em",
//   textTransform: "uppercase",

//   "&::before": {
//     content: '""',
//     display: "block",
//     width: 52,
//     height: 1,
//     backgroundColor: "rgba(255, 255, 255, 0.58)",
//   },

//   [theme.breakpoints.down("md")]: {
//     display: "none",
//   },
// }));

// const RadioCard = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   zIndex: 3,
//   right: theme.spacing(5),
//   bottom: theme.spacing(7),
//   width: 240,
//   padding: theme.spacing(2),
//   backgroundColor: "rgba(2, 2, 5, 0.16)",
//   backdropFilter: "blur(9px)",

//   [theme.breakpoints.down("md")]: {
//     display: "none",
//   },
// }));

// const RadioLabel = styled(Typography)(() => ({
//   color: "#ff3b8d",
//   fontSize: "0.58rem",
//   fontWeight: 800,
//   letterSpacing: "0.17em",
//   textTransform: "uppercase",
// }));

// const RadioTitle = styled(Typography)(() => ({
//   marginTop: 6,
//   color: "#ffffff",
//   fontSize: "0.86rem",
//   letterSpacing: "0.06em",
//   textTransform: "uppercase",
// }));

// const Waveform = styled(Box)(() => ({
//   height: 30,
//   marginTop: 14,
//   opacity: 0.9,
//   background: `
//     repeating-linear-gradient(
//       90deg,
//       #ff3b8d 0,
//       #ff3b8d 2px,
//       transparent 2px,
//       transparent 5px
//     )
//   `,
//   clipPath:
//     "polygon(0 72%, 2% 35%, 4% 74%, 6% 48%, 8% 80%, 10% 20%, 12% 68%, 14% 42%, 16% 76%, 18% 30%, 20% 72%, 22% 52%, 24% 82%, 26% 25%, 28% 68%, 30% 48%, 32% 74%, 34% 38%, 36% 82%, 38% 20%, 40% 65%, 42% 42%, 44% 78%, 46% 33%, 48% 69%, 50% 48%, 52% 82%, 54% 27%, 56% 67%, 58% 45%, 60% 78%, 62% 36%, 64% 72%, 66% 50%, 68% 80%, 70% 24%, 72% 66%, 74% 44%, 76% 75%, 78% 31%, 80% 70%, 82% 48%, 84% 78%, 86% 28%, 88% 68%, 90% 44%, 92% 74%, 94% 34%, 96% 66%, 98% 45%, 100% 72%, 100% 100%, 0 100%)",
// }));

// const MarqueeSection = styled(Box)(() => ({
//   position: "relative",
//   zIndex: 2,
//   overflow: "hidden",
//   borderTop: "1px solid rgba(255, 59, 141, 0.25)",
//   borderBottom: "1px solid rgba(116, 247, 255, 0.2)",
//   backgroundColor: "rgba(2, 2, 4, 0.65)",
//   backdropFilter: "blur(12px)",
// }));

// const MarqueeTrack = styled(Box)(() => ({
//   display: "flex",
//   width: "max-content",
//   padding: "15px 0",
// }));

// const MarqueeText = styled(Typography)(({ theme }) => ({
//   flexShrink: 0,
//   color: "#ff5bab",
//   fontSize: "0.72rem",
//   fontWeight: 800,
//   letterSpacing: "0.18em",
//   textTransform: "uppercase",
//   wordSpacing: "1.2rem",

//   "& span": {
//     margin: "0 18px",
//     color: "#74f7ff",
//     textShadow: "0 0 12px rgba(116, 247, 255, 0.7)",
//   },

//   [theme.breakpoints.down("sm")]: {
//     fontSize: "0.62rem",
//   },
// }));

// const DropSection = styled("section")(({ theme }) => ({
//   position: "relative",
//   zIndex: 2,
//   minHeight: 620,
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(10, 6),
//   background: `
//     linear-gradient(
//       180deg,
//       rgba(3, 3, 5, 0.3),
//       rgba(3, 3, 5, 0.82)
//     )
//   `,

//   [theme.breakpoints.down("md")]: {
//     minHeight: 480,
//     padding: theme.spacing(8, 3),
//   },

//   [theme.breakpoints.down("sm")]: {
//     padding: theme.spacing(7, 2),
//   },
// }));

// const DropContent = styled(Box)(() => ({
//   width: "100%",
//   maxWidth: 1440,
//   margin: "0 auto",
// }));

// const Eyebrow = styled(Typography)(() => ({
//   color: "#ff3b8d",
//   fontSize: "0.7rem",
//   fontWeight: 800,
//   letterSpacing: "0.19em",
//   textTransform: "uppercase",
//   textShadow: "0 0 14px rgba(255, 59, 141, 0.7)",
// }));

// const DropTitle = styled("h2")(({ theme }) => ({
//   maxWidth: 700,
//   marginTop: theme.spacing(2),
//   color: "#ffffff",
//   fontSize: "clamp(3.2rem, 7vw, 7.2rem)",
//   fontWeight: 400,
//   lineHeight: 0.92,
//   letterSpacing: "-0.035em",
//   textTransform: "uppercase",
//   textShadow: `
//     0 0 6px rgba(255, 255, 255, 0.74),
//     0 0 24px rgba(255, 59, 141, 0.28)
//   `,
// }));

// const DropDescription = styled(Typography)(({ theme }) => ({
//   maxWidth: 460,
//   marginTop: theme.spacing(3),
//   color: "rgba(245, 241, 232, 0.72)",
//   fontSize: "0.96rem",
//   lineHeight: 1.75,
//   letterSpacing: "0.03em",
// }));

// export default function Homepage() {
//   return (
//     <LosPageShell>
//       <HeroSection>
//         <SidePrompt>Scroll to explore</SidePrompt>

//         <HeroContent>
//           <HeroTitle>
//             Love.
//             <br />
//             Obsessed.
//             <br />
//             Scared.
//           </HeroTitle>

//           <HeroDescription>
//             Clothing for the in-between hours.
//             <br />
//             Made ethically.
//             <br />
//             For the dreamers, the lovers, the nightlights.
//           </HeroDescription>

//           <HeroActions>
//             <ShopButton
//               component={RouterLink}
//               to="/shop"
//               variant="contained"
//               disableElevation
//             >
//               Shop now&nbsp;&nbsp; →
//             </ShopButton>

//             <CollectionButton
//               component={RouterLink}
//               to="/shop"
//               variant="outlined"
//             >
//               Explore collections
//             </CollectionButton>
//           </HeroActions>
//         </HeroContent>

//         <RadioCard>
//           <RadioLabel>Now playing</RadioLabel>
//           <RadioTitle>Afterhours Radio</RadioTitle>
//           <Waveform />
//         </RadioCard>
//       </HeroSection>

//       <MarqueeSection>
//         <MarqueeTrack>
//           <MarqueeText>
//             Nightlife <span>✦</span>
//             Love <span>✦</span>
//             Freedom <span>✦</span>
//             Expression <span>✦</span>
//             Community <span>✦</span>
//             Nightlife <span>✦</span>
//             Love <span>✦</span>
//             Freedom <span>✦</span>
//             Expression <span>✦</span>
//             Community
//           </MarqueeText>
//         </MarqueeTrack>
//       </MarqueeSection>

//       <DropSection>
//         <DropContent>
//           <Eyebrow>● &nbsp; New drop</Eyebrow>

//           <DropTitle>
//             Afterhours
//             <br />
//             Collection
//           </DropTitle>

//           <DropDescription>
//             Pieces that come alive after midnight. Designed for expression,
//             connection, and the people who make the night worth remembering.
//           </DropDescription>
//         </DropContent>
//       </DropSection>
//     </LosPageShell>
//   );
// }
import LosPageShell from "../components/layout/LosPageShell";

export default function Contact() {
  return (
    <LosPageShell>
     Hello
    </LosPageShell>
  );
}