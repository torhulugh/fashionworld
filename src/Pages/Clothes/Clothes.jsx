import { useState, useEffect } from "react";
import "./Clothes.css";

export default function Clothes() {
  const [clothes, setClothes] = useState([]);

  const getClothingImage = (clothingType) => {
    const defaultImages = {
      Athletic: "https://images.unsplash.com/photo-1483721310020-03333e577078",
      Casual: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
      Formal: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      Business: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2",
      default: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
    };
    return defaultImages[clothingType] || defaultImages.default;
  };

  useEffect(() => {
    async function getClothes() {
      try {
        const response = await fetch(
          "https://fashionworld-steel.vercel.app/api/clothes"
        );
        const result = await response.json();
        if (result.success) {
          setClothes(result.data);
        } else {
          console.error("Failed to fetch clothes data");
        }
      } catch (error) {
        console.error("Error fetching clothes:", error);
      }
    }
    getClothes();
  }, []);

  return (
    <div className="clothes-container">
      <h1>Clothes Collection</h1>
      {clothes.length > 0 && (
        <section
          className="hero-section"
          style={{ marginBottom: "32px", textAlign: "center" }}
        >
          <img
            src={getClothingImage(clothes[0].garment)}
            alt={`${clothes[0].garment} hero`}
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "16px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            }}
          />
        </section>
      )}
      <div className="clothes-grid">
        {clothes.map((cloth) => (
          <div key={cloth._id} className="cloth-item">
            <div className="cloth-image">
              <img
                src={getClothingImage(cloth.garment)}
                alt={`${cloth.garment} outfit`}
                loading="lazy"
              />
            </div>
            <div className="cloth-details">
              <h2>{cloth.garment} Style</h2>
              <div className="cloth-specs">
                <div className="spec-item">
                  <span className="label">Bottom:</span>
                  <span className="value">{cloth.bottom_wear}</span>
                </div>
                <div className="spec-item">
                  <span className="label">Chest:</span>
                  <span className="value">{cloth.chest_wear}</span>
                </div>
                <div className="spec-item">
                  <span className="label">Feet:</span>
                  <span className="value">{cloth.feet_wear}</span>
                </div>
                <div className="spec-item">
                  <span className="label">Head:</span>
                  <span className="value">{cloth.head_wear}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
