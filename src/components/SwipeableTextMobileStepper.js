import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

// import event1 from "../assets/2022/event1.png";
import event2 from "../assets/2022/event2.png";
import event3 from "../assets/2022/event3.png";
import event4 from "../assets/2022/event4.png";
import event5 from "../assets/2022/event5.png";
import event6 from "../assets/2022/event6.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  // {
  //   label: "event1",
  //   imgPath: event1,
  // },
  {
    label: "event2",
    imgPath: event2,
  },
  {
    label: "event3",
    imgPath: event3,
  },
  {
    label: "event4",
    imgPath: event4,
  },
  {
    label: "event5",
    imgPath: event5,
  },
  {
    label: "event6",
    imgPath: event6,
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
