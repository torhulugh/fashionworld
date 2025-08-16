import { useEffect, useState } from "react";
import "./measurements.css";

export default function Measurements() {
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    const fetchMeasurements = async () => {
      try {
        const response = await fetch(
          "https://fashionworld-steel.vercel.app/api/measurements"
        );
        const result = await response.json();
        if (result.success) {
          setMeasurements(result.data);
        } else {
          console.error("Failed to fetch measurements");
        }
      } catch (error) {
        console.error("Error fetching measurements:", error);
      }
    };
    fetchMeasurements();
  }, []);

  return (
    <div className="measurements-container">
      <h1>Measurements</h1>
      <div className="measurements-grid">
        {measurements.map((measurement) => (
          <div key={measurement._id} className="measurement-card">
            <h3 className="measurement-label">
              {measurement.label.charAt(0).toUpperCase() +
                measurement.label.slice(1)}
            </h3>
            <div className="measurement-details">
              {measurement.cm && <p>Centimeters: {measurement.cm} cm</p>}
              {measurement.inches && <p>Inches: {measurement.inches}"</p>}
              {measurement.shoe_size_uk && (
                <p>UK Size: {measurement.shoe_size_uk}</p>
              )}
              {measurement.shoe_size_us && (
                <p>US Size: {measurement.shoe_size_us}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
