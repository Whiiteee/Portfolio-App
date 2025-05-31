import Header from '../../components/Header';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="py-10"></div> {/* Spacer for header */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}