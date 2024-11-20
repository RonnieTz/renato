import { Page } from '../../redux/initialState';
import { useRedux } from '../../hooks/useRedux';
import { setPage } from '../../redux/appSlice';

type Props = {
  title: Page;
};

const SidebarItem = ({ title }: Props) => {
  const { dispatch, useSelectorTyped } = useRedux();
  const { page } = useSelectorTyped((state) => state.app);
  const handleClick = () => {
    dispatch(setPage(title));
  };
  return (
    <a
      style={{ color: page === title ? 'rgb(150, 150, 255)' : undefined }}
      className="sidebar-item"
      onClick={handleClick}
    >
      {title.toUpperCase()}
    </a>
  );
};
export default SidebarItem;
