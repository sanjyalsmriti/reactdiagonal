import React, { useEffect, useState } from "react";

export default function SimpleNextBirthdayCountdown() {
  const [dob, setDob] = useState("");
  const [nextBirthday, setNextBirthday] = useState("");
  const [countdown, setCountdown] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!dob) return;

    const timer = setInterval(() => {
      const birthDate = new Date(dob);
      const now = new Date();

      if (birthDate > now) {
        setError("Date of birth cannot be in the future.");
        setCountdown("");
        return;
      } else {
        setError("");
      }

      // Calculate next birthday year
      let year = now.getFullYear();
      let next = new Date(year, birthDate.getMonth(), birthDate.getDate());

      // Handle Feb 29 birthdays
      if (birthDate.getMonth() === 1 && birthDate.getDate() === 29 && next.getMonth() !== 1) {
        next = new Date(year, 1, 28);
      }

      if (next <= now) {
        year++;
        next = new Date(year, birthDate.getMonth(), birthDate.getDate());
        if (birthDate.getMonth() === 1 && birthDate.getDate() === 29 && next.getMonth() !== 1) {
          next = new Date(year, 1, 28);
        }
      }

      setNextBirthday(next.toLocaleString());

      // Calculate difference
      let diff = Math.floor((next - now) / 1000);
      const days = Math.floor(diff / (3600 * 24));
      diff %= 3600 * 24;
      const hours = Math.floor(diff / 3600);
      diff %= 3600;
      const minutes = Math.floor(diff / 60);
      const seconds = diff % 60;

      setCountdown(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    }, 1000);

    return () => clearInterval(timer);
  }, [dob]);

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", textAlign: "center" }}>
      <h2>Next Birthday Countdown</h2>
      <p>Enter your date of birth to see how long until your next birthday.</p>

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
        <strong>Next Birthday:</strong> {nextBirthday || "—"}
        <br />
        <strong>Time Remaining:</strong> {countdown || "—"}
      </div>

      {dob && new Date(dob).getDate() === 29 && new Date(dob).getMonth() === 1 && (
        <p style={{ marginTop: "10px", fontStyle: "italic" }}>
          Note: Feb 29 birthdays are celebrated on Feb 28 in non-leap years.
        </p>
      )}
    </div>
  );
}
