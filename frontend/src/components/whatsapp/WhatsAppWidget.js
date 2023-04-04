import React from 'react';

const WhatsAppWidget = () => {

  const handleToggle = (event) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute('data-target');
    const element = document.querySelector(target);
    if (element.classList.contains('expanded')) {
      element.classList.remove('expanded');
    } else {
      element.classList.add('expanded');
    }
  }

  return (
    <div>
      {/* Non-toggleable custom form */}
      <form id="billing-support" className="wa-widget-content" action="6289613866000" data-chat="billing-support">
        <header className="chat-header">
          <img className="chat-admin-picture" src="images/user.png" alt="Admin"/>
          <div className="chat-admin-details">
            <h4>John Doe</h4>
            <p><small>Billing Support</small></p>
          </div>
        </header>
        <div className="chat-content">
          <div className="chat-item">
            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <p>Minima tenetur eaque fugit unde odit nobis, maxime cupiditate error beatae.</p>
              <p>Dicta provident nam doloribus porro facilis perspiciatis quisquam ratione recusandae totam.</p>
            </div>
          </div>
        </div>
        <div className="chat-form">
          <input data-message="name" type="text" placeholder="Your name" required />
          <input data-message="email" type="email" placeholder="E-Mail" />
          <input data-message="message" type="text" placeholder="Your message" required />
          <button className="chat-send" type="submit" data-toggle="wa-send"><strong>Send</strong></button>
        </div>
      </form>

      {/* Toggleable custom form */}
      <style>
        {`
          .whatsapp-widget {
            max-width: 480px;
            display: none;
          }
          .whatsapp-widget.expanded {
            display: block;
          }
        `}
      </style>

      <button className="button" data-toggle="wa-chat" data-target="#another-support" onClick={handleToggle}>Toggle</button>

      <form id="another-support" className="whatsapp-widget" action="6289613866000" data-chat="another-support">
        <div className="wa-widget-content chat-form">
          <input data-message="name" type="text" placeholder="Your name" required />
          <input data-message="message" type="text" placeholder="Your message" required />
          <button className="chat-send" type="submit" data-toggle="wa-send"><strong>Open Chat</strong></button>
        </div>
      </form>

      {/* Built in form */}
      <form id="general-support" className="wa-widget" action="6289613866111" data-chat="general-support"></form>
    </div>
  );
};

export default WhatsAppWidget;
