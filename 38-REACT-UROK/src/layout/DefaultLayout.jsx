/*Компонент обгортки*/
export default function DefaultLayout(props) {    
    return <div className="default-layout">
        {props.children}
    </div>
}