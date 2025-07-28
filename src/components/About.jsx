import '../styles/about.css'
import about from '../assets/about.png'

function About() {
  return (
    <>
      <div className="about">
        <h1>About</h1>
        <hr />
        <div className="about-text">
          <p style={{ fontWeight: "bold" }}>
            Louis Tomlinson was born and raised in Doncaster, England, on
            December 24, 1991. Growing up with a love for music, he dreamed of
            sharing his stories through songs and connecting with people
            everywhere.
          </p>
          <p>
            Louis first became known as a member of One Direction, where he won
            over fans with his honest lyrics and catchy tunes. Since going solo,
            he’s been creating music that’s personal and real, connecting with
            people all around the world.
          </p>
          <p>
            Off stage, Louis is just as down-to-earth. He’s passionate about
            giving back and raising awareness for mental health, always using
            his voice to support causes that matter to him.
          </p>
          <p>
            Louis is always trying new things and growing as an artist. Whether
            it’s new music or live shows, he’s all about sharing his journey
            with fans and staying true to himself.
          </p>
        </div>
        <img src={about} alt="" className='about-img'/>
      </div>
    </>
  );
}

export default About
