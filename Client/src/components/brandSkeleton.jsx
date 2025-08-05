import React from "react";

const BrandSkeleton = () => {
  return (
    <>
    <div className="form-check mb-3 d-flex align-items-center" style={{ gap: "8px", minHeight: "24px" }}>
  <div
    className="skeleton-checkbox bg-skeleton rounded"
    style={{ width: "18px", height: "18px", flexShrink: 0 }}
  ></div>
  <div
    className="skeleton-text bg-skeleton rounded"
    style={{ width: "100px", height: "14px" }}
  ></div>
</div>
<div className="form-check mb-3 d-flex align-items-center" style={{ gap: "8px", minHeight: "24px" }}>
  <div
    className="skeleton-checkbox bg-skeleton rounded"
    style={{ width: "18px", height: "18px", flexShrink: 0 }}
  ></div>
  <div
    className="skeleton-text bg-skeleton rounded"
    style={{ width: "100px", height: "14px" }}
  ></div>
</div>
<div className="form-check mb-3 d-flex align-items-center" style={{ gap: "8px", minHeight: "24px" }}>
  <div
    className="skeleton-checkbox bg-skeleton rounded"
    style={{ width: "18px", height: "18px", flexShrink: 0 }}
  ></div>
  <div
    className="skeleton-text bg-skeleton rounded"
    style={{ width: "100px", height: "14px" }}
  ></div>
</div>

    </>
  );
};

export default BrandSkeleton;
