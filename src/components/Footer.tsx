const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-10">
        <img
          src="/Logo Jony Reyes.png"
          width="50"
          height="50"
          alt="Logo Jony Reyes"
          className="fill-current"
        />
        <p className="text-white text-center">
          | Jony Reyes | <br />| Frontend Developer | <br />   © {new Date().getFullYear()} All rights reserved.|
        </p>
    </footer>
  );
};

export default Footer;
