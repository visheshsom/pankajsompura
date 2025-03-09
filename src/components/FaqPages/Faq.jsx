import React, { useState } from 'react';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';

function Faq({ className }) {
    // Manage the state to track which accordion is open
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeIndex2, setActiveIndex2] = useState(null);

    // Toggle function for accordion items
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    // Toggle function for accordion items
    const toggleAccordion2 = (index2) => {
        setActiveIndex2(activeIndex2 === index2 ? null : index2);
    };

    // Accordion data
    const faqsLeft = [
        {
            question: "How to soft launch your business?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
        {
            question: "Is my technology allowed on tech?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
        {
            question: "How to turn visitors into contributors?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
        {
            question: "How can I find my solutions?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
    ];

    // Accordion data
    const faqsRight = [
        {
            question: "How to soft launch your business?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
        {
            question: "Is my technology allowed on tech?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
        {
            question: "How to turn visitors into contributors?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
        {
            question: "How can I find my solutions?",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary."
        },
    ];

    return (
        <>
        <InnerPageHeader />
        <PageTitle
            title="Faq"
            breadcrumb={[
                { link: '/', title: 'Home' },
                { li: '/faq', title: 'Faq' },
            ]}
         />

        <section className="faqs-section-home1 innerpage pt-40 pb-100">
            <div className="auto-container">
                <div className="team-five__wrp">
                    <div className="row">
                        <div className="faq-column col-lg-6">
                            <div className="sec-title mb-30">
                                <h3>Service Faq</h3>
                            </div>
                            <div className="inner-column">
                                <ul className="accordion-box style-two wow fadeInLeft">
                                    {faqsLeft.map((faqLeft, index) => (
                                    <li 
                                        key={index}
                                        className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}
                                    >
                                        <div className={`acc-btn ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>{faqLeft.question}<div className="icon fa fa-plus"/></div>
                                        <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                                        <div className="content"><div className="text">{faqLeft.answer}</div></div>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="faq-column col-lg-6">
                            <div className="sec-title mb-30">
                                <h3>Research Faq</h3>
                            </div>
                            <div className="inner-column mb-md-50">
                                <ul className="accordion-box style-two bg-transparent p-0 wow fadeInLeft">
                                    {faqsRight.map((faqRight, index2) => (
                                    <li 
                                        key={index2}
                                        className={`accordion block pl-30 pr-30 ${activeIndex2 === index2 ? 'active-block' : ''}`}
                                    >
                                        <div className={`acc-btn ${activeIndex2 === index2 ? 'active' : ''}`} onClick={() => toggleAccordion2(index2)}>{faqRight.question}<div className="icon fa fa-plus"/></div>
                                        <div className={`acc-content ${activeIndex2 === index2 ? 'current' : ''}`}>
                                        <div className="content"><div className="text">{faqRight.answer}</div></div>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         
        <FooterHomeThree />
        <BackToTop />
        </>
    );
}

export default Faq;
