import React from "react";
import "./App.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import eu from "./images/eu.png";

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <div
          style={{
            width: "85%",
            display: "flex",
            // background: "black",
            borderRadius: "10px",
            justifyContent: "center"
          }}
        >
          <div>
            <img src={eu} alt="wtf" className="img" />
          </div>

          <div
            style={{
              border: "2px solid",
              borderRadius: "0 10px 10px 10px",
              borderColor: "#566285",
              width: "75%",
              paddingLeft: "10px",
              paddingRight: "10px",
              display: "inline-block"
            }}
            className="text-div"
          >
            <h3 align="left">
              Gabriel Negrão Silva, 24 Anos, Campo Mourão - Pr.
            </h3>
            <div align="left" className="text-div">
              Atualmente estou cursando o último ano da faculdade de Bacharelado
              em Ciência da Computação pela Universidade Tecnológica Federal do
              Paraná no campus de Campo Mourão. Tenho como área de pesquisa em
              minha graduação a Mineração de Dados de contribuição com Software
              Livre utilizando uma base de dados obtidos do GitHub.
              <br />
              <br />
              Sou um profissional com fome de conhecimento e com habilidades em
              áreas distintas o que me torna um profissional com fácil adaptação
              a ambientes, tecnologias e equipes. Tenho como gosto pessoal
              trabalhar com Back-End, áreas que envolvem programação em baixo
              nível e sou entusiasta em Dispositivos Microcontrolados (Arduino,
              ESP8266).
            </div>
            <div className="text-div">
              <br />
              <br />
              <b>Portfólio</b>
              <hr color="#566285"></hr>
            </div>
            <div
              style={{
                display: "flex"
              }}
              className="text-div"
            >
              <div
                style={{
                  width: "33%"
                }}
              >
                <h4>Back-End</h4>
                <a
                  href="http://itsgnegrao-spring-boot.herokuapp.com/source"
                  style={{ color: "inherit" }}
                >
                  Java + Spring boot
                </a>
              </div>
              <div
                style={{
                  width: "33%"
                }}
              >
                <h4>Front-End</h4>
                <a
                  href="https://itsgnegrao-react-app.herokuapp.com/"
                  style={{ color: "inherit" }}
                >
                  Javascript + React
                </a>
              </div>
              <div
                style={{
                  width: "33%"
                }}
              >
                <h4>Images Docker</h4>
                <div>
                  <a
                    href="https://hub.docker.com/r/itsgnegrao/itsgnegrao-spring-boot"
                    style={{ color: "inherit" }}
                  >
                    Java + Spring boot
                  </a>
                </div>
                <span style={{ paddingTop: "5px", display: "block" }} />
                <div>
                  <a
                    href="https://hub.docker.com/r/itsgnegrao/itsgnegrao-react-app"
                    style={{ color: "inherit" }}
                  >
                    Javascript + React
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>

      <foorter className="App-footer">
        {/* <hr color="gray" width="100%"></hr> */}

        {/* Siga-me nas minhas redes sociais */}
        <div style={{ fontSize: "14px", paddingBottom: 2 }}>
          Entre em contato:
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "black",
              justifyContent: "center",
              alignItems: "center",
              display: "flex"
            }}
          >
            <a
              href="https://github.com/itsgnegrao"
              style={{ color: "inherit" }}
            >
              <GitHubIcon style={{ fontSize: 40 }} />
            </a>
          </div>

          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#0e76a8",
              justifyContent: "center",
              alignItems: "center",
              display: "flex"
            }}
          >
            <a
              href="https://linkedin.com/in/itsgnegrao"
              style={{ color: "inherit" }}
            >
              <LinkedInIcon style={{ fontSize: 40 }} />
            </a>
          </div>

          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#DD2A7B",
              justifyContent: "center",
              alignItems: "center",
              display: "flex"
            }}
          >
            <a
              href="https://instagram.com/itsg_negrao"
              style={{ color: "inherit" }}
            >
              <InstagramIcon style={{ fontSize: 40 }} />
            </a>
          </div>

          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#1DA1F2",
              justifyContent: "center",
              alignItems: "center",
              display: "flex"
            }}
          >
            <a
              href="https://twitter.com/itsg_negrao"
              style={{ color: "inherit" }}
            >
              <TwitterIcon style={{ fontSize: 40 }} />
            </a>
          </div>
        </div>
        <div style={{ fontSize: "12px", paddingTop: 25 }}>
          ©2020 All rights reserved. Desenvolvido por Gabriel Negrão Silva.
        </div>
      </foorter>
    </div>
  );
}

export default App;
