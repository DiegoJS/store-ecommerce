import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import sublimetextimg from '../img/sublimetext.png'
import vscodeimg from '../img/vscode.png'
import nativaimg from '../img/nativa.jpg'
import hibridaimg from '../img/hybrid-web.jpg'

class Proyecto extends Component {

    constructor(props) {
        super();

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        if (this.props.match.params.id === '1') {

            return (
                <div>
                    <Header></Header>
                    <div className="subtitle-nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="subtitle-h1">Visual Studio code o Sublime text</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>&nbsp;</p>

                                <p>
                                    Si estás empezando o ya sea que tienes mas tiempo dedicado al desarrollo de tecnologías web muchas veces
                                    nos hacemos esta incógnita, en donde tenemos que decidir que herramientas son las más adecuadas
                                    para llevar adelante nuestros proyectos, es cierto que a veces nos cuesta un poquito adaptarnos
                                    a utilizar o incluso a cambiar a otra herramienta, veamos unas de las principales diferencias entre ambas así como sus principales
                                    ventas y desventajas:
                    </p>
                                <br />
                                <h4>SUBLIME TEXT</h4>
                                <p> Es un editor de código multiplataforma de cerrado y para utilizarlo tendrás que pagar una pequeña cantidad de dinero ya que necesita de una licencia, sin embargo
                        podrás utilizarlo sin hacerlo, pero tendrás que <strong>tolerar</strong> el "molesto" mensaje de la licencia cada vez que guardes un cambio.
                        Es un editor bastantemente rápido y con actualizaciones constantes y <strong>útiles</strong>.
                    </p>
                                <p>
                                    Es fácil enamorarse de este editor y como nó animarse a instalarle <strong>snippets</strong> y <strong>themes</strong> que te harán pasar un rato muy divertido a la hora de codear,
                                    sencillamente me encanta este editor.
                    </p>
                                <br />
                                <img src={sublimetextimg} alt="sublime text" className="img-fluid" />
                                <br />
                                <br />
                                <br />
                                <h4>VISUAL STUDIO CODE</h4>
                                <p>
                                    VS Code es una propuesta bastante interesante impulsado principalmente por nada mas y nada menos que <strong>Microsoft</strong> quien ha decidido tomar este camino ofreciendo este <strong>tremendo</strong> editor.
                        Es open source, multiplataforma y excelente herramienta además está pensado en los desarrolladores ya que integra nada mas y nada menos que el famoso e indispensable <strong>git</strong> ya que integra una consola interna
                                                                        de la misma permitiendo llevar un control de versiones fácil de manejar así mismo interactuar con nuestros repositorios.
                    </p>
                                <p>Tiene basta cantidad de plugins y themes para todos los gustos y si amas o extrañas las combinaciones de teclas de sublime text puedes configurarla facilmente y hacerla muy similar a sublime text.</p>
                                <p>Depurador de código, si al momento de codear ingresar un comando erróneo ya sea por el famoso y bendito <strong>punto y coma</strong> el editor te va a indicar en qué linea se encuentra el error.</p>
                                <br />
                                <img src={vscodeimg} className="img-fluid" alt="visual studio code" />
                                <br />
                                <br />
                                <h5>CONCLUSIÓN</h5>
                                <p>
                                    Ya sea que decidas por uno o por otro editor te animo a que instales en tu ordenador y trates de compararlas para convencerte de que herramientas se adecúan a tus necesidades, no olvides que con el paso del tiempo las tecnologías así como las herramientas van evolucionando, es por ello que debemos estar constantemente actualizándonos para hacerle frente a los tiempos de entrega, así mismo te animo a comentar que te ha parecido este artítulo.
                    </p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            )

        }
        else if (this.props.match.params.id === '2') {
            return (
                <div>
                    <Header></Header>
                    <div className="subtitle-nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="subtitle-h1">Aplicación nativa o híbrida.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>&nbsp;</p>

                                <p>
                                    Si estás a punto de comenzar tu aplicación móvil ya sea tanto para ANDROID o IOS necesitas
                                    tener en cuenta los tipos de aplicaciones que puedes encontrar en el mercado entre ellas las mas relevantes
                                    son las ya conocidas "Nativas e Híbridas" que tienen un mismo fin pero tienen algunas pequeñas diferencias.
                                </p>
                                <br />
                                <h4>APLICACIONES NATIVAS ANDROID/IOS</h4>
                                <p>
                                    Las aplicaciones nativas son sin lugar a duda la mejor opción si tienes en mente una app
                                    bastante robusta y especializada, también es muy recomendable si necesitas un mejor control de
                                    las funciones del dispositivo tales como GPS, giroscopio, videocamara, etc. que de por sí funcionan de
                                    la forma mas eficiente.
                                </p>
                                <p>
                                    Una de las cosas mas relevantes de este tipo de aplicaciones es que para cada plataforma ya sea android e ios se debe realizar
                                    el desarrollo de forma independiente es decir que si necesitas una aplicación para android solo servirá para dispositivos android y si quieres la
                                    aplicación para dispositivos IOS solo será exclusivo para este tipo de dispositivos.
                                </p>
                                <p>
                                    La implementación de este tipo de aplicaciones es altamente recomendado para aplicaciones especializadas ya que tienen un alto rendimiento.
                                </p>
                                <p>
                                    Otra cosa relevante es que el tiempo y coste de desarrollo es relativamente alto dependiendo de la complejidad que este requiera.
                                </p>
                                <br />
                                <img src={nativaimg} alt="sublime text" className="img-fluid" />
                                <br />
                                <br />
                                <br />
                                <h4>APLICACIONES HÍBRIDAS</h4>
                                <p>
                                    A diferencia de las aplicaciones nativas, este tipo de aplicaciones están basadas en tecnología web es decir utilizan el navegador del dispositivo móvil para
                                    su funcionamiento pero sin dejar de lado que pueden utilizar recursos nativos del móvil como la cámara, gps, voz, etc.
                                </p>

                                <p>
                                    El principal promotores de las aplicaciones híbridas es Apache córdova que con sus librerías basadas en javascript y tecnologías web lograron.
                                    fusionarlos y utilizar los recursos del dispositivo.
                                </p>
                                <p>
                                    Para el usuario final no hay diferencia entre este tipo de aplicaciones y las nativas.
                                </p>
                                <p>
                                    Su principal ventaja es que es altamente personalizable y su tiempo de implementación es mucho menor ya que
                                    como se basa en tecnologías web es mas sencilla de implementar pero también tiene algunas pequeñas limitaciones
                                    para casos específicos.
                                </p>
                                <br />
                                <img src={hibridaimg} className="img-fluid" alt="visual studio code" />
                                <br />
                                <br />
                                <h5>CONCLUSIÓN</h5>
                                <p>
                                    Si tienes pensado lanzar una primera versión de una app con algunas funcionalidades menores te recomiendo hacerlo con una híbrida debido a su coste bajo y tiempo de implementación menor, pero si no es el caso y
                                    necesitas utilizar todos los recursos del dispositivo es necesario una nativa que es altamente recomendable, te invito a revisar como llegar a implementarlas y conocer como se hacen este tipo de aplicaciones en otra publicación que estaremos haciendo adelante
                                    , así mismo te animo a comentar que te ha parecido este artítulo.
                                </p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            )
        }
        else {
            return (
                <div>Bienvenido</div>
            )
        }
    }
}

export default Proyecto