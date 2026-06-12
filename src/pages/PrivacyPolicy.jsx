import React from "react";

function PrivacyPolicy() {
  return (
    <section className="bg-[#FFF8F8] py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-[#4B3A3A] mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-[#6B4F43] leading-relaxed">

          <p>
            At World Beauty, we value your privacy and are committed
            to protecting your personal information.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Information We Collect
            </h2>
            <p>
              We may collect your name, email address, phone number,
              shipping address, and order details when you interact
              with our website or place an order.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              How We Use Your Information
            </h2>
            <p>
              Your information is used to process orders, provide
              customer support, improve our services, and communicate
              important updates regarding your purchases.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Data Security
            </h2>
            <p>
              We take reasonable measures to safeguard your personal
              information against unauthorized access, disclosure,
              or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Third-Party Services
            </h2>
            <p>
              We may use trusted third-party services such as payment
              processors and shipping providers to fulfill orders.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy,
              please contact us via WhatsApp or email.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default PrivacyPolicy;