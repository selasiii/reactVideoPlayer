import React, { PureComponent} from 'react';
import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      videoData: [],
    };
  }

  componentDidMount() {
    // Fetch video data from the JSON file
    fetch('/videos.json') // Replace with the actual path to your JSON file
      .then((response) => response.json())
      .then((data) => this.setState({ videoData: data }))
      .catch((error) => console.error('Error loading video data:', error));
  }

  render() {
    const { videoData } = this.state;

    return (
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
                      <a
                        className="card"
                        href={video.link}
                        target=""
                        style={{ '--card-image': `url('${video.coverUrl}')` }}
                      >
                        <div className="card__container">
                          <div className="card__image"></div>
                          <div className="card__content">
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
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
