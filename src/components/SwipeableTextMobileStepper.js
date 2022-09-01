import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import RVN1 from "../assets/stepper_images/rvn1.png";
import RVN2 from "../assets/stepper_images/rvn2.png";
import RVSS1 from "../assets/stepper_images/rvss1.png";
import RVSS2 from "../assets/stepper_images/rvss2.png";
import RVSS3 from "../assets/stepper_images/rvss3.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "RVN1",
    imgPath: RVN1,
  },
  {
    label: "RVN2",
    imgPath: RVN2,
  },
  {
    label: "RVSS1",
    imgPath: RVSS1,
  },
  {
    label: "RVSS2",
    imgPath: RVSS2,
  },
  {
    label: "RVSS3",
    imgPath: RVSS3,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
