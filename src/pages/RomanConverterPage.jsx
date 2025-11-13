import React, { useState } from "react";

export default function RomanConverter() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

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

  const validRoman = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;

  function convertRoman(roman) {
    if (!roman || !validRoman.test(roman)) return null;
    const s = roman.toUpperCase().trim();
    let i = 0, value = 0;

    while (i < s.length) {
      if (i + 1 < s.length && romanMap.has(s.slice(i, i + 2))) {
        value += romanMap.get(s.slice(i, i + 2));
        i += 2;
      } else {
        value += romanMap.get(s[i]);
        i += 1;
      }
    }
    return value;
  }

  function handleChange(e) {
    const val = e.target.value;
    setInput(val);
    const num = convertRoman(val);
    setResult(num === null ? "Invalid Roman numeral" : num);
  }

  return (
    <div>
      <h1>Task 1 — Roman Numeral Converter</h1>
      <p>
        Convert classical Roman numerals to integers. Supports I, V, X, L, C, D, M with
        proper subtractive notation (IV, IX, XL, XC, CD, CM).
      </p>

      <div>
        <label>Enter Roman numeral:</label>
        <input
          value={input}
          onChange={handleChange}
          placeholder="e.g., LXXXVIII or XXXIV"
        />
      </div>

      <div>
        <p>Converted value:</p>
        <h2>{input ? result : "—"}</h2>
      </div>
    </div>
  );
}
