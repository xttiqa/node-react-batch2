function Welcome (props){
    return (
        <div class="card">
        <h1 style={{color:props.color}}> {props.name} usia {props.old}</h1>
        </div>
    )
}

export default Welcome