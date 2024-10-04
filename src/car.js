import {useState} from 'react'


function Car() {
    const [car, setCar] = useState({
        brand_Car: "Honda",
        color_Car: "pink",
        year_Car: "2024",
        own_Car: "Anh Vũ"
    })

    const [newYear, setNewYear] = useState(car.year_Car); //Lưu năm nhập từ input

    const updateYear = () => {
        setCar(previousState => {
            return { ...previousState, year_Car: newYear }
        })
    }

    return (
        <div>
            <h1>Thông tin xe</h1>
            <p>Xuất xứ: {car.brand_Car}</p>
            <p>Màu: {car.color_Car}</p>
            <p>Năm sản xuất: {car.year_Car}</p>
            <p>Chủ sở hữu: {car.own_Car}</p>

            <div>
                <label>Cập nhật năm sản xuất</label>
                <input type="number" value={newYear} onChange={(e) => setNewYear(e.target.value)} />
            </div>
            <input type='button' value='Update Year' onClick={updateYear} />
        </div>
    )
}
export default Car