import React from 'react';
import './index.css';
import PageLayout from '../../layout/PageLayout';
import { Row, Col, Typography, Button, Image, Layout } from 'antd';
import HumainPic from '../../assests/images/A-Human-Sitting.png';
import { Link } from 'react-router-dom';
const { Title, Text } = Typography;

const TermsConditions = () => {
  return (
    <>
      <PageLayout>
        <Layout className="site-layout-background">
          <div className="term_condition_outer">
            <div className="term_condition_con">
              <Title level={2}>We’re here to help.</Title>
              <Row>
                <Col span={24}>
                  <Text className="term_textinfo">
                    <span>1. ELECTRONIC COMMUNICATIONS</span>
                    When you use any Amazon Service or send e-mails to us, you are communicating
                    with us electronically. We will communicate with you electronically in a variety
                    of ways, such as by e-mail, text, in-app push notices or by posting e-mail
                    messages or communications on the website or through the other Amazon Services,
                    such as our Message Centre. For contractual purposes, you agree that all
                    agreements, notices, disclosures and other communications that we provide you
                    electronically satisfy any legal requirement that such communications be in
                    writing, unless mandatory applicable laws specifically require a different form
                    of communication.
                  </Text>
                  <Text className="term_textinfo">
                    <span>2. RECOMMENDATIONS AND PERSONALISATION</span>
                    As part of the Amazon Services, we will recommend features, products, and
                    services, including third part ads that might be of interest to you, identify
                    your preferences, and personalise your experience
                  </Text>
                  <Text className="term_textinfo">
                    <span>3. COPYRIGHT, AUTHORS’ RIGHTS AND DATABASE RIGHTS</span>
                    All content included in or made available through any Amazon Service, such as
                    text, graphics, logos, button icons, images, audio clips, digital downloads and
                    data compilations is the property of Amazon or its content suppliers and is
                    protected by Luxembourg and international copyright, authors’ rights and
                    database right laws. The compilation of all content included in or made
                    available through any Amazon Service is the exclusive property of Amazon and is
                    protected by Luxembourg and international copyright and database right laws.
                  </Text>
                  <Text className="term_textinfo">
                    You may not extract and/or re-utilise parts of the content of any Amazon Service
                    without our express written consent. In particular, you may not utilise any data
                    mining, robots, or similar data gathering and extraction tools to extract
                    (whether once or many times) for re-utilisation any substantial parts of the
                    content of any Amazon Service, without our express written consent. You may also
                    not create and/or publish your own database that features substantial parts of
                    any Amazon Service (e.g. our prices and product listings) without our express
                    written consent.
                  </Text>
                  <Text className="term_textinfo">
                    <span>4. TRADEMARKS</span>
                    Click here to see a non-exhaustive list of Amazon trademarks. In addition
                    graphics, logos, page headers, button icons, scripts, and service names included
                    in or made available through any Amazon Service are trademarks or trade dress of
                    Amazon. Amazon’s trademarks and trade dress may not be used in connection with
                    any product or service that is not Amazon’s, in any manner that is likely to
                    cause confusion among customers or in any manner that disparages or discredits
                    Amazon. All other trademarks not owned by Amazon that appear in any Amazon
                    Service are the property of their respective owners, who may or may not be
                    affiliated with, connected to, or sponsored by Amazon.
                  </Text>
                  <Text className="term_textinfo">
                    <span>5. PATENTS</span>
                    One or more patents owned by Amazon apply to the Amazon Services and to the
                    features and services accessible via the Amazon Services. Portions of the Amazon
                    Services operate under license of one or more patents. Click here to see a
                    non-exhaustive list of applicable Amazon patents and applicable licensed patents
                  </Text>
                  <Text className="term_textinfo">
                    <span>6. LICENCE AND ACCESS</span>
                    Subject to your compliance with these Conditions of Use and applicable Service
                    Terms and your payment of any applicable fees, Amazon or its content providers
                    grant you a limited, non-exclusive, non-transferable, non-sublicensable licence
                    to access and make personal and non-commercial use of the Amazon Services. This
                    licence does not include any resale or commercial use of any Amazon Service or
                    its contents; any collection and use of any product listings, descriptions, or
                    prices; any derivative use of any Amazon Service or its contents; any
                    downloading or copying of account information for the benefit of another
                    merchant; or any use of data mining, robots, or similar data gathering and
                    extraction tools.
                  </Text>
                  <Text className="term_textinfo">
                    All rights not expressly granted to you in these Conditions of Use or any
                    Service Terms are reserved and retained by Amazon or its licensors, suppliers,
                    publishers, rights holders, or other content providers. No Amazon Service, nor
                    any part of any Amazon Service, may be reproduced, duplicated, copied, sold,
                    resold, visited, or otherwise exploited for any commercial purpose without our
                    express written consent. You may not frame or use framing techniques to enclose
                    any trademark, logo or other proprietary information (including images, text,
                    page layout, or form) of Amazon without our express written consent. You may not
                    use any meta tags or any other “hidden text” utilising Amazon’s names or
                    trademarks without our express written consent.
                  </Text>
                  <Text className="term_textinfo">
                    You may not misuse the Amazon Services. You may use the Amazon Services only as
                    permitted by law. The licences granted by Amazon terminate if you do not comply
                    with these Conditions of Use or any Service Terms.
                  </Text>
                  <Text className="term_textinfo">
                    <span>7. YOUR ACCOUNT</span>
                    You may need your own Amazon account to use certain Amazon Services, and you may
                    be required to be logged into the account and have a valid payment method
                    associated with it.
                  </Text>
                  <Text className="term_textinfo">
                    <span></span>
                    If there is a problem charging your selected payment method we may charge any
                    other valid payment method associated with your account. Click here to manage
                    your payment options.
                  </Text>
                  <Text className="term_textinfo">
                    If you use any Amazon Service you are responsible for maintaining the
                    confidentiality of your account and password and for restricting access to your
                    computer, and to the extent permitted by applicable law you agree to accept
                    responsibility for all activities that occur under your account or password. You
                    should take all necessary steps to ensure that the password is kept confidential
                    and secure and should inform us immediately if you have any reason to believe
                    that your password has become known to anyone else, or if the password is being,
                    or is likely to be used in an unauthorised manner. You are responsible for
                    ensuring that the details you provide us with are correct and complete, and for
                    informing us of any changes to the information you have provided. You can access
                    your information in the Your Account section of the website. Please see our
                    Protecting Your Privacy Help Page to access your personal information.
                  </Text>
                  <Text className="term_textinfo">
                    You must not use any Amazon Service: (i) in any way that causes, or is likely to
                    cause, any Amazon Service, or any access to it to be interrupted, damaged or
                    impaired in any way, or (ii) for fraudulent purposes, or in connection with a
                    criminal offence or other unlawful activity, or (iii) to cause annoyance,
                    inconvenience or anxiety.
                  </Text>
                  <Text className="term_textinfo">
                    We reserve the right to refuse any Amazon Services or terminate accounts if your
                    behaviour gives justified reason to do so. This will in particular be the case
                    if you are in breach of applicable laws, applicable contractual provisions, our
                    guidelines or our policies, which are all accessible on the website.
                    Notwithstanding any such limitation or termination, you will continue to have
                    access to content and services purchased by you up to that point.
                  </Text>
                  <Text className="term_textinfo">
                    <span>8. REVIEWS, COMMENTS, COMMUNICATIONS AND OTHER CONTENT</span>
                    Visitors may post reviews, comments and other content; send e-cards and other
                    communications; and submit suggestions, ideas, comments, questions or other
                    information, as long as the content is not illegal, obscene, abusive,
                    threatening, defamatory, invasive of privacy, infringing of intellectual
                    property rights, or otherwise injurious to third parties or objectionable and
                    does not consist of or contain software viruses, political campaigning,
                    commercial solicitation, chain letters, mass mailings or any form of "spam". You
                    may not use a false e-mail address, impersonate any person or entity, or
                    otherwise mislead as to the origin of a card or other content. We reserve the
                    right (but not, in the absence of a valid notice form, the obligation) to remove
                    or edit such content. If you believe that any content on or advertised for sale
                    on any Amazon Service contains a defamatory statement, or that your intellectual
                    property rights are being infringed by an item or information on any Amazon
                    Service, please notify us by completing and submitting the appropriate notice
                    form and we will respond.
                  </Text>
                  <Text className="term_textinfo">
                    If you post customer reviews, comments, customer questions or answers, or other
                    content generated by you for display on the website (including any images, video
                    or audio, all together "content", you grant Amazon (a) a non-exclusive,
                    royalty-free licence to use, reproduce, publish, make available, translate and
                    modify such content throughout the world (including the right to sublicense
                    these rights to third parties) and (b) the right to use the name that you submit
                    in connection with such content. No moral rights are transferred by this
                    provision.
                  </Text>
                  <Text className="term_textinfo">
                    You may delete your content from public view or, where such functionality is
                    offered, change settings so that it is only shown to people to whom you grant
                    access.
                  </Text>
                  <Text className="term_textinfo">
                    You represent and warrant that you own or otherwise control all of the rights to
                    the content that you post; that, as at the date that the content or material is
                    posted: (i) the content and material is accurate; and (ii) use of the content
                    and material you supply does not breach any applicable policies or guidelines
                    and will not cause injury to any person or entity (including that the content or
                    material is not defamatory). You agree to indemnify Amazon for all claims
                    brought by a third party against Amazon arising out of or in connection with the
                    content and material you supply except to the extent that any liability arises
                    from our failure to properly remove the content when it is notified of the
                    illegal nature of the content (Notice Form) arising out of or on the grounds of,
                    or originating from the content that you have communicated to us. By deleting
                    content from public view, you withdraw your license for Amazon to publish and
                    make available that content publicly.
                  </Text>
                  <Text className="term_textinfo">
                    <span>9. INTELLECTUAL PROPERTY CLAIMS</span>
                    Amazon respects the intellectual property of others. If you believe that your
                    intellectual property rights have been used in a way that gives rise to concerns
                    of infringement, please follow our Notice and Procedure for Making Claims of
                    Right Infringements.
                  </Text>
                </Col>
              </Row>
            </div>
          </div>
        </Layout>
      </PageLayout>
    </>
  );
};
export default TermsConditions;
