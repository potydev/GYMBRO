import { 
  Users, 
  CreditCard, 
  BarChart3, 
  Shield, 
  Clock, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Manajemen Member",
    description: "Kelola data member dengan mudah. Daftarkan, edit, dan pantau status membership.",
  },
  {
    icon: CreditCard,
    title: "Pembayaran Fleksibel",
    description: "Sistem pembayaran di tempat yang mudah. Konfirmasi cepat oleh admin atau kasir.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Analytics",
    description: "Pantau statistik gym: total member, pendapatan, dan membership aktif secara real-time.",
  },
  {
    icon: Shield,
    title: "Keamanan Terjamin",
    description: "Data member aman dengan enkripsi dan Row Level Security. Role-based access control.",
  },
  {
    icon: Clock,
    title: "Notifikasi Otomatis",
    description: "Member dapat melihat status pembayaran dan sisa masa aktif membership.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Akses dari mana saja. Desain responsif untuk desktop dan mobile.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide mb-4">
            FITUR <span className="gradient-text">UNGGULAN</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Semua yang Anda butuhkan untuk mengelola gym profesional dalam satu platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
