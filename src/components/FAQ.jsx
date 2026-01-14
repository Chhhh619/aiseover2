import { useState } from 'react'
import './FAQ.css'

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: 'What is AI SEO?',
            answer: 'AI SEO combines artificial intelligence with search engine optimization to create content that ranks on Google. We use AI to analyze search patterns, understand intent, and structure content that both Google and users love.'
        },
        {
            question: 'How long does it take to see results?',
            answer: 'SEO is a long-term strategy. Most businesses start seeing improvements in rankings within 2-3 months, with significant results in 4-6 months. The content we create continues working for you long after publication.'
        },
        {
            question: "What's included in the money-back guarantee?",
            answer: "If you're not satisfied with the quality of the SEO content we deliver, you can request a full refund. No questions asked. We're confident in our work and want you to be too."
        },
        {
            question: 'Do I need technical SEO knowledge?',
            answer: 'No. We handle all the technical aspects of SEO content creation. You just need to understand your business and customers – we take care of the rest.'
        },
        {
            question: 'How is this different from regular content writing?',
            answer: "Regular content writing focuses on creating readable text. AI SEO content is strategically built to rank on Google – it's researched, structured, and optimized for both search engines and AI-powered search results."
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
