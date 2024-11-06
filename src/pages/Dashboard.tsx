import { User, Box, AlertCircle } from "lucide-react";

const CardData = [
  {
    title: "Inventory",
    description: "Total Products in Stock",
    value: 120,
    icon: Box,
    gradientFrom: "blue-500",
    gradientTo: "blue-700",
  },
  {
    title: "Expiring Soon",
    description: "Products Nearing Expiration",
    value: 8,
    icon: AlertCircle,
    gradientFrom: "red-500",
    gradientTo: "red-700",
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
    <div className="hidden lg:flex justify-end items-center gap-2 p-4 w-[93%] ">
      <User className="w-8 h-8 rounded-full bg-gray-200 p-1" />
    </div>
  );
};

const Card = ({
  title,
  description,
  value,
  icon: Icon, // Rename icon to Icon to use as a component
  gradientFrom,
  gradientTo,
}) => {
  return (
    <div
      className={`bg-gradient-to-r from-${gradientFrom} to-${gradientTo} text-white rounded-lg shadow-lg p-2 hover:shadow-2xl transition duration-300 transform hover:scale-95`}
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm mb-4 text-gray-200">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-4xl font-bold">{value}</span>
        <Icon className="w-12 h-12 opacity-75" />
      </div>
    </div>
  );
};
