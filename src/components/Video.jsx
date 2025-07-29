import "../styles/video.css";

const singles = [
  {
    title: "Just Hold On",
    year: "2017",
    url: "https://www.youtube.com/watch?v=Vt4Tq89R8u0",
    thumb: "https://img.youtube.com/vi/Vt4Tq89R8u0/hqdefault.jpg",
  },
  {
    title: "Back to You",
    year: "2018",
    url: "https://www.youtube.com/watch?v=-HjpL-Ns6_A",
    thumb: "https://img.youtube.com/vi/-HjpL-Ns6_A/hqdefault.jpg",
  },
  {
    title: "Just Like You",
    year: "2018",
    url: "https://www.youtube.com/watch?v=qvXXMsiQBDg",
    thumb: "https://img.youtube.com/vi/qvXXMsiQBDg/hqdefault.jpg",
  },
  {
    title: "Miss You",
    year: "2018",
    url: "https://www.youtube.com/watch?v=inZzcTXYowY",
    thumb: "https://img.youtube.com/vi/inZzcTXYowY/hqdefault.jpg",
  },
];

const wallsEra = [
  {
    title: "Two Of Us",
    year: "2019",
    url: "https://www.youtube.com/watch?v=5oX_gwwACls",
    thumb: "https://img.youtube.com/vi/5oX_gwwACls/hqdefault.jpg",
  },
  {
    title: "Kill My Mind",
    year: "2020",
    url: "https://www.youtube.com/watch?v=IzuvvjrUBEw",
    thumb: "https://img.youtube.com/vi/IzuvvjrUBEw/hqdefault.jpg",
  },
  {
    title: "We Made It",
    year: "2020",
    url: "https://www.youtube.com/watch?v=XWXRh6icAzQ",
    thumb: "https://img.youtube.com/vi/XWXRh6icAzQ/hqdefault.jpg",
  },
  {
    title: "Don't Let It Break Your Heart",
    year: "2020",
    url: "https://www.youtube.com/watch?v=xhjCkwFMb_Q",
    thumb: "https://img.youtube.com/vi/xhjCkwFMb_Q/hqdefault.jpg",
  },
  {
    title: "Walls",
    year: "2020",
    url: "https://www.youtube.com/watch?v=ASt2TJ48r6k",
    thumb: "https://img.youtube.com/vi/ASt2TJ48r6k/hqdefault.jpg",
  },
];

const fitfEra = [
  {
    title: "Bigger Than Me",
    year: "2022",
    url: "https://www.youtube.com/watch?v=Ece21themfE&list=PLqGX5DYz-3cmzMbWspJXkJRG-Z_gkTkP1&index=3",
    thumb: "https://img.youtube.com/vi/Ece21themfE/hqdefault.jpg",
  },
  {
    title: "Out Of My System",
    year: "2022",
    url: "https://www.youtube.com/watch?v=LICLY1c7c6o&list=PLqGX5DYz-3cmzMbWspJXkJRG-Z_gkTkP1&index=2",
    thumb: "https://img.youtube.com/vi/LICLY1c7c6o/hqdefault.jpg",
  },
  {
    title: "Silver Tongues",
    year: "2022",
    url: "https://www.youtube.com/watch?v=wFloE26iUks&list=PLqGX5DYz-3cmzMbWspJXkJRG-Z_gkTkP1&index=1",
    thumb: "https://img.youtube.com/vi/wFloE26iUks/hqdefault.jpg",
  },
];

function Video() {
  return (
    <>
      <h1>Videos</h1>
      <hr className="hr-video" />

      {/* Era: Singles */}
      <h3 className="era-title">Singles</h3>
      <div className="cards-videos">
        {singles.map((video, index) => (
          <div className="card" key={index}>
            <img src={video.thumb} alt={video.title} />
            <div className="card-info">
              <h4>{video.title}</h4>
              <p>{video.year}</p>
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <button>Watch</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Era: Walls */}
      <h3 className="era-title">Walls Era</h3>
      <div className="cards-videos">
        {wallsEra.map((video, index) => (
          <div className="card" key={index}>
            <img src={video.thumb} alt={video.title} />
            <div className="card-info">
              <h4>{video.title}</h4>
              <p>{video.year}</p>
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <button>Watch</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Era: Faith In The Future */}
      <h3 className="era-title">Faith In The Future</h3>
      <div className="cards-videos">
        {fitfEra.map((video, index) => (
          <div className="card" key={index}>
            <img src={video.thumb} alt={video.title} />
            <div className="card-info">
              <h4>{video.title}</h4>
              <p>{video.year}</p>
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <button>Watch</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Video;
