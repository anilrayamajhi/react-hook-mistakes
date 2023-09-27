import { useState, useEffect, useMemo } from "react";

export default function FormMemo() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const name = useMemo(() => {
    return { fName, lName };
  }, [fName, lName]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div style={{ height: "50vh", background: darkMode ? "#333" : "#fff" }}>
      <label htmlFor="fName">First Name</label>
      <input
        value={fName}
        onChange={(e) => setFName(e.target.value)}
        id="fName"
      />
      <br />
      <br />
      <label htmlFor="lName">Last Name</label>
      <input
        value={lName}
        onChange={(e) => setLName(e.target.value)}
        id="lName"
      />
      <br />
      <br />
      <label htmlFor="darkMode">Dark Mode</label>
      <input
        value={darkMode}
        onChange={(e) => setDarkMode(e.target.checked)}
        type="checkbox"
        id="darkMode"
      />
    </div>
  );
}
