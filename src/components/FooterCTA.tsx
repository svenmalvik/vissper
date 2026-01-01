import { Link } from "react-router-dom";
import { Download } from "lucide-react";

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
            Ready to Transform Your Meetings?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Download Vissper Cloud and start capturing insights from your meetings today. Free to get started.
          </p>

          <Link
            to="/vissper/download"
            className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
          >
            <Download className="h-5 w-5" />
            Download for Mac
          </Link>

          {/* Footer info */}
          <div className="border-t border-white/20 pt-10 mt-16">
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
