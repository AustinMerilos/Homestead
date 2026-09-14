import styled from "styled-components";
import { SkeletonBlock, SkeletonLine } from "../../components/skeleton";
import { colors, radius, shadow } from "../../theme";
import { InnerContainer } from "./styles";

const SkeletonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: ${colors.white};
  border-radius: ${radius.lg};
  box-shadow: ${shadow.card};
`;

const SkeletonImage = styled(SkeletonBlock)`
  width: 100%;
  aspect-ratio: 5 / 4;
  border-radius: ${radius.md};
`;

// Matches InnerContainer's grid so there's no layout jump once real
// listings replace it.
export default function SearchSkeleton({ count = 12 }: { count?: number }) {
  return (
    <InnerContainer>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index}>
          <SkeletonImage />
          <SkeletonLine $width="85%" $height="20px" />
          <SkeletonLine $width="45%" $height="16px" />
          <SkeletonLine $width="65%" $height="16px" />
        </SkeletonCard>
      ))}
    </InnerContainer>
  );
}
