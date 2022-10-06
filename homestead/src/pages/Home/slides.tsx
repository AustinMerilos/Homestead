import {
  SliderContainer,
  SliderImage,
  SliderSubText,
  SliderText,
  SliderTitle,
} from "./styles";

type bannerSliderItems = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export default function Slider({
  subtitle,
  title,
  image,
  description,
}: bannerSliderItems) {
  return (
    <SliderContainer>
      <SliderTitle>{title}</SliderTitle>
      <SliderSubText>{subtitle}</SliderSubText>
      <SliderImage src={image}></SliderImage>
      <SliderText>{description}</SliderText>
    </SliderContainer>
  );
}
