import "./styles.css";

export default function InputDate(props){
    return (
        <input input className={`inputDate inputDate--${props.variant}`} type="date" >{props.children}</input>
        
    );
}