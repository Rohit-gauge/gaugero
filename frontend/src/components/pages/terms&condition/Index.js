import React, { useEffect } from 'react';
import NavBar from '../../Home/Nav';
import logo from '../../../assets/images/gauge-logo-red.png';
import Footer from '../../Home/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="terms-main-wrap about-main-wrap lg:pb-16">
        <NavBar redLogo={logo} blackLogo={logo} />

        <div className="term-widget-container lg:pt-28 pt-16 container mx-auto  lg:px-28       px-4 lg:mb-6">
          <h2>Terms and Conditions</h2>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of Lalita Ventures‘s Website (Gauge.ro), located at D1075, 7th
            Floor, Tower D, Assetz 63 Degree East, Kodathi Village, Varthur
            Hobli, 1st Cross Rd., Bengaluru, Karnataka 560035, India
          </p>
          <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Lalita Ventures if you do not
            agree to take all of the terms and conditions stated on this page.
          </p>
          <p>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements: “Client”,
            “You” and “Your” refers to you, the person log on this website and
            compliant to the Company’s terms and conditions. “The Company”,
            “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”,
            “Parties”, or “Us”, refers to both the Client and ourselves. All
            terms refer to the offer, acceptance and consideration of payment
            necessary to undertake the process of our assistance to the Client
            in the most appropriate manner for the express purpose of meeting
            the Client’s needs in respect of provision of the Company’s stated
            services, in accordance with and subject to, prevailing law of
            Netherlands. Any use of the above terminology or other words in the
            singular, plural, capitalization and/or he/she or they, are taken as
            interchangeable and therefore as referring to same.
          </p>
          <h3>Cookies</h3>
          <p>
            We employ the use of cookies. By accessing Lalita Ventures, you
            agreed to use cookies in agreement with the Lalita Ventures‘s Privacy
            Policy.
          </p>
          <p>
            Most interactive websites use cookies to let us retrieve the user’s
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </p>
          <h3>License</h3>
          <p>
            Unless otherwise stated, Lalita Ventures and/or its licensors own
            the intellectual property rights for all material on Lalita Ventures.
            All intellectual property rights are reserved. You may access this
            from Lalita Ventures for your own personal use subjected to
            restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul>
            <li>
              
              <li className='para'>– Republish material from Lalita Ventures.</li>
                <li className='para'>
                  – Sell, rent or sub-license material from Lalita Ventures
                </li>
                <li className='para'>
                  – Reproduce, duplicate or copy material from Lalita Ventures
                </li>
                <li className='para'>
                – Redistribute content from Lalita Ventures, unless it is specifically made for redistribution.
                </li>
                </li>
              </ul>
                
     
      <p>
        Parts of this website offer an opportunity for users to post and
        exchange opinions and information in certain areas of the website.
        Lalita Ventures does not filter, edit, publish or review Comments
        prior to their presence on the website. Comments do not reflect the
        views and opinions of Lalita Ventures,its agents and/or affiliates.
        Comments reflect the views and opinions of the person who post their
        views and opinions. To the extent permitted by applicable laws,
        Lalita Ventures shall not be liable for the Comments or for any
        liability, damages or expenses caused and/or suffered as a result of
        any use of and/or posting of and/or appearance of the Comments on
        this website.
      </p>
      <p>
        Lalita Ventures reserves the right to monitor all Comments and to
        remove any Comments which can be considered inappropriate, offensive
        or causes breach of these Terms and Conditions.
      </p>
      <p>You warrant and represent that:</p>
      <ul>
        <li>
          <ul>
            <li className='para'>
              – You are entitled to post the Comments on our website and
              have all necessary licenses and consents to do so;
            </li>
            <li className='para'>
              – The Comments do not invade any intellectual property right,
              including without limitation copyright, patent or trademark
              of any third party;
            </li>
            <li className='para'>
              – The Comments do not contain any defamatory, libelous,
              offensive, indecent or otherwise unlawful material which is an
              invasion of privacy
            </li>
            <li className='para'>
              – The Comments will not be used to solicit or promote business
              or custom or present commercial activities or unlawful
              activity.
            </li>
          </ul>
        </li>
      </ul>
      <p>
        You hereby grant Lalita Ventures a non-exclusive license to use,
        reproduce, edit and authorize others to use, reproduce and edit any
        of your Comments in any and all forms, formats or media.
      </p>
    </div>
  </div>

  <Footer />
</>

);
};

export default Index;
