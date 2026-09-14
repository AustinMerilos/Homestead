import styled from "styled-components";
import { SkeletonBlock, SkeletonLine } from "../../components/skeleton";
import { colors, radius, shadow } from "../../theme";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleSkeleton = styled(SkeletonBlock)`
  width: 55%;
  height: 40px;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    width: 85%;
    height: 26px;
  }
`;

const ImageSkeleton = styled(SkeletonBlock)`
  width: 60%;
  aspect-ratio: 16 / 9;
  border-radius: ${radius.lg};

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const IconRow = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`;

const PricePanel = styled(SkeletonBlock)`
  width: 100%;
  height: 90px;
  margin-top: 24px;
  border-radius: ${radius.md};
`;

const ParagraphBlock = styled.div`
  width: 100%;
  margin-top: 24px;
  padding-left: 28px;
  border-left: 4px solid ${colors.tealTint};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AmenitiesRow = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  width: 100%;
  margin-top: 24px;
`;

const Chip = styled(SkeletonBlock)`
  width: 120px;
  height: 44px;
  border-radius: ${radius.pill};
  box-shadow: ${shadow.soft};
`;

export default function DetailsSkeleton() {
  return (
    <Wrap>
      <TitleSkeleton />
      <ImageSkeleton />
      <IconRow>
        <SkeletonLine $width="60px" $height="24px" />
        <SkeletonLine $width="60px" $height="24px" />
        <SkeletonLine $width="90px" $height="24px" />
      </IconRow>
      <PricePanel />
      <ParagraphBlock>
        <SkeletonLine $height="14px" />
        <SkeletonLine $height="14px" />
        <SkeletonLine $width="70%" $height="14px" />
      </ParagraphBlock>
      <AmenitiesRow>
        <Chip />
        <Chip />
      </AmenitiesRow>
    </Wrap>
  );
}
