import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./Pictures.css";

function Pictures(props) {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0001.jpg?alt=media&token=b1294555-f42d-4ba0-960f-c4e7e7546c8d",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0002.jpg?alt=media&token=02176aa8-ae41-4250-84d5-0a0cee668f5c",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0003.jpg?alt=media&token=760d416d-5600-4f4a-9102-1823738e5022",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0004.jpg?alt=media&token=d9284b64-ce6e-421c-99d7-c5d0447f3db1",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0005.jpg?alt=media&token=94c04105-cdf0-4e9a-9ad7-5c536ebc72b8",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0006.jpg?alt=media&token=271132de-3451-48c2-94fb-16c111ca7a28",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0007.jpg?alt=media&token=d63d6817-b67a-4bef-a895-180c9d99c395",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0008.jpg?alt=media&token=b09906b6-6238-4610-b719-f926bd49d739",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0009.jpg?alt=media&token=51a993ac-9b03-4ee9-a973-e75f814b0a8d",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0010.jpg?alt=media&token=7863e1a0-eed6-4c72-a066-6dc622e73782",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0011.jpg?alt=media&token=1273d335-366e-4818-9196-7040011b2936",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0012.jpg?alt=media&token=23381f3f-6e43-4d00-a16e-edd2123ede27",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0013.jpg?alt=media&token=ce8d471f-2879-4093-bf66-c515e0f068ce",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0014.jpg?alt=media&token=d1ea87b1-a7a1-423f-970f-210f05fcce30",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0015.jpg?alt=media&token=e185e782-ebba-4953-ab59-699047c86da9",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0016.jpg?alt=media&token=c12d2a95-6ef4-4305-9713-e536f1974020",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0017.jpg?alt=media&token=f5952694-6f8f-4ac4-a67e-27feb79d9bd2",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0018.jpg?alt=media&token=9b26a045-e9f7-4685-b17b-be99176d7a84",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0019.jpg?alt=media&token=e2a5672f-dc17-426f-8b85-3ed0769697e1",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2FIMG_0020.jpg?alt=media&token=c36c0241-f8a3-4ec2-b962-8e5d8b9e4a2d",
  ];

  const thumbnail = [
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0001.jpg?alt=media&token=9b9e3b97-3ec8-40db-8852-304d93369971",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0002.jpg?alt=media&token=473c9198-b65f-46fa-af5c-2e33c2850b72",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0003.jpg?alt=media&token=e0017621-5dbb-4d0f-bbb9-766c641916b0",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0004.jpg?alt=media&token=3c6cd9bf-da80-4262-b92f-d54d4e564b92",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0005.jpg?alt=media&token=1729e7df-dfff-43f1-b708-2f469d0a41d4",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0006.jpg?alt=media&token=72d36190-121d-4370-9ab9-331a2d423797",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0007.jpg?alt=media&token=a9183bb0-810a-4e4a-8ac5-566320888b97",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0008.jpg?alt=media&token=5a978536-4ffb-4f79-a890-2b989cd63696",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0009.jpg?alt=media&token=45689f08-cdf7-4180-ac16-5adb63a46416",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0010.jpg?alt=media&token=21e9d71d-e7b2-4794-bc2c-d44606e322a2",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0011.jpg?alt=media&token=d0721d33-c811-4037-98d8-68f3929093fa",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0012.jpg?alt=media&token=7d991a05-ee75-4d54-a125-750ce8136482",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0013.jpg?alt=media&token=cf620c03-6dd1-4123-b330-d52488687575",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0014.jpg?alt=media&token=7d2c9ab2-2030-4c02-a611-e2be476812ea",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0015.jpg?alt=media&token=2d301a11-1104-4e40-8244-303cab93d6b7",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0016.jpg?alt=media&token=8f066379-3603-45db-9dec-85e764b25148",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0017.jpg?alt=media&token=2c8db974-97f8-4dba-af8b-202d90963f60",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0018.jpg?alt=media&token=0fc81f83-e10b-490b-80ff-05680de357b1",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0019.jpg?alt=media&token=8eccde52-6759-473d-8b61-035d47d748f1",
    "https://firebasestorage.googleapis.com/v0/b/reactjs-imageuploadpractice.appspot.com/o/portfolio%2Fmax-width-480%2FIMG_0020.jpg?alt=media&token=d7cb10e5-4281-4af9-be42-a4de3d1bf538",
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="project">
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
