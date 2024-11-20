import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRedux } from '../../hooks/useRedux';
import { setSidebarIsOpen } from '../../redux/appSlice';
import { IconButton } from '@mui/material';
const SidebarButton = () => {
  const { dispatch, useSelectorTyped } = useRedux();
  const { sidebarIsOpen } = useSelectorTyped((state) => state.app);
  const handleClick = () => {
    dispatch(setSidebarIsOpen());
  };
  return (
    <div className="navbar-sidebar-button">
      {!sidebarIsOpen ? (
        <IconButton onClick={handleClick}>
          <MenuIcon fontSize="large" />
        </IconButton>
      ) : (
        <IconButton onClick={handleClick}>
          <CloseIcon color="error" fontSize="large" />
        </IconButton>
      )}
    </div>
  );
};
export default SidebarButton;
