import React from "react";

const Resume = () => {
  return (
    <section>
      <a href="/path/to/your-resume.pdf" download>
        Download Resume
      </a>
      <h2>Proficiencies</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
};

export default Resume;
