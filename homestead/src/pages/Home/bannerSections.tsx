import {
  BannerButton,
  BannerContainer,
  BannerContainerContent,
  BannerDescription,
  BannerTitle,
  Container,
  Banner,
} from "./styles";

type SectionItems = {
  description: string;
  title: string;
  button: string;
  image: string;
};

export default function BannerSections({
  description,
  title,
  button,
  image,
}: SectionItems) {
  return (
    <>
      <Container>
        <BannerContainer>
          <Banner src={image}></Banner>
          <BannerContainerContent>
            <BannerTitle>{title}</BannerTitle>
            <BannerDescription>{description}</BannerDescription>
            <BannerButton>{button}</BannerButton>
          </BannerContainerContent>
        </BannerContainer>
      </Container>
    </>
  );
}
