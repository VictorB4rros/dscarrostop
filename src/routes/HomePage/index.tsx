import './styles.css';
import Header from '../../components/Header';
import CarCard from '../../components/CarCard';
import Comment from '../../components/Comment';
import Footer from '../../components/Footer';

export default function HomePage() {

    return (
        <>
            <Header />
            <main>
                <section id="car-section">
                    <div className="ct-slogan-container">
                        <p>Venha nos visitar</p>
                    </div>
                    <div className="ct-car-card-container">
                        <CarCard />
                        <CarCard />
                    </div>
                </section>
                <section id="comment-section">
                    <div className="ct-slogan-container">
                        <p>O que estão dizendo</p>
                    </div>
                    <div className="ct-comment-container">
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}