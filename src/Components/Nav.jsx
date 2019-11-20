import React from 'react'

function Nav({ changeTab, count }) {
    return (
        <div>
            <nav className="navbar justify-content-center navbar-dark bg-dark">
                <ul className=" nav justify-content-center nav-tabs">
                    <li className="nav-item">
                        <button onClick={() => changeTab("Prod")} className="nav-link btn btn-light">Produts</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => changeTab("Cart")} className="nav-link btn btn-light">Cart</button>
                    </li>
                </ul>

                <div className='buttons'>


                </div>

                <span className="badge badge-pill badge-info" style={{ marginLeft: "94%" }}>Selected: {count}</span>
            </nav>
        </div>
    )
}

export default Nav
