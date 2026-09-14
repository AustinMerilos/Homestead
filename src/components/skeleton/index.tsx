import styled from "styled-components";
import { colors, radius, shimmer } from "../../theme";

// A shimmering placeholder block. Compose with `styled(SkeletonBlock)` to
// set specific dimensions for a given shape (a line, an image, etc).
export const SkeletonBlock = styled.div`
  background: linear-gradient(
    90deg,
    ${colors.tealTint} 25%,
    #ffffff 37%,
    ${colors.tealTint} 63%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 1.6s linear infinite;
  border-radius: ${radius.sm};
`;

export const SkeletonLine = styled(SkeletonBlock)<{
  $width?: string;
  $height?: string;
}>`
  width: ${({ $width }) => $width ?? "100%"};
  height: ${({ $height }) => $height ?? "16px"};
`;
