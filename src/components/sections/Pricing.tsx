import React, { useState } from 'react';
import { Check, Info, X } from 'lucide-react';

// Define types
type Feature = {
  name: string;
  included: boolean;
};

type Plan = {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: Feature[];
  highlight: boolean;
};

type Tooltips = {
  [key: string]: string;
};

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);
  const [showTooltip, setShowTooltip] = useState<string>('');

  const plans: Plan[] = [
    {
      name: "Starter",
      description: "Perfect for small events and webinars",
      monthlyPrice: 199,
      annualPrice: 179,
      features: [
        { name: "Up to 500 concurrent users", included: true },
        { name: "HD streaming", included: true },
        { name: "5 languages translation", included: true },
        { name: "Basic analytics", included: true },
        { name: "Email support", included: true },
        { name: "Custom branding", included: false },
        { name: "Advanced security", included: false },
        { name: "API access", included: false }
      ],
      highlight: false
    },
    {
      name: "Professional",
      description: "Ideal for medium to large organizations",
      monthlyPrice: 499,
      annualPrice: 449,
      features: [
        { name: "Up to 5,000 concurrent users", included: true },
        { name: "4K streaming", included: true },
        { name: "20 languages translation", included: true },
        { name: "Advanced analytics", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Custom branding", included: true },
        { name: "Advanced security", included: true },
        { name: "API access", included: false }
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      description: "For large-scale global events",
      monthlyPrice: 999,
      annualPrice: 899,
      features: [
        { name: "Up to 100,000 concurrent users", included: true },
        { name: "4K streaming", included: true },
        { name: "40+ languages translation", included: true },
        { name: "Custom analytics", included: true },
        { name: "Dedicated support team", included: true },
        { name: "Custom branding", included: true },
        { name: "Enterprise security", included: true },
        { name: "Full API access", included: true }
      ],
      highlight: false
    }
  ];

  const tooltips: Tooltips = {
    "Advanced security": "Includes SSO, end-to-end encryption, and compliance features",
    "Custom analytics": "Create custom reports and track specific metrics",
    "API access": "Full access to our REST API for custom integrations"
  };

  return (
    <div className="bg-white py-24" id='pricing'>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Simple, Transparent
            <span className="text-purple-600"> Pricing</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your virtual events. All plans include our core features
            and 99.9% uptime guarantee.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-purple-600 font-medium' : 'text-gray-600'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-purple-600 rounded-full p-1 transition-colors"
            >
              <div className={`w-6 h-6 bg-white rounded-full transition-transform ${
                isAnnual ? 'translate-x-8' : 'translate-x-0'
              }`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-purple-600 font-medium' : 'text-gray-600'}`}>
              Annual
              <span className="ml-1 text-green-500 font-medium">Save 10%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all hover:scale-105 ${
                plan.highlight
                  ? 'bg-purple-600 text-white shadow-xl'
                  : 'bg-gray-50 text-gray-900'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-purple-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-bold">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className={`${plan.highlight ? 'text-purple-100' : 'text-gray-600'}`}>
                  /month
                </span>
              </div>

              <button
                className={`w-full py-3 rounded-full font-medium mb-8 transition-colors ${
                  plan.highlight
                    ? 'bg-white text-purple-600 hover:bg-purple-50'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                Get Started
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <Check className={`w-5 h-5 mr-3 ${plan.highlight ? 'text-white' : 'text-green-500'}`} />
                    ) : (
                      <X className={`w-5 h-5 mr-3 ${plan.highlight ? 'text-purple-200' : 'text-gray-400'}`} />
                    )}
                    <span className={`flex-grow ${
                      !feature.included && (plan.highlight ? 'text-purple-200' : 'text-gray-400')
                    }`}>
                      {feature.name}
                    </span>
                    {tooltips[feature.name] && (
                      <div className="relative">
                        <Info
                          className={`w-4 h-4 cursor-help ${
                            plan.highlight ? 'text-purple-200' : 'text-gray-400'
                          }`}
                          onMouseEnter={() => setShowTooltip(feature.name)}
                          onMouseLeave={() => setShowTooltip('')}
                        />
                        {showTooltip === feature.name && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 text-white text-xs rounded shadow-lg z-10">
                            {tooltips[feature.name]}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-8">
            Need a custom solution? Contact our sales team for enterprise pricing.
          </p>
          <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-medium hover:bg-purple-50 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;