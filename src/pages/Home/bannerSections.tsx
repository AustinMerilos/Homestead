import { Link } from "react-router-dom";
import Reveal from "../../components/reveal";
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
  link: string;
};

export default function BannerSections({
  description,
  title,
  button,
  image,
  link,
}: SectionItems) {
  return (
    <>
      <Container>
        <Reveal>
          <BannerContainer>
            <Banner src={image} alt="house image"></Banner>
            <BannerContainerContent>
              <BannerTitle>{title}</BannerTitle>
              <BannerDescription>{description}</BannerDescription>
              <Link to={link}>
                {" "}
                <BannerButton>{button}</BannerButton>
              </Link>
            </BannerContainerContent>
          </BannerContainer>
        </Reveal>
      </Container>
    </>
  );
}
