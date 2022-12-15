function GiftLine(props) {
    console.log(props)
    return ( <div className="flex cursor-pointer justify-between w-1/2">
        <div>
            {props.idea}
        </div>
        <div>
            {props.name}
        </div>
        <div>
            x
        </div>
    </div> );
}

export default GiftLine;