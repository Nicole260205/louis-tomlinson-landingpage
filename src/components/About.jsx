import '../styles/about.css'
import about from '../assets/about.png'

function About() {
  return (
    <>
      <div className="about">
        <div className="about-text">
          <h1>About</h1>
          <hr />
          <p style={{ fontWeight: "bold" }}>
            Louis Tomlinson nasceu e foi criado em Doncaster, Inglaterra, no dia
            24 de dezembro de 1991. Crescendo com uma paixão pela música, ele
            sonhava em compartilhar suas histórias por meio de canções e se
            conectar com pessoas do mundo todo.
          </p>
          <p>
            Louis ficou conhecido inicialmente como membro da One Direction,
            onde conquistou os fãs com suas letras sinceras e melodias
            cativantes. Desde que iniciou sua carreira solo, ele vem criando
            músicas pessoais e autênticas, conectando-se com pessoas ao redor do
            mundo.
          </p>
          <p>
            Fora dos palcos, Louis é igualmente pé no chão. Ele é apaixonado por
            retribuir e por conscientizar sobre saúde mental, sempre usando sua
            voz para apoiar causas que são importantes para ele.
          </p>
          <p>
            Louis está sempre experimentando coisas novas e crescendo como
            artista. Seja com novas músicas ou apresentações ao vivo, ele está
            sempre compartilhando sua jornada com os fãs e permanecendo fiel a
            si mesmo.
          </p>
        </div>
        <img src={about} alt="" className="about-img" />
      </div>
    </>
  );
}

export default About
