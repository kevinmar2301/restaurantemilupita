import { useState } from 'react';
import { Icon } from 'lucide-react';
import './App.css'; // Import Tailwind CSS

function App() {
  const [menuItems, setMenuItems] = useState([
    { name: 'Tacos', price: 10, description: 'Delicious carne asada tacos', icon: 'taco' },
    { name: 'Enchiladas', price: 12, description: 'Corn tortillas filled with chicken', icon: 'dish' },
    { name: 'Quesadillas', price: 8, description: 'Cheese filled tortilla', icon: 'cheese' }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-4">Mi Lupita Restaurant</h1>
      <div className="menu">
        {menuItems.map((item) => (
          <div key={item.name} className="menu-item border p-4 rounded-lg shadow-md my-2 flex items-center">
            <Icon icon={item.icon} className="w-8 h-8 mr-2" />
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <span className="text-green-600 font-bold">${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;