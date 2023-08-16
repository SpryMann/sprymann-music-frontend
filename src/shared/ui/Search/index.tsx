import classNames from 'classnames';
import { BsArrowRight, BsSearch } from 'react-icons/bs';

import styles from './Search.module.scss';

interface Props {
  className?: string;
}

function Search(props: Props) {
  const { className } = props;

  return (
    <form className={classNames(styles.search, className)}>
      <BsSearch className={styles.searchIcon} />
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search for music"
      />
      <button
        className={classNames(styles.button, styles.searchButton)}
        type="button"
        disabled
      >
        <BsArrowRight className={styles.buttonIcon} />
      </button>
    </form>
  );
}

export default Search;
