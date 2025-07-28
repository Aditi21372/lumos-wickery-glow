import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock, User } from "lucide-react";
import candleCollection from "@/assets/candle-collection.jpg";
import candleMaking from "@/assets/candle-making.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: "1",
      title: "The Art of Candle Care: Making Your Candles Last Longer",
      excerpt: "Discover the secrets to extending your candle's life and maintaining the perfect burn every time.",
      image: candleCollection,
      date: "2024-01-15",
      readTime: "5 min read",
      author: "Sarah Mitchell",
      category: "Care Tips"
    },
    {
      id: "2",
      title: "Creating a Cozy Home Sanctuary with Candlelight",
      excerpt: "Transform any space into a peaceful retreat with the magic of thoughtfully placed candles.",
      image: candleMaking,
      date: "2024-01-10",
      readTime: "7 min read",
      author: "Emma Thompson",
      category: "Home Styling"
    },
    {
      id: "3",
      title: "The Science Behind Natural Soy Wax: Why We Choose Quality",
      excerpt: "Learn about the benefits of soy wax and why it's the superior choice for eco-conscious candle lovers.",
      image: candleCollection,
      date: "2024-01-05",
      readTime: "6 min read",
      author: "Dr. James Wilson",
      category: "Education"
    },
    {
      id: "4",
      title: "Seasonal Scenting: Choosing the Perfect Fragrance for Every Moment",
      excerpt: "A guide to selecting candle fragrances that complement the seasons and your mood.",
      image: candleMaking,
      date: "2023-12-28",
      readTime: "4 min read",
      author: "Sarah Mitchell",
      category: "Fragrance Guide"
    },
    {
      id: "5",
      title: "Behind the Scenes: Our Handcrafted Candle Making Process",
      excerpt: "Take a journey through our studio and discover the passion behind every Lumos Wickery candle.",
      image: candleCollection,
      date: "2023-12-20",
      readTime: "8 min read",
      author: "The Lumos Team",
      category: "Behind the Scenes"
    },
    {
      id: "6",
      title: "The Perfect Gift: How to Choose Candles for Your Loved Ones",
      excerpt: "Expert tips for selecting the ideal candle gifts that will delight and inspire.",
      image: candleMaking,
      date: "2023-12-15",
      readTime: "5 min read",
      author: "Emma Thompson",
      category: "Gift Guide"
    }
  ];

  const categories = [
    "All Posts",
    "Care Tips", 
    "Home Styling",
    "Education",
    "Fragrance Guide",
    "Behind the Scenes",
    "Gift Guide"
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Lumos Journal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stories, tips, and inspiration from the world of handcrafted candles. 
            Discover how to create magical moments in your everyday life.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All Posts" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="overflow-hidden group hover:shadow-card transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <span className="bg-accent/20 text-accent-foreground px-2 py-1 rounded text-xs">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(blogPosts[0].date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>By {blogPosts[0].author}</span>
                  </div>
                  <Button variant="warm" asChild>
                    <Link to={`/blog/${blogPosts[0].id}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-card transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-card/90 text-card-foreground px-2 py-1 rounded text-xs">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Posts
          </Button>
        </div>

        {/* Newsletter CTA */}
        <section className="mt-16 bg-gradient-warm rounded-lg p-8 text-center">
          <h3 className="font-serif text-2xl font-bold text-white mb-4">
            Never Miss a Story
          </h3>
          <p className="text-white/90 mb-6 max-w-lg mx-auto">
            Subscribe to our newsletter for the latest candle care tips, 
            home styling inspiration, and behind-the-scenes stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20 bg-white/20 text-white placeholder-white/70"
            />
            <Button variant="elegant" className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;