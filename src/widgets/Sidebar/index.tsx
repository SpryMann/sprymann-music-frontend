import classNames from 'classnames';
import { useLayoutEffect } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { MdClose, MdPlaylistPlay } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { Logo, useAppDispatch, useAppSelector } from 'shared';
import { changeShowSidebar } from 'shared/ui/uiSlice';

import { sidebarArtistsAndSongs, sidebarData, sidebarPlaylists } from './data';

import styles from './Sidebar.module.scss';

function Sidebar() {
  const dispatch = useAppDispatch();
  const { showSidebar } = useAppSelector((state) => state.ui);

  const setShowSidebar = (newValue: boolean) =>
    dispatch(changeShowSidebar(newValue));

  useLayoutEffect(() => {
    const media = window.matchMedia('(min-width: 1400px)');

    if (media.matches) {
      dispatch(changeShowSidebar(true));
    }
  }, [dispatch]);

  return (
    <aside
      className={classNames(styles.sidebar, {
        [styles.sidebarActive]: showSidebar,
      })}
    >
      <div
        className={styles.sidebarOverlay}
        onClick={() => setShowSidebar(false)}
      />
      <div className={styles.sidebarContent}>
        <div className={styles.sidebarHeader}>
          <Logo className={styles.sidebarLogo} />
          <button
            className={styles.close}
            type="button"
            onClick={() => setShowSidebar(false)}
          >
            <MdClose className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.sidebarBody}>
          {sidebarData.map((item, index) => (
            <div
              className={classNames(styles.section, styles.sidebarSection, {
                [styles.sidebarSectionMain]: index === 0,
              })}
              key={item.id}
            >
              <h2 className={styles.sectionTitle}>{item.title}</h2>
              <ul className={styles.sectionList}>
                {item.links.map((link) => (
                  <li className={styles.sectionItem} key={link.id}>
                    <NavLink
                      className={({ isActive }) =>
                        classNames(styles.link, styles.sectionLink, {
                          [styles.linkActive]: isActive,
                        })
                      }
                      to={link.path}
                    >
                      {link.icon(styles.linkIcon)}
                      <span className={styles.linkText}>{link.text}</span>
                      <BiChevronRight className={styles.linkChevron} />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={classNames(styles.section, styles.sidebarSection)}>
            <h2 className={styles.sectionTitle}>Your Playlists</h2>
            <ul className={styles.sectionList}>
              {sidebarPlaylists.map((link) => (
                <li className={styles.sectionItem} key={link.id}>
                  <NavLink
                    className={({ isActive }) =>
                      classNames(styles.link, styles.sectionLink, {
                        [styles.linkActive]: isActive,
                      })
                    }
                    to={link.path}
                  >
                    <MdPlaylistPlay className={styles.linkIcon} />
                    <span className={styles.linkText}>{link.text}</span>
                    <BiChevronRight className={styles.linkChevron} />
                  </NavLink>
                </li>
              ))}
            </ul>
            <button className={styles.sectionButton} type="button">
              New Playlist
            </button>
          </div>
          {sidebarArtistsAndSongs.map((item) => (
            <div
              className={classNames(styles.section, styles.sidebarSection)}
              key={item.id}
            >
              <h2 className={styles.sectionTitle}>{item.title}</h2>
              <ul className={styles.sectionList}>
                {item.links.map((link) => (
                  <li className={styles.sectionItem} key={link.id}>
                    <NavLink
                      className={({ isActive }) =>
                        classNames(styles.link, styles.sectionLink, {
                          [styles.linkActive]: isActive,
                        })
                      }
                      to={link.path}
                    >
                      <div className={styles.linkImageWrapper}>
                        <img
                          className={classNames(styles.linkImage, {
                            [styles.linkImageCircle]: link.isImageCircle,
                          })}
                          src={`${import.meta.env.VITE_API_BASE}${
                            link.imageSource
                          }`}
                          alt={link.text}
                        />
                      </div>
                      <span className={styles.linkText}>{link.text}</span>
                      <BiChevronRight className={styles.linkChevron} />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
