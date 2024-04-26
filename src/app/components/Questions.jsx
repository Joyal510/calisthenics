import React from "react";
import "./../globals.css";
import "bootstrap/dist/css/bootstrap.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";


function Questions() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            What equipment do I need to start calisthenics?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`Calisthenics primarily relies on using your body weight for
            resistance, so you don't need much equipment to get started.`}
            
            <br />
            <b>-</b> Pull-up bar
            <br />
            <b>-</b> Parallel bars or dip station
            <br />
            <b>-</b> Resistance bands
            <br />
            <b>-</b> Yoga mat
            <br />
            <b>-</b> Comfortable workout clothing and supportive shoes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>How often should I do calisthenics workouts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`As a beginner, it's recommended to start with 2-3 sessions per week
            to allow your body to adapt and recover.`}
            
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>When can I start weighted calisthenics?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`Weighted calisthenics can begin when you've mastered basic
            bodyweight exercises, feel comfortable with high repetitions,
            maintain a strong core and stable joints, and are ready for added
            challenge. Start with light weights, progress gradually, and listen
            to your body.`}
            
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Questions;
