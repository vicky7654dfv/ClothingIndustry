import React, { useContext, useState } from "react";
import Style from "./FAQ.module.css";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";

export default function FAQ() {
  const { theme } = useContext(ThemeContext);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  const faqData = [
    {
      id: 1,
      topic: "Ordering",
      description: "Get help with placing, modifying, and understanding your orders.",
      subtopics: [
        {
          id: "1-1",
          question: "How do I place an order?",
          answer: [
            "Choose your product and select size & quantity",
            "Add to cart and proceed to checkout",
            "Confirm shipping address and payment"
          ]
        },
        {
          id: "1-2",
          question: "Can I cancel or change my order after placing it?",
          answer: [
            "Orders can be canceled or updated within 5 minutes of placing them",
            "Please call our support team immediately for assistance"
          ]
        },
        {
          id: "1-3",
          question: "Do I need to create an account to order?",
          answer: [
            "No, you can order as a guest",
            "However, creating an account helps you track past orders and save addresses"
          ]
        }
      ]
    },
    {
      id: 2,
      topic: "Shipping & Delivery",
      description: "Information on how we get your orders to you.",
      subtopics: [
        {
          id: "2-1",
          question: "What are the delivery timelines?",
          answer: [
            "Standard: 5-7 business days",
            "Express: 2-3 business days"
          ]
        },
        {
          id: "2-2",
          question: "How do I track my order?",
          answer: [
            "Go to your account & click 'Track Order'",
            "You will receive email/SMS updates"
          ]
        },
        {
          id: "2-3",
          question: "Do you ship internationally?",
          answer: [
            "Yes, international shipping is available",
            "Shipping charges vary by location"
          ]
        },
        {
          id: "2-4",
          question: "What happens if I'm not home for delivery?",
          answer: [
            "The carrier will leave a notice and attempt redelivery",
            "Package will be available for pickup at local facility"
          ]
        }
      ]
    },
    {
      id: 3,
      topic: "Returns & Exchanges",
      description: "Our policy on returns, exchanges, and refunds.",
      subtopics: [
        {
          id: "3-1",
          question: "What is your return policy?",
          answer: [
            "Items can be returned within 14 days",
            "Must be unused and with original tags",
            "Final sale items are not eligible for return"
          ]
        },
        {
          id: "3-2",
          question: "How to exchange a product?",
          answer: [
            "Request exchange via your account",
            "Choose a new size or product"
          ]
        },
        {
          id: "3-3",
          question: "When will I get a refund?",
          answer: [
            "Refunds processed within 5 business days",
            "Refund method same as original payment"
          ]
        }
      ]
    },
    {
      id: 4,
      topic: "Products & Sizing",
      description: "Ensure you get the perfect fit every time.",
      subtopics: [
        {
          id: "4-1",
          question: "How do I choose the right size?",
          answer: [
            "Refer to our sizing chart on product pages",
            "Contact customer care for guidance"
          ]
        },
        {
          id: "4-2",
          question: "Are products genuine?",
          answer: [
            "Yes, 100% original materials",
            "We provide quality assurance"
          ]
        },
        {
          id: "4-3",
          question: "How are products maintained?",
          answer: [
            "Follow care instructions on tags",
            "Wash separately to preserve colors",
            "Air-drying is recommended"
          ]
        }
      ]
    },
    {
      id: 5,
      topic: "Payments & Pricing",
      description: "Questions about how to pay and the costs involved.",
      subtopics: [
        {
          id: "5-1",
          question: "What payment methods are accepted?",
          answer: [
            "Credit/Debit Cards (Visa, Mastercard, American Express)",
            "UPI & Netbanking",
            "Cash on Delivery (COD)",
            "PayPal and Apple Pay"
          ]
        },
        {
          id: "5-2",
          question: "Can I apply discount codes?",
          answer: [
            "Enter code at checkout",
            "Only one code can be used per order"
          ]
        },
        {
          id: "5-3",
          question: "Is my payment information secure?",
          answer: [
            "Absolutely. We use SSL encryption",
            "Partner with trusted payment gateways"
          ]
        },
        {
          id: "5-4",
          question: "Why was I charged sales tax?",
          answer: [
            "Sales tax applied based on shipping destination laws"
          ]
        }
      ]
    },
    {
      id: 6,
      topic: "Account & Support",
      description: "Manage your account and get help when needed.",
      subtopics: [
        {
          id: "6-1",
          question: "How do I create an account?",
          answer: [
            "Click on 'Sign Up' in the header",
            "Provide email, password, and details"
          ]
        },
        {
          id: "6-2",
          question: "What are the benefits of membership?",
          answer: [
            "Exclusive discounts and early access",
            "Faster checkout and saved addresses",
            "Track past orders easily"
          ]
        },
        {
          id: "6-3",
          question: "How do I contact customer support?",
          answer: [
            "Email: support@thestackly.com",
            "Phone: +91 9876543210",
            "Support responds within 24-48 hours"
          ]
        },
        {
          id: "6-4",
          question: "How do I reset my password?",
          answer: [
            "Click 'Forgot Password' on login page",
            "Follow the link sent to your email"
          ]
        }
      ]
    }
  ];

  return (
    <div
      className={Style.faqWrap}
      style={{
        background: theme === "light" ? "#fdfdfd" : "#474747ff",
        color: theme === "light" ? "#222" : "#ebebebff",
      }}
    >
      <h1>Frequently Asked Questions</h1>
      <p className={Style.faqIntro}>
        Welcome to our FAQ page! Find quick answers to the most common questions about shopping with us. 
        Can't find what you're looking for? Our customer support team is always happy to help.
      </p>

      {faqData.map((section) => (
        <div key={section.id} className={Style.topic}>
          <h2>{section.id}. {section.topic}</h2>
          <p className={Style.topicDescription}>{section.description}</p>
          
          <div className={Style.questionsList}>
            {section.subtopics.map((subtopic) => (
              <div key={subtopic.id} className={Style.questionItem}>
                <div 
                  className={Style.questionHeader}
                  onClick={() => toggleQuestion(subtopic.id)}
                >
                  <span className={Style.questionText}>{subtopic.question}</span>
                  <span className={Style.toggleIcon}>
                    {openQuestion === subtopic.id ? '×' : '+'}
                  </span>
                </div>
                
                <div 
                  className={`${Style.answerContent} ${
                    openQuestion === subtopic.id ? Style.answerOpen : Style.answerClosed
                  }`}
                >
                  <ul>
                    {subtopic.answer.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}