import React, { Component } from 'react';
import Cita from './Cita';

class ListaCitas extends Component {
    render() { 
        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Administra tus citas Aqui';

        return ( 
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title">{mensaje}</h2>
                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(cita => (
                            <Cita
                                key={cita}
                                idCita={cita}
                                info={this.props.citas[cita]}
                                borrarCita={this.props.borrarCita}
                            />
                        ))}

                        {/* {console.log(this.props.citas)} */}

                        {/* {this.props.citas.map(cita => (
                            //<Cita key={cita} info={this.props.citas[cita]} />
                            console.log(cita)
                        ))} */}

                    </div>
                </div>
            </div>
         );
    }
}
 
export default ListaCitas;