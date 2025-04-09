import React from "react";

const StatsSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-2">
            <h3 className="fw-bold text-primary">890</h3>
            <p>Delivered packages</p>
          </div>
          <div className="col-md-2">
            <h3 className="fw-bold text-primary">137</h3>
            <p>Countries covered</p>
          </div>
          <div className="col-md-2">
            <h3 className="fw-bold text-primary">740</h3>
            <p>Tons of Goods</p>
          </div>
          <div className="col-md-2">
            <h3 className="fw-bold text-primary">600</h3>
            <p>Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
