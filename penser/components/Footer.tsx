import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSection}>
        🌈 made with ❤️ @ HackFS 2023 by ETHGlobal 🌈
      </div>
    </div>
  );
};

export default Footer;