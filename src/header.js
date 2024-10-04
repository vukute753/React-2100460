import './App.css';
function ListItems(props) {
    return (
        <li>
            <a href={props.link}>{props.content}</a>
        </li>
    );
}


function Menu(props) {
    return (
        <div>
            <ul>
                {props.items.map((item, index) => (
                    <ListItems key={index} link={item.link} content={item.content} />
                ))}
            </ul>
        </div>
    );
}

function Header() {
    // Dữ liệu cho các menu item
    const menuItems = [
        { link: "https://google.com", content: "Google" },
        { link: "https://facebook.com", content: "Facebook" },
    ];

    return (
        <header>
            <Menu items={menuItems} />
        </header>
    );
}
export default Header