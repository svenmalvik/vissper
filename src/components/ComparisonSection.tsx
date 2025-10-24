const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            From This... To This
          </h2>
          <p className="text-xl text-muted-foreground">
            See the AI transformation in action
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block px-5 py-2.5 bg-destructive/10 text-destructive font-semibold rounded-xl text-sm border border-destructive/20">
                Before: Raw Recording
              </span>
            </div>
            <div className="glass rounded-2xl p-8 border-2 border-destructive/20 hover:border-destructive/30 transition-colors">
              <pre className="text-sm text-muted-foreground font-mono leading-relaxed overflow-x-auto">
{`um so yeah the new caching thing uh we should
ship by friday right? screenshot here somewhere
maybe we could use redis for caching???
john can you check the sizing or something?
someone please send that screenshot to qa later`}
              </pre>
            </div>
          </div>

          {/* After */}
          <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="mb-6">
              <span className="inline-block px-5 py-2.5 bg-success/10 text-success font-semibold rounded-xl text-sm border border-success/20">
                After: AI-Enhanced
              </span>
            </div>
            <div className="glass rounded-2xl p-8 border-2 border-success/20 shadow-card hover:border-success/30 transition-colors">
              <div className="prose prose-sm max-w-none">
                <h3 className="text-xl font-bold text-foreground mb-4">Summary</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Team discussed shipping the new caching feature by Friday using Redis. 
                  John will evaluate feasibility.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-4">Main Points</h3>
                <ul className="mb-6 space-y-2 text-muted-foreground">
                  <li>- Target launch date: Friday for the caching feature.</li>
                  <li>- Redis proposed as the preferred cache engine.</li>
                  <li>- Screenshot captured to show the UI flow under review.</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mb-4">Action Items</h3>
                <ul className="mb-6 space-y-2 text-muted-foreground">
                  <li>- John to validate Redis sizing and confirm readiness.</li>
                  <li>- Product to share the referenced screenshot with QA.</li>
                </ul>
                
                <h3 className="text-xl font-bold text-foreground mb-4">Full Transcription</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The new feature should ship by Friday. We could use Redis for caching.
                </p>
                
                <div className="bg-muted/40 p-4 rounded-xl text-sm text-muted-foreground mb-4 border border-border">
                  📸 Screenshot-2025-10-07_14-32-15.png
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  John, do you think that's a good approach?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
