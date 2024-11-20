import Footer from './feutures/footer/Footer';
import Navbar from './feutures/navbar/Navbar';
import Sidebar from './feutures/sidebar/Sidebar';
import { useRedux } from './hooks/useRedux';
import { setSidebarIsOpen } from './redux/appSlice';
import HomePage from './feutures/home/HomePage';

function App() {
  const { dispatch, useSelectorTyped } = useRedux();
  const { sidebarIsOpen, page } = useSelectorTyped((state) => state.app);
  const handleClick = () => {
    if (sidebarIsOpen) dispatch(setSidebarIsOpen());
  };
  return (
    <div onClickCapture={handleClick}>
      <Navbar />
      <Sidebar />
      {page === 'home' && <HomePage />}
      <Footer />
    </div>
  );
}

export default App;
