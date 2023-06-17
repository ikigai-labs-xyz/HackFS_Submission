import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroSection}>
      
        <div className={styles.iconBox}>
          <img
            className={styles.heroIcon}
            src="/assets/push.svg"
            alt="push-logo"
          />
        </div>

        <div className={styles.heroTextLarge}>
          PENSER<span className={styles.greenText}></span>
        </div>

        <div className={styles.iconBox}>
          <img
            className={styles.heroIcon}
            src="/assets/ens.svg"
            alt="ens-logo"
          />
        </div>

        

        
      </div>

      <div>

      <div className={styles.heroTextSmall}>
            🔔 PENSER - Push ENS Expiry Reminder
        </div>

      <div className={styles.heroTextSmall2}>
            get reminded when your ENS domain is about to expire with the power of Push Protocol
        </div>

        <div className={styles.connectButton}>
            <ConnectButton />
        </div>
        

        </div>
      
      
    </div>
  );
};

export default Hero;