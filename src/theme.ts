import { keyframes } from "styled-components";

export const colors = {
  tealDark: "#0b3f3f",
  teal: "#0f7a7a",
  tealMid: "#159595",
  tealLight: "#3fb8b8",
  tealTint: "#e6f6f6",
  gold: "#d8ab4d",
  ink: "#132322",
  slate: "#4d6260",
  cloud: "#f6fbfa",
  white: "#ffffff",
};

export const gradients = {
  hero: `linear-gradient(135deg, ${colors.tealDark} 0%, ${colors.teal} 55%, ${colors.tealLight} 100%)`,
  button: `linear-gradient(135deg, ${colors.tealMid}, ${colors.tealDark})`,
  buttonHover: `linear-gradient(135deg, ${colors.tealLight}, ${colors.teal})`,
  text: `linear-gradient(120deg, ${colors.tealDark}, ${colors.tealMid} 60%, ${colors.gold})`,
};

export const shadow = {
  soft: "0 4px 16px rgba(11, 63, 63, 0.08)",
  card: "0 8px 24px rgba(11, 63, 63, 0.10)",
  cardHover: "0 20px 40px rgba(11, 63, 63, 0.22)",
  button: "0 8px 20px rgba(11, 63, 63, 0.28)",
};

export const radius = {
  sm: "8px",
  md: "14px",
  lg: "22px",
  pill: "999px",
};

export const transition = {
  base: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
  slow: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
};

export const font = {
  display: `'Fraunces', Georgia, serif`,
  body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
};

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const gradientPan = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
`;

export const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;
