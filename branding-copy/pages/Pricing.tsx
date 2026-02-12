import React from 'react';
import { Check, X, HelpCircle, Zap } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        price: '$997',
        period: 'one-time',
        desc: 'Core automation essentials for small businesses.',
        features: [
            'AI Chatbot (Web)',
            'Google Business Setup',
            '5 Email Sequences',
            'Standard Support',
            'Basic Analytics'
        ],
        highlight: false
    },
    {
        name: 'Growth',
        price: '$2,497',
        period: 'one-time',
        desc: 'Full-stack automation for scaling companies.',
        features: [
            'Advanced AI Chatbot',
            'AI Voice Receptionist',
            'Full Sales Funnel',
            'SEO Content Pack (5)',
            'Priority Support',
            'CRM Integration',
            'A/B Testing'
        ],
        highlight: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: 'retainer',
        desc: 'Bespoke solutions and ongoing management.',
        features: [
            'Custom LLM Training',
            'Multi-Agent Systems',
            'Dedicated Manager',
            '24/7 Monitoring',
            'White-Labeling',
            'API Access',
            'SLA Guarantee'
        ],
        highlight: false
    }
];

const featureComparison = [
    { feature: 'Web Chatbot', starter: true, growth: true, enterprise: true },
    { feature: 'Google Integration', starter: true, growth: true, enterprise: true },
    { feature: 'Email Automation', starter: 'Basic', growth: 'Advanced', enterprise: 'Custom' },
    { feature: 'Voice Receptionist', starter: false, growth: true, enterprise: true },
    { feature: 'Sales Funnel Build', starter: false, growth: true, enterprise: true },
    { feature: 'SEO Articles', starter: false, growth: '5 Pack', enterprise: 'Unlimited' },
    { feature: 'Custom Model Training', starter: false, growth: false, enterprise: true },
    { feature: 'Dedicated Support', starter: false, growth: false, enterprise: true },
];

const Pricing: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 w-full max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-20">
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                    Investment <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amp-secondary to-amp-accent">Transparent</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Pay once, own it forever. We believe in building assets for your business, not renting them.
                </p>
            </div>

            {/* Toggle (Visual Only) */}
            <div className="flex justify-center mb-16">
                <div className="bg-white/5 border border-white/10 rounded-full p-1 flex items-center">
                    <button className="px-6 py-2 rounded-full bg-white text-black text-sm font-bold shadow-lg">One-Time Setup</button>
                    <button className="px-6 py-2 rounded-full text-gray-400 text-sm font-medium hover:text-white transition-colors">Monthly Retainer</button>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 items-start mb-32">
                {plans.map((plan, idx) => (
                    <div 
                        key={idx}
                        className={`
                            relative p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]
                            ${plan.highlight 
                                ? 'bg-[#0F121C] border-amp-primary/50 shadow-2xl shadow-amp-primary/20 z-10' 
                                : 'bg-black/20 border-white/10'
                            }
                        `}
                    >
                        {plan.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amp-primary to-amp-accent rounded-full text-xs font-bold text-white uppercase tracking-widest shadow-lg flex items-center gap-1">
                                <Zap className="w-3 h-3 fill-white" /> Most Popular
                            </div>
                        )}

                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="mb-4 flex items-baseline gap-2">
                            <span className="text-4xl font-black text-white">{plan.price}</span>
                            <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{plan.period}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-8 min-h-[40px]">{plan.desc}</p>

                        <button 
                            className={`
                                w-full py-4 rounded-xl font-bold mb-8 transition-all
                                ${plan.highlight 
                                    ? 'bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                                }
                            `}
                        >
                            Get Started
                        </button>

                        <div className="space-y-4">
                            {plan.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                    <div className={`mt-0.5 rounded-full p-0.5 ${plan.highlight ? 'bg-green-500/20' : 'bg-gray-800'}`}>
                                        <Check className={`w-3 h-3 ${plan.highlight ? 'text-green-400' : 'text-gray-500'}`} />
                                    </div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Comparison Table */}
            <div className="mb-20">
                <h3 className="text-3xl font-bold text-white mb-10 text-center">Compare Plans</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-4 pl-4 text-gray-400 font-medium">Features</th>
                                <th className="py-4 text-white font-bold text-center">Starter</th>
                                <th className="py-4 text-amp-primary font-bold text-center">Growth</th>
                                <th className="py-4 text-white font-bold text-center">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {featureComparison.map((row, i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 pl-4 text-gray-300 font-medium">{row.feature}</td>
                                    <td className="py-4 text-center">
                                        {row.starter === true ? <Check className="w-5 h-5 text-white mx-auto" /> : 
                                         row.starter === false ? <X className="w-5 h-5 text-gray-600 mx-auto" /> :
                                         <span className="text-sm text-gray-400">{row.starter}</span>}
                                    </td>
                                    <td className="py-4 text-center">
                                        {row.growth === true ? <div className="bg-amp-primary/20 w-8 h-8 rounded-full flex items-center justify-center mx-auto"><Check className="w-5 h-5 text-amp-primary" /></div> : 
                                         row.growth === false ? <X className="w-5 h-5 text-gray-600 mx-auto" /> :
                                         <span className="text-sm text-amp-primary font-bold">{row.growth}</span>}
                                    </td>
                                    <td className="py-4 text-center">
                                        {row.enterprise === true ? <Check className="w-5 h-5 text-white mx-auto" /> : 
                                         row.enterprise === false ? <X className="w-5 h-5 text-gray-600 mx-auto" /> :
                                         <span className="text-sm text-white font-bold">{row.enterprise}</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* FAQ Mini */}
            <div className="max-w-3xl mx-auto text-center bg-white/5 rounded-3xl p-10 border border-white/10">
                <h4 className="text-2xl font-bold text-white mb-4">Have questions about pricing?</h4>
                <p className="text-gray-400 mb-8">Our team is available to discuss custom requirements and bulk discounts.</p>
                <button className="text-white border-b border-white/20 pb-1 hover:border-white transition-colors">Contact Sales</button>
            </div>

        </div>
    );
};

export default Pricing;