import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import { Sparkles, Leaf, Heart, Award, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-candles.jpg";
import candleCollection from "@/assets/candle-collection.jpg";
import singleCandle from "@/assets/single-candle.jpg";

const Home = () => {
  // Mock product data
  const featuredProducts = [
    {
      id: "1",
      name: "Midnight Aurora",
      price: 28.99,
      image: singleCandle,
      rating: 4.8,
      reviewCount: 124,
      description: "A mystical blend of lavender and vanilla with hints of sandalwood",
      isNew: true
    },
    {
      id: "2", 
      name: "Golden Hour",
      price: 32.99,
      image: singleCandle,
      rating: 4.9,
      reviewCount: 89,
      description: "Warm citrus and bergamot capturing the magic of sunset"
    },
    {
      id: "3",
      name: "Forest Whisper",
      price: 26.99,
      image: singleCandle,
      rating: 4.7,
      reviewCount: 156,
      description: "Pine, cedar, and eucalyptus for a grounding forest experience"
    },
    {
      id: "4",
      name: "Enchanted Garden",
      price: 29.99,
      image: singleCandle,
      rating: 4.8,
      reviewCount: 203,
      description: "Fresh jasmine and white tea with subtle floral notes"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white space-y-6 max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary-glow animate-glow" />
            <span className="text-primary-glow font-serif text-lg">Lumos Wickery</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Handcrafted Candles to
            <span className="text-primary-glow"> Light Up Your Soul</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover our collection of magical, eco-friendly candles made with natural soy wax, 
            cotton wicks, and enchanting fragrances that transform any space into a sanctuary.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="magical" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/shop">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="elegant" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Lumos Wickery?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every candle is crafted with intention, using only the finest natural ingredients 
              and sustainable practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-card transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">100% Natural</h3>
                <p className="text-muted-foreground">
                  Made with pure soy wax, cotton wicks, and premium essential oils. 
                  No harmful chemicals or toxins.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-card transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Handcrafted</h3>
                <p className="text-muted-foreground">
                  Each candle is lovingly poured by hand in small batches, 
                  ensuring quality and uniqueness.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-card transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Long Lasting</h3>
                <p className="text-muted-foreground">
                  Our candles burn clean and even for 40-60 hours, 
                  filling your space with beautiful fragrance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Collection
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most beloved scents, each designed to create 
              a unique atmosphere and mood.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Our Magical Story
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Born from a love of cozy evenings and the magic of candlelight, 
                Lumos Wickery began in a small studio with a simple belief: 
                that every moment deserves to be illuminated with warmth and wonder.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our name, inspired by the light-giving spell from the wizarding world, 
                represents our mission to bring light, comfort, and a touch of magic 
                into your everyday life.
              </p>
              <Button variant="warm" size="lg" asChild>
                <Link to="/about">
                  Read Our Full Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={candleCollection} 
                alt="Candle collection" 
                className="rounded-lg shadow-card w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <Sparkles className="h-12 w-12 text-white mx-auto animate-glow" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Join Our Magical Community
            </h2>
            <p className="text-white/90 text-lg">
              Be the first to know about new collections, candle care tips, 
              and exclusive offers. Plus, get 10% off your first order!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20 bg-white/20 text-white placeholder-white/70"
              />
              <Button variant="elegant" size="lg" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;