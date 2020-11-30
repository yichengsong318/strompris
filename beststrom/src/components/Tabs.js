import React from "react";

export default function Tabs({ filtering }) {
  return (
    <div>
      <div className="tab-container">
        <div
          data-w-id="b5d25cb7-24e9-f2a2-b485-eee654dc1b9f"
          className="spotpris-tab"
          id="SPOT"
          onClick={() => filtering("SPOT")}
        >
          <div className="text-block-6">Spotpris</div>
          <div className="div-block-63"></div>
        </div>
        <div
          data-w-id="ce0be365-e685-9a42-3d78-c72b13c0d18c"
          className="variabel-tab"
          onClick={() => filtering("VARIABLE")}
          id="VARIABLE"
        >
          <div className="text-block-6">Variabel</div>
          <div className="div-block-63-variabel"></div>
        </div>
        <div
          data-w-id="468d2c98-246d-cdb8-7847-9fc2a0c37587"
          onClick={() => filtering("FIXED")}
          className="fastpris-tab"
          id="FIXED"
        >
          <div className="text-block-6">Fastpris</div>
          <div className="div-block-63-fastpris"></div>
        </div>
        <div
          data-w-id="280fe414-bd99-2eda-6c49-9448874f2b09"
          className="andre-tab"
          onClick={() => filtering("OTHER")}
          id="OTHER"
        >
          <div className="text-block-6">Andre</div>
          <div className="div-block-63-andre"></div>
        </div>
      </div>
    </div>
  );
}
