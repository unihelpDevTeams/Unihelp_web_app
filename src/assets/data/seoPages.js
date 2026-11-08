import { brand, sameAsUrls } from "./socialLinks";

const siteUrl = brand.siteUrl;

const organization = {
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'UniHelp',
  alternateName: brand.alternateName,
  url: `${siteUrl}/`,
  logo: brand.logoUrl,
  description: brand.description,
  sameAs: sameAsUrls,
};

const website = {
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'UniHelp',
  url: `${siteUrl}/`,
  publisher: { '@id': organization['@id'] },
  inLanguage: 'en-NG',
};

const page = (path, title, description, type = 'WebPage') => {
  const url = `${siteUrl}${path === '/' ? '/' : path}`;
  const pageSchema = {
    '@type': type,
    '@id': `${url}#page`,
    name: title,
    headline: title,
    description,
    url,
    inLanguage: 'en-NG',
    isPartOf: { '@id': website['@id'] },
    publisher: { '@id': organization['@id'] },
  };

  if (type === 'SoftwareApplication') {
    Object.assign(pageSchema, {
      applicationCategory: 'EducationalApplication',
      operatingSystem: ['Android', 'Web'],
      installUrl: brand.playStoreUrl,
      softwareVersion: 'Official mobile app',
    });
  }

  const breadcrumb = path === '/' ? [] : [{
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: title, item: url },
    ],
  }];

  return {
    path,
    title,
    description,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organization, website, pageSchema, ...breadcrumb],
    },
  };
};

export const seoPages = [
  page('/', "UniHelp – Nigeria's Next Student Super App for University Students", 'UniHelp is a student super app built for Nigerian university students. Access academic resources, past questions, AI tutoring, student communities, campus services, marketplaces, and more.', 'SoftwareApplication'),
  page('/about', 'About UniHelp | Nigeria Student Super App for University Students', 'Learn how UniHelp helps Nigerian university students access academic resources, campus services, study tools, and connected learning communities in one platform.'),
  page('/features', 'UniHelp Features | AI Tutor, Past Questions, Marketplace, and Student Tools', 'Explore the UniHelp student platform for AI tutoring, past questions, GPA and CGPA tools, student communities, marketplace, and campus support features.'),
  page('/download', 'Download UniHelp App | Official Android Student App in Nigeria', 'Download the official UniHelp Android app to access academic resources, past questions, AI study support, student communities, and university tools in Nigeria.', 'SoftwareApplication'),
  page('/contact', 'Contact UniHelp | Support for Students and Campus Partnerships', 'Get in touch with UniHelp support for student inquiries, platform help, technical issues, and partnership opportunities in Nigeria.'),
  page('/formula-hub', 'Formula Hub | University Study Formulas by Subject | UniHelp', 'Browse the UniHelp Formula Hub for organized university formulas, study support, and revision tools for Nigerian students.', 'TechArticle'),
  page('/watch', 'Educational Videos and Study Tutorials | UniHelp', 'Search educational videos and tutorials in UniHelp to support coursework, revision, and practical learning for Nigerian university students.'),
  page('/faq', 'UniHelp FAQ | Student App, Study Tools, and Account Help', 'Find answers about UniHelp accounts, academic tools, student communities, marketplace access, support, and common platform questions.'),
  page('/help-center', 'UniHelp Help Center | Account, File, and Payment Support', 'Browse UniHelp guidance for account access, file uploads, subscriptions, support issues, and common technical questions.'),
  page('/privacy', 'UniHelp Privacy Policy | Student Data and Account Privacy', 'Read how UniHelp handles account information, learning activity, content uploads, and privacy preferences for students using the platform.'),
  page('/terms', 'UniHelp Terms of Service | Platform Terms and Conditions', 'Review the terms that apply when using UniHelp academic tools, student services, communities, and education platform features.'),
  page('/academic-tools', 'Academic Tools for Nigerian University Students | UniHelp', 'Explore UniHelp academic tools such as GPA and CGPA calculators, CBT practice, Formula Hub, study resources, and planning support.', 'TechArticle'),
  page('/gpa-calculator', 'GPA Calculator for Nigerian Universities | UniHelp', 'Use the UniHelp GPA calculator to track semester performance and understand your study progress with major grade-point calculations.' , 'TechArticle'),
  page('/cgpa-tracker', 'CGPA Tracker for Nigerian University Students | UniHelp', 'Track your cumulative performance and semester results with the UniHelp CGPA tracker built for Nigerian university students.', 'TechArticle'),
  page('/university-cbt-practice', 'University CBT Practice for Students | UniHelp', 'Prepare for exams with UniHelp CBT practice tools designed for Nigerian university students and academic revision.', 'TechArticle'),
  page('/past-questions', 'University Past Questions and Study Resources | UniHelp', 'Find student-friendly past questions, revision resources, and study support through UniHelp for Nigerian university learning.', 'TechArticle'),
  page('/ai-tutor', 'AI Tutor for University Students | UniHelp AI Assistance', 'Use UniHelp AI tutoring for course guidance, step-by-step explanations, and study assistance for Nigerian university students.', 'TechArticle'),
  page('/student-community', 'Student Community App for Nigerian Universities | UniHelp', 'Connect with fellow students and campus communities through UniHelp for learning support, discussions, and university networking.', 'TechArticle'),
  page('/student-chat', 'Student Chat App for University Communities | UniHelp', 'Use UniHelp student chat to connect with classmates, groups, and student communities through the official platform.', 'TechArticle'),
  page('/student-marketplace', 'Student Marketplace in Nigeria | UniHelp', 'Explore the UniHelp student marketplace for campus buying, selling, and access to student-focused products and services in Nigeria.', 'TechArticle'),
];

export const seoPageByPath = Object.fromEntries(seoPages.map((entry) => [entry.path, entry]));
export const canonicalUrl = (path) => `${siteUrl}${path === '/' ? '/' : path}`;
