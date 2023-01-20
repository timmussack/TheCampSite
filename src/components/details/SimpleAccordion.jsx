import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// look into MUI typography
function SimpleAccordion({ campsite }) {
  // console.log('campsite in accordion', campsite);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontFamily: 'Jost' }}>Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Jost' }}>{campsite.description}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontFamily: 'Jost' }}>Amenities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Jost' }}>
            <ul>
              <li>
                Cellphone Reception:
                {' '}
                {`${campsite.amenities.cellPhoneReception}`}
              </li>
              <li>
                Firewood available for sale:
                {' '}
                {`${campsite.amenities.firewoodAvailableForSale}`}
              </li>
              <li>
                Ice avalabile for sale:
                {' '}
                {`${campsite.amenities.iceAvailableForSale}`}
              </li>
              <li>
                Internet Access:
                {' '}
                {`${campsite.amenities.internetConnectivity}`}
              </li>
              <li>
                Staff on Site:
                {' '}
                {`${campsite.amenities.staffOrVulnteerHostOnSite}`}
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontFamily: 'Jost' }}>Contact Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Jost' }}>
            <ul>
              <li>
                Email:
                {' '}
                {`${campsite.campsiteEmail}`}
              </li>
              <li>
                Phone:
                {' '}
                {`${campsite.campsitePhone}`}
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SimpleAccordion;
