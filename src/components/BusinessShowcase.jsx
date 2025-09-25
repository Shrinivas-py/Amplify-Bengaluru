import React from 'react';

const BusinessShowcase = () => {
  const businesses = [
    {
      id: 1,
      name: "Chai Point Express",
      category: "Café",
      description: "Authentic Indian chai and snacks in the heart of Bengaluru",
      icon: "☕"
    },
    {
      id: 2,
      name: "Mysore Silk Emporium",
      category: "Fashion",
      description: "Traditional silk sarees and handloom textiles",
      icon: "👗"
    },
    {
      id: 3,
      name: "Bangalore Books & Brews",
      category: "Bookstore",
      description: "Independent bookstore with artisanal coffee",
      icon: "📚"
    },
    {
      id: 4,
      name: "Garden City Organics",
      category: "Grocery",
      description: "Fresh organic produce from local farms",
      icon: "🥬"
    },
    {
      id: 5,
      name: "Vidhana Soudha Crafts",
      category: "Handicrafts",
      description: "Traditional Karnataka handicrafts and souvenirs",
      icon: "🎨"
    },
    {
      id: 6,
      name: "South Indian Delights",
      category: "Restaurant",
      description: "Authentic South Indian cuisine and tiffin varieties",
      icon: "🍽️"
    }
  ];

  return (
    <section className="businesses-section">
      <div className="container">
        <h2 className="section-title">Featured Partner Businesses</h2>
        <div className="businesses-grid">
          {businesses.map(business => (
            <div key={business.id} className="business-card">
              <div className="business-image">
                {business.icon}
              </div>
              <div className="business-info">
                <h3>{business.name}</h3>
                <p>{business.description}</p>
                <span className="business-category">{business.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessShowcase;