import './styles.css';
import Header from '../../components/Header';
import CarCard from '../../components/CarCard';

export default function HomePage() {

    return (
        <>
            <Header />
            <main>
                <div className="ct-slogan-container">
                    <p>Venha nos visitar</p>
                </div>
                <div>
                    <CarCard />
                </div>
            </main>
        </>
    );
}