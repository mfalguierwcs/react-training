function HelpWilder({wilder, handleClickCallback}) {
    
    return ( <div onClick={handleClickCallback} className="help">
        Besoin d'aide ! <strong>{wilder}</strong>
    </div> );
}

export default HelpWilder;