import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div>
                <div className="bs-example" id="ten">
                    <nav className="navbar navbar-default">
                        <a className="navbar-brand">Trello Checklist App</a>
                        <div id="navbarCollapse" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li>
                                    <i className="fas fa-home"></i>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <i className="far fa-envelope"></i>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div >
        );

    }
}

export default Nav;