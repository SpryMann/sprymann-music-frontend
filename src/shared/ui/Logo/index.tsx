import { Link } from 'react-router-dom';

interface Props {
  className?: string;
  onClick?: () => void;
}

function Logo(props: Props) {
  const { className, onClick } = props;

  return (
    <Link className={className} to="/" onClick={() => onClick && onClick()}>
      <div />
      Sprymann Music
    </Link>
  );
}

export default Logo;
