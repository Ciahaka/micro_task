type TypeHeader={
    titleForHeader:string
}
export  const  Header = (props:TypeHeader) => {
    return (
        <div>{props.titleForHeader}</div>
    )
}