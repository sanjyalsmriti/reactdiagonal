export default function Field({ label, value, onChange, placeholder }) {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ''))}
        placeholder={placeholder}
        className="input"
        inputMode="numeric"
      />
    </div>
  );
}
