
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
            Interested in Vispper?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Built in 48 hours at the hackathon with production-ready architecture.
            Powered by Azure OpenAI and native macOS technologies.
          </p>

          <div className="text-center mb-16">
            <div className="glass-dark border-2 border-white/30 rounded-2xl p-8 max-w-2xl mx-auto shadow-glow">
              <p className="text-2xl md:text-3xl text-primary-foreground font-bold mb-6">
                Want to get added to the waiting list?
              </p>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-3">
                Reach out via Slack:
              </p>
              <p className="text-3xl md:text-4xl text-accent font-black tracking-tight">
                @Sven Malvik
              </p>
            </div>
          </div>

          {/* Footer info */}
          <div className="border-t border-white/20 pt-10">
            <p className="text-primary-foreground/80 text-sm mb-6">
              Built with ❤️ by Sven Malvik for the Hackathon
            </p>
            <div className="flex justify-center gap-8 text-xs text-primary-foreground/70">
              <a href="mailto:sven.malvik@vipps.no" className="hover:text-primary-foreground transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
