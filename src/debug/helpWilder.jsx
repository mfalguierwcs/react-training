function HelpWilder(props) {

    return ( <div onClick={() => props.wilderCallback()} className="help">Besoin d'aide ! <strong>{props.currentWilder}</strong></div> );
}

export default HelpWilder;