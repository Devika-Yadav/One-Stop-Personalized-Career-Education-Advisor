export default function CareerResult({ result }) {
  if (!result || !result.career) {
    return <p>No prediction available</p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>🎯 Suggested Path</h2>

      <h3 style={{ color: "#4CAF50" }}>
        {result.career}
      </h3>

      <p>
        Confidence: <strong>{result.confidence}%</strong>
      </p>

      <div
        style={{
          background: "#eee",
          height: "10px",
          borderRadius: "5px",
          marginTop: "10px"
        }}
      >
        <div
          style={{
            width: `${result.confidence}%`,
            background: "#4CAF50",
            height: "100%",
            borderRadius: "5px"
          }}
        />
      </div>
    </div>
  );
}
