import React, { Suspense } from "react";
import Lottie from "lottie-react";

export default function DisplayLottie({ animationData }) {
  return (
    <Suspense fallback={<div style={{ height: 200 }} />}>
      <Lottie animationData={animationData} loop={true} />
    </Suspense>
  );
}
