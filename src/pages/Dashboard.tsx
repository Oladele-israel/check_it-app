import { User, Box, AlertCircle } from "lucide-react";
import Card from "../components/Card";

const CardData = [
  {
    title: "Inventory",
    description: "Total Products in Stock",
    value: 120,
    icon: Box,
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-700",
  },
  {
    title: "Expiring Soon",
    description: "Products Nearing Expiration",
    value: 8,
    icon: AlertCircle,
    gradientFrom: "from-red-500",
    gradientTo: "to-red-700",
  },
];

const Dashboard = () => {
  return (
    <div className="w-screen">
      <UserIcon />
      <div className="grid gap-6 md:grid-cols-2 p-4 w-[94%]">
        {/* Map through CardData array to render Card components */}
        {CardData.map((card, index) => (
          <Card
            key={index} // Always use a unique key when rendering list items
            title={card.title}
            description={card.description}
            value={card.value}
            icon={card.icon}
            gradientFrom={card.gradientFrom}
            gradientTo={card.gradientTo}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

const UserIcon = () => {
  return (
    <div className="hidden lg:flex justify-end items-center gap-2 p-4 w-[93%]">
      <User className="w-8 h-8 rounded-full bg-gray-200 p-1" />
    </div>
  );
};
