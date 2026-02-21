"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How hard is the Canadian Citizenship Test in 2026?",
    answer:
      "Statistically, the test is challenging. A recent survey found that only 23% of born-and-raised Canadians would pass the test if they took it today. The exam asks specific questions about history, geography, and government symbols that most people do not know offhand. DiscoverPrep makes this easier by turning these dry facts into memorable stories, which helps improve recall compared to just reading the book.",
  },
  {
    question: "What is the passing score for the Canadian Citizenship Test?",
    answer:
      "You need to answer 15 out of 20 questions correctly (75%) to pass. The test consists of multiple-choice and true/false questions based entirely on the official Discover Canada study guide. Since you can only get 5 questions wrong, we recommend using the DiscoverPrep \"Readiness Score\" to ensure you are consistently scoring above 80% before your real exam.",
  },
  {
    question: "What happens if I fail the Canadian Citizenship Test?",
    answer:
      "If you fail your first attempt, you are usually given a second and third chance to take the test again (typically 4–8 weeks later). If you fail the test three times, you will be required to attend a hearing with a citizenship officer, which can delay your citizenship by months or years. Using a dedicated study app like DiscoverPrep can help you pass on the first try and avoid these delays.",
  },
  {
    question: "How long does the Canadian Citizenship Test take?",
    answer:
      "You have 30 minutes to complete the 20 questions during the online test. Most students finish faster, but time management is key. DiscoverPrep includes timed mock exams that mimic the real 2026 test interface, helping you get comfortable with the pressure before exam day.",
  },
  {
    question: "Is the \"Discover Canada\" book enough to pass?",
    answer:
      "Technically, yes—all test questions come from the official guide. However, the guide is over 60 pages long and written in dense, complex language that many applicants find difficult to memorize. DiscoverPrep covers the exact same material but translates it into Simplified English and audio podcasts, making it much faster to learn than reading the PDF alone.",
  },
  {
    question: "Can I take the Canadian Citizenship Test online?",
    answer:
      "Yes, most applicants between the ages of 18 and 54 will be invited to take the test online. You will need a computer, a webcam, and a reliable internet connection. The online test is monitored to ensure you do not use notes or other devices.",
  },
  {
    question: "Do I need to speak perfect English to pass?",
    answer:
      "No, you do not need perfect English, but you must have \"adequate knowledge\" of English or French. The test questions can use difficult vocabulary (like \"Habeas Corpus\" or \"Presumption of Innocence\"). DiscoverPrep's Simplified Mode explains these legal terms in plain language so you understand the concepts regardless of your language level.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-canadian-red font-semibold text-sm uppercase tracking-wider mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Common Questions About the 2026 Canadian Citizenship Test
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-slate-200 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-navy hover:text-canadian-red hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-slate-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
