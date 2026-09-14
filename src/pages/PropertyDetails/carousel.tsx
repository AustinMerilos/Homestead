import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import {
  PropertyImage,
  PropertyImageContainer,
  Thumbnail,
  ThumbnailStrip,
} from "./styles";

//Image Carousel for the property details page
type CarouselItems = {
  photos: { title: string | null; url: string }[];
};
export default function Carousel({ photos }: CarouselItems) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const activeThumbRef = React.useRef<HTMLImageElement>(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  React.useEffect(() => {
    activeThumbRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeStep]);

  return (
    <PropertyImageContainer>
      <Typography>{photos[activeStep].title}</Typography>
      <PropertyImage src={photos[activeStep].url}></PropertyImage>
      <MobileStepper
        variant="text"
        position="static"
        activeStep={activeStep}
        sx={{ width: "60%", flexGrow: 1 }}
        steps={photos.length}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === photos.length - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      {photos.length > 1 && (
        <ThumbnailStrip>
          {photos.map((photo, index) => (
            <Thumbnail
              key={photo.url + index}
              ref={index === activeStep ? activeThumbRef : undefined}
              src={photo.url}
              alt={photo.title ?? "property thumbnail"}
              $active={index === activeStep}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </ThumbnailStrip>
      )}
    </PropertyImageContainer>
  );
}
