import './styles.css';
import carImg from '../../assets/car.png';

export default function CarCard() {

    return (
        <div className="ct-car-card-container">
            <div className="ct-car-card-image">
                <img src={carImg} alt="Car" />
            </div>
            <div className="ct-car-card-text">
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
    );
}