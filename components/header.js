import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link href='/'>S-ShopS</Link>
            </div>
            <nav className="user">
                <div>trends</div>
                <div>Shops</div>
                <div className="active">about</div>
                <div>Login</div>
            </nav>
        </header>
    );
}

export default Header;