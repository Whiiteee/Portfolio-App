import Header from '../../components/Header';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="py-10"></div> {/* Spacer for header */}
        <Projects />
      </main>
      <Footer />
    </div>
  );
}