import { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  MapPin, Hotel, Wallet, CalendarDays, Search, Compass, Camera,
  Building2, Sparkles, Mountain, CloudRain, Star, Globe, Ticket,
  Check, CheckCircle2, Sun, Coffee, Moon, Lightbulb, Languages,
  type LucideIcon,
} from "lucide-react";
import {
  catalog, allPlaces, travelStyles, transportModes,
  formatMoney, buildItinerary, buildWeatherSwitch, calculateTrip,
  type FlatPlace,
} from "@/data/catalog";
import { dailyPlans } from "@/data/daily-plans";
import { t, languageLabels, isRtl, type Lang } from "@/i18n/translations";
import { toast } from "sonner";

function getRegionEmoji(region: string): string {
  const emojis: Record<string, string> = {
    "Europe": "🇪🇺",
    "Asia": "🌏",
    "Africa": "🌍",
    "USA & Canada": "🌎",
  };
  return emojis[region] || "🌍";
}

function MetricCard({ title, value, icon: Icon, subtitle }: { title: string; value: string; icon: LucideIcon; subtitle?: string }) {
  return (
    <Card className="rounded-3xl border-0 shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <div className="h-11 w-11 rounded-2xl bg-muted flex items-center justify-center shrink-0">
            <Icon className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-xl font-semibold mt-1 text-foreground">{value}</p>
            {subtitle ? <p className="text-xs text-muted-foreground mt-1">{subtitle}</p> : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [region, setRegion] = useState("Europe");
  const [country, setCountry] = useState("All");
  const [placeId, setPlaceId] = useState("rome");
  const [days, setDays] = useState([5]);
  const [travelers, setTravelers] = useState(2);
  const [style, setStyle] = useState("standard");
  const [transport, setTransport] = useState("flight");
  const [search, setSearch] = useState("");
  const [completedMissions, setCompletedMissions] = useState<Set<string>>(new Set());
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const i = useCallback((key: string) => t(lang, key), [lang]);
  const rtl = isRtl(lang);

  const filteredPlaces = useMemo(() => {
    const query = search.trim().toLowerCase();
    return allPlaces.filter((place) => {
      const regionMatch = region === "All" || place.region === region;
      const countryMatch = country === "All" || place.country === country;
      const text = `${place.name} ${place.country} ${place.region} ${place.highlights.join(" ")} ${place.historical.join(" ")} ${place.museums.join(" ")}`.toLowerCase();
      return regionMatch && countryMatch && (!query || text.includes(query));
    });
  }, [region, country, search]);

  const countriesForRegion = useMemo(() => {
    const base = allPlaces.filter((place) => region === "All" || place.region === region).map((place) => place.country);
    return ["All", ...Array.from(new Set(base)).sort()];
  }, [region]);

  useEffect(() => {
    if (!countriesForRegion.includes(country)) setCountry("All");
  }, [countriesForRegion, country]);

  useEffect(() => {
    if (!filteredPlaces.length) return;
    if (!filteredPlaces.some((place) => place.id === placeId)) setPlaceId(filteredPlaces[0].id);
  }, [filteredPlaces, placeId]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [placeId]);

  const selected = useMemo(() => filteredPlaces.find((p) => p.id === placeId) || filteredPlaces[0] || allPlaces[0], [filteredPlaces, placeId]);
  const selectedImageCount = selected.imageUrls.length;
  const trip = useMemo(() => calculateTrip(selected, days[0], travelers, style, transport), [selected, days, travelers, style, transport]);
  const itinerary = useMemo(() => buildItinerary(selected, days[0]), [selected, days]);
  const weatherSwitch = useMemo(() => buildWeatherSwitch(selected), [selected]);
  const totalMissionReward = useMemo(() => itinerary.reduce((sum, item) => sum + item.reward, 0), [itinerary]);
  const TransportIcon = transportModes[transport].icon;
  const placeDailyPlans = dailyPlans[selected.id] || [];
  const displayDays = placeDailyPlans.slice(0, days[0]);

  const toggleMission = (key: string) => {
    setCompletedMissions((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
        toast.info("Mission unmarked");
      } else {
        next.add(key);
        toast.success("Mission completed! +points earned 🎉");
      }
      return next;
    });
  };

  const handleBook = () => {
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10" dir={rtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Language Switcher */}
        <div className="flex justify-end">
          <div className="flex items-center gap-2">
            <Languages className="h-4 w-4 text-muted-foreground" />
            <Select value={lang} onValueChange={(v) => setLang(v as Lang)}>
              <SelectTrigger className="w-[140px] rounded-2xl h-9 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {(Object.entries(languageLabels) as [Lang, string][]).map(([key, label]) => (
                  <SelectItem key={key} value={key}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Hero + Total */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <Card className="rounded-[28px] border-0 shadow-sm bg-primary text-primary-foreground overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-3xl">
                  <Badge className="bg-primary-foreground/10 text-primary-foreground border-0 rounded-full">{i("hero.badge")}</Badge>
                  <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4 font-display">{i("hero.title")}</h1>
                  <p className="text-primary-foreground/70 mt-4 text-sm md:text-base">{i("hero.desc")}</p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    <Badge variant="secondary" className="rounded-full">{i("hero.tag1")}</Badge>
                    <Badge variant="secondary" className="rounded-full">{i("hero.tag2")}</Badge>
                    <Badge variant="secondary" className="rounded-full">{i("hero.tag3")}</Badge>
                    <Badge variant="secondary" className="rounded-full">{i("hero.tag4")}</Badge>
                  </div>
                </div>
                <div className="hidden md:flex h-24 w-24 rounded-3xl bg-primary-foreground/10 items-center justify-center shrink-0">
                  <Compass className="h-10 w-10" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[28px] border-0 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{i("total.label")}</p>
                  <p className="text-3xl font-semibold text-foreground">{formatMoney(trip.total)}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-muted p-3">
                  <p className="text-muted-foreground">{i("total.per")}</p>
                  <p className="font-semibold text-foreground">{formatMoney(trip.perPerson)}</p>
                </div>
                <div className="rounded-2xl bg-muted p-3">
                  <p className="text-muted-foreground">{i("total.rewards")}</p>
                  <p className="font-semibold text-foreground">{totalMissionReward} pts</p>
                </div>
              </div>
              <Button className="w-full h-11 rounded-2xl" onClick={handleBook}>{i("book.btn")}</Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Trip Builder + Details */}
        <div className="grid gap-6 lg:grid-cols-[370px_1fr]">
          {/* Sidebar */}
          <Card className="rounded-[28px] border-0 shadow-sm h-fit">
            <CardHeader>
              <CardTitle className="font-display">{i("sidebar.title")}</CardTitle>
              <CardDescription>{i("sidebar.desc")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label>{i("search")}</Label>
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input className="pl-9 rounded-2xl" placeholder={i("search.placeholder")} value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                {filteredPlaces.length === 0 && <p className="text-sm text-destructive">{i("search.empty")}</p>}
              </div>

              <div className="space-y-2">
                <Label>{i("region")}</Label>
                <Select value={region} onValueChange={setRegion}>
                  <SelectTrigger className="rounded-2xl"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">{i("region.all")}</SelectItem>
                    {catalog.map((r) => <SelectItem key={r.id} value={r.name}>{r.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{i("country")}</Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger className="rounded-2xl"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {countriesForRegion.map((item) => (
                      <SelectItem key={item} value={item}>{item === "All" ? i("country.all") : item}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{i("place")}</Label>
                <Select value={selected.id} onValueChange={setPlaceId} disabled={filteredPlaces.length === 0}>
                  <SelectTrigger className="rounded-2xl"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {filteredPlaces.map((place) => (
                      <SelectItem key={place.id} value={place.id}>{place.name}, {place.country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>{i("trip.length")}</Label>
                  <span className="text-sm text-muted-foreground">{days[0]} {i("days")}</span>
                </div>
                <Slider value={days} onValueChange={setDays} min={2} max={12} step={1} />
              </div>

              <div className="space-y-2">
                <Label>{i("travelers")}</Label>
                <Input type="number" min={1} max={10} value={travelers} onChange={(e) => setTravelers(Math.max(1, Math.min(10, Number(e.target.value) || 1)))} className="rounded-2xl" />
              </div>

              <div className="space-y-2">
                <Label>{i("style")}</Label>
                <Select value={style} onValueChange={setStyle}>
                  <SelectTrigger className="rounded-2xl"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Object.entries(travelStyles).map(([key, val]) => (
                      <SelectItem key={key} value={key}>{val.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{i("transport")}</Label>
                <Select value={transport} onValueChange={setTransport}>
                  <SelectTrigger className="rounded-2xl"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Object.entries(transportModes).map(([key, val]) => (
                      <SelectItem key={key} value={key}>{val.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Main content */}
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <MetricCard title={i("metric.transport")} value={formatMoney(trip.mainTransport)} icon={TransportIcon} subtitle={transportModes[transport].label} />
              <MetricCard title={i("metric.accommodation")} value={formatMoney(trip.accommodation)} icon={Hotel} subtitle={`${travelStyles[style].label} ${i("metric.stay")}`} />
              <MetricCard title={i("metric.food")} value={formatMoney(trip.food + trip.localTransport)} icon={Ticket} subtitle={i("metric.daily")} />
              <MetricCard title={i("metric.activities")} value={formatMoney(trip.activities)} icon={Sparkles} subtitle={`${days[0]} ${i("metric.missions")}`} />
            </motion.div>

            {/* Destination detail card */}
            <Card className="rounded-[28px] border-0 shadow-sm overflow-hidden">
              <div className="relative h-64 md:h-80 overflow-hidden group bg-muted">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={selected.imageUrls[currentImageIndex]}
                  alt={`${selected.name}, ${selected.country} - View ${currentImageIndex + 1}`}
                  onError={() => {
                    const nextIdx = (currentImageIndex + 1) % selectedImageCount;
                    if (nextIdx !== currentImageIndex) setCurrentImageIndex(nextIdx);
                  }}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Navigation arrows */}
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + selected.imageUrls.length) % selected.imageUrls.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % selected.imageUrls.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
                
                {/* Image counter */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 text-white text-sm backdrop-blur-sm">
                  {currentImageIndex + 1} / {selected.imageUrls.length}
                </div>
                
                <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8">
                  <div className="flex items-center gap-2 text-white/90 text-sm mb-1">
                    <MapPin className="h-4 w-4" /> {selected.name}, {selected.country}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold font-display text-white">{getRegionEmoji(selected.region)} {selected.name}</h2>
                </div>
                
                {/* Thumbnail dots */}
                <div className="absolute bottom-4 right-6 md:bottom-6 flex gap-2">
                  {selected.imageUrls.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 rounded-full transition-all ${idx === currentImageIndex ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'}`}
                    />
                  ))}
                </div>
              </div>
              <CardContent className="p-0">
                <div className="p-6 md:p-7 bg-card">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-3xl">
                      <p className="text-muted-foreground mt-2">{i("dest.desc")}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {selected.type.map((item) => (
                          <Badge key={item} variant="secondary" className="rounded-full capitalize">{item}</Badge>
                        ))}
                        {selected.bestMonths.map((month) => (
                          <Badge key={month} className="rounded-full bg-muted text-muted-foreground hover:bg-muted border-0">{month}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-3xl bg-muted p-4 min-w-[220px]">
                      <p className="text-sm text-muted-foreground">{i("dest.rec")}</p>
                      <div className="space-y-2 mt-3 text-sm text-foreground">
                        {selected.stayOptions.map((option) => <div key={option}>• {option}</div>)}
                      </div>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="p-6 md:p-7">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid grid-cols-5 rounded-2xl w-full max-w-3xl">
                      <TabsTrigger value="overview">{i("tab.overview")}</TabsTrigger>
                      <TabsTrigger value="daily">{i("tab.daily")}</TabsTrigger>
                      <TabsTrigger value="missions">{i("tab.missions")}</TabsTrigger>
                      <TabsTrigger value="weather">{i("tab.weather")}</TabsTrigger>
                      <TabsTrigger value="cost">{i("tab.cost")}</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="mt-6">
                      <div className="grid gap-4 lg:grid-cols-3">
                        <Card className="rounded-3xl bg-muted border-0 shadow-none">
                          <CardContent className="p-5 space-y-3">
                            <div className="flex items-center gap-2 font-medium text-foreground"><Camera className="h-4 w-4" /> {i("highlights")}</div>
                            {selected.highlights.map((item) => <div key={item} className="text-sm text-muted-foreground">• {item}</div>)}
                          </CardContent>
                        </Card>
                        <Card className="rounded-3xl bg-muted border-0 shadow-none">
                          <CardContent className="p-5 space-y-3">
                            <div className="flex items-center gap-2 font-medium text-foreground"><MapPin className="h-4 w-4" /> {i("historical")}</div>
                            {selected.historical.map((item) => <div key={item} className="text-sm text-muted-foreground">• {item}</div>)}
                          </CardContent>
                        </Card>
                        <Card className="rounded-3xl bg-muted border-0 shadow-none">
                          <CardContent className="p-5 space-y-3">
                            <div className="flex items-center gap-2 font-medium text-foreground"><Building2 className="h-4 w-4" /> {i("museums")}</div>
                            {selected.museums.map((item) => <div key={item} className="text-sm text-muted-foreground">• {item}</div>)}
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="daily" className="mt-6">
                      {displayDays.length > 0 ? (
                        <div className="space-y-4">
                          {displayDays.map((dp) => (
                            <motion.div
                              key={dp.day}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: dp.day * 0.05 }}
                            >
                              <Card className="rounded-3xl bg-muted border-0 shadow-none">
                                <CardContent className="p-5">
                                  <div className="flex items-center gap-2 mb-4">
                                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm font-medium text-muted-foreground">{i("tab.daily")} — Day {dp.day}</span>
                                  </div>
                                  <div className="grid gap-3 md:grid-cols-3">
                                    <div className="rounded-2xl bg-card p-4">
                                      <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                                        <Sun className="h-4 w-4 text-accent" /> Morning
                                      </div>
                                      <p className="text-sm font-semibold">{dp.morning.activity}</p>
                                      <p className="text-xs text-muted-foreground mt-1">{dp.morning.time}</p>
                                      <p className="text-sm text-muted-foreground mt-2">{dp.morning.description}</p>
                                      <Badge variant="secondary" className="mt-2">€{dp.morning.cost}</Badge>
                                    </div>
                                    <div className="rounded-2xl bg-card p-4">
                                      <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                                        <Coffee className="h-4 w-4 text-primary" /> Afternoon
                                      </div>
                                      <p className="text-sm font-semibold">{dp.afternoon.activity}</p>
                                      <p className="text-xs text-muted-foreground mt-1">{dp.afternoon.time}</p>
                                      <p className="text-sm text-muted-foreground mt-2">{dp.afternoon.description}</p>
                                      <Badge variant="secondary" className="mt-2">€{dp.afternoon.cost}</Badge>
                                    </div>
                                    <div className="rounded-2xl bg-card p-4">
                                      <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                                        <Moon className="h-4 w-4 text-foreground/60" /> Evening
                                      </div>
                                      <p className="text-sm font-semibold">{dp.evening.activity}</p>
                                      <p className="text-xs text-muted-foreground mt-1">{dp.evening.time}</p>
                                      <p className="text-sm text-muted-foreground mt-2">{dp.evening.description}</p>
                                      <Badge variant="secondary" className="mt-2">€{dp.evening.cost}</Badge>
                                    </div>
                                  </div>
                                  <div className="mt-3 flex items-start gap-2 rounded-2xl bg-accent/10 p-3">
                                    <Lightbulb className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                                    <p className="text-sm text-foreground"><span className="font-medium">Pro Tip:</span> {dp.tip}</p>
                                  </div>
                                  <div className="mt-3 flex justify-end">
                                    <Badge className="bg-primary">Day Total: €{dp.totalCost}</Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12 text-muted-foreground">
                          <CalendarDays className="h-10 w-10 mx-auto mb-3 opacity-40" />
                          <p>Daily plans coming soon for {selected.name}.</p>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="missions" className="mt-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        {itinerary.map((day) => {
                          const missionKey = `${selected.id}-day${day.day}`;
                          const done = completedMissions.has(missionKey);
                          return (
                            <Card key={`${day.day}-${day.title}`} className={`rounded-3xl border-0 shadow-none transition-colors ${done ? "bg-primary/10" : "bg-muted"}`}>
                              <CardContent className="p-5">
                                <div className="flex items-center justify-between gap-2">
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground"><CalendarDays className="h-4 w-4" /> Day {day.day}</div>
                                  <Badge className={`rounded-full border-0 ${done ? "bg-primary text-primary-foreground" : "bg-foreground text-background"}`}>+{day.reward} pts</Badge>
                                </div>
                                <h3 className="font-semibold mt-3 text-foreground">{day.title}</h3>
                                <div className="space-y-2 mt-3 text-sm text-muted-foreground">
                                  {day.tasks.map((task) => <div key={task}>• {task}</div>)}
                                </div>
                                <Button
                                  size="sm"
                                  variant={done ? "secondary" : "default"}
                                  className="mt-4 rounded-2xl gap-2"
                                  onClick={() => toggleMission(missionKey)}
                                >
                                  {done ? <CheckCircle2 className="h-4 w-4" /> : <Check className="h-4 w-4" />}
                                  {done ? i("mission.completed") : i("mission.complete")}
                                </Button>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    </TabsContent>

                    <TabsContent value="weather" className="mt-6">
                      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
                        <Card className="rounded-3xl bg-foreground text-background border-0 shadow-none">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-2 text-background/70 text-sm">
                              {selected.weather === "rainy" ? <CloudRain className="h-4 w-4" /> : <Mountain className="h-4 w-4" />}
                              {i("weather.live")}
                            </div>
                            <h3 className="text-xl font-semibold mt-3">{weatherSwitch.title}</h3>
                            <p className="text-sm text-background/70 mt-3">{i("weather.rainy")}</p>
                          </CardContent>
                        </Card>
                        <Card className="rounded-3xl bg-muted border-0 shadow-none">
                          <CardContent className="p-6 space-y-3">
                            <div className="flex items-center gap-2 font-medium text-foreground"><Star className="h-4 w-4" /> {i("weather.switch")}</div>
                            {weatherSwitch.items.map((item) => <div key={item} className="text-sm text-muted-foreground">• {item}</div>)}
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="cost" className="mt-6">
                      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        {([
                          [i("metric.transport"), trip.mainTransport],
                          [i("metric.accommodation"), trip.accommodation],
                          [i("cost.local"), trip.localTransport],
                          [i("cost.food"), trip.food],
                          [i("cost.activities"), trip.activities],
                        ] as const).map(([label, value]) => (
                          <Card key={label} className="rounded-3xl bg-muted border-0 shadow-none">
                            <CardContent className="p-5">
                              <p className="text-sm text-muted-foreground">{label}</p>
                              <p className="text-xl font-semibold mt-2 text-foreground">{formatMoney(Number(value))}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      <Card className="rounded-3xl mt-4 bg-foreground text-background border-0">
                        <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <p className="text-background/70 text-sm">{i("cost.grand")}</p>
                            <p className="text-3xl font-semibold">{formatMoney(trip.total)}</p>
                          </div>
                          <div className="text-sm text-background/80 space-y-1">
                            <div>{i("cost.travelers")}: {travelers}</div>
                            <div>{i("cost.style")}: {travelStyles[style].label}</div>
                            <div>{i("cost.transport")}: {transportModes[transport].label}</div>
                            <div>{i("cost.per")}: {formatMoney(trip.perPerson)}</div>
                          </div>
                          <Button variant="secondary" className="rounded-2xl" onClick={handleBook}>{i("book.btn")}</Button>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Dialog */}
      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">{i("booking.title")}</DialogTitle>
            <DialogDescription>{i("booking.msg")}</DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-sm">
            <div className="rounded-2xl bg-muted p-4 space-y-2">
              <div className="flex justify-between"><span className="text-muted-foreground">{i("place")}</span><span className="font-medium">{selected.name}, {selected.country}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">{i("trip.length")}</span><span className="font-medium">{days[0]} {i("days")}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">{i("travelers")}</span><span className="font-medium">{travelers}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">{i("cost.style")}</span><span className="font-medium">{travelStyles[style].label}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">{i("cost.transport")}</span><span className="font-medium">{transportModes[transport].label}</span></div>
              <Separator />
              <div className="flex justify-between font-semibold"><span>{i("cost.grand")}</span><span>{formatMoney(trip.total)}</span></div>
            </div>
          </div>
          <Button className="w-full rounded-2xl mt-2" onClick={() => { setBookingOpen(false); toast.success(i("booking.title")); }}>{i("booking.close")}</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
