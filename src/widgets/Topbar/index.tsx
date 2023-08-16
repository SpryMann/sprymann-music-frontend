import classNames from 'classnames';
import { BsGearFill, BsPersonFill } from 'react-icons/bs';
import { MdPlaylistAdd } from 'react-icons/md';
import { PiDotsNineBold, PiDotsThreeBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { Logo, Search, useAppDispatch, useAppSelector } from 'shared';
import { changeShowSidebar } from 'shared/ui/uiSlice';

import styles from './Topbar.module.scss';

function Topbar() {
  const dispatch = useAppDispatch();
  const { showSidebar } = useAppSelector((state) => state.ui);

  const handleClickMenuButton = (newValue: boolean) =>
    dispatch(changeShowSidebar(newValue));

  return (
    <div className={styles.topbar}>
      <button
        className={classNames(styles.button, styles.topbarMenu)}
        type="button"
        onClick={() => handleClickMenuButton(!showSidebar)}
      >
        {showSidebar ? (
          <PiDotsThreeBold className={styles.buttonIcon} />
        ) : (
          <PiDotsNineBold className={styles.buttonIcon} />
        )}
      </button>
      <Logo className={styles.topbarLogo} />
      <Search className={styles.topbarSearch} />
      <div className={styles.topbarRight}>
        <Link
          className={classNames(styles.link, styles.topbarLink)}
          to="/playlists/create"
        >
          <MdPlaylistAdd className={styles.linkIcon} />
          <span className={styles.linkText}>Create Playlist</span>
        </Link>
        <Link
          className={classNames(styles.link, styles.topbarLink)}
          to="/settings"
        >
          <BsGearFill className={styles.linkIcon} />
          <span className={styles.linkText}>Settings</span>
        </Link>
        <button className={styles.button} type="button">
          <BsPersonFill className={styles.buttonIcon} />
        </button>
      </div>
    </div>
  );
}

export default Topbar;
