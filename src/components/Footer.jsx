import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Louis Tomlinson</p>
        <div className="social-links">
          <a
            href="https://twitter.com/Louis_Tomlinson"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/louist91/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/channel/UCBSxVE6JoMg0WXvpm47OS3g"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
