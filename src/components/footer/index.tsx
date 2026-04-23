import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from "./footer.module.css";

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5579998448030",
    icon: <FaWhatsapp />,
  },
];

export function Footer() {
  return (
    <footer className={styles.container}>
      <p>
        Crypto Market &copy; {currentYear} | Desenvolvido por{" "}
        <a
          className={styles.brand}
          href="https://www.camiloruas.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Camilo Ruas
        </a>
      </p>

      <nav className={styles.social} aria-label="Redes sociais">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
      </nav>
    </footer>
  );
}
