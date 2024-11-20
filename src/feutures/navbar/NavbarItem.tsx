import { Page } from '../../redux/initialState';
import { useRedux } from '../../hooks/useRedux';
import { setPage } from '../../redux/appSlice';

type Props = { title: Page };

const NavbarItem = ({ title }: Props) => {
  const { dispatch, useSelectorTyped } = useRedux();
  const { page } = useSelectorTyped((state) => state.app);

  const handleClick = () => {
    dispatch(setPage(title));
  };
  return (
    <div className="navbar-item">
      <a
        style={{
          color: page === title ? 'blue' : undefined,
          textDecorationColor: page === title ? 'blue' : undefined,
        }}
        onClick={handleClick}
      >
        {title.toUpperCase()}
      </a>
    </div>
  );
};
export default NavbarItem;
