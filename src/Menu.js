import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index.html" className="brand-link">
                    <img src="dist/img/logo_ads.svg" alt="Alternativa 19 del sur Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                    <span className="brand-text font-weight-light">SharePoint ADS</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/user3-128x128.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alejandra Laguna</a>
                    </div>
                    </div>
                    {/* SidebarSearch Form */}
                    <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                        <button className="btn btn-sidebar">
                            <i className="fas fa-search fa-fw" />
                        </button>
                        </div>
                    </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
                                    with font-awesome or any other icon font library */}
                        <li className="nav-item menu-open">
                        <a href="#" className="nav-link active">
                            <i className="nav-icon fas fa-tachometer-alt" />
                            <p>
                            Perfil
                            <i className="right fas fa-angle-left" />
                            </p>
                        </a>
                        {/* <ul className="nav nav-treeview">
                            <li className="nav-item">
                            <a href="./index.html" className="nav-link active">
                                <i className="far fa-circle nav-icon" />
                                <p>Dashboard v1</p>
                            </a>
                            </li>
                        </ul> */}
                        </li>
                        {/* <li className="nav-item">
                        <a href="pages/widgets.html" className="nav-link">
                            <i className="nav-icon fas fa-th" />
                            <p>
                            Widgets
                            <span className="right badge badge-danger">New</span>
                            </p>
                        </a>
                        </li> */}
                        <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-copy" />
                            <p>
                            Tipos de Créditos
                            <i className="fas fa-angle-left right" />
                            <span className="badge badge-info right"></span>
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                            <a href="pages/layout/top-nav.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Individual</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Grupal</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/layout/boxed.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>ConstruCredi</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Mejora Tú Vivienda</p>
                            </a>
                            </li>
                            
                            <li className="nav-item">
                            <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Tú CrediGas</p>
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-chart-pie" />
                            <p>
                            Formación y Desarrollo
                            <i className="right fas fa-angle-left" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                            <a href="pages/charts/chartjs.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>ChartJS</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/charts/flot.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Flot</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/charts/inline.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Inline</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/charts/uplot.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>uPlot</p>
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-tree" />
                            <p>
                            Capital Humano
                            <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                            <a href="pages/UI/general.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>General</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/UI/icons.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Icons</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/UI/buttons.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Buttons</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/UI/sliders.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Sliders</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/UI/modals.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Modals &amp; Alerts</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/UI/navbar.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Navbar &amp; Tabs</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/UI/timeline.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Timeline</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/UI/ribbons.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Ribbons</p>
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-edit" />
                            <p>
                            Manual ADS
                            <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                            <a href="pages/forms/general.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>General Elements</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/forms/advanced.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Advanced Elements</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/forms/editors.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Editors</p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="pages/forms/validation.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Validation</p>
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-table" />
                            <p>
                            Noticias
                            <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon far fa-circle text-info" />
                            <p>Salir</p>
                        </a>
                        </li>
                    </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
                </aside>


            </div>
        )
    }
}
