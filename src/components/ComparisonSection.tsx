import { Check, X, Zap, Shield, Clock, HeartHandshake } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Response Time",
      icon: Clock,
      yatra: "<30 minutes",
      others: "2-4 hours",
      yatraDetail: "24/7 emergency support with guaranteed response",
      advantage: true,
    },
    {
      feature: "Smart Features",
      icon: Zap,
      yatra: "IoT, ARD, Touchless",
      others: "Basic controls",
      yatraDetail:
        "Advanced IoT monitoring, automatic rescue device, voice controls",
      advantage: true,
    },
    {
      feature: "Uptime Guarantee",
      icon: Shield,
      yatra: "99.98%",
      others: "95-97%",
      yatraDetail: "Predictive maintenance ensures minimal downtime",
      advantage: true,
    },
    {
      feature: "Support Coverage",
      icon: HeartHandshake,
      yatra: "24/7 Live Support",
      others: "Business hours only",
      yatraDetail: "Round-the-clock technical support and emergency services",
      advantage: true,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-brand">Yatra</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choosing Yatra Elevators & Escalators means choosing responsibility,
            innovation, and a customer based approach. We have designed to offer
            advanced vertical mobility solutions that conglomerate advanced
            technology with powerful engineering, promising safety, efficiency,
            and comfort in every ride. From Tailor made designs to accurate
            installations and responsive post sales support, we are committed to
            delivering excellence at each and every stage. Our deep analysing of
            market needs, matching to global standards and a passion for quality
            set us to be unique. At Yatra, we don’t just move people, we inspire
            them
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-2 gap-8 mb-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="card-glow p-6 bg-gradient-primary">
                <div className="text-xl font-bold text-primary-foreground mb-2">
                  Yatra Elevators
                </div>
                <div className="text-sm text-primary-foreground/80">
                  Next-Gen Solutions
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="card-glass p-6">
                <div className="text-xl font-bold text-muted-foreground mb-2">
                  Others
                </div>
                <div className="text-sm text-muted-foreground">
                  Traditional Providers
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-4">
            {comparisons.map((comparison, index) => (
              <div
                key={index}
                className="card-glow p-6 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  {/* Feature */}
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <comparison.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {comparison.feature}
                      </div>
                    </div>
                  </div>

                  {/* Comparison Grid */}
                  <div className="col-span-1 lg:col-span-2">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Yatra */}
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <Check className="w-5 h-5 text-neon-green" />
                          <span className="font-bold text-neon-cyan">
                            {comparison.yatra}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {comparison.yatraDetail}
                        </div>
                      </div>

                      {/* Others */}
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <X className="w-5 h-5 text-red-400" />
                          <span className="font-semibold text-muted-foreground">
                            {comparison.others}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Advantages */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent-foreground">
                  3x
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Faster Response
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent-foreground">
                  5x
                </span>
              </div>
              <div className="text-sm text-muted-foreground">More Features</div>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent-foreground">
                  99%
                </span>
              </div>
              <div className="text-sm text-muted-foreground">Uptime Rate</div>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent-foreground">
                  24/7
                </span>
              </div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="text-center mt-16">
            <div className="card-glass p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gradient mb-4">
                The Choice is Clear
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When it comes to reliability, innovation, and customer service,
                Yatra Elevators sets the standard that others aspire to reach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
