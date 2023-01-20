import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// look into MUI typography
function SimpleAccordion({ campsite }) {
  // console.log('campsite in accordion', campsite);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // axios call to get the reviews array
    axios.post('/getReviewsByCampsite', {
      id: campsite.id,
    })
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.log('error in getReviewsByCampsite call, SimpleAccordian.jsx :', err);
      });
  }, [campsite]);

  console.log('logging reviews for campsite :', reviews);

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
