import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import balkyweb from "../../assets/images/balkyweb.png";
import balkyweb2 from "../../assets/images/balkyweb2.png";
import balkyweb3 from "../../assets/images/balkyweb3.png";
import generali from "../../assets/images/generali.png";
import iberostar from "../../assets/images/iberostar.png";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation, Lazy } from "swiper";
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
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Proyectos </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Swiper
          pagination={{
            clickable: true,
            type: "progressbar"
          }}
          lazy={true}
          navigation={true}
          modules={[Lazy, Pagination, Navigation]}
          className="mySwiper"
        >
        <SwiperSlide>
          <div className="mb-5 po_items_ho pt-5">
              <div key='balky' className="po_item">
                <img src={balkyweb} alt=""/>
                <div className="content">
                      <p>Una web personal para la descripción de una streamer en twitch</p>
                      <a href='https://balkyriaa.es' target='_blank'>Visitar sitio</a>
                  </div>
              </div>
              <div key='balky' className="po_item">
                <img src={balkyweb2} alt=""/>
                <div className="content">
                      <p>Una web personal para la descripción de una streamer en twitch</p>
                      <a href='https://balkyriaa.es' target='_blank'>Visitar sitio</a>
                  </div>
              </div>
              <div key='balky' className="po_item">
                <img src={balkyweb3} alt=""/>
                <div className="content">
                      <p>Una web personal para la descripción de una streamer en twitch</p>
                      <a href='https://balkyriaa.es' target='_blank'>Visitar sitio</a>
                  </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-5 po_items_ho pt-5">
              <div key='balky' className="po_item">
                <img src={generali} alt=""/>
                <div className="content">
                      <p>Proyecto web y app, colaboración con equipo de Generali</p>
                      <a href='https://generali.es' target='_blank'>Visitar sitio</a>
                  </div>
              </div>
              
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-5 po_items_ho pt-5">
              <div key='balky' className="po_item">
                <img src={iberostar} alt=""/>
                <div className="content">
                      <p>Proyecto web y app, colaboración con equipo de Iberostar para nuevas páginas webs</p>
                      <a href='https://iberostar.com' target='_blank'>Visitar sitio</a>
                  </div>
              </div>
              
            </div>
        </SwiperSlide>
      </Swiper>
      </Container>
    </HelmetProvider>
  );
};

// {/* <div className="mb-5 po_items_ho">
//           {dataportfolio.map((data, i) => {
//             return (
//               <div key={i} className="po_item">
//                 <img src={data.img} alt="" />
//                 <div className="content">
//                   <p>{data.desctiption}</p>
//                   {/* <a href={data.link}>view project</a> */}
//                 </div>
//               </div>
//             );
//           })}
//         </div> */}