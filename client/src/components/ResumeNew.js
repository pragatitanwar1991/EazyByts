import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "./Particle";
import ResumeFport3 from "../Assets/ResumeFport3.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./ResumeNew.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="main-div">
      <Container fluid className="resume-section">
        <Particle />
       <div className="flex-1" justify-content="center" margin-right="40px">
        <Row style={{ justifyContent: "center", position: "relative" ,marginleft:"0px" }}>
          <h2> Here's my Resume, you can download it.</h2>
          </Row> 
        
        <Row style={{ justifyContent: "center", display:"flex"}}>
          <Button
           className="Downloadbutton"
            variant="primary"
            href={ResumeFport3}
            target="_blank"
            style={{ maxWidth: "250px" }}
            align-items="center"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        </div>
      </Container>
      
    </div>
  );
}

export default ResumeNew;
