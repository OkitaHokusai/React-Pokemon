import '../color.css';
import {useDispatch} from 'react-redux';
import {DELETE} from '../actions';

const Card = (props) =>{
    const dispatch = useDispatch();
    return(
        <div className={props.type+" card-saved"} >
            <div>
                <h3>{props.name} #{props.pId}</h3>
                <p></p>
                <p className={props.type+"-button button"}>{props.type}</p>
                <p className={props.type1+"-button button"}>{props.type1}</p>
                <p>{props.peso} Kg</p>
                <p>{props.altura} M</p>
            </div>
            <div>
                <img src={props.sprite}/>
            </div>
            <button className="card-button" onClick={()=>dispatch(DELETE(props.pId))}>X</button>
        </div>
    )
}

export default Card;