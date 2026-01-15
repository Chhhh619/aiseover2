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
            question: 'What is the difference between Individual and Enterprise packages?',
            answer: 'The Individual package (RM 2,000) includes 10 SEO-optimized articles with AI-powered keyword research, perfect for solopreneurs and small teams. The Enterprise package (RM 7,000) includes 50 articles with advanced keyword strategy, priority delivery, and a dedicated account manager for growing businesses.'
        },
        {
            question: "What's included in the money-back guarantee?",
            answer: "If you're not satisfied with the quality of our AI SEO content, you can request a full refund within 14 days. No questions asked. We're confident in our work and want you to be too."
        },
        {
            question: 'Do I need to be technical to use CariSEO?',
            answer: 'Not at all. We handle all the technical aspects of AI SEO optimization. You just need to understand your business and target audience – we take care of the rest, including keyword research, content structuring, and AI optimization.'
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
