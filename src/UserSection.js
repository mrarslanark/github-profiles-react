import React, { memo } from "react";
import "./App.css";
import InfoSection from "./InfoSection";
import { formatDate } from "./DateTimeUtil";

function UserSection({ user }) {
  return (
    <div>
      <div className="info-section">
        <img
          src={user.avatar_url}
          style={{ borderRadius: "100%" }}
          height={125}
          alt="User's Avatar"
        />
        <div className="info-detail-section">
          <h2 style={{ marginBottom: 10 }}>{user.name}</h2>
          <p className="username">
            /username:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://github.com/${user.login}`}
            >
              {user.login}
            </a>
          </p>
          {user.hireable ? (
            <p className="hiring" style={{ color: "green" }}>
              Available for hire
            </p>
          ) : (
            <p className="hiring" style={{ color: "#212121" }}>
              Currently occupied
            </p>
          )}
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: 6 }}>
        <InfoSection
          title="Public Repositories"
          type="text"
          info={user.public_repos}
        />
        <InfoSection
          title="Public Gists"
          type="text"
          info={user.public_gists}
        />
        <InfoSection title="Followers" type="text" info={user.followers} />
        <InfoSection title="Following" type="text" info={user.following} />
        <InfoSection
          title="Created at"
          type="text"
          info={formatDate(user.created_at)}
        />
        <InfoSection
          title="Last updated on"
          type="text"
          info={formatDate(user.updated_at)}
        />
      </div>
      <div style={{ display: "flex" }}>
        <InfoSection title="Blog" type="link" info={user.blog} />
        <InfoSection title="Company" type="text" info={user.company} />
        <InfoSection title="Location" type="text" info={user.location} />
        <InfoSection
          title="Twitter"
          type="link"
          info={`@${user.twitter_username}`}
        />
      </div>
    </div>
  );
}

export default memo(UserSection);
