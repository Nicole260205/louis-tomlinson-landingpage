import "../styles/music.css";
import justHoldOn from "../assets/just_hold_on.jpg";
import backToYou from "../assets/back_to_you.jpg";
import justLikeYou from "../assets/just_like_you.jpg";
import missYou from "../assets/miss_you.jpg";
import walls from "../assets/walls.jpg";
import faithInTheFuture from "../assets/fitf.jpg";
import live from "../assets/live.jpg";

function Music() {
  return (
    <>
      <div className="music-container">
        <h1>Music</h1>
        <hr className="music-hr" />
        <h3>singles</h3>
        <div className="music-cards-single">
          <div className="music-card">
            <img src={justHoldOn} alt="" />
            <div className="music-card-info">
              <h4>Just Hold On</h4>
              <p>2016</p>
              <a
                href="https://open.spotify.com/intl-pt/album/6NomK9f7zRLOuScvAyI1XX?si=34WNwiQcR4C9H-vVfmta-A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Listen</button>
              </a>
            </div>
          </div>

          <div className="music-card">
            <img src={backToYou} alt="" />
            <div className="music-card-info">
              <h4>Back to You</h4>
              <p>2017</p>
              <a
                href="https://open.spotify.com/album/4sBgGazGb7S9ZUQJu2Y0qa?si=qBRnn09KREuQbRioz6ckvA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Listen</button>
              </a>
            </div>
          </div>

          <div className="music-card">
            <img src={justLikeYou} alt="" />
            <div className="music-card-info">
              <h4>Just Like You</h4>
              <p>2017</p>
              <a
                href="https://open.spotify.com/album/1VZoGsObyr7YAZOmP8DYEZ?si=fiW5q5qAR7yb6qI3qGFDFw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Listen</button>
              </a>
            </div>
          </div>

          <div className="music-card">
            <img src={missYou} alt="" />
            <div className="music-card-info">
              <h4>Miss You</h4>
              <p>2017</p>
              <a
                href="https://open.spotify.com/intl-pt/album/22anLYKhfIkwUOz8RZtZKq?si=QH3YzKx0S369Y_6IS-spfw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Listen</button>
              </a>
            </div>
          </div>
        </div>

        <h3>albuns</h3>
        <div className="music-cards-albums">
          <div className="music-card">
            <img src={walls} alt="" />
            <div className="music-card-info">
              <h4>Walls</h4>
              <p>2020</p>
              <a
                href="https://open.spotify.com/intl-pt/album/4F4wlAmPyUVCyISxlePFL9?si=lOdYQnN_R1i7Kms7fUAa9w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Listen</button>
              </a>
            </div>
          </div>

          <div className="music-card">
            <img src={faithInTheFuture} alt="" />
            <div className="music-card-info">
              <h4>Faith In The Future</h4>
              <p>2022</p>
              <a
                href="https://open.spotify.com/intl-pt/album/2RMzjdvRjr9gd2XgS5PnEn?si=dfSNinSuQde2qjn8kJkmWQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Listen</button>
              </a>
            </div>
          </div>
          <div className="music-card">
            <img src={live} alt="" />
            <div className="music-card-info">
              <h4>LIVE</h4>
              <p>2024</p>
              <a
                href="https://open.spotify.com/intl-pt/album/7BTeGSKbjNIDVLn4NXWlr8?si=TXa0qn81SPCri1qK-W1TGA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Listen</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Music;
