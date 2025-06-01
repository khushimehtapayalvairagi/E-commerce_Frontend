import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAdressForm from './DeliveryAdressForm';
import OrderSummary from     './OrderSummary';
import { useSearchParams } from 'react-router-dom';
const steps = ['login', 'Add delivery address', 'Order Summary', 'Payment'];

export default function Checkout() {
   const [searchParams, setSearchParams] = useSearchParams();
  const stepParam = searchParams.get('step');
  const stepIndex = stepParam ? parseInt(stepParam, 10) : 0;

  const [activeStep, setActiveStep] = React.useState(0);

  // Sync URL when step changes
   React.useEffect(() => {
    setActiveStep(stepIndex);
  }, [stepIndex]);

  const handleBack = () => {
    const newStep = Math.max(activeStep - 1, 0);
    setSearchParams({ step: newStep.toString() });
  };

  return (
    <div className='px-10 lg:px-20'>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you're finished
          </Typography>
        ) : (
          <>
          
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  mr: 1,
                  backgroundColor: '#e0f7fa', // light cyan
                  color: '#000', // black text for contrast
                  '&:hover': {
                    backgroundColor: '#b2ebf2', // slightly darker on hover
                  },
                }}
              
              >
                Back
              </Button>
             
            </Box>
            <div className='mt-5'>
            {activeStep === 1 ? <DeliveryAdressForm /> : <OrderSummary />}

            </div>
          </>
        )}
      </Box>
    </div>
  );
}
