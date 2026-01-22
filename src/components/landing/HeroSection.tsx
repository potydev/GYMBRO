import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Users, Trophy, Zap } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6 animate-fade-in">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Sistem Manajemen Gym #1 di Indonesia</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wider mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="gradient-text">GYM</span>BRO
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Platform lengkap untuk mengelola gym Anda. Dari pendaftaran member hingga pembayaran — semua dalam satu tempat.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/register">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Mulai Gratis
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="glass" size="xl" className="w-full sm:w-auto">
              <Play className="w-5 h-5" />
              Lihat Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl md:text-4xl">10K+</span>
              </div>
              <p className="text-muted-foreground text-sm">Member Aktif</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl md:text-4xl">500+</span>
              </div>
              <p className="text-muted-foreground text-sm">Gym Partner</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl md:text-4xl">99%</span>
              </div>
              <p className="text-muted-foreground text-sm">Uptime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
