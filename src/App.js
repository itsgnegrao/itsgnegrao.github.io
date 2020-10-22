import React from "react";
import "./App.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import eu from "./images/eu.png";

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <div
          style={{
            width: "90%",
            height: "500px",
            display: "flex",
            // background: "black",
            borderRadius: "20px"
          }}
        >
          <div
            style={{
              width: "25%",
              height: "60%"
              // background: "green"
            }}
          >
            <img
              src={eu}
              alt="wtf"
              width="100%"
              style={{
                borderRadius: "20px 0 0 20px"
              }}
            />
          </div>

          <div
            style={{
              // background: "gray",
              border: "2px solid",
              borderColor: "#566285",
              width: "75%",
              borderRadius: "0 20px 20px 20px",
              paddingLeft: "10px"
            }}
          >
            <h5 align="left">Gabriel Negrão Silva, 24 Anos, Solteiro.</h5>
            <div align="left">TEste3</div>
            <div align="left">TEste4</div>
          </div>
        </div>
      </body>

      <foorter className="App-footer">
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
            <GitHubIcon style={{ fontSize: 40 }} />
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
            <LinkedInIcon style={{ fontSize: 40 }} />
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
            <InstagramIcon style={{ fontSize: 40 }} />
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
            <TwitterIcon style={{ fontSize: 40 }} />
          </div>
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
            <AlternateEmailIcon style={{ fontSize: 40 }} />
          </div>
        </div>
        <div style={{ fontSize: "12px", paddingTop: 25 }}>
          Desenvolvido por Gabriel Negrão Silva.
        </div>
      </foorter>
    </div>
  );
}

export default App;
