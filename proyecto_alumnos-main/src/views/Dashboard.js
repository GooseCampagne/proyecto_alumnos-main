/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
//ONTIVEROS ESTUVO AQUÍ
import { Line, Pie } from "react-chartjs-2";
import hombre from "hombre.png";
import campagne from "Campagne.jpg";
import papu from "Papu.png";
import padrino from "Padrino.jpeg";
import ontiveros from "ontiveros.png";
import papu2 from "GurrolaAntuna.jpg";
import paola from "Herrera_Ortiz.jpg";
import pistor from "SotoGraciano.jpg";
import alma from "soto cervantes.jpg";
import bernardo from "castañeda.jpg";
import renteria from "RenteríaMeza.jpg";
import daniel from "Sanchez_Daniel.jpeg";
import marlenne from "Marlenne.png";
import manzanilla from "manzanilla.jpg";
import vallejo from "vallejo.jpg";
import reyna from "reyna.jpg";
import luna from "luna.jpeg";
import irene from "Leon_Quintanaaa.jpeg";
import maurix from "zaldivar.jpeg"

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.js";

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 1</p>
                      <CardTitle tag="p">GUSTAVO CAMPAGNE</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={campagne} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
           </Col>
                  <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 2</p>
                                          <CardTitle tag="p">DIEGO HERRERA</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={papu} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 3</p>
                                          <CardTitle tag="p">Jonathan Essau</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={papu2} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 4</p>
                                          <CardTitle tag="p">LUIS ONTIVEROS</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={ontiveros} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 5</p>
                                          <CardTitle tag="p">MIGUEL MANZANILLA</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={manzanilla} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 6</p>
                                          <CardTitle tag="p">VICTOR SOTO</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={pistor} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 7</p>
                                          <CardTitle tag="p">DIEGO RIOS</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={padrino} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 8</p>
                                          <CardTitle tag="p">DANIEL SANCHEZ</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={daniel} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 9</p>
                                          <CardTitle tag="p">PAOLA HERRERA</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={paola} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 10</p>
                                          <CardTitle tag="p">EDGAR VALLEJO</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={vallejo} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 11</p>
                                          <CardTitle tag="p">BERNARDO CASTAÑEDA</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={bernardo} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 12</p>
                                          <CardTitle tag="p">MARLENNE IBARRA</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={marlenne} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 13</p>
                                          <CardTitle tag="p">ALMA SOTO</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={alma} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 14</p>
                                          <CardTitle tag="p">ANGEL RENTERIA</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={renteria} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 15</p>
                                          <CardTitle tag="p">IRENE LEON</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={irene} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 16</p>
                                          <CardTitle tag="p">LUIS LUNA</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={luna} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 17</p>
                                          <CardTitle tag="p">SAMUEL REYNA</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={reyna} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> 
                  <Col lg="3" md="6" sm="6">
                      <Card className="card-stats">
                          <CardBody>
                              <Row>
                                  <Col md="4" xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <i className="nc-icon nc-globe text-warning" />
                                      </div>
                                  </Col>
                                  <Col md="8" xs="7">
                                      <div className="numbers">
                                          <p className="card-category">ALUMNO 18</p>
                                          <CardTitle tag="p">MAURO ZALDIVAR</CardTitle>
                                          <p />
                                      </div>
                                  </Col>
                              </Row>
                          </CardBody>
                          <CardFooter>
                              <hr />
                              <div className="stats">
                              </div>
                              <a
                                  href="/"
                                  className="simple-text logo-mini"
                              >
                                  <div className="logo-img">
                                      <img src={maurix} alt="react-logo" />
                                  </div>
                              </a>
                          </CardFooter>
                      </Card>
                  </Col> 
        </Row>
        <Row>
          
          
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
