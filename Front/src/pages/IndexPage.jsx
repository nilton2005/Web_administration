import { Navigation } from "../components/Navigation";
import { Layout } from "../components/Layout";
export function IndexPage() {
    return (
        <Layout>
            <section className="intro">
                <article className="container">
                    <h1>Inicio</h1>
                    <p>Bienvenido a nuestro sistema RFID</p>
                </article>
            </section>
            {/* /intro */}

            <section className="work">
                <article className="container" id="one">
                    {/* Contenido de la sección de trabajo */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="images">
                                <div className="image1">
                                    <img src="https://images.pexels.com/photos/4483862/pexels-photo-4483862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

                                    <p className="title"> <strong>Mantiene el orden</strong> </p>
                                    <p className="content">Devido a los constante movimientos del inventario resulta dificil el sistema de orden, pero, con las constatnes actualizacion en tiempo real que provee el siste RFID  se pueden anticipar y planear un sitema de orden adecuado. </p>
                                </div>
                                <br />
                                <div className="image2">
                                    <img src="https://img.freepik.com/foto-gratis/portapapeles-explotacion-hombre-tiro-medio_23-2149214304.jpg?t=st=1729096968~exp=1729100568~hmac=eda6935e116398d22093bbc74a70e3306f8a28f60095fd5e15108bc555b43273&w=1800" alt="" />
                                    
                                    <p className="title"> <strong>Actualizaciones</strong> </p>
                                    <p>Cada dato tanto de ingreso o salida se actualizara en BD volatil, junto con un servidor potente y optimizado harán que mejore el rendimiento de regitros en tiempo  real</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="images" >
                            <br />
                            <div className="image3">
                                <img src="https://img.freepik.com/foto-gratis/trabajadora-almacen-control-inventario-tableta-digital-gran-area-almacenamiento-almacen-distribucion_342744-1451.jpg?t=st=1729097034~exp=1729100634~hmac=876271d198b6d84a9d5785ce034a2d26388e6158edf2fb3ff9c1c402ace8b969&w=1800" alt="" />
                                
                                <p className="title"> <strong>Sistema Integrado</strong> </p>
                                <p>Nos aprovechamos de una BD volatil para enviar a nuestro servidor los datos actualizados, el cual estará encargado de proveer dicha informacion a la pagina web y a a la aplicación Movil.</p>
                            </div>
                            <br />
                            <div className="image4">
                                <img src="https://img.freepik.com/foto-gratis/pluma-explotacion-mujer-tiro-medio_23-2148902538.jpg?t=st=1729096915~exp=1729100515~hmac=6fbf79ed0faea10e6c9403ab4c61a3473aa56238602bccec1467534a982490d3&w=1800" style={{ width: 700, height: 400 }} alt="" />
                                <p className="title"> <strong>Analizis de datos</strong> </p>
                                <p>Recopilamos los datos neceserios para alimentar un BD para predecir los propuductos más demandados en ciertas temporadas o epocas del año, gracias a ello podrá anticipar requirimientos más solicitados. </p>

                            </div>
                        </div>
                        </div>
                        <div>
                            <h2>¿Qué es un sistema RFID?</h2>
                            <p>Un sistema RFID es un sistema de identificación automática que permite almacenar y recuperar datos de forma remota a través de dispositivos denominados etiquetas RFID o transpondedores. Estos dispositivos son pequeños dispositivos que pueden ser adheridos a objetos, animales o personas para identificarlos de forma única.
                            </p>
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>

                </article>
            </section>
            {/* /work */}

        </Layout>
    )
}