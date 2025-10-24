import { Link } from "react-router-dom";

const FooterCTA = () => {
  return (
    <section className="py-32 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Level Up Your Team&apos;s Generative AI Skills
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Hands-on cohorts and private build days that teach developers how to architect, ship, and iterate on smart AI meeting companions.
          </p>

          <div className="text-center mb-16">
            <div className="glass-dark border-2 border-white/30 rounded-2xl p-10 max-w-4xl mx-auto shadow-glow">
              <div className="space-y-8">
                <p className="text-3xl md:text-4xl text-primary-foreground font-bold">
                  Partnering with engineering teams to master applied generative AI builds.
                </p>
                <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                  From architecture deep dives to evaluation playbooks, we co-build the companion alongside your developers so the skills stick long after the workshop.
                </p>
                <div className="grid gap-4 md:grid-cols-3 text-left text-primary-foreground/80">
                  <div className="bg-white/10 rounded-xl p-5 border border-white/10">
                    <p className="text-lg font-semibold text-primary-foreground">Integration Workshops</p>
                    <p className="text-sm mt-2">
                      Map current workflows and design the learning plan your developers can apply immediately.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-5 border border-white/10">
                    <p className="text-lg font-semibold text-primary-foreground">Secure Deployments</p>
                    <p className="text-sm mt-2">
                      Align with your technical stack, provider policies, and governance expectations from day one.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-5 border border-white/10">
                    <p className="text-lg font-semibold text-primary-foreground">Custom Integrations</p>
                    <p className="text-sm mt-2">
                      Embed the companion alongside internal tools, APIs, and proprietary knowledge bases while explaining the generative AI trade-offs.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <Link
                    to="/workshop"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-lg font-semibold text-primary shadow-lg shadow-accent/40 transition hover:bg-accent/90"
                  >
                    Explore the Workshop
                  </Link>
                  <p className="text-sm md:text-base text-primary-foreground/70">
                    Prefer a discovery call? I&apos;ll help scope a pilot tailored to your teams.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer info */}
          <div className="border-t border-white/20 pt-10">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-primary-foreground/80 md:flex-row">
              <p className="text-center md:text-left">
                Enterprise-grade meeting intelligence, crafted by{" "}
                <a
                  href="https://www.linkedin.com/in/svenmalvik/"
                  className="underline decoration-primary-foreground/40 hover:decoration-primary-foreground"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sven Malvik
                </a>
              </p>
              <Link
                to="/privacy"
                className="underline decoration-primary-foreground/40 hover:decoration-primary-foreground"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
