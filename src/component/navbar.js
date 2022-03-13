import React from "react"
import {Link} from 'react-router-dom'
import "./navbar.css"
export default class Navbar extends React.Component{
    render(){
        return(
            <switch>
                <div>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <Link className="navbar-brand" to="/">Calculator</Link>
                            <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">BMI</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Pembelian">Pembelian</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Bank">Cicilan</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Konversi</a>
                                    <ul class="dropdown-menu dropdown-menu-end fade-down">
                                        <li> <Link className="nav-link dropdown-item" to="/KonversiDesimal">Konversi Desimal</Link></li>
                                        <li> <Link className="nav-link dropdown-item" to="/KonversiBiner">Konversi Biner</Link></li>
                                        <li> <Link className="nav-link dropdown-item" to="/KonversiOktal">Konversi Oktal</Link></li>
                                        <li> <Link className="nav-link dropdown-item" to="/KonversiHeksadesimal">Konversi Heksadesimal</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </switch>
        )
    }
}