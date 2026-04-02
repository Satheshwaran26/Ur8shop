import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const initialCart = [
  { product: products[0], size: "M", qty: 1 },
  { product: products[2], size: "32", qty: 2 },
  { product: products[5], size: "L", qty: 1 },
];

const Cart = () => {
  const [items, setItems] = useState(initialCart);

  const updateQty = (idx: number, delta: number) => {
    setItems((prev) =>
      prev.map((item, i) => i === idx ? { ...item, qty: Math.max(1, item.qty + delta) } : item)
    );
  };
  const remove = (idx: number) => setItems((prev) => prev.filter((_, i) => i !== idx));
  const subtotal = items.reduce((s, i) => s + i.product.price * i.qty, 0);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main className="section-padding py-8 sm:py-12">
        <h1 className="font-heading text-2xl sm:text-3xl mb-8">Shopping Cart</h1>
        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">Your cart is empty</p>
            <Link to="/products" className="inline-block bg-foreground text-background px-6 py-3 text-sm font-medium tracking-wider uppercase rounded">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="lg:flex lg:gap-12">
            <div className="flex-1 space-y-0">
              <div className="hidden sm:grid grid-cols-12 gap-4 text-xs font-semibold tracking-widest uppercase text-muted-foreground pb-3 border-b border-border">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Qty</div>
                <div className="col-span-3 text-right">Total</div>
                <div className="col-span-1" />
              </div>
              {items.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-4 items-center py-5 border-b border-border">
                  <div className="col-span-12 sm:col-span-6 flex gap-4">
                    <Link to={`/product/${item.product.id}`} className="w-20 h-24 bg-secondary rounded overflow-hidden flex-shrink-0">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </Link>
                    <div className="space-y-1">
                      <Link to={`/product/${item.product.id}`} className="text-sm font-medium text-foreground hover:underline">{item.product.name}</Link>
                      <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                      <p className="text-sm font-medium">₹{item.product.price.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-2 flex justify-center">
                    <div className="flex items-center border border-border rounded">
                      <button onClick={() => updateQty(idx, -1)} className="px-2 py-1"><Minus size={14} /></button>
                      <span className="w-8 text-center text-sm">{item.qty}</span>
                      <button onClick={() => updateQty(idx, 1)} className="px-2 py-1"><Plus size={14} /></button>
                    </div>
                  </div>
                  <div className="col-span-4 sm:col-span-3 text-right text-sm font-semibold">
                    ₹{(item.product.price * item.qty).toLocaleString()}
                  </div>
                  <div className="col-span-2 sm:col-span-1 text-right">
                    <button onClick={() => remove(idx)} className="text-muted-foreground hover:text-foreground transition-colors"><X size={16} /></button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:w-80 mt-8 lg:mt-0">
              <div className="bg-secondary rounded p-6 space-y-4">
                <h3 className="font-heading text-lg">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>₹{subtotal.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="text-muted-foreground">Calculated at checkout</span></div>
                </div>
                <div className="border-t border-border pt-4 flex justify-between font-semibold">
                  <span>Total</span><span>₹{subtotal.toLocaleString()}</span>
                </div>
                <button className="w-full bg-foreground text-background py-3 rounded text-sm font-medium tracking-wider uppercase hover:bg-foreground/90 transition-colors">
                  Proceed to Checkout
                </button>
                <Link to="/products" className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
