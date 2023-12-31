import React, {useState, useEffect} from "react"
import axios from "axios";
import UnsplashImage from "./unsplash";
import "./Infinite.css"
import InfiniteScroll from 'react-infinite-scroll-component';


const Infinite = () => {
    const [images, setImages] = useState([]);
    const [loaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      fetchImages();
    }, []);
  
    const fetchImages = (count = 5) => {
      const apiRoot = "https://api.unsplash.com";
      const accessKey =
        "a22f61e98da4efa25d8860e77a91a596867dd335ecdf7feb12e086943db9565a";
  
      axios
        .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
        .then(res => {
          setImages([...images, ...res.data]);
          setIsLoaded(true);
  
          console.log(images);
        });
    };
  
    return (
      <div className="hero is-fullheight is-bold is-info">
        <div className="hero-body">
          <div className="container">
            <div className="header content">
              <h2 className="subtitle is-6">Code Challenge #16</h2>
              <h1 className="title is-1">
                Infinite Scroll Unsplash Code Challenge
              </h1>
            </div>
  
            <InfiniteScroll
              dataLength={images}
              next={() => fetchImages(5)}
              hasMore={true}
              loader={
                <img
                  src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                  alt="loading"
                />
              }
            >
              <div className="image-grid" style={{ marginTop: "30px" }}>
                {loaded
                  ? images.map((image, index) => (
                      <UnsplashImage
                        url={image.urls.regular}
                        key={index}
                      />
                    ))
                  : ""}
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </div>
    );
  };

  export default Infinite