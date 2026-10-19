
import './styles.css'

const Card2 = (props) => {
    return (
        <div className="card2">
            <p>Tôi tên: {props.name}</p>
            <p>Học lớp: {props.learningClass}</p>
            <p>{props.slogan}</p>
        </div>
    )
}

export default Card2
