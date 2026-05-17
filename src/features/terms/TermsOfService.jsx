const TermsOfService = () => {
  const sections = [
    {
      title: "Overview",
      text: `This website is operated by GrabCart. Throughout the site, the terms “we”, “us” and “our” refer to GrabCart. By accessing our website or purchasing products from us, you agree to be bound by these Terms of Service, including all policies and notices referenced herein.`,
    },
    {
      title: "Eligibility & Accounts",
      text: `By using this platform, you confirm that you are legally eligible to enter into binding agreements. You are responsible for maintaining the security of your account credentials and all activities that occur under your account.`,
    },
    {
      title: "Orders & Payments",
      text: `All orders placed through GrabCart are subject to product availability and payment verification. We reserve the right to refuse or cancel any order at our discretion, including suspected fraudulent transactions.`,
    },
    {
      title: "Pricing & Product Information",
      text: `We strive to ensure that all product details, pricing, descriptions, and availability information are accurate. However, errors may occasionally occur, and GrabCart reserves the right to correct them without prior notice.`,
    },
    {
      title: "Shipping & Delivery",
      text: `Delivery timelines are estimates and may vary depending on location, logistics, weather conditions, or carrier delays. GrabCart is not liable for delays caused by third-party shipping providers.`,
    },
    {
      title: "Returns & Refunds",
      text: `Eligible products may be returned within the applicable return window. Returned products must meet our return conditions before refunds, replacements, or store credits are issued.`,
    },
    {
      title: "User Conduct",
      text: `Users agree not to misuse the platform, attempt unauthorized access, distribute harmful content, manipulate reviews, or engage in activities that violate applicable laws or regulations.`,
    },
    {
      title: "Privacy & Security",
      text: `We implement industry-standard security practices to help protect customer information. By using GrabCart, you consent to the collection and use of information as outlined within our platform policies.`,
    },
    {
      title: "Changes To Terms",
      text: `GrabCart reserves the right to update, modify, or replace these Terms of Service at any time. Continued use of the platform after changes are posted constitutes acceptance of those updates.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto bg-white ">
        {/* HEADER */}
<div className="px-8 md:px-16 lg:px-24 pt-16 pb-14 border-b border-black/5 text-center">
  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40 mb-5">
    GrabCart Legal
  </p>

  <h1 className="text-4xl md:text-6xl  font-black tracking-tight leading-none uppercase">
    Terms Of Service
  </h1>

  <p className="mt-8 max-w-3xl mx-auto text-[17px] md:text-lg leading-8 text-black/60">
    Please read these Terms of Service carefully before using the
    GrabCart platform. By accessing or using any part of the website,
    you agree to comply with all terms, conditions, and policies stated
    on this page.
  </p>
</div>

        {/* CONTENT */}
        <div className="px-8 md:px-16 lg:px-24 py-14 md:py-20">
          <div className="space-y-16">
            {sections.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 border-b border-black/5 pb-14 last:border-none last:pb-0"
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-black/30 font-bold">
                    0{i + 1}
                  </p>

                  <h2 className="mt-3 text-2xl md:text-3xl font-black uppercase leading-tight">
                    {item.title}
                  </h2>
                </div>

                <div>
                  <p className="text-[17px] md:text-lg leading-9 text-black/65">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

       
       
      </div>
    </div>
  );
};

export default TermsOfService;