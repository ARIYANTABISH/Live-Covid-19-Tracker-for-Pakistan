import { useEffect, useState } from "react";
import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

const Updatacrona = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19api.com/summary");
      const actualData = await res.json();
      console.log(actualData.Countries[131]);
      setData(actualData.Countries[131]);
    } catch (err) {
      // consol.log('error');
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
    <br /><br />
      <Container>
        <div className="t-center">
          <h6>🛑Live</h6>
          <h3>Covid-19 Live Corona Tracker</h3>
          <div className="text-center">
          <h1>PAKISTAN</h1>
          <Card.Img variant="top" src="./pkflg.jpg" style={{width: "20%"}} />
          </div>
        </div>
<br />
        <section className="text-center">
          <Row>
            <Col>
              <Card style={{ width: "18rem center" }}>
                <Card.Img variant="top" src="./corona.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h6>TOTAL</h6> <h5>Confirmed</h5>
                  </Card.Title>
                  <Card.Text>
                    <h1>{data.TotalConfirmed} </h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem center" }}>
                <Card.Img variant="top" src="./corona.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h6>TOTAL</h6> <h5>Recovered</h5>
                  </Card.Title>

                  <Card.Text>
                    <h1>{data.TotalRecovered} </h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem center" }}>
                <Card.Img variant="top" src="./corona.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h6>TOTAL</h6> <h5>Deaths</h5>
                  </Card.Title>

                  <Card.Text>
                    <h1>{data.TotalDeaths} </h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src="./corona.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h6>NEW</h6> <h5>Confirmed</h5>
                  </Card.Title>

                  <Card.Text>
                    <h1>{data.NewConfirmed} </h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src="./corona.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h6>NEW</h6> <h5>Deaths</h5>
                  </Card.Title>

                  <Card.Text>
                    <h1>{data.NewDeaths} </h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src="./corona.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h6>NEW</h6> <h5>Recovered</h5>
                  </Card.Title>
                  <Card.Text>
                    <h3>{data.NewRecovered} </h3>
                  </Card.Text>
                  <Card.Text>
                    <h1>{}</h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
         
        </section>
        <div className="t-center">
          <Card style={{ width: "22rem" }} className="text-center">
            <Card.Img variant="top" src="./update.jpg" />
            <Card.Body>
              <Card.Title>
                <h6>LAST</h6> <h5>UPDATE</h5>
              </Card.Title>

              <Card.Text className="d-flex">
                <h1>{data.Date}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
      </Container>
    </>
  );
};

export default Updatacrona;
