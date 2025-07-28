import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Leaf, Heart, Users, ArrowRight } from "lucide-react";
import candleMaking from "@/assets/candle-making.jpg";
import candleCollection from "@/assets/candle-collection.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary animate-glow" />
              <span className="text-primary font-serif text-lg">Our Story</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground">
              Illuminating Lives with 
              <span className="text-primary"> Handcrafted Magic</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every candle tells a story. Ours began with a simple desire to bring 
              warmth, comfort, and a touch of magic into everyday moments.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                How It All Began
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Lumos Wickery was born on a cold winter evening when our founder, Sarah, 
                was searching for the perfect candle to accompany her favorite book. 
                Frustrated by synthetic fragrances and poor-quality wax, she decided 
                to create her own.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                What started as a personal quest for the perfect candle evolved into 
                a passion for crafting candles that not only smell divine but also 
                burn clean and long, creating moments of peace and wonder.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The name "Lumos" comes from the light-giving spell in the Harry Potter 
                series - a reminder that even in the darkest moments, we can create 
                our own light and magic.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src={candleMaking} 
                alt="Candle making process" 
                className="rounded-lg shadow-card w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values & Commitment
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything we do is guided by our commitment to quality, 
              sustainability, and creating magical experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Eco-Friendly</h3>
                <p className="text-muted-foreground text-sm">
                  100% natural soy wax, cotton wicks, and recyclable packaging. 
                  No harmful chemicals or synthetic materials.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Handcrafted</h3>
                <p className="text-muted-foreground text-sm">
                  Every candle is hand-poured with care in small batches, 
                  ensuring quality and uniqueness in each piece.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Community</h3>
                <p className="text-muted-foreground text-sm">
                  Supporting local suppliers and giving back to our community 
                  through partnerships and charitable initiatives.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Magic</h3>
                <p className="text-muted-foreground text-sm">
                  Creating moments of wonder and tranquility through beautiful 
                  fragrances and warm, dancing flames.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={candleCollection} 
                alt="Our candle collection" 
                className="rounded-lg shadow-card w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Our Crafting Process
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">Sourcing</h3>
                    <p className="text-muted-foreground">We carefully select premium soy wax and natural fragrance oils from trusted suppliers.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">Blending</h3>
                    <p className="text-muted-foreground">Each fragrance is carefully blended to create unique, complex scent profiles.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">Hand-Pouring</h3>
                    <p className="text-muted-foreground">Wax is heated to the perfect temperature and hand-poured into each vessel with precision.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    4
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">Curing</h3>
                    <p className="text-muted-foreground">Candles cure for 48 hours to ensure optimal scent throw and burn quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Ready to Experience the Magic?
            </h2>
            <p className="text-white/90 text-lg">
              Discover our full collection of handcrafted candles and find 
              your perfect scent to illuminate any moment.
            </p>
            <Button variant="elegant" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/shop">
                Shop Our Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;