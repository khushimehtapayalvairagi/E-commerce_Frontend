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

const steps = ['login', 'Add delivery address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const querySearch = new URLSearchParams(location.search);
  const stepFromParam = parseInt(querySearch.get("step")) || 0;

  const [activeStep, setActiveStep] = React.useState(stepFromParam);

  // Sync URL when step changes
  React.useEffect(() => {
    navigate(`?step=${activeStep}`);
  }, [activeStep, navigate]);

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
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
            <Typography sx={{ mt: 2, mb: 1,textAlign: 'left'  }}>
              Step {activeStep + 1}
            </Typography>
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
            {activeStep === 2 ? <DeliveryAdressForm /> : <OrderSummary />}

            </div>
          </>
        )}
      </Box>
    </div>
  );
}
