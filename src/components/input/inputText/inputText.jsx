import "./styles.css";

export default function InputText(props) {
    return (

        <input input className={`inputText inputText--${props.variant}`} value={props.value} type="text" placeholder={`${props.placeholder}`} >{props.children}</input>
    );
}