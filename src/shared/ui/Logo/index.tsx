import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

interface Props {
  className?: string;
  onClick?: () => void;
}

function Logo(props: Props) {
  const { className, onClick } = props;

  return (
    <Link
      className={classNames(styles.logo, className)}
      to="/"
      onClick={() => onClick && onClick()}
    >
      <div className={styles.logoCircle} />
      <span className={styles.logoText}>Sprymann Music</span>
    </Link>
  );
}

export default Logo;
