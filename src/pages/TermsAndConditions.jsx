import { Link } from 'react-router-dom'
import './TermsAndConditions.css'

function TermsAndConditions() {
    return (
        <div className="terms-page">
            <div className="terms-container">
                <h1 className="terms-main-title">Terms & Conditions</h1>

                <section className="terms-section">
                    <h2>Product T&C</h2>

                    <h3>1. Service Overview</h3>
                    <p>1.1 This service provides AI assisted content generation in the form of written articles designed to improve a company’s search engine visibility through AI SEO techniques.</p>
                    <p>1.2 The service is focused on informational and keyword based content and does not guarantee specific ranking positions on search engines or AI search platforms.</p>
                    <p>1.3 Content is generated using proprietary workflows combining artificial intelligence tools and human review processes where applicable.</p>

                    <h3>2. Package Scope and Deliverables</h3>
                    <p>2.1 Content structure may include headings, subheadings, bullet points, and summaries where appropriate.</p>
                    <p>2.2 The service does not include custom graphics, images, videos, or infographics unless stated otherwise.</p>

                    <h3>3. Client Responsibilities</h3>
                    <p>3.1 The client is responsible for providing accurate business information and any specific instructions prior to content generation.</p>
                    <p>3.2 The client confirms that all information provided does not infringe intellectual property rights or violate any applicable laws.</p>
                    <p>3.3 If the required DNS connection is not completed by the subscription start date, no articles will be generated. We shall not be responsible for delays or missed content generation resulting from failure to connect DNS on time.</p>

                    <h3>4. AI Generated Content Disclaimer</h3>
                    <p>4.1 Content is generated using artificial intelligence and may contain factual inaccuracies or outdated information.</p>
                    <p>4.2 The service provider does not guarantee factual correctness, completeness, or suitability for professional, legal, medical, or financial use.</p>
                    <p>4.3 The service provider is not responsible for any loss, damage, or liability arising from the use of the content.</p>

                    <h3>5. SEO and Performance Disclaimer</h3>
                    <p>5.1 Search engine algorithms and AI search platforms are constantly changing and are beyond the control of the service provider.</p>
                    <p>5.2 No guarantee is provided regarding:</p>
                    <ul>
                        <li>Lead generation</li>
                        <li>Conversion rates</li>
                    </ul>
                    <p>5.2.1 The service focuses on content creation only and does not constitute a full SEO service.</p>

                    <h3>6. Payment Reminders and Notifications</h3>
                    <p>6.1 In the event that a payment attempt is unsuccessful, a reminder notification will be sent to the customer within twenty-four (24) hours from the time of the failed payment.</p>

                    <h3>7. Payment Terms</h3>
                    <p>7.1 The RM99 fee is payable in full before work commences.</p>
                    <p>7.2 All payments are non refundable once content generation has started.</p>
                    <p>7.3 Prices are exclusive of applicable taxes unless stated otherwise.</p>
                    <p>7.4 The service provider reserves the right to revise pricing without prior notice for future purchases.</p>
                    <p>7.5 Charges will be automatically processed on the same date each month, based on the original subscription or signup date.</p>
                    <p>7.6 Upon successful payment by the customer, applicable charges will be initiated accordingly. If the required URL is not provided, the charges incurred will continue to apply.</p>
                    <p>7.7 If the required URL link is provided after the specified deadline, any resulting delay, issue, or inability to proceed shall be solely the responsibility of the client. We shall not be held liable for consequences arising from late submission.</p>
                    <p>7.8 All subscription fees are calculated from the day of subscription, regardless of usage level.</p>

                    <h3>8. URL Usage Limitation</h3>
                    <p>8.1 Each URL link may only be used once. Reuse or resubmission of the same URL link is not permitted per package under any circumstances.</p>

                    <h3>9. Customer Service Response</h3>
                    <p>9.1 Customer service inquiries will be acknowledged and responded to within two working days. A response constitutes an official reply to the inquiry and does not guarantee immediate resolution or completion of the requested matter.</p>

                    <h3>10. Refund and Cancellation Policy</h3>
                    <p>10.1 No refunds will be issued for completed or partially completed work.</p>
                    <p>10.2 Client initiated cancellations after work has begun are not eligible for refunds.</p>
                    <p>10.3 Your payment will be automatically charged at the start of each new subscription term for the fees applicable to that term, unless you cancel your subscription to our service at least 30 days before the end of the then-current subscription period.</p>

                    <h3>11. Content Management and Removal</h3>
                    <p>11.1 In the event of non-payment, all generated or published articles may be deleted after five days from the payment due date. We reserve the right to take such action without further notice.</p>

                    <h3>12. Limitation of Liability</h3>
                    <p>12.1 The service provider shall not be liable for any indirect, incidental, or consequential damages arising from the use of the service.</p>

                    <h3>13. Confidentiality</h3>
                    <p>13.1 All client information shared for the purpose of content generation will be treated as confidential.</p>
                    <p>13.2 Confidential information will not be disclosed to third parties except where required by law or for service delivery.</p>

                    <h3>14. Service Modifications</h3>
                    <p>14.1 The service provider reserves the right to modify, suspend, or discontinue the service at any time.</p>
                    <p>14.2 Changes to the terms will be effective upon publication on the service provider’s website or official communication channels.</p>

                    <h3>15. Governing Law</h3>
                    <p>15.1 These Terms and Conditions shall be governed by and interpreted in accordance with the laws of Malaysia.</p>
                    <p>15.2 Any disputes shall be subject to the exclusive jurisdiction of Malaysian courts.</p>

                    <h3>16. Reservation of Rights</h3>
                    <p>16.1 The Company reserves the right to amend, modify, suspend, or terminate any part of these Terms and Conditions, its services, features, pricing, or policies at any time, with or without prior notice, at its sole discretion.</p>
                    <p>16.2 We shall not be held responsible for any suspension, restriction, or banning of the client’s website by third-party platforms, service providers, or authorities. Any such action is outside our control and responsibility.</p>
                </section>

                <section className="terms-section">
                    <h2>Personal Data Privacy Terms &amp; Conditions</h2>

                    <h3>1. Introduction and Scope</h3>
                    <p>1.1 These Privacy Terms govern the collection, use, storage, disclosure, retention, protection, and processing of Personal Data in connection with your access to and use of our systems, products, services, websites, applications, and related offerings (collectively, the “Services”).</p>
                    <p>1.2 By accessing, registering for, using, or interacting with our Services, you acknowledge that you have read, understood, and agree to be bound by these Privacy Terms and consent to the collection and processing of your Personal Data in accordance with these Privacy Terms and applicable law.</p>

                    <h3>2. Definition of Personal Data</h3>
                    <p>2.1 “Personal Data” means any information relating to an identified or identifiable natural person, including but not limited to name, email address, telephone number, address, national identity number, payment information, device identifiers, IP address, and other data that can be directly or indirectly linked to an individual. Personal Data does not include anonymized or aggregated data that does not identify an individual.</p>

                    <h3>3. Personal Data Collection</h3>
                    <p>3.1 We collect Personal Data that you provide directly to us when you access or use our Services, including but not limited to when you:</p>
                    <ul>
                        <li>register an account or profile;</li>
                        <li>submit forms, requests, or inquiries;</li>
                        <li>engage with customer support;</li>
                        <li>make transactions, purchases, or payments;</li>
                        <li>participate in surveys, promotions, or feedback activities.</li>
                    </ul>
                    <p>3.2 We may also collect Personal Data automatically through your use of our Services (e.g., log files, cookies, device identifiers, usage data). The categories of Personal Data collected depend on your interactions with our Services and use of features.</p>

                    <h3>4. Purposes and Legal Basis for Processing Personal Data</h3>
                    <p>4.1 We process Personal Data for the following purposes:</p>
                    <ul>
                        <li>a. to provide, maintain, and operate the Services you request;</li>
                        <li>b. to verify your identity, set up and administer your account, and process transactions;</li>
                        <li>c. to communicate with you regarding your account, Services, and changes to policies;</li>
                        <li>d. to provide customer support and respond to your inquiries;</li>
                        <li>e. to send administrative notices, updates, and required legal notices;</li>
                        <li>f. for security, fraud prevention, and risk management;</li>
                        <li>g. for internal business purposes, including analytics, improvements, and service optimization;</li>
                        <li>h. for marketing or promotional purposes where you have consented, and in accordance with applicable law.</li>
                    </ul>
                    <p>4.2 Where required by applicable law, we will seek your explicit consent before collecting or processing your Sensitive Personal Data.</p>

                    <h3>5. Disclosure of Personal Data</h3>
                    <p>5.1 We may disclose your Personal Data to:</p>
                    <ul>
                        <li>a. our affiliated companies and controlled subsidiaries;</li>
                        <li>b. service providers, partners, or vendors performing services on our behalf (e.g., payment processors, hosting providers);</li>
                        <li>c. professional advisors e.g., auditors, legal counsel;</li>
                        <li>d. government, law enforcement, regulatory authorities where required by law, legal process, or to protect our rights;</li>
                        <li>e. third parties in connection with corporate transactions such as mergers, acquisitions, or asset sales;</li>
                    </ul>
                    <p>5.2 We require such recipients to implement appropriate safeguards for your Personal Data and restrict its use to the purposes for which it was disclosed.</p>

                    <h3>6. Security and Retention</h3>
                    <p>6.1 We implement reasonable and appropriate administrative, technical, and physical safeguards to protect your Personal Data against unauthorized access, alteration, disclosure, or destruction.</p>
                    <p>6.2 We retain Personal Data only as long as necessary to fulfill the purposes outlined in these Privacy Terms or as required by applicable law, after which it will be securely deleted or anonymized.</p>

                    <h3>7. Changes to These Privacy Terms</h3>
                    <p>7.1 We reserve the right to amend or update these Privacy Terms from time to time to reflect changes in our practices, legal requirements, or technology. Revised Privacy Terms will be effective upon posting on our website or notification to you. Your continued use of the Services after such changes constitutes acceptance of the updated Privacy Terms.</p>
                </section>

                <section className="terms-section">
                    <h2>Acceptance of Terms</h2>
                    <ul>
                        <li>By purchasing or using the RM99 AI SEO Article Generation Service, the client acknowledges that they have read, understood, and agreed to these Terms and Conditions.</li>
                        <li>Continued use of the service constitutes ongoing acceptance of any updated terms.</li>
                    </ul>
                </section>

                <div className="terms-back-link">
                    <Link to="/">← Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditions
