import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro/'>
        Entenda como funfiona a Técnica Pomodoro
      </RouterLink>
      <RouterLink href='/'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </RouterLink>
    </footer>
  );
}
