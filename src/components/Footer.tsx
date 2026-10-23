const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-in">
        <span>
          &copy; {new Date().getFullYear()} Tlhompho Ratlhogo. Software Engineer.
        </span>
        <span>
          <a href="#home">Back to top &uarr;</a>
          {" "}&nbsp;&middot;&nbsp;{" "}
          <a
            href="https://github.com/tlhomphogit"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" "}&nbsp;&middot;&nbsp;{" "}
          <a
            href="https://linkedin.com/in/tlhompho-ratlhogo-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
