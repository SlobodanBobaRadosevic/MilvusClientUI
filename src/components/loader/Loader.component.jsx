import React from "react";
import "./Loader.style.js";
import { LoaderContainer } from "./Loader.style.js";

export default function LoadingSpinner() {
  return (
    <LoaderContainer>
      <div className="overlay">
        <div className="overlay__inner">
          <div className="overlay__content">
            <div className="loading-spinner"></div>
          </div>
        </div>
      </div>
    </LoaderContainer>
  );
}
