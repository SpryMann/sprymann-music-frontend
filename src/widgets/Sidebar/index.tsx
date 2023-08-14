import classNames from 'classnames';
import { Logo } from 'shared';

import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <aside className={classNames(styles.sidebar)}>
      <div className={styles.sidebarHeader}>
        <Logo className={styles.sidebarLogo} />
      </div>
    </aside>
  );
}

export default Sidebar;
