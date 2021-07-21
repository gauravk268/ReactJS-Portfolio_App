import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useData } from "../contexts";
import "./Pictures.css";

function Pictures(props) {
  const { data } = useData();
  const images = data.portfolio_pictures.image, thumbnail=data.portfolio_pictures.thumbnail;


  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="captures">
      <h1 className="display-6">Captures</h1>

      <div className="pic-wrapper">
        {thumbnail.map((image, index) => {
          return (
            <img
              className="pic thumbnail"
              src={image}
              alt={image}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(index);
              }}
            />
          );
        })}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => {
            setIsOpen(false);
            setPhotoIndex(0);
          }}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      <button className="btn btn-primary my-2">
        <a href="/">
          Go to Home
        </a>
      </button>
    </section>
  );
}

export default Pictures;
