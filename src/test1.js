function Test1() {
    const person = {
        name: "Anh Vũ",
        theme: { backgroundColor: 'blue', color: 'white' }

    }

    return (
    <div style = {person.theme}>
        <h1>Xin chào: {person.name}</h1>
        <div>Chúc anh đẹp trai hơn</div>
    </div> 
    
    )
}

function Test11(props){
    const props_Name = props.name;

    return (
        <h1>Lần nữa xin chào: anh {props_Name}</h1>
    )
}
export {Test1, Test11}

