import React, { useState } from 'react';
import './App.css';
import Popup from './Popup';


;

function App() {


  const videoData = [
    {
      "id": 1,
      "title": "Joker",
      "year": 2019,
      "duration": "2h 2m",
      "tags": ["Crime", "Drama", "Thriller"],
      "coverUrl": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UY720_.jpg",
      "description": "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
      "link": "https://www.youtube.com/watch?v=zAGVQLHvwOY&pp=ygUNSm9rZXIgdHJhaWxlcg%3D%3D"
    },
    {
      "id": 2,
      "title": "Dragon Ball Super: Super Hero",
      "year": 2022,
      "duration": "1h 40m",
      "tags": ["Animation", "Action", "Adventure"],
      "coverUrl": "https://m.media-amazon.com/images/M/MV5BYmQ1Y2Y4NmItY2E4Mi00ZmM2LWFiOTEtMGVmMDRhN2ZiODU0XkEyXkFqcGdeQXVyNTkxMzEwMzU@._V1_FMjpg_UY720_.jpg",
      "description": "The Red Ribbon Army from Goku's past has returned with two new androids to challenge him and his friends.",
      "link": "https://www.youtube.com/watch?v=t5CIs0jDqC8&pp=ygUkZHJhZ29uIGJhbGwgc3VwZXIgc3VwZXIgaGVybyB0cmFpbGVy"
    },
    {
      "id": 3,
      "title": "Interstellar",
      "year": 2014,
      "duration": "2h 49m",
      "tags": ["Action", "Drama", "Sci-Fi"],
      "coverUrl": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UY720_.jpg",
      "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "link": "https://www.youtube.com/watch?v=JfVOs4VSpmA&pp=ygUec3BpZGVyLW1hbiBubyB3YXkgaG9tZSB0cmFpbGVy"
    },
    {
      "id": 4,
      "title": "Spider-Man: No Way Home",
      "year": 2021,
      "duration": "2h 28m",
      "tags": ["Action", "Adventure", "Fantasy"],
      "coverUrl": "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UY720_.jpg",
      "description": "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
      "link": "https://www.youtube.com/watch?v=JfVOs4VSpmA&pp=ygUec3BpZGVyLW1hbiBubyB3YXkgaG9tZSB0cmFpbGVy"
    },
    {
      "id": 5,
      "title": "The Batman",
      "year": 2022,
      "duration": "2h 56m",
      "tags": ["Action", "Crime", "Drama"],
      "coverUrl": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UY720_.jpg",
      "description": "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
      "link": "https://www.youtube.com/watch?v=mqqft2x_Aa4&pp=ygUSdGhlIGJhdG1hbiB0cmFpbGVy"
    },
    {
      "id": 6,
      "title": "Top Gun: Maverick",
      "year": 2022,
      "duration": "2h 10m",
      "tags": ["Action", "Drama"],
      "coverUrl": "https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX988_.jpg",
      "description": "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
      "link": "https://www.youtube.com/watch?v=giXco2jaZ_4&pp=ygUYdG9wIGd1biBtYXZlcmljayB0cmFpbGVy"
    },
    {
      "id": 7,
      "title": "Fight Club",
      "year": 1999,
      "duration": "2h 19m",
      "tags": ["Drama"],
      "coverUrl": "https://www.themoviedb.org/t/p/original/iqR0M1ln7Kobjp9liUj2Q7mtQZG.jpg",
      "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      "link": "https://www.youtube.com/watch?v=qtRKdVHc-cE&pp=ygUSZmlnaHQgY2x1YiB0cmFpbGVy"
    }
  ]


  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openPopup = (video) => {
    setSelectedVideo(video);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedVideo(null);
    setIsPopupOpen(false);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  

  return (
    <div className="App">
      {isPopupOpen && selectedVideo && (
        <Popup video={selectedVideo} onClose={closePopup} />
      )}
      <div className="container">
        <div className="slider">
          {videoData.map((video) => (
            <input
              key={video.id}
              className="slider-target"
              type="radio"
              id={`slide-${video.id}`}
              name="slider"
            />
          ))}
          <div className="slider__viewport">
            <div className="slider__viewbox">
              <div className="slider__container">
                {videoData.map((video) => (
                  <div key={video.id} className="slider-item">
                    <div className="slider-item__inner">
                      <label
                        className="slider-item__trigger"
                        htmlFor={`slide-${video.id}`}
                        title={`Show product ${video.id}`}
                      ></label>
                      <button
                        className="card"
                        onClick={() => {
                          openPopup(video);
                          togglePopup(); // Toggle the popup here
                        }}
                        style={{ '--card-image': `url('${video.coverUrl}')` }}
                      >
                        <div className="card__container">
                          <div className="card__image"></div>
                          <div className="card__content">
{/*                             <button className='card-meta-item-btn' onClick={() => {
                              openPopup(video);
                              togglePopup(); // Toggle the popup here
                            }}>Watch Trailer</button> */}

                            <p className="card-meta">
                              <span className="card-meta-item">{video.year}</span>
                              <span className="card-meta-item">{video.duration}</span>
                            </p>
                            <h2 className="card-title">{video.title}</h2>
                            <ul className="card-tag-list">
                              {video.tags.map((tag) => (
                                <li key={tag} className="card-tag-list-item">
                                  {tag}
                                </li>
                              ))}
                            </ul>
                            <p className="card-description">{video.description}</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;