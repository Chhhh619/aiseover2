import { useState } from 'react'
import './FAQ.css'

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: 'What is AI SEO and how is it different from traditional SEO?',
            answer: 'AI SEO optimizes your content to appear in AI-powered search results like ChatGPT, Perplexity, and Google AI Overviews. While traditional SEO focuses on ranking in search results, AI SEO ensures your content is featured in AI summaries and recommendations where users increasingly find answers.'
        },
        {
            question: 'How long does it take to see results?',
            answer: 'Most businesses start seeing improvements in AI visibility within 4-8 weeks. However, building strong authority with AI platforms is an ongoing process. The content we create continues to build your presence over time.'
        },
        {
            question: 'Do I need to be technical to use CariSEO?',
            answer: 'No. You don’t need to be technical. We provide step by step instructions to connect your website to our article system. Once connected, articles will be published automatically. If you need help with the setup, our team can assist you or work with your developer.'
        },
        {
            question: 'What are the requirements for using CariSEO?',
            answer: 'Follow the step-by-step instructions to link your domain and enable automatic article generation.'
        },
        {
            question: 'What can I expect from AI search optimization?',
            answer: 'AI search optimization focuses on making your website content more discoverable and relevant in AI-powered search results. By structuring content with EEAT principles (Expertise, Experience, Authoritativeness, and Trustworthiness), your site builds credibility that AI systems can recognize. This strong foundation increases the chances of your content being surfaced and referenced across both search engines and AI-driven platforms.'
        },
        {
            question: 'Is there a guarantee on the results from AI search optimization?',
            answer: 'Due to the dynamic nature of AI and its personalized search results, it is not possible to guarantee specific outcomes at this stage. Our goal is to prepare your website with the best practices and strategies to adapt to these changes, positioning your brand for long-term visibility and search success.'
        },
        {
            question: 'Can AI replace human SEO experts?',
            answer: 'No. AI is a powerful tool, but it lacks the strategic thinking, creativity, and ethical judgment of a human expert. The best results come from a synergy of human strategy guiding AI execution.'
        },
        {
            question: 'What if I cant link my domain?',
            answer: <>Feel free to reach out to us via <a href="https://api.whatsapp.com/send?phone=601137355046&text=Hi%2C%20I'm%20interested%20in%20Cari%20SEO." target="_blank" rel="noopener noreferrer" style={{ color: '#1e3a8a', fontWeight: '600' }}>WhatsApp</a>. We are here to assist you with the linking process.</>
        }
    ]

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="section section-light" id="faq">
            <div className="container container-narrow">
                <h2 className="section-title section-title-dark">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
                            <button className="faq-question" onClick={() => toggle(index)}>
                                <span>{faq.question}</span>
                                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
