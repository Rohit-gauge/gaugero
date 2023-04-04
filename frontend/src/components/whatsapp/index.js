import React, { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [show, setShow] = useState(false);

  function dfToggle() {
    setShow(!show);
  }
  function closeContentBox() {
    setShow(false);
  }

  return (
    <>
      <div className={`df-btn ${show ? "df-open" : "df-closed"}`}>
        {show && (
          <div className="df-btn-content">
            <div className="df-content-topbar">
              <div className="df-brand-img">
                <img
                  src="https://gauge.ro/wp-content/uploads/2023/02/favicon-thumbnail-1.png"
                  height="100%"
                  width="100%"
                  style={{ borderRadius: "50%" }}
                  alt="img"
                />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div className="df-brand-name">Gauge.ro</div>
                <div className="df-brand-sub">online</div>
              </div>
              <div onClick={closeContentBox}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 492 492"
                  style={{ enableBackground: "new 0 0 492 492" }}
                  xmlSpace="preserve"
                  className="df-cancel-svg-icon"
                >
                  <g>
                    <g>
                      <path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872    c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872    c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052    L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116    c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952    c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116    c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="df-content-window">
              <div className="df-window-msg-cont">
                <div className="df-window-msg-cont-brandname">Gauge.ro</div>
                <pre className="df-window-msg">
                  Hi,{"\n"}How can I help you ?
                </pre>
              </div>
            </div>
            <div className="df-content-bottombar">
              <Link to="https://api.whatsapp.com/send/?phone=918872781919&amp;text=Hi%2C+I+want+to+know+the+latest+deal+on+Gauge+Smart+Water+Purifier.&amp;type=phone_number">
                <div className="df-bottombar-btn">Start chat</div>
              </Link>
              <div className="df-bottombar-branding">
                <img
                  draggable="false"
                  role="img"
                  className="df-emoji"
                  alt="âš¡"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGQUMzMyIgZD0iTTMyLjkzOCAxNS42NTFDMzIuNzkyIDE1LjI2IDMyLjQxOCAxNSAzMiAxNUgxOS45MjVMMjYuODkgMS40NThjLjIxOS0uNDI2LjEwNi0uOTQ3LS4yNzEtMS4yNDNDMjYuNDM3LjA3MSAyNi4yMTggMCAyNiAwYy0uMjMzIDAtLjQ2Ni4wODItLjY1My4yNDNMMTggNi41ODggMy4zNDcgMTkuMjQzYy0uMzE2LjI3My0uNDMuNzE0LS4yODQgMS4xMDVTMy41ODIgMjEgNCAyMWgxMi4wNzVMOS4xMSAzNC41NDJjLS4yMTkuNDI2LS4xMDYuOTQ3LjI3MSAxLjI0My4xODIuMTQ0LjQwMS4yMTUuNjE5LjIxNS4yMzMgMCAuNDY2LS4wODIuNjUzLS4yNDNMMTggMjkuNDEybDE0LjY1My0xMi42NTVjLjMxNy0uMjczLjQzLS43MTQuMjg1LTEuMTA2eiIvPjwvc3ZnPg=="
                />
                by
                <a href="https://aisensy.com" target="_blank">
                  {" "}
                  <i>AiSensy</i>{" "}
                </a>
              </div>
            </div>
          </div>
        )}
        <button className="df-btn-text" onClick={dfToggle}>
          {show ? (
            <svg
              className="df-svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
            >
              <path
                d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                fillRule="evenodd"
              />
            </svg>
          ) : (
            <div className="flex justify-center items-center">
              <svg
                className="df-svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
              >
                <path
                  d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                  fillRule="evenodd"
                />
                Chat
              </svg>
              <p className="text-xl pb-1"> chat</p>
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default Index;
