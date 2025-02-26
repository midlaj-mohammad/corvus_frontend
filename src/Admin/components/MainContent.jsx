import { TrendingUp, People, ShoppingCart, Chat } from "@mui/icons-material";

const MainContent = () => {
  const cards = [
    { title: "Weekly Sales", value: "714k", percent: "+2.6%", icon: <TrendingUp />, bg: "from-blue-500 to-blue-300", link: "/sales" },
    { title: "New Users", value: "1.35m", percent: "-0.1%", icon: <People />, bg: "from-purple-500 to-purple-300", link: "/users" },
    { title: "Purchase Orders", value: "1.72m", percent: "+2.8%", icon: <ShoppingCart />, bg: "from-yellow-500 to-yellow-300", link: "/orders" },
    { title: "Messages", value: "234", percent: "+3.6%", icon: <Chat />, bg: "from-red-500 to-red-300", link: "/messages" },
  ];

  return (
    <div className="p-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <a 
            key={index} 
            href={card.link} 
            className={`p-6 rounded-xl shadow-lg bg-gradient-to-br ${card.bg} text-white flex items-center space-x-4 transition-transform transform hover:scale-105 hover:shadow-2xl`}
          >
            <div className="text-4xl">{card.icon}</div>
            <div>
              <p className="text-sm opacity-80">{card.title}</p>
              <h3 className="text-2xl font-bold">{card.value}</h3>
              <p className={`text-sm font-semibold ${card.percent.startsWith("+") ? "text-green-200" : "text-red-200"}`}>
                {card.percent}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
