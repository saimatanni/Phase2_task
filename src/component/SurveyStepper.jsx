import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Feedback from "./Feedback";
import Information from "./Information";
import Confirmation from "./Confirmation";

const steps = ["Your Feedback", "Your Information", "Confirmation"];

export default function SurveyStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <React.Fragment>
        {activeStep === 0 && (
          <Typography sx={{ mt: 2, mb: 1 }}>
            <Feedback next={handleNext} />
          </Typography>
        )}
        {activeStep === 1 && (
          <Typography sx={{ mt: 2, mb: 1 }}>
            <Information next={handleNext} />
          </Typography>
        )}
        {activeStep === 2 && (
          <Typography sx={{ mt: 2, mb: 1 }}>
            <Confirmation />
          </Typography>
        )}

        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {activeStep === steps.length - 1 ? (
            <Button>Next</Button>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </Box>
      </React.Fragment>
    </Box>
  );
}
