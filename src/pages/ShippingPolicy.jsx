import React from "react";

function ShippingPolicy() {
  return (
    <section className="bg-[#FFF8F8] min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-[#4B3A3A] mb-10">
          Shipping Policy
        </h1>

        <div className="space-y-8 text-[#6B4F43] leading-relaxed">

          <div>
            <p>
              At World Beauty, we aim to deliver your order safely and efficiently.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#4B3A3A] mb-3">
              Processing Time
            </h2>
            <p>
              Orders are typically processed within 1–3 business days after
              payment confirmation.
            </p>
            <p className="mt-2">
              Custom or made-to-order items may require additional processing
              time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#4B3A3A] mb-3">
              Shipping Time
            </h2>
            <p>
              Domestic orders are generally delivered within 3–7 business days
              depending on location.
            </p>
            <p className="mt-2">
              Delivery times may vary during holidays, sales periods, or
              unforeseen circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#4B3A3A] mb-3">
              Shipping Charges
            </h2>
            <p>
              Shipping charges, if applicable, will be displayed during checkout
              before payment is completed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#4B3A3A] mb-3">
              Tracking Information
            </h2>
            <p>
              Once your order has been dispatched, tracking details will be
              shared via email, SMS, or WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#4B3A3A] mb-3">
              Delivery Delays
            </h2>
            <p>
              While we strive to meet estimated delivery timelines, delays
              caused by courier services, weather conditions, or other external
              factors are beyond our control.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#4B3A3A] mb-3">
              International Shipping
            </h2>
            <p>
              International shipping availability, rates, and delivery
              timelines may vary depending on the destination country.
            </p>
            <p className="mt-2">
              For international shipping enquiries, please contact us directly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ShippingPolicy;