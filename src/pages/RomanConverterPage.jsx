export default function RomanConverterPage() {
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

  return (
    <>
      <section className="card">
        <h1 className="page-title">Task 1 — Roman Numeral Converter</h1>
        <p className="page-description">
          Convert classical Roman numerals to integers. This converter supports all standard
          Roman numeral symbols (I, V, X, L, C, D, M) with proper subtractive notation
          (IV, IX, XL, XC, CD, CM) and validates input up to 3999.
        </p>
      </section>

    </>
  );
}

