import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Basic",
    duration: "1 Bulan",
    price: "150.000",
    popular: false,
    features: [
      "Akses gym setiap hari",
      "Locker harian",
      "Konsultasi awal gratis",
      "Akses area cardio & weights",
    ],
  },
  {
    name: "Pro",
    duration: "3 Bulan",
    price: "400.000",
    popular: true,
    features: [
      "Semua fitur Basic",
      "Locker permanen",
      "2x sesi personal trainer",
      "Akses kelas grup",
      "Handuk gratis",
    ],
  },
  {
    name: "Elite",
    duration: "6 Bulan",
    price: "700.000",
    popular: false,
    features: [
      "Semua fitur Pro",
      "Unlimited personal trainer",
      "Akses sauna & spa",
      "Suplemen bulanan",
      "Priority booking",
      "Kaos GYMBRO eksklusif",
    ],
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mb-4">
            PILIH <span className="gradient-text">PAKETMU</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Paket membership yang sesuai dengan kebutuhan dan budget Anda.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary shadow-lg shadow-primary/20 scale-105"
                  : "bg-card border border-border/50 hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full gradient-primary text-primary-foreground text-sm font-semibold">
                    <Star className="w-3 h-3" />
                    Popular
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-6 pt-2">
                <h3 className="font-display text-2xl tracking-wide mb-1">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm">{pkg.duration}</p>
                <div className="mt-4">
                  <span className="text-sm text-muted-foreground">Rp</span>
                  <span className="font-display text-5xl tracking-wide">{pkg.price}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/register">
                <Button
                  variant={pkg.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Pilih Paket
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          * Pembayaran dilakukan di tempat (Cash). Hubungi admin untuk informasi lebih lanjut.
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
