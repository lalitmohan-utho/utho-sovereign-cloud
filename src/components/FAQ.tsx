import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Utho stand out among India's IaaS service providers?",
    answer: "Utho combines transparent pricing, 24×7 local support, and India-based Tier III/IV data centers for unmatched reliability."
  },
  {
    question: "How does Utho's pricing compare to other IaaS service providers?",
    answer: "Our pay-as-you-go model eliminates hidden charges and offers up to 60% savings compared to global hyperscalers."
  },
  {
    question: "Can I scale infrastructure up or down quickly?",
    answer: "Yes. Utho's console lets you adjust compute, storage, and bandwidth instantly, paying only for what you use."
  },
  {
    question: "Is my data secure with Utho IaaS?",
    answer: "Absolutely—encryption, VPC isolation, and regular security audits keep your data protected under Indian jurisdiction."
  },
  {
    question: "Does Utho require long-term contracts?",
    answer: "No. Choose hourly or monthly billing and cancel anytime without penalties."
  },
  {
    question: "Do you provide migration support?",
    answer: "Yes. Our experts help you migrate workloads with zero downtime and no vendor lock-in."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about India's leading IaaS platform
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg shadow-card border-none px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold text-foreground">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}