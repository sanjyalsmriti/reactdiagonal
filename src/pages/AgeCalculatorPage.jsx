import React, { useState, useEffect } from "react";

export default function SimpleAgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!dob) return;

    const timer = setInterval(() => {
      const birthDate = new Date(dob);
      const now = new Date();

      if (birthDate > now) {
        setError("Date of birth cannot be in the future.");
        setAge("");
        return;
      } else {
        setError("");
      }

      let years = now.getFullYear() - birthDate.getFullYear();
      let months = now.getMonth() - birthDate.getMonth();
      let days = now.getDate() - birthDate.getDate();
      let hours = now.getHours() - birthDate.getHours();
      let minutes = now.getMinutes() - birthDate.getMinutes();
      let seconds = now.getSeconds() - birthDate.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      setAge(
        `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [dob]);

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", textAlign: "center" }}>
      <h2>Age Calculator</h2>
      <p>Enter your date of birth to see your exact age.</p>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div
        style={{
          marginTop: "1rem",
          padding: "1rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <strong>Current Time:</strong> {new Date().toLocaleString()}
        <br />
        <strong>Age:</strong>{" "}
        {age || "— Select a valid date of birth to see your age."}
      </div>
    </div>
  );
}
