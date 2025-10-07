const ComparisonSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            From This... To This
          </h2>
          <p className="text-xl text-muted-foreground">
            See the transformation in action
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="animate-fade-in-up">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-destructive/10 text-destructive font-semibold rounded-full text-sm">
                Before: Raw Recording
              </span>
            </div>
            <div className="bg-muted/50 rounded-xl p-6 border-2 border-destructive/20">
              <pre className="text-sm text-muted-foreground font-mono leading-relaxed overflow-x-auto">
{`um so yeah the new feature uh we should
probably ship by friday screenshot taken here
maybe we could use redis for caching???
john do you think thats good`}
              </pre>
            </div>
          </div>

          {/* After */}
          <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-success/10 text-success font-semibold rounded-full text-sm">
                After: AI-Enhanced
              </span>
            </div>
            <div className="bg-card rounded-xl p-6 border-2 border-success/20 shadow-card">
              <div className="prose prose-sm max-w-none">
                <h3 className="text-lg font-bold text-foreground mb-3">Summary</h3>
                <p className="text-muted-foreground mb-4">
                  Team discussed shipping the new caching feature by Friday using Redis. 
                  John will evaluate feasibility.
                </p>
                
                <h3 className="text-lg font-bold text-foreground mb-3">Full Transcription</h3>
                <p className="text-foreground mb-3">
                  The new feature should ship by Friday. We could use Redis for caching.
                </p>
                
                <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground mb-3">
                  📸 Screenshot-2025-10-07_14-32-15.png
                </div>
                
                <p className="text-foreground">
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
