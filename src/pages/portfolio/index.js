import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {  meta } from "../../content_option";
import balkyweb from "../../assets/images/balkyweb.png";

import generali from "../../assets/images/generali-logo.png";
import iberostar from "../../assets/images/iberostar.png";
import FadeIn from 'react-fade-in';

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Proyectos | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className=" mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Proyectos </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
            <FadeIn delay={300}>
          <div className="mb-5 po_items_ho pt-5">
              <div key='balky' className="po_item">
                <img src={balkyweb} alt=""/>
                <div className="content">
                      <h2>Balkyriaa web</h2><p>Una web personal para la descripción de una streamer en twitch.</p>
                      <a href='https://balkyriaa.es' target='_blank'>Visitar sitio</a>
                  </div>
              </div>
              <div key='iberostar' className="po_item">
                  <img src={iberostar} alt=""/>
                  <div className="content">
                        <h2>Iberostar</h2><p>Desarrollo de páginas webs</p>
                        <a href='https://iberostar.com' target='_blank'>Visitar sitio</a>
                    </div>
                </div>
              <div key='generali' className="po_item">
                  <img src={generali} alt="" className="py-4 px-4"/>
                  <div className="content">
                    <h2>Mi Generali</h2><p>Colaboración en la creación de la web y aplicación desde cero.</p>
                    <a href='https://www.generali.es/webapps/mi-generali/#/login' target='_blank'>Visitar sitio</a>
                  </div>
                </div>
              
              
            </div>
            </FadeIn>
      </Container>
    </HelmetProvider>
  );
};
