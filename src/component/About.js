import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Icon } from 'react-materialize';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function About() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='About_main'>
        <h1>About Us</h1>
    <div className='About_info'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className='panel'>
          <Typography className="c12d"><Icon left >book</Icon> Marketing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We engage a wide variety of audiences including students, young professionals, senior business professionals, families with children, and 
          retired people, all united by a passion for film and culture. <br/>
          More information can be found in Belmont Filmhouse’s Media Pack which can be found here, or you can email advertising@filmhousecinema.com for more 
          information, to make an enquiry or book advertising space.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className="c12d"><Icon left >location_on</Icon> Locate</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          FPT UNIVESITY<br/>
          We are easily accessible via bus. Plan your journey using the First Group website
          <p style={{fontWeight:"bold"}}>Telephone bookings</p>
          01224 343 500
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className="c12d"><Icon left >cloud</Icon> Valuation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We believe in transforming lives through the watching, making and understanding of film. We are guided by our values, which underpin all of our work.
          <h5 style={{fontWeight:"bold"}}>Slogan</h5>
          <ul className="a">
          Life is short, so chill chill
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
}
