import LeaderboardEntry from "@/components/LeaderboardEntry";

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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 text-xs font-semibold bg-white/10 rounded-full text-white/60">
            Rankings
          </span>
          <h1 className="text-4xl font-bold text-white">Global Leaderboard</h1>
          <p className="text-white/60">Top players worldwide</p>
        </div>

        <div className="space-y-3">
          {MOCK_DATA.map((player, index) => (
            <LeaderboardEntry
              key={player.name}
              rank={index + 1}
              name={player.name}
              score={player.score}
              avatar={player.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;