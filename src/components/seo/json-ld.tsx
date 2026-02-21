export function JsonLd() {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DiscoverPrep - Canadian Citizenship Test 2026",
    description:
      "Pass your Canadian Citizenship Test with audio podcasts, interactive lessons, and mock exams based on the official Discover Canada guide.",
    applicationCategory: "EducationalApplication",
    operatingSystem: "iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CAD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: "Kohar Inc.",
    },
    downloadUrl:
      "https://apps.apple.com/ca/app/discoverprep-citizenship-2026/id6755275035",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How hard is the Canadian Citizenship Test in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Statistically, the test is challenging. A recent survey found that only 23% of born-and-raised Canadians would pass the test if they took it today. The exam asks specific questions about history, geography, and government symbols that most people do not know offhand.",
        },
      },
      {
        "@type": "Question",
        name: "What is the passing score for the Canadian Citizenship Test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You need to answer 15 out of 20 questions correctly (75%) to pass. The test consists of multiple-choice and true/false questions based entirely on the official Discover Canada study guide.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I fail the Canadian Citizenship Test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you fail your first attempt, you are usually given a second and third chance to take the test again (typically 4–8 weeks later). If you fail the test three times, you will be required to attend a hearing with a citizenship officer, which can delay your citizenship by months or years.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the Canadian Citizenship Test take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You have 30 minutes to complete the 20 questions during the online test. Most students finish faster, but time management is key.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Discover Canada book enough to pass?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Technically, yes—all test questions come from the official guide. However, the guide is over 60 pages long and written in dense, complex language that many applicants find difficult to memorize.",
        },
      },
      {
        "@type": "Question",
        name: "Can I take the Canadian Citizenship Test online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, most applicants between the ages of 18 and 54 will be invited to take the test online. You will need a computer, a webcam, and a reliable internet connection.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to speak perfect English to pass?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, you do not need perfect English, but you must have adequate knowledge of English or French. The test questions can use difficult vocabulary like Habeas Corpus or Presumption of Innocence.",
        },
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DiscoverPrep",
    url: "https://discoverprep.ca",
    logo: "https://discoverprep.ca/logo.png",
    sameAs: [
      "https://apps.apple.com/ca/app/discoverprep-citizenship-2026/id6755275035",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: "English",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Canadian Citizenship Test 2026 - Study App | DiscoverPrep",
    description:
      "Pass your Canadian Citizenship Test on the first try with DiscoverPrep. Audio podcasts, interactive lessons, and mock exams.",
    url: "https://discoverprep.ca",
    inLanguage: "en-CA",
    isPartOf: {
      "@type": "WebSite",
      name: "DiscoverPrep",
      url: "https://discoverprep.ca",
    },
    about: {
      "@type": "Thing",
      name: "Canadian Citizenship Test",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Canadian citizenship applicants",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}
