// 'use strict';

/**
 * contact service
 */

// const { createCoreService } = require('@strapi/strapi').factories;

// module.exports = createCoreService('api::contact.contact');

"use strict";

const { createCoreService } = require("@strapi/strapi").factories;
const toEmail = "rohitbharti326452@gmail.com";
const welcome = "Welcome";

module.exports = createCoreService("api::contact.contact", {
  async create(data) {
    // Add required fields to the data object
    console.log(data);
    data.firstname = data.firstname || "";
    data.lastname = data.lastname || "";
    data.email = data.email || " ";
    data.message = data.message || "";
    const message = `
        Hi,
        
        You have received a new contact form submission from 
        ${data.firstname} ${data.lastname}. 
        
        Here are the details:
        
        Name: ${data.firstname} ${data.lastname}
        Email: ${data.email}
        Message: ${data.message}
        
        Thanks,
        Your Website Team
        `;
    const response = await strapi.entityService.create("api::contact.contact", {
      data,
    });
    const sendmailService = strapi.service("api::sendmail.sendmail");
    if (sendmailService) {
      sendmailService.send(
        welcome,
        toEmail,
        "New Contact Form Submission",
        message
      );
    } else {
      console.error("sendmail service is undefined");
    }

    return response;
  },
});
