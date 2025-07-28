import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  description?: string;
  isNew?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  image, 
  rating, 
  reviewCount, 
  description,
  isNew = false 
}: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-card hover:scale-105 overflow-hidden">
      <div className="relative overflow-hidden">
        {isNew && (
          <span className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
            New
          </span>
        )}
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="magical" size="sm" className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-2">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
        
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-3 w-3 ${
                i < Math.floor(rating) 
                  ? "text-yellow-400 fill-current" 
                  : "text-gray-300"
              }`} 
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({reviewCount})
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-primary">
            ${price.toFixed(2)}
          </span>
          <Button variant="elegant" size="sm">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;