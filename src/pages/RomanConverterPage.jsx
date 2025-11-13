import React, { useState } from "react";

export default function RomanConverterPage() {
  const [input, setInput] = useState("");
  const romanMap = new Map([
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ]);
  const romanToInt = (roman) => {
    const s = roman.toUpperCase().trim();
    let i = 0;
    let val = 0;

    while (i < s.length) {
      // Check for two-character subtractive notation first
      if (i + 1 < s.length && romanMap.has(s.slice(i, i + 2))) {
        val += romanMap.get(s.slice(i, i + 2));
        i += 2;
      } else {
        val += romanMap.get(s[i]);
        i += 1;
      }
    }

    return val;
  };
  const value = romanToInt(input);

  return (
    <>
      <section className="card">
        <h1 className="page-title">Task 1 — Roman Numeral Converter</h1>
        <p className="page-description">
          Convert classical Roman numerals to integers. This converter supports
          all standard Roman numeral symbols (I, V, X, L, C, D, M) with proper
          subtractive notation (IV, IX, XL, XC, CD, CM) and validates input up
          to 3999.
        </p>
      </section>
      <section className="card">
        <h2 className="card-title">Task 1 — Roman Number ➜ Integer</h2>
        <p className="card-description">
          Supports classical numerals up to 3999. Valid symbols: I, V, X, L, C,
          D, M with proper subtractive notation (IV, IX, XL, XC, CD, CM).
        </p>

        <div className="converter-grid">
          <div className="input-group">
            <label className="input-label">Roman input</label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., LXXXVIII or XXXIV"
            />
          </div>

          <div className="converter-result">
            <div className="result-label">Converted value</div>
            <div className="result-value">{value ?? "—"}</div>
          </div>
        </div>
      </section>
    </>
  );
}
