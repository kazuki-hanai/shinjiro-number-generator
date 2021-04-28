import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <div className="bg-main flex flex-col items-center justify-center w-50 h-screen">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
