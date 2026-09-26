import Particles from './Particles';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Particles />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}