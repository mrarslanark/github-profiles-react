import React, { memo } from "react";
import "./App.css";

function InfoSection({ title, type, info }) {
  if (type === "link") {
    return (
      <div className="info-style">
        <p>
          <b>{title}</b>
          <br />
          <span style={{ fontSize: "small" }}>
            <a target="_blank" rel="noopener noreferrer" href={info}>
              {info}
            </a>
          </span>
        </p>
      </div>
    );
  } else if (type === "text") {
    return (
      <div className="info-style">
        <p>
          <b>{title}</b>
          <br />
          <span style={{ fontSize: "small" }}>{info}</span>
        </p>
      </div>
    );
  } else {
    return null;
  }
}

export default memo(InfoSection);
