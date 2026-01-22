import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Dumbbell, LogOut, Users, CreditCard, TrendingUp, Package } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      } else {
        setUser(session.user);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/login");
      else setUser(session.user);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg gradient-primary">
              <Dumbbell className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl tracking-wider">GYMBRO</span>
          </div>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Keluar
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl mb-2">SELAMAT DATANG</h1>
        <p className="text-muted-foreground mb-8">
          {user?.user_metadata?.full_name || user?.email}
        </p>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Users, label: "Total Member", value: "0", color: "text-blue-500" },
            { icon: CreditCard, label: "Pembayaran Pending", value: "0", color: "text-yellow-500" },
            { icon: TrendingUp, label: "Pendapatan Bulan Ini", value: "Rp 0", color: "text-green-500" },
            { icon: Package, label: "Paket Aktif", value: "3", color: "text-primary" },
          ].map((stat, i) => (
            <div key={i} className="stat-card">
              <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
              <p className="text-muted-foreground text-sm">{stat.label}</p>
              <p className="font-display text-2xl">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-xl p-6 text-center">
          <p className="text-muted-foreground">
            Dashboard lengkap dengan manajemen member, paket, dan pembayaran akan segera tersedia.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
