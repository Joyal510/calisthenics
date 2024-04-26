
import "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";
import './globals.css'

import Basic from "./components/Basic";
import Foundation from "./components/Foundation";
import Partition from "./components/Partition";
import Questions from "./components/Questions";

export default function Home() {
  return (
    <div className="container my-5">
      <div id="title-text" className="row  fs-2 fw-bold mx-2">
        <div className="col d-flex justify-content-center col-xs-2 wantTo">
          {"Want to start Calisthenics? "}
          
        </div>
      </div>
      <div
        id="title-text"
        className="row justify-content-center fs-1 fw-bold mx-2 text-body-tertiary"
      >
        {" Here's how."}
      </div>
      <div className="row justify-content-center my-4 fs-4 fw-light mx-2">
        Basic information to start off
      </div>
      <Basic />
      <Partition />
      <div className="row justify-content-center my-4 fs-7 fw-light fst-italic mx-2">
        {`"Every workout is a step closer to your goals. Embrace the challenge,
        push through the pain, and celebrate your progress."`}
        
      </div>
      <Partition />
      <Foundation />
      <Partition />
      <Questions />
      <Partition />
      <div className="row justify-content-center my-4 fs-7 fw-light fst-italic mx-2">
        {`" Start today and discover the power of your own body."`}
        
      </div>
    </div>
  );
}
