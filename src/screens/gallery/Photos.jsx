import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";



import wedding1 from "../../assets/images/card1.jpg";
import wedding2 from "../../assets/images/photos1.jpg";
import wedding3 from "../../assets/images/photos2.jpg";
import wedding4 from "../../assets/images/photos3.jpg";
import wedding5 from "../../assets/images/swipe_img1.jpg";
import wedding6 from "../../assets/images/swipe_img2.jpg";
import wedding7 from "../../assets/images/swipe_img3.jpg";
import wedding8 from "../../assets/images/swipe_img4.jpg";
import wedding9 from "../../assets/images/card4.jpg";
import wedding10 from "../../assets/images/card6.jpg";

import corporate1 from "../../assets/images/corporate1.jpg";
import corporate2 from "../../assets/images/corporate2.jpg";

import music1 from "../../assets/images/card1.jpg";
import music2 from "../../assets/images/card1.jpg";

import private1 from "../../assets/images/card1.jpg";
import private2 from "../../assets/images/card1.jpg";

import others1 from "../../assets/images/card1.jpg";

import bg from "../../assets/images/photos3.jpg";

const photoData = [
  { id: 1, src: wedding1, category: "wedding" },
  { id: 2, src: wedding2, category: "wedding" },
  { id: 3, src: wedding3, category: "wedding" },
  { id: 4, src: wedding4, category: "wedding" },
  { id: 5, src: wedding5, category: "wedding" },
  { id: 6, src: wedding6, category: "wedding" },
  { id: 7, src: wedding7, category: "wedding" },
  { id: 8, src: wedding8, category: "wedding" },
  { id: 9, src: wedding9, category: "wedding" },
  { id: 10, src: wedding10, category: "wedding" },
  { id: 4, src: corporate1, category: "corporate" },
  { id: 5, src: corporate2, category: "corporate" },
  { id: 6, src: music1, category: "music" },
  { id: 7, src: music2, category: "music" },
  { id: 8, src: private1, category: "private" },
  { id: 9, src: private2, category: "private" },
  { id: 10, src: others1, category: "others" },
];

function Photos() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPhotos =
    selectedCategory === "all"
      ? photoData
      : photoData.filter((photo) => photo.category === selectedCategory);

  return (
    <>
      <Header />

      <div className="glry-photos">
        <img src={bg} alt="Melodia" className="gallery-bg" />
        <div className="gallery-content">
          <h1>Photos Gallery of Melodia</h1>
        </div>
      </div>

      <div className="photo-section-box">
        <p>
          Melodia® Events always prioritizes the satisfaction of our clients in Kerala...
        </p>

        <div className="category-buttons">
          <button onClick={() => setSelectedCategory("all")}>All</button>
          <button onClick={() => setSelectedCategory("wedding")}>Wedding Decors</button>
          <button onClick={() => setSelectedCategory("corporate")}>Corporate Events</button>
          <button onClick={() => setSelectedCategory("music")}>Music & Entertainment</button>
          <button onClick={() => setSelectedCategory("private")}>Private Parties</button>
          <button onClick={() => setSelectedCategory("others")}>Others</button>
        </div>
      </div>

      <div className="photo-grid">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.src} alt={photo.category} />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Photos;
