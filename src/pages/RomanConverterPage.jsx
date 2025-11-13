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
      if (i + 1 < s.length && romanMap.has(s.slice(i, i + 2))) {
        val += romanMap.get(s.slice(i, i + 2));
        i += 2;
      } else {
        val += romanMap.get(s[i]) || 0;
        i += 1;
      }
    }
    return val;
  };

  const value = input ? romanToInt(input) : "—";

  return (
    <div>
      <section>
        <h1>Task 1 — Roman Numeral Converter</h1>
        <p>
          Convert classical Roman numerals to integers. Supports standard symbols
          (I, V, X, L, C, D, M) and subtractive notation (IV, IX, XL, XC, CD, CM).
        </p>
      </section>

      <section>
        <h2>Roman Number ➜ Integer</h2>
        <p>
          Works up to 3999. Example inputs: LXXXVIII, XXXIV, MMXXIV.
        </p>

        <div>
          <div>
            <label>Roman input:</label> <br />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., LXXXVIII or XXXIV"
            />
          </div>

          <div>
            <p>Converted value:</p>
            <h3>{value}</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
