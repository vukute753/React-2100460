function Hello(){
    const hiAll = () => {
        alert("Hello Anh Vũ đẹp trai")
    }
    const hiYou = (name) => {
        alert("Hello " + name)
    }
 

    return(
        <span>
            <button onClick={hiAll}>Hi Anh Vũ</button>
            <button onClick={hiYou}>Hi Hiền Vũ</button>
        </span>
    )
}
export default Hello