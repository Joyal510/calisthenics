import React from "react";

function Basic() {
  return (
    <div>
      <div className="row gap-2">
        <div className="col-xs-6 col-sm-12 col-md-12 col-lg-5 col-xl-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">What is Calisthenics ?</h5>

              <p className="card-text">
                Calisthenics is a form of exercise that uses your{" "}
                <span className="fw-bold">body weight</span> as resistance. It
                includes movements such as push-ups, pull-ups, squats, lunges,
                and planks.
              </p>
            </div>
          </div>
        </div>
        {/* =============================================== */}
        <div className="col  col-sm-12 col-md-12 col-lg-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Assess Your Current Fitness Level</h5>

              <p className="card-text">
                {`Before starting any new exercise program, it's essential to
                assess your current fitness level. This will help you set
                realistic goals and choose appropriate exercises`}
              </p>
            </div>
          </div>
        </div>
        {/* ================================================= */}
        <div className="col-sm-12 col-md-12 col-lg-11 col-xl-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Set Clear Goals</h5>

              <p className="card-text">
                {`Determine what you want to achieve with calisthenics. Whether
                it's building muscle, losing weight, increasing flexibility, or
                improving overall fitness, having clear goals will help you stay
                motivated.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basic;
