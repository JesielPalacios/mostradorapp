import React, { Component, Fragment } from 'react'

var anio = new Date().getFullYear()

export class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="footer bg-dark text-center text-light">
                    <div className="container">
                        <p>&copy; {anio} Jesiel Palacios</p>    
                    </div>
                </footer>
            </Fragment>
        )
    }
}