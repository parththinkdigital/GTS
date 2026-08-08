export const metadata = {
  title: "Privacy Policy - GTS Finlabs",
  description: "Privacy Policy and Data Protection Terms for GTS Finlabs",
};

const PRIVACY_SECTIONS = [
  {
    number: "1",
    title: "Information we collect from you",
    content:
      "We collect the information You provide to us, and this information is necessary for the adequate performance of the contractual arrangement in place between You and us, and to allow us to comply with our legal obligations.\n\n• Account Signup Information. When You create an account, we ask You to provide signup information such as Email, Name, Surname, Personal Number, Phone Number, and Address.",
  },
  {
    number: "2",
    title: "Information we collect automatically",
    content:
      "When You use our Site or contact us directly, we may collect information, including personal information, about the way You interact with our Site, the services You use, and how You use them. This information is necessary for the adequate performance of the contract between You and us, to enable us to comply with legal obligations, and given our legitimate interest in being able to provide and improve the functionalities of the Site.\n\n• Usage Information. We use a tool called “Google Analytics” to collect information about Your interactions with the Site (such as the pages or content You view, searches You perform, bookings You make, and other actions on the Site). As a result, Google, Inc. places a permanent cookie on Your web browser to identify You as a unique user the next time You visit this Site. For more information, please visit Google.\n\n• Publicly Available Personal Information. We may collect personal information that you have made publicly available.",
  },
  {
    number: "3",
    title: "The way we use your information",
    content:
      "We process Your information in accordance with the general data processing principles. We may use the information we collect through our Site for a number of reasons, including:\n\n• To identify users\n• To contact users\n• To improve services\n• To customize marketing\n• To stay connected\n• To post testimonials\n• To provide support\n\nWe will normally collect personal information from You only where we have Your consent to do so, where we need the personal information to perform a contract with You, or where the processing is in our legitimate business interests.",
  },
  {
    number: "4",
    title: "Direct Marketing",
    content:
      "We may use your provided contact details for direct marketing purposes. These direct marketing offers may, depending on your preferences, be personalized by taking into account any other information that you have provided to us (e.g., location, social media profile information, etc.) or that we have collected or generated from other sources, as described below.\n\nIf you wish to change your preferences and withdraw your consent for direct marketing, you may do so at any time by updating your preferences in your account. If you wish to withdraw your consent for direct marketing and no longer receive information from us, you may do so at any time by following the unsubscribe instructions included in the emails you receive from us.\n\nYou are free to opt out of our newsletters at any time. You can do this by clicking the unsubscribe link provided at the bottom of our newsletter emails.",
  },
  {
    number: "5",
    title: "Cookies",
    content:
      "We do not use cookies or other tracking technologies.",
  },
  {
    number: "6",
    title: "Information from minors",
    content:
      "This Site and our Services are not intended for or directed at people under the age of 18. We do not knowingly collect or request information from minors. We do not knowingly allow minors to use our Site or Services. We will delete any information that we discover has been collected from a minor. Please contact us using the details provided below if you believe that we may have information about a minor.",
  },
  {
    number: "7",
    title: "Sensitive information",
    content:
      "We do not collect sensitive information such as political opinions, religious or philosophical beliefs, racial or ethnic origin, genetic data, biometric data, health data, or data related to sexual orientation. Please do not send, upload, or provide us with any sensitive data, and contact us using the details provided below if you believe that we may have such information. We reserve the right to delete any information that we believe may contain sensitive data.",
  },
  {
    number: "8",
    title: "Third party links",
    content:
      "Our Site may contain links to other websites. Please review their privacy policies to learn more about how they collect and use your personal data, as we do not control their policies or personal data processing practices.",
  },
  {
    number: "9",
    title: "Retention",
    content:
      "We retain your personal information to provide services to you and as otherwise necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. We will retain your personal information for as long as we need it to provide services to you, unless we are otherwise required by law or regulation to retain your personal information for a longer period.",
  },
  {
    number: "10",
    title: "Security",
    content:
      "We have implemented security measures designed to protect the personal information you share with us, including physical, electronic, and procedural safeguards. Among other things, we regularly monitor our systems for possible vulnerabilities and attacks. Regardless of the measures and efforts taken by us, the transmission of information via the Internet, email, or text message is not completely secure. We do not guarantee the absolute protection and security of your personal information or any other User Content you upload, publish, or otherwise share with us or anyone else.\n\nWe therefore encourage you to avoid providing us or anyone else with any sensitive information whose disclosure you believe could cause you substantial or irreparable harm. If you have any questions regarding the security of our Site or Services, you are welcome to contact us at (email id for contact).",
  },
  {
    number: "11",
    title: "Your rights",
    content:
      "You are entitled to a range of rights regarding the protection of your personal information. Those rights are:\n\n• The right to access the information we have about you. If you wish to access your personal information that we collect, you can do so at any time by contacting us using the contact details provided below.\n• The right to rectify inaccurate information about you. You can correct, update or request deletion of your personal information by contacting us using the contact details provided below.\n• The right to object the processing. When we rely on your consent to process your personal information, you may withdraw consent at any time by contacting us using the contact details provided below. This will not affect the lawfulness of processing prior to the withdrawal of your consent.\n• The right to lodge a complaint. You can raise questions or complaints to the national Data Protection Agency in your country of residence in the event where your rights may have been infringed. However, we recommend attempting to reach a peaceful resolution of the possible dispute by contacting us first.\n• The right to erase any data concerning you. You may demand erasure of data without undue delay for legitimate reasons, e.g. where data is no longer necessary for the purposes it was collected, or where the data has been unlawfully processed.",
  },
  {
    number: "12",
    title: "Amendments",
    content:
      "Our Policy may change from time to time. We will post any changes to the Policy on our Site and, if the changes are significant, we may provide a more explicit notice (including, for certain services, email notifications of Policy changes).",
  },
  {
    number: "13",
    title: "Acceptance of this policy",
    content:
      "We assume that all Users of this Site have carefully read this document and agree to its contents. If a User does not agree with this Policy, they should refrain from using our Site. We reserve the right to change our Policy at any time and to inform Users of such changes in the manner indicated in Section 13. Continued use of this Site implies acceptance of the revised Policy.",
  },
  {
    number: "14",
    title: "Further information",
    content:
      "If you have any further questions regarding the data we collect, or how we use it, then please feel free to contact us at the details as indicated above.\n\nYou are free to opt out of our newsletters at any time. You can do this by clicking on a link for that purpose at the bottom of our e-mail with the newsletters.",
  },
];

function SectionContent({ content }) {
  const paragraphs = content.split("\n\n").filter(Boolean);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {paragraphs.map((paragraph, idx) => {
        if (paragraph.startsWith("•")) {
          const items = paragraph.split("\n").filter(Boolean);
          return (
            <ul
              key={idx}
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    fontSize: "0.92rem",
                    color: "var(--gray-700)",
                    lineHeight: 1.7,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--brand-orange)",
                      boxShadow: "0 0 8px rgba(245, 166, 35, 0.4)",
                      flexShrink: 0,
                      marginTop: "8px",
                    }}
                  />
                  <span>{item.replace(/^•\s*/, "")}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={idx}
            style={{
              margin: 0,
              fontSize: "0.92rem",
              color: "var(--gray-700)",
              lineHeight: 1.7,
            }}
          >
            {paragraph}
          </p>
        );
      })}
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="section" style={{ paddingTop: "clamp(120px, 15vh, 180px)", paddingBottom: "clamp(80px, 10vh, 120px)" }}>
      <div className="container" style={{ maxWidth: "min(90vw, 860px)", margin: "0 auto", padding: "0 32px" }}>
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(25px, 5vw, 25px)" }}>
          
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              fontWeight: 800,
              color: "var(--gray-950)",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
              color: "var(--gray-500)",
              lineHeight: 1.65,
              maxWidth: "600px",
              margin: "16px auto 0",
            }}
          >
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal data.
          </p>
        </div>

        {/* Last Updated Notice */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "clamp(25px, 4vw, 30px)",
          }}
        >
        </div>

        {/* Privacy Sections — single container, separated by hr lines */}
        <div style={{ maxWidth: "1180px", display: "flex", flexDirection: "column", gap: "0" }}>
          {PRIVACY_SECTIONS.map((section, idx) => (
            <div key={section.number}>
              <div style={{ padding: "clamp(28px, 3.5vw, 44px) 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "16px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                      fontWeight: 800,
                      color: "var(--brand-blue)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      opacity: 0.9,
                      flexShrink: 0,
                    }}
                  >
                    {section.number}
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
                      fontWeight: 700,
                      color: "var(--gray-950)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                      marginTop: "2px",
                    }}
                  >
                    {section.title}
                  </h2>
                </div>
                <SectionContent content={section.content} />
              </div>
              {idx < PRIVACY_SECTIONS.length - 1 && (
                <hr
                  style={{
                    border: "none",
                    borderTop: "1px solid var(--gray-200)",
                    margin: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Contact Card */}
        <div style={{ marginTop: "clamp(60px, 8vw, 96px)" }}>
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                padding: "clamp(28px, 4vw, 48px)",
                borderRadius: "var(--radius-2xl)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(248,250,252,0.9))",
                border: "1px solid rgba(12, 45, 137, 0.08)",
                boxShadow:
                  "0 14px 46px rgba(12, 45, 137, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                  fontWeight: 700,
                  color: "var(--gray-950)",
                  letterSpacing: "-0.02em",
                  margin: "0 0 12px",
                }}
              >
                Questions about your privacy?
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--gray-600)",
                  lineHeight: 1.65,
                  margin: "0 0 24px",
                }}
              >
                If you have any questions regarding this Policy or any requests concerning the processing of personal data, please reach out to our team.
              </p>
              <a
                href="mailto:info@gtsfinlabs.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 32px",
                  borderRadius: "var(--radius-full)",
                  background: "var(--brand-blue)",
                  color: "#fff",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(12, 45, 137, 0.2)",
                  transition: "transform 160ms var(--ease-out-expo), box-shadow 160ms ease",
                }}
              >
                Contact Us
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
