import { useState } from "react";

function FormLogin(){
    const [account, setAccount] = useState({
        username: "",
        password: ""
    })
    const [new_Username, setUsername] = useState(account.username);
    const [new_Password, setPassword] = useState(account.password);

    const updateUsername = () => {
        setAccount(previousState => {
            return { ...previousState, username: new_Username }
        })
    }

    const updatePassword = () => {
        setAccount(previousState => {
            return { ...previousState, password: new_Password }
        })
    }

    const handle_onClick = (e) => {
        // Ngăn form gửi dữ liệu khi click vào nút
        e.preventDefault(); 

        // Cập nhật username và password
        updateUsername();
        updatePassword();

        // In giá trị account ra console
        console.log("Thông tin cập nhật", {
            username: new_Username,
            password: new_Password
        });
    }

    return(
        <form>
            <label>Tên đăng nhập</label>
            <input 
                type="text" 
                value={new_Username}
                onChange={(e) => setUsername(e.target.value)} 
            />

            <label>Mật khẩu</label>
            <input 
                type="password" 
                value={new_Password}
                onChange={(e) => setPassword(e.target.value)} 
            />

            <button onClick={handle_onClick}>Đăng nhập</button>
        </form>
    )
}

export default FormLogin;
