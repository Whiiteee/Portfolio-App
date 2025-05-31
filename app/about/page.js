import Header from '../../components/Header';
import About from '../../components/About';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="py-10"></div> {/* Spacer for header */}
        <About />
      </main>
      <Footer />
    </div>
  );
}