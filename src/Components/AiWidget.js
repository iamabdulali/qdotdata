import React, { useEffect, useState } from "react";

const AiWidget = () => {
  const baseUrl = "http://localhost:3001";
  const aiName = "penny";
  const templateName = "timdplr-gmail-com";
  const isLeft = true;

  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  const toggleVisibility = () => setVisible(!visible);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);


  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const containerStyle = {
    position: "fixed",
    zIndex: "1000",
    // left: visible ? (isLeft ? '10px' : 'auto') : '-10000px',
    // right: visible ? (isLeft ? 'auto' : '10px') : 'auto',
    // bottom: visible ? '40px' : '-10000px',
    // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    // transition: 'left 0.6s, right 0.6s, top 0.6s',
    bottom: "60px",
    left: "140px",
    width: "600px",
    transform: visible ? "scale(1)" : "scale(0)",
    transition: "transform 0.3s",
  };

  const mobileContainerStyle = {
    position: "fixed",
    zIndex: "1000",
    bottom: "100px",
    left: "50%",
    transform: 'translateX(-50%)',
    width: "90%",
    transform: visible ? "translateX(-50%) scale(1)" : "translateX(-50%) scale(0)",
    transition: "transform 0.3s",
  };

  const buttonStyle = {
    position: "fixed",
    // left: isLeft ? "20px" : "auto",
    // right: isLeft ? "auto" : "20px",
    left: '0',
    bottom: "20px",
    zIndex: "1000",
    border: "none",
    background: "none",
    outline: "none",
    // opacity: hover ? "0.8" : "1",
    transform: hover ? 'scale(1.1)' : 'scale(1)',
    // transition: "opacity 0.6s",
    transition: "transform 0.6s",
    width: '51px',
    cursor: 'pointer',
    // boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    borderRadius: '50%',
    marginLeft: '30px'
  };

  const imgStyle = {
    width: "100%",
    borderRadius: '50%',
    height: "auto",
    transition: "transform 0.3s",
  };



  const headingStyle = {
    margin: "0",
    padding: "0.6em 1.3em",
    background: "#1292ee",
    color: "#fff",
    borderTopLeftRadius: '0.6em',
    borderTopRightRadius: '0.6em',
  };

  const mobileHeadingStyle = {
    margin: "0",
    padding: "0.6em 0.5em",
    background: "#1292ee",
    color: "#fff",
    borderTopLeftRadius: '0.6em',
    borderTopRightRadius: '0.6em',
  };

  useEffect(() => {
    const iframe = document.getElementById("your-app-iframe");
    if (iframe) {
      iframe.src = `${baseUrl}/ai/${aiName}/${templateName}`;
    }
  }, [baseUrl, aiName, templateName]);

  return (
    <>
      <div style={isMobile ? mobileContainerStyle : containerStyle}>
        <div>
          <h3 style={isMobile ? mobileHeadingStyle : headingStyle}>
            AI {aiName}
          </h3>
        </div>
        <iframe
          id="your-app-iframe"
          style={{
            width: "100%",
            height: `${window.innerHeight * 0.5}px`,
            border: "none",
            borderBottomLeftRadius: '0.6em',
            borderBottomRightRadius: '0.6em',
          }}
          title="AI Widget"
        />
      </div>
      <div
        style={buttonStyle}
        onClick={toggleVisibility}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          style={imgStyle}
          src={
            visible
              ? `https://cdn.chatbot.com/widget/61f28451fdd7c5000728b4f9/DSjjJVtWgP_jxGWP.png`
              : `https://cdn.chatbot.com/widget/61f28451fdd7c5000728b4f9/DSjjJVtWgP_jxGWP.png`
          }
          alt="Open AI"
        />
      </div>
    </>
  );
};

export default AiWidget;
