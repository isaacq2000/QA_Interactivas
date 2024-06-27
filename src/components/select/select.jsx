import "./styles.css";

export default function Select(props){
    return (
        <select className={`select select--${props.variant}`} name={props.name} id="">{props.children}</select>

        
    );
}