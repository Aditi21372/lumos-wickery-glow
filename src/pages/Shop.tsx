import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import singleCandle from "@/assets/single-candle.jpg";

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock product data
  const products = [
    {
      id: "1",
      name: "Midnight Aurora",
      price: 28.99,
      image: singleCandle,
      rating: 4.8,
      reviewCount: 124,
      description: "A mystical blend of lavender and vanilla with hints of sandalwood",
      category: "aromatherapy",
      isNew: true
    },
    {
      id: "2", 
      name: "Golden Hour",
      price: 32.99,
      image: singleCandle,
      rating: 4.9,
      reviewCount: 89,
      description: "Warm citrus and bergamot capturing the magic of sunset",
      category: "citrus"
    },
    {
      id: "3",
      name: "Forest Whisper",
      price: 26.99,
      image: singleCandle,
      rating: 4.7,
      reviewCount: 156,
      description: "Pine, cedar, and eucalyptus for a grounding forest experience",
      category: "woodsy"
    },
    {
      id: "4",
      name: "Enchanted Garden",
      price: 29.99,
      image: singleCandle,
      rating: 4.8,
      reviewCount: 203,
      description: "Fresh jasmine and white tea with subtle floral notes",
      category: "floral"
    },
    {
      id: "5",
      name: "Cozy Cabin",
      price: 31.99,
      image: singleCandle,
      rating: 4.6,
      reviewCount: 92,
      description: "Warm vanilla, cinnamon, and a touch of smoky cedar",
      category: "seasonal"
    },
    {
      id: "6",
      name: "Ocean Breeze",
      price: 27.99,
      image: singleCandle,
      rating: 4.5,
      reviewCount: 78,
      description: "Fresh marine scents with hints of sea salt and driftwood",
      category: "fresh"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Candles', count: products.length },
    { id: 'aromatherapy', name: 'Aromatherapy', count: products.filter(p => p.category === 'aromatherapy').length },
    { id: 'citrus', name: 'Citrus', count: products.filter(p => p.category === 'citrus').length },
    { id: 'floral', name: 'Floral', count: products.filter(p => p.category === 'floral').length },
    { id: 'woodsy', name: 'Woodsy', count: products.filter(p => p.category === 'woodsy').length },
    { id: 'seasonal', name: 'Seasonal', count: products.filter(p => p.category === 'seasonal').length },
    { id: 'fresh', name: 'Fresh', count: products.filter(p => p.category === 'fresh').length },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Magical Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handcrafted candles that transform any space into a sanctuary. 
            Each one carefully created with natural ingredients and enchanting fragrances.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Filter className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Categories</h3>
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-xs">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <SlidersHorizontal className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Price Range</h3>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-muted-foreground">Under $25</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-muted-foreground">$25 - $35</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-muted-foreground">$35+</span>
                  </label>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} products
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Product Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;