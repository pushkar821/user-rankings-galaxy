import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LeaderboardEntry from "@/components/LeaderboardEntry";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

const MOCK_DATA = [
  { name: "Alex Thompson", score: 2500, avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Sarah Chen", score: 2350, avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "Michael Rodriguez", score: 2200, avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "Emma Wilson", score: 2100, avatar: "https://i.pravatar.cc/150?img=4" },
  { name: "James Lee", score: 2000, avatar: "https://i.pravatar.cc/150?img=5" },
  { name: "Lisa Anderson", score: 1950, avatar: "https://i.pravatar.cc/150?img=6" },
  { name: "David Kim", score: 1900, avatar: "https://i.pravatar.cc/150?img=7" },
  { name: "Anna Martinez", score: 1850, avatar: "https://i.pravatar.cc/150?img=8" },
  { name: "Chris Taylor", score: 1800, avatar: "https://i.pravatar.cc/150?img=9" },
  { name: "Sophie Brown", score: 1750, avatar: "https://i.pravatar.cc/150?img=10" },
];

const MOCK_BADGES = [
  { id: 1, name: "Early Adopter", description: "Joined in the first month", icon: "🌟" },
  { id: 2, name: "Top Contributor", description: "Made 100+ contributions", icon: "👑" },
  { id: 3, name: "Problem Solver", description: "Solved 50+ challenges", icon: "🎯" },
];

const MOCK_AWARDS = [
  { id: 1, name: "Best Performance 2023", date: "2023-12-01", icon: "🏆" },
  { id: 2, name: "Innovation Award", date: "2023-11-15", icon: "💡" },
  { id: 3, name: "Community Champion", date: "2023-10-30", icon: "🌟" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 text-xs font-semibold bg-white/10 rounded-full text-white/60">
            Profile
          </span>
          <h1 className="text-4xl font-bold text-white">Your Progress</h1>
          <p className="text-white/60">Track your achievements</p>
        </div>

        <Tabs defaultValue="ranks" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ranks">Ranks</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="awards">Awards</TabsTrigger>
          </TabsList>

          <TabsContent value="ranks" className="space-y-3">
            {MOCK_DATA.map((player, index) => (
              <LeaderboardEntry
                key={player.name}
                rank={index + 1}
                name={player.name}
                score={player.score}
                avatar={player.avatar}
              />
            ))}
          </TabsContent>

          <TabsContent value="badges" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_BADGES.map((badge) => (
              <div
                key={badge.id}
                className="p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{badge.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white">{badge.name}</h3>
                    <p className="text-sm text-white/60">{badge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="awards" className="space-y-4">
            {MOCK_AWARDS.map((award) => (
              <div
                key={award.id}
                className="p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 transition-all duration-300 hover:scale-[1.02] animate-fade-in flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{award.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white">{award.name}</h3>
                    <p className="text-sm text-white/60">
                      {new Date(award.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Trophy className="w-5 h-5 text-leader-gold" />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;