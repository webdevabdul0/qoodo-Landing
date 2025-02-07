import Sidebar from "./Sidebar";

import { useContext } from "react";

const Infoeng = () => {
  const headStyle = `text-[#4A60FF] text-[30px] sm:text-[48px] sm:text-left text-center font-bold`;
  const paraStyle = `text-white break-words  text-base sm:text-xl font-normal`;
  const containerStyle = `flex justify-start items-center  sm:items-start flex-col gap-3`;

  return (
    <div className="wrapper  mt-[160px]  mx-3 sm:mx-10 md:mx-[100px]">
      <div className="contain xl:flex-row flex-col-reverse flex justify-between items-start gap-[60px]">
        <div className="flex flex-col gap-[20px] justify-start items-start w-full">
          <h2 className="gr-text font-bold text-center sm:text-left text-[35px] sm:text-[48px]">
            Terms of Service
          </h2>
          <h4 className="text-[#FF866D] font-bold text-lg sm:text-2xl">
            Last update date: 29.08.2023
          </h4>

          <div id="Introduction" className={containerStyle}>
            <h3 className={headStyle}>Introduction</h3>
            <p className={paraStyle}>
              These Terms and Conditions (hereinafter: "Terms") govern the use
              of services owned and operated by Qoodo (the "Company", "we", "us"
              or "our"), including: <br />
              <br />⦁ Our Websites:
              <br />• Qoodo.io
              <br />• Naplozz.io
              <br />• Naplózz.hu
              <br />
              <br />⦁ Our Web Applications:
              <br />• app.qoodo.io
              <br />• app.naplozz.io
              <br />• app.naplozz.hu
              <br />
              <br />⦁ Our Mobile Applications:
              <br />• Qoodo mobile application (on iOS and Android platforms)
              <br />• Naplózz mobile application (on iOS and Android platforms)
              <br />
              <br />
              (hereinafter collectively: "Services")
              <br />
              <br />
              These Terms provide important information regarding your legal
              rights, remedies, and obligations. We recommend that you carefully
              read these Terms before using the Services.
            </p>
          </div>

          <div
            id="Privacy Policy
"
            className={containerStyle}
          >
            <h3 className={headStyle}>Privacy Policy</h3>
            <p className={paraStyle}>
              Our Privacy Policy is available on a separate page. Our Privacy
              Policy explains to you how we process information about you. You
              shall understand that through your use of the website you
              acknowledge that the processing of this information shall be
              undertaken in accordance with the Privacy Policy.
            </p>
          </div>

          <div id="Your Account" className={containerStyle}>
            <h3 className={headStyle}>Your Account</h3>
            <p className={paraStyle}>
              When using the website, you shall be responsible for ensuring the
              confidentiality of your account, password and other credentials
              and for secure access to your device. You shall not assign your
              account to anyone. The Company is not responsible for unauthorized
              access to youraccount that results from misappropriation or theft
              of your account. The Company may refuse or cancel service,
              terminate your account, and remove or edit content. <br />
              <br />⦁ The Company does not knowingly collect personal data from
              persons under the age of 16 (sixteen). If you are under 16
              (sixteen) years old, you may not use the website and may not enter
              into the Terms under any circumstances.
            </p>
          </div>

          <div id="Services" className={containerStyle}>
            <h3 className={headStyle}>Services</h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ The website allows you to use Services available on the
              website. You shall not use the services for any illegal aims.
              <br />
              <br />
              ⦁ We may, at our sole discretion, set fees for using the website
              for you. All prices are published separately on relevant pages on
              the website. We may, at our sole discretion, at any time change
              any fees.
              <br />
              <br />
              ⦁ We may use certified payment systems, which also may have their
              commissions. Such commissions may be implied on you when you
              choose a particular payment system. Detailed information about
              commissions of such payment systems may be found on their
              websites. <br />
              <br />
            </p>
          </div>

          <div id="Third Party Services" className={containerStyle}>
            <h3 className={headStyle}>Third Party Services</h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ The website may include links to other websites,
              applications, and platforms (hereinafter the "Linked Sites").
              <br />
              <br />
              ⦁ The Company does not control the Linked Sites, and shall not be
              responsible for the content and other materials of the Linked
              Sites. The Company makes these links available to you for
              providing the functionality or services on the website.
              <br />
              <br />
            </p>
          </div>

          <div
            id="Prohibited Uses and Intellectual Property"
            className={containerStyle}
          >
            <h3 className={headStyle}>
              Prohibited Uses and Intellectual Property
            </h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ The Company grants you a non-transferable, non-exclusive,
              revocable license to access and use the website from one device in
              accordance with the Terms. You shall not use the website for
              unlawful or prohibited purposes. You may not use the website in a
              way that may disable, damage, or interfere in the website.
              <br />
              <br />
              ⦁ All content present on the website includes text, code,
              graphics, logos, images, compilation, software used on the website
              (hereinafter and hereinbefore the "Content"). The Content is the
              property of the Company or its contractors and protected by
              intellectual property laws that protect such rights. You agree to
              use all copyright and other proprietary notices or restrictions
              contained in the Content and you are prohibited from changing the
              Content. <br />
              <br /> You may not publish, transmit, modify, reverse engineer,
              participate in the transfer, or create and sell derivative works,
              or in any way use any of the Content. Your enjoyment of the
              website shall not entitle you to make any illegal and disallowed
              use of the Content, and in particular you shall not change
              proprietary rights or notices in the Content. You shall use the
              Content only for your personal and non-commercial use. The Company
              does not grant you any licenses to the intellectual property of
              the Company.
            </p>
          </div>

          <div id="The Company Materials" className={containerStyle}>
            <h3 className={headStyle}>The Company Materials</h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ By posting, uploading, inputting, providing or submitting
              your Content you are granting the Company to use your Content in
              connection with the operation of Company's business including, but
              not limited to, the rights to transmit, publicly display,
              distribute, publicly perform, copy, reproduce, and translate your
              Content; and to publish your name in connection with your Content.
              <br />
              <br />
              ⦁ No compensation shall be paid with regard to the use of your
              Content. The Company shall have no obligation to publish or enjoy
              any Content you may send us and may remove your Content at any
              time.
              <br />
              <br />
              ⦁ By posting, uploading, inputting, providing or submitting your
              Content you warrant and represent that you own all of the rights
              to your Content. <br />
              <br />
            </p>
          </div>

          <div
            id="Disclaimer of Certain Liabilities"
            className={containerStyle}
          >
            <h3 className={headStyle}>Disclaimer of Certain Liabilities</h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ The information available via the website may include
              typographical errors or inaccuracies. The Company shall not be
              liable for these inaccuracies and errors. <br />
              <br />
              ⦁ The Company makes no representations about the availability,
              accuracy, reliability, suitability, and timeliness of the Content
              contained on and services available on the website. To the maximum
              extent allowed by the applicable law, all such Content and
              services are provided on the "as is" basis. The Company disclaims
              all warranties and conditions regarding this Content and services,
              including warranties and provisions of merchantability, fitness
              for a certain purpose. <br />
              <br />
              ⦁ To the maximum extent permitted by the applicable law, in no
              event shall the Company be liable for any direct, indirect,
              incidental, consequential, special, punitive damages including,
              but not limited to, damages for loss of enjoyment, data or
              profits, in the connection with the enjoyment or execution of the
              website in the context of the inability or delay to enjoy the
              website or its services, or for any Content of the website, or
              otherwise arising out of the enjoyment of the website, based on
              contract and non-contract liability or other reason. <br />
              <br /> <br />
              <br />
              If the exclusion or limitation of liability for damages, whether
              consequential or incidental, are prohibited in a particular case,
              the exclusion or limitation of liability shall not apply to you.{" "}
              <br />
              <br />
            </p>
          </div>

          <div id="Earnings Disclaimer" className={containerStyle}>
            <h3 className={headStyle}>Earnings Disclaimer</h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ While we make every effort to ensure that we accurately
              represent all the products and services reviewed on this website,
              it should be noted that Qoodo and its advertisers / sponsors have
              explicitly stated that the NAP Token (hereinafter and hereinbefore
              the "token"). has no earnings intention associated with it nor it
              is meant to be used as such a tool. The token will give the buyers
              the opportunity to take part in multiple enterprises that are
              clearly listed on our whitepaper, and that is where its utility
              ends.
              <br />
              <br />⦁ The use of our information, products and services should
              be based on your own due diligence and you agree that Nap Token
              and the advertisers / sponsors of this website are not liable for
              any success or failure of your business that is directly or
              indirectly related to the purchase and use of our information,
              products and services reviewed or advertised on this website.
              <br />
              <br />
            </p>
          </div>

          <div id="Volatility Risks" className={containerStyle}>
            <h3 className={headStyle}>Volatility Risks</h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ User acknowledges that cryptocurrencies, blockchain
              tokens, and other digital assets are extremely volatile due to
              many factors including but not limited to adoption, demand,
              technology, security, and global economic factors.
              <br />
              <br />
              ⦁ User acknowledges that the price of our token can change rapidly
              in a very short time, due to factors including but not limited to
              market conditions, global political conditions, economic trends,
              technological advancements, regulatory factors, and adaptability
              of new technologies.
              <br />
              <br />
              ⦁ User acknowledges that such volatility could potentially expose
              the user to significant losses. User shall thus make sure to
              consider all risk factors, including their financial condition and
              risk tolerance levels, before participating in any transactions.
              <br />
              <br />
              ⦁ We are not responsible for any loss that user might incur as a
              result of such volatility and user agrees to not hold Company
              liable for any financial damages or losses.
              <br />
              <br />
              ⦁ It is solely the user’s responsibility to determine whether the
              potential benefits outweigh the inherent risks associated with the
              purchase, holding, and/or sale of our token. Users are highly
              advised to consult with the appropriate legal, financial, and tax
              advisors before participating in any transactions.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              Qoodo makes no representation and disclaims any and all liability
              as to the suitability of the tokens for any particular user or any
              user’s financial situation, and each user shall be solely liable
              for any decision to purchase, hold, or sell tokens based on such
              user’s own judgment and research. <br />
              <br />
            </p>
          </div>

          <div id="Indenification" className={containerStyle}>
            <h3 className={headStyle}>Indenification</h3>
            <p className={paraStyle}>
              You agree to indemnify, defend and hold harmless the Company, its
              managers, directors, employees, agents, and third parties, for any
              costs, losses, expenses (including attorneys' fees), liabilities
              regarding or arising out of your enjoyment of or inability to
              enjoy the website or its services and Company’s services and
              products, Userr violation of the Terms or your violation of any
              rights of third parties, or your violation of the applicable law.
              The Company may assume the exclusive defense and you shall
              cooperate with the Company in asserting any available defenses.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              ⦁ Termination and Access Restriction
              <br />
              <br />
              ⦁ The Company may terminate your access and account to the website
              and its related services or any part at any time, without notice,
              in case of your violation of the Terms.
              <br />
              <br />
              Compliance Responsibility Clause
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              ⦁ Compliance Responsibility
              <br />
              <br />
              ⦁ The User is solely responsible for their compliance with all
              applicable laws, regulations, and rules, including, but not
              limited to, those governing cryptocurrency, blockchain, data
              protection, privacy, taxation, and anti-money laundering.
              <br />
              <br />
              ⦁ Qoodo is not responsible for auditing or ensuring User’s
              compliance with laws, regulations, and rules, and disclaims all
              liability or responsibility in that regard.
              <br />
              <br />
              ⦁ In the event that the User fails to comply with any relevant
              laws, regulations, and rules, and a fine, penalty, or other
              liability is imposed, the User will be solely responsible for
              paying such fine or penalty, and for fulfilling any other
              liability.
              <br />
              <br />
              ⦁ The User agrees to indemnify and hold Qoodo harmless from any
              claims, demands, actions, damages, losses, costs or expenses,
              including without limitation, legal and accounting fees, arising
              out of or in connection with the User's non-compliance.
              <br />
              <br />
              ⦁ Users are advised to seek independent legal advice to ensure
              their operations comply with all applicable laws, regulations, and
              rules. Qoodo does not provide any legal advice regarding
              compliance issues. <br />
              <br />
            </p>
          </div>

          <div
            id="General Clauses
"
            className={containerStyle}
          >
            <h3 className={headStyle}>General Clauses</h3>
            <p className={paraStyle}>
              <br />
              <br /> ⦁ The governing law of the Terms shall be the substantive
              laws of the country where the Company is set up, except the
              conflict of laws rules. You shall not use the website in
              jurisdictions that do not give effect to all provisions of the
              Terms.
              <br />
              <br />⦁ No joint venture, partnership, employment, or agency
              relationship shall be implied between you and the Company as a
              result of the Terms or use of the website.
              <br />
              <br />⦁ Nothing in the Terms shall be a derogation of the
              Company's right to comply with governmental, court, police, and
              law enforcement requests or requirements regarding your enjoyment
              of the website.
              <br />
              <br />⦁ If any part of the Terms is determined to be void or
              unenforceable in accordance with applicable law then the void or
              unenforceable clauses will be deemed superseded by valid and
              enforceable clauses shall be similar to the original version of
              the Terms and other parts and sections of the Terms shall be
              applicable to you and the Company.
              <br />
              <br />⦁ The Terms constitute the entire agreement between you and
              the Company regarding the enjoyment of the website and the Terms
              supersede all prior or communications and offers, whether
              electronic, oral or written, between you and the Company.
              <br />
              <br />⦁ The Company and its affiliates shall not be liable for a
              failure or delay to fulfill its obligations where the failure or
              delay results from any cause beyond Company's reasonable control,
              including technical failures, natural disasters, blockages,
              embargoes, riots, acts, regulation, legislation, or orders of
              government, terror acts, war, or any other force outside of
              Company's control.
              <br />
              <br />⦁ In case of controversies, demands, claims, disputes, or
              causes of action between the Company and you relating to the
              website or other related issues, or the Terms, you and the Company
              agree to attempt to resolve such controversies, demands, claims,
              disputes, or causes of action by good faith negotiation, and in
              case of failure of such negotiation, exclusively through the
              courts of the country where the Company is set up.
            </p>
          </div>

          <div id="Complaints" className={containerStyle}>
            <h3 className={headStyle}>Complaints</h3>
            <p className={paraStyle}>
              We are committed to resolve any complaints about our collection or
              use of your personal data. If you would like to make a complaint
              regarding this Terms or our practices in relation to your personal
              data, please contact us through our website. We will reply to your
              complaint as soon as we can and in any event, within 30 days. We
              hope to resolve any complaint brought to our attention, however if
              you feel that your complaint has not been adequately resolved, you
              reserve the right to contact your local data protection
              supervisory authority.
            </p>
          </div>

          <div
            id="Contact Information
"
            className={containerStyle}
          >
            <h3 className={headStyle}>Contact Information</h3>
            <p className={paraStyle}>
              We welcome your comments or questions about our Terms. You may
              contact us through the contact information available on our
              website.
            </p>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Infoeng;
