import { Link, NavLink } from "react-router-dom";

function Menu() {
    return (<>
        <nav className="navbar navbar-expand-sm bg-dark bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Book Shop</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Author
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/authors">Authors</Link></li>
                                <li><Link className="dropdown-item" to="/save-author">Save Author</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Book
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/books">Books</Link></li>
                                <li><Link className="dropdown-item" to="/save-book">Save Book</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/categories">Categories</Link></li>
                                <li><Link className="dropdown-item" to="/save-category">Save Category</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/shops">Shops</Link></li>
                                <li><Link className="dropdown-item" to="/save-shop">Save Shop</Link></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}

export default Menu;