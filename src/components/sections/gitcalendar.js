import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div>
        <h2>Github Contributions</h2>
        <GitHubCalendar
          username="sohamvsonar"
          blockSize={20}
          blockMargin={1}
          color="#c084f5"
          fontSize={16}
        />
    </div>
  );
}

export default Github;