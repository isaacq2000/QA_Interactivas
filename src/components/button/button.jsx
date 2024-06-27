import "./styles.css";

export default function Button(props){
    return (
        <button type={props.type} onClick={props.onClickCustom}
        className={`button button--${props.variant}`}>
            {props.children}
        </button>
    );
}
