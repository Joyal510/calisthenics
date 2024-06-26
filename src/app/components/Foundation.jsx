import React from "react";
import Link from "next/link";
import Image from "next/image";
import pushup from "../images/pushup.jpg";
import pullup from "./../images/pullup.jpg";
import lunges from "./../images/lunges.jpg";
import squats from "./../images/squats.jpg";
import plank from "./../images/plank.jpg";
import "../globals.css";

const Foundation = () => {
  return (
    <div>
      <div className="row justify-content-center my-5 fs-2 mx-2">
        {`Let's start with 5 foundation exercises`}
        
      </div>
      <div className="row d-flex flex-row justify-content-center gap-2">
        <div className="col col-sm-8 col-md-6 col-lg-4 col-xl-4">
          <div className="card bg-dark text-white">
            <Image
              className="special"
              src={pushup}
              height={200}
              width={300}
              alt="..."
            />

            <div className="card-img-overlay">
              <h5 className="card-title">1. Push-ups</h5>
              <p className="card-text px-3">
                
              </p>
              <Link
                className="text-white text-decoration-underline px-3"
                target="_blank"
                href="https://www.youtube.com/watch?v=IODxDxX7oi4&pp=ygUUcHVzaHVwIGZvciBiZWdpbm5lcnM%3D
                "
              >
                Link
              </Link>
            </div>
          </div>
        </div>
        {/* ============================================== */}
        <div className="col col-sm-8 col-md-6 col-lg-4 col-xl-3">
          <div className="card bg-dark text-white">
            <Image
              className="special"
              src={pullup}
              height={220}
              width={300}
              alt="..."
            />

            <div className="card-img-overlay">
              <h5 className="card-title">2. Pull-ups/Chin-ups</h5>
              <p className="card-text px-3">
                
              </p>
              <Link
                className="text-white text-decoration-underline px-3"
                target="_blank"
                href="https://www.youtube.com/watch?v=XeErfmGSwfE&pp=ygUWcHVsbCB1cHMgZm9yIGJlZ2lubmVycw%3D%3D
                "
              >
                Link
              </Link>
            </div>
          </div>
        </div>
        {/* ============================================== */}
        <div className="col col-sm-8 col-md-6 col-lg-4 col-xl-4">
          <div className="card bg-dark text-white ">
            <Image className="special" src={squats} height={170} width={300} alt="..." />

            <div className="card-img-overlay">
              <h5 className="card-title">3. Squats</h5>
              <p className="card-text px-3">
                
              </p>
              <a
                className="text-white text-decoration-underline px-3"
                target="_blank"
                href="https://www.youtube.com/watch?v=EbOPpWi4L8s&pp=ygUUc3F1YXRzIGZvciBiZWdpbm5lcnM%3D
                "
              >
                Link
              </a>
            </div>
          </div>
        </div>
        {/* =========================================== */}
        <div className="col col-sm-8 col-md-6 col-lg-4 col-xl-3">
          <div className="card bg-dark text-white">
            <Image className="special" src={lunges} height={170} width={300} alt="..." />

            <div className="card-img-overlay">
              <h5 className="card-title">4. Lunges</h5>
              
              <Link
                className="text-white text-decoration-underline px-3"
                target="_blank"
                href="https://www.youtube.com/watch?v=ASdqJoDPMHA&pp=ygUUbHVuZ2VzIGZvciBiZWdpbm5lcnM%3D"
              >
                Link
              </Link>
            </div>
          </div>
        </div>
        {/* =============================================== */}
        <div className="col col-sm-8 col-md-6 col-lg-4 col-xl-4">
          <div className="card bg-dark text-white">
            <Image className="special" src={plank} height={170} width={300} alt="..." />

            <div className="card-img-overlay">
              <h5 className="card-title">5. Planks</h5>
              
              <Link
                className="text-white text-decoration-underline px-3"
                target="_blank"
                href="https://www.youtube.com/watch?v=y1uinA_JknM&pp=ygUUcGxhbmtzIGZvciBiZWdpbm5lcnM%3D"
              >
                {
                  " Link "
                }
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foundation;
