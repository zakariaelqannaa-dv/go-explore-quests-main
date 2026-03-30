import { useState, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  Plane, Hotel, Calendar, Users, CreditCard, Check, AlertCircle,
  MapPin, Clock, DollarSign, Shield, Star, Mail, Phone
} from "lucide-react";
import { formatMoney } from "@/data/catalog";
import { toast } from "sonner";

interface BookingDetails {
  destination: string;
  checkIn: string;
  checkOut: string;
  travelers: number;
  rooms: number;
  flightClass: "economy" | "premium" | "business";
  hotelCategory: "budget" | "standard" | "luxury";
}

interface BookingStep {
  id: number;
  title: string;
  description: string;
}

const bookingSteps: BookingStep[] = [
  { id: 1, title: "Travel Details", description: "Enter your trip information" },
  { id: 2, title: "Flight Selection", description: "Choose your flights" },
  { id: 3, title: "Hotel Selection", description: "Pick your accommodation" },
  { id: 4, title: "Extras", description: "Add activities and insurance" },
  { id: 5, title: "Payment", description: "Complete your booking" },
];

export function BookingModal({ 
  open, 
  onOpenChange, 
  placeName, 
  basePrice 
}: { 
  open: boolean; 
  onOpenChange: (open: boolean) => void;
  placeName: string;
  basePrice: number;
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    destination: placeName,
    checkIn: "",
    checkOut: "",
    travelers: 2,
    rooms: 1,
    flightClass: "economy",
    hotelCategory: "standard",
  });

  const calculateTotal = useCallback(() => {
    let total = basePrice;
    
    // Flight class multiplier
    if (bookingDetails.flightClass === "premium") total *= 1.4;
    if (bookingDetails.flightClass === "business") total *= 2.2;
    
    // Hotel category
    if (bookingDetails.hotelCategory === "luxury") total *= 1.6;
    if (bookingDetails.hotelCategory === "budget") total *= 0.7;
    
    // Travelers
    total *= bookingDetails.travelers;
    
    // Taxes and fees
    total *= 1.15;
    
    return Math.round(total);
  }, [basePrice, bookingDetails]);

  const handleBook = async () => {
    setIsProcessing(true);
    
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setBookingComplete(true);
    toast.success("Booking confirmed! Check your email for details.");
    
    // Reset after 5 seconds
    setTimeout(() => {
      setBookingComplete(false);
      setCurrentStep(1);
      onOpenChange(false);
    }, 5000);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  if (bookingComplete) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl">
          <div className="text-center py-8">
            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-muted-foreground mb-6">
              Your trip to {placeName} has been booked successfully.
            </p>
            <Card className="bg-muted">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Confirmation Number</p>
                    <p className="font-mono font-bold">GE-{String(Math.random().toString(36).substr(2, 9).toUpperCase())}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total Paid</p>
                    <p className="font-bold">{formatMoney(calculateTotal())}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 flex gap-4 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Confirmation email sent
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                24/7 support available
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plane className="h-5 w-5" />
            Book Your Trip to {placeName}
          </DialogTitle>
          <DialogDescription>
            Complete your booking in {bookingSteps.length} easy steps
          </DialogDescription>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="py-4">
          <div className="flex justify-between mb-2">
            {bookingSteps.map((step) => (
              <div key={step.id} className="flex flex-col items-center flex-1">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step.id 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
                </div>
                <span className="text-xs mt-1 text-center hidden md:block">{step.title}</span>
              </div>
            ))}
          </div>
          <Progress value={(currentStep / bookingSteps.length) * 100} className="h-2" />
        </div>

        {/* Step Content */}
        <div className="py-4">
          {currentStep === 1 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Travel Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Check-in Date</Label>
                  <Input 
                    type="date" 
                    value={bookingDetails.checkIn}
                    onChange={(e) => setBookingDetails({...bookingDetails, checkIn: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Check-out Date</Label>
                  <Input 
                    type="date" 
                    value={bookingDetails.checkOut}
                    onChange={(e) => setBookingDetails({...bookingDetails, checkOut: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Travelers</Label>
                  <Input 
                    type="number" 
                    min="1" 
                    max="10"
                    value={bookingDetails.travelers}
                    onChange={(e) => setBookingDetails({...bookingDetails, travelers: parseInt(e.target.value) || 1})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Rooms</Label>
                  <Input 
                    type="number" 
                    min="1" 
                    max="5"
                    value={bookingDetails.rooms}
                    onChange={(e) => setBookingDetails({...bookingDetails, rooms: parseInt(e.target.value) || 1})}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Select Flight Class</h3>
              <div className="grid gap-3">
                {[
                  { id: "economy", label: "Economy", price: "Included", features: ["23kg checked bag", "Standard seat", "In-flight meal"] },
                  { id: "premium", label: "Premium Economy", price: "+40%", features: ["Extra legroom", "Priority boarding", "Enhanced meal", "Amenity kit"] },
                  { id: "business", label: "Business Class", price: "+120%", features: ["Lie-flat seat", "Lounge access", "Gourmet dining", "Chauffeur service"] },
                ].map((option) => (
                  <Card 
                    key={option.id}
                    className={`cursor-pointer transition-all ${bookingDetails.flightClass === option.id ? "border-primary bg-primary/5" : ""}`}
                    onClick={() => setBookingDetails({...bookingDetails, flightClass: option.id as "economy" | "premium" | "business"})}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">{option.label}</h4>
                          <p className="text-sm text-muted-foreground">{option.price}</p>
                          <div className="flex gap-2 mt-2">
                            {option.features.map((feature, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">{feature}</Badge>
                            ))}
                          </div>
                        </div>
                        {bookingDetails.flightClass === option.id && (
                          <Check className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Select Hotel Category</h3>
              <div className="grid gap-3">
                {[
                  { id: "budget", label: "Budget", price: "-30%", rating: 3, features: ["Clean rooms", "WiFi", "Central location"] },
                  { id: "standard", label: "Standard (Included)", price: "Included", rating: 4, features: ["Comfortable rooms", "WiFi", "Breakfast", "24h reception"] },
                  { id: "luxury", label: "Luxury", price: "+60%", rating: 5, features: ["Premium rooms", "Spa access", "Fine dining", "Concierge", "Airport transfer"] },
                ].map((option) => (
                  <Card 
                    key={option.id}
                    className={`cursor-pointer transition-all ${bookingDetails.hotelCategory === option.id ? "border-primary bg-primary/5" : ""}`}
                    onClick={() => setBookingDetails({...bookingDetails, hotelCategory: option.id as "budget" | "standard" | "luxury"})}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">{option.label}</h4>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-3 w-3 ${i < option.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{option.price}</p>
                          <div className="flex gap-2 mt-2">
                            {option.features.map((feature, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">{feature}</Badge>
                            ))}
                          </div>
                        </div>
                        {bookingDetails.hotelCategory === option.id && (
                          <Check className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Add Extras</h3>
              <div className="space-y-3">
                {[
                  { id: "insurance", label: "Travel Insurance", price: 45, icon: Shield, description: "Comprehensive coverage for trip cancellation, medical, and baggage" },
                  { id: "airport", label: "Airport Transfer", price: 35, icon: MapPin, description: "Private car from airport to your hotel" },
                  { id: "city-tour", label: "City Tour Package", price: 89, icon: Clock, description: "Full day guided tour of main attractions" },
                  { id: "dining", label: "Fine Dining Experience", price: 120, icon: DollarSign, description: "3-course dinner at Michelin-starred restaurant" },
                ].map((extra) => (
                  <Card key={extra.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <extra.icon className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <h4 className="font-medium">{extra.label}</h4>
                            <p className="text-sm text-muted-foreground">{extra.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{formatMoney(extra.price)}</p>
                          <Button variant="outline" size="sm" className="mt-1">Add</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Payment Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Card Number</Label>
                  <Input placeholder="4242 4242 4242 4242" />
                </div>
                <div className="space-y-2">
                  <Label>Cardholder Name</Label>
                  <Input placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label>Expiry Date</Label>
                  <Input placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label>CVV</Label>
                  <Input placeholder="123" />
                </div>
              </div>
              
              <Separator />
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Price Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Base Price</span>
                    <span>{formatMoney(basePrice)}</span>
                  </div>
                  {bookingDetails.flightClass !== "economy" && (
                    <div className="flex justify-between text-muted-foreground">
                      <span>Flight Upgrade ({bookingDetails.flightClass})</span>
                      <span>{formatMoney(basePrice * (bookingDetails.flightClass === "premium" ? 0.4 : 1.2))}</span>
                    </div>
                  )}
                  {bookingDetails.hotelCategory !== "standard" && (
                    <div className="flex justify-between text-muted-foreground">
                      <span>Hotel {bookingDetails.hotelCategory}</span>
                      <span>{formatMoney(basePrice * (bookingDetails.hotelCategory === "luxury" ? 0.6 : -0.3))}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Travelers ({bookingDetails.travelers})</span>
                    <span>× {bookingDetails.travelers}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Subtotal</span>
                    <span>{formatMoney(calculateTotal() / 1.15)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Taxes & Fees (15%)</span>
                    <span>{formatMoney(calculateTotal() - calculateTotal() / 1.15)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatMoney(calculateTotal())}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                Your payment is secure and encrypted
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4 border-t">
          <Button 
            variant="outline" 
            onClick={prevStep}
            disabled={currentStep === 1 || isProcessing}
          >
            Back
          </Button>
          
          {currentStep < 5 ? (
            <Button onClick={nextStep}>
              Continue
            </Button>
          ) : (
            <Button onClick={handleBook} disabled={isProcessing}>
              {isProcessing ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Pay {formatMoney(calculateTotal())}
                </>
              )}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
