import './sidebar_styles.css';
import { useRedux } from '../../hooks/useRedux';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const { useSelectorTyped } = useRedux();
  const { sidebarIsOpen } = useSelectorTyped((state) => state.app);
  return (
    <div
      style={{
        height: sidebarIsOpen ? '350px' : '0px',
      }}
      className="sidebar-container"
    >
      <div className="sidebar">
        <SidebarItem title="home" />
        <SidebarItem title="about" />
        <SidebarItem title="services" />
        <SidebarItem title="gallery" />
        <SidebarItem title="contact" />
      </div>
    </div>
  );
};
export default Sidebar;
