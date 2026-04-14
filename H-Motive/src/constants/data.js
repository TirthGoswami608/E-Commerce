import { COLORS } from './theme';

export const products = [
  { id:1,  name:"Wild Forest Honey",       price:1596, category:"Honey",     tag:"Bestseller", emoji:"🍯", desc:"Raw, unfiltered honey harvested from pristine forest hives.",            color:"#FDF5E0", rating:4.9, reviews:128, fullDesc:"Our Wild Forest Honey is cold-extracted from free-ranging hives in the Nilgiri forests, rich in enzymes, antioxidants, and naturally occurring minerals. Never heated above 40°C.",benefits:["Rich in natural antioxidants","Boosts immunity & energy","Soothes sore throat","Aids digestion naturally"],ingredients:["Raw Wildflower Honey 100%","Natural pollen","Beeswax traces"] },
  { id:2,  name:"Manuka Honey 400+",       price:3779, category:"Honey",     tag:"Premium",    emoji:"✨", desc:"Medicinal-grade New Zealand Manuka with MGO 400+ rating.",                color:"#FFF0F5", rating:4.8, reviews:96,  fullDesc:"Sourced exclusively from New Zealand's remote Manuka bushlands. MGO rating of 400+ with rigorous independent lab testing to ensure authentic potency.",benefits:["MGO 400+ antibacterial power","Supports gut microbiome","Skin healing properties","Superior antioxidant level"],ingredients:["Certified Manuka Honey MGO 400+ 100%"] },
  { id:3,  name:"Ashwagandha Root",        price:1890, category:"Herbs",     tag:"New",        emoji:"🌿", desc:"Certified organic adaptogen for stress relief and vitality.",              color:"#EAF5EE", rating:4.7, reviews:214, fullDesc:"Sourced from certified organic farms in Madhya Pradesh, shade-dried and finely milled to retain maximum withanolide content — key bioactive compounds for adaptogenic effects.",benefits:["Reduces cortisol (stress hormone)","Improves sleep quality","Boosts testosterone naturally","Enhances athletic performance"],ingredients:["Organic Ashwagandha Root 100%","No fillers","No additives"] },
  { id:4,  name:"Cold-Press Coconut Oil",  price:1343, category:"Oils",      tag:"",           emoji:"🥥", desc:"Virgin coconut oil, cold-pressed and 100% unrefined.",                    color:"#F0F8FF", rating:4.6, reviews:178, fullDesc:"Extracted using traditional cold-press machinery. No bleaching, no deodorizing, no RBD processing — just pure, honest coconut goodness.",benefits:["Rich in MCTs for energy","Kills harmful microorganisms","Improves skin hydration","Supports weight management"],ingredients:["Virgin Coconut Oil 100%"] },
  { id:5,  name:"Moringa Leaf Powder",     price:1679, category:"Superfood", tag:"Organic",    emoji:"🌱", desc:"Nutrient-dense 'miracle tree' powder with 90+ nutrients.",                color:"#EAF5EE", rating:4.8, reviews:156, fullDesc:"Shade-dried within 24 hours of harvest to preserve vibrant color and nutrient potency. Contains 90+ bioavailable nutrients per serving.",benefits:["90+ nutrients per serving","7x more Vitamin C than oranges","Anti-inflammatory compounds","Complete plant protein"],ingredients:["Organic Moringa Leaf Powder 100%","Air-dried, no additives"] },
  { id:6,  name:"Turmeric + Black Pepper", price:1386, category:"Herbs",     tag:"",           emoji:"🫚", desc:"Bioavailable anti-inflammatory blend with piperine synergy.",              color:"#FDF5E0", rating:4.7, reviews:203, fullDesc:"95% curcuminoid-standardized turmeric extract combined with BioPerine® (piperine), clinically proven to enhance curcumin absorption by up to 2,000%.",benefits:["2000% better curcumin absorption","Powerful anti-inflammatory","Joint pain relief","Liver detoxification"],ingredients:["Turmeric Extract (95% curcuminoids)","Black Pepper Extract (BioPerine®)"] },
  { id:7,  name:"Black Seed Oil",          price:2099, category:"Oils",      tag:"Popular",    emoji:"🖤", desc:"Cold-pressed Nigella sativa oil, nature's most potent remedy.",            color:"#F5F0FF", rating:4.9, reviews:87,  fullDesc:"Cold-pressed from premium Ethiopian Nigella sativa seeds. Rich in Thymoquinone (TQ), the primary bioactive compound with extensively researched health benefits.",benefits:["Rich in Thymoquinone (TQ)","Powerful antihistamine","Supports respiratory health","Blood sugar regulation"],ingredients:["Cold-pressed Nigella sativa oil 100%"] },
  { id:8,  name:"Raw Cacao Powder",        price:1091, category:"Superfood", tag:"",           emoji:"🍫", desc:"Ceremonial-grade, minimally processed unsweetened cacao.",                color:"#FFF5F0", rating:4.5, reviews:119, fullDesc:"Sourced from heirloom Criollo trees in Peru, fermented traditionally, dried at ultra-low temperatures to preserve flavanols, magnesium, and mood-enhancing compounds.",benefits:["Highest flavanol content","Magnesium-rich for muscles","Mood-elevating phenylethylamine","Natural energy without jitters"],ingredients:["Organic Raw Cacao 100%","Cold-dried, no additives","Vegan & Keto-friendly"] },
  { id:9,  name:"Sidr Honey",              price:4368, category:"Honey",     tag:"Rare",       emoji:"🌸", desc:"Prized Yemeni sidr tree honey, harvested once a year.",                   color:"#FDF5E0", rating:5.0, reviews:44,  fullDesc:"Harvested once a year from ancient Sidr trees of the Hadramaut valley in Yemen. Considered the most prized honey on earth, with thick texture and rich caramel notes.",benefits:["Rare harvest — limited supply","Highest antimicrobial activity","Memory & cognitive enhancement","Used in traditional medicine 4000+ years"],ingredients:["Authentic Yemeni Sidr Honey 100%","Single-source, cold-extracted"] },
  { id:10, name:"Spirulina Powder",        price:1764, category:"Superfood", tag:"",           emoji:"💚", desc:"High-protein blue-green algae — the original superfood.",                  color:"#EAF5EE", rating:4.6, reviews:143, fullDesc:"Cultivated in controlled freshwater ponds under strict GMP conditions. At 60-70% protein by weight, it's the most protein-dense food on earth.",benefits:["60-70% complete protein","All essential amino acids","Powerful detoxifier","Cholesterol reduction"],ingredients:["Organic Spirulina 100%","Tested heavy metal free"] },
  { id:11, name:"Brahmi Leaf Powder",      price:1250, category:"Herbs",     tag:"",           emoji:"🍃", desc:"Ayurvedic brain tonic for memory, focus, and calm.",                      color:"#EAF5EE", rating:4.7, reviews:92,  fullDesc:"Brahmi has been the cornerstone of Ayurvedic nootropics for over 3,000 years. Our shade-dried leaf powder retains full-spectrum bacosides for cognitive support.",benefits:["Clinically studied nootropic","Reduces anxiety naturally","Accelerates learning speed","ADHD natural support"],ingredients:["Organic Brahmi (Bacopa monnieri) 100%","Shade-dried, no additives"] },
  { id:12, name:"Jamun Honey",             price:1850, category:"Honey",     tag:"",           emoji:"🍇", desc:"Rare diabetic-friendly dark honey from Jamun blossoms.",                  color:"#F5F0FF", rating:4.8, reviews:67,  fullDesc:"Collected from hives placed near Jamun orchards in Maharashtra. Naturally low glycemic index, recommended in traditional medicine for blood sugar support.",benefits:["Low glycemic index","Supports blood sugar balance","Rich in anthocyanins","Natural energy source"],ingredients:["Raw Jamun Blossom Honey 100%","Single-source harvest"] },
];

export const reviews = [
  { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "The wild forest honey is absolutely divine — floral, rich, and nothing like what I find in stores. I've tried three varieties now and every single one has been exceptional. H-Motive is my go-to.", avatar: "PS" },
  { name: "Arjun Mehta", location: "Bangalore", rating: 5, text: "I was skeptical about Manuka honey at this price point, but wow. Genuine product, fast delivery, and the quality is undeniable. My whole family uses it for immunity now.", avatar: "AM" },
  { name: "Sunita Patel", location: "Ahmedabad", rating: 5, text: "Finally found a trustworthy source for ashwagandha. No fillers, no additives — just clean, potent powder. My sleep quality has improved dramatically in just three weeks.", avatar: "SP" },
  { name: "Rohan Gupta", location: "Delhi", rating: 4, text: "Beautiful packaging and genuine organic products. The moringa powder has a vibrant green color that tells you it's fresh. Will definitely reorder and recommend to friends.", avatar: "RG" },
  { name: "Kavya Nair", location: "Chennai", rating: 5, text: "H-Motive's customer service is as excellent as the products. I had a question about raw cacao and got a detailed, helpful response within hours. That care shows in everything they do.", avatar: "KN" },
];

export const slides = [
  { title: "Pure Wildflower Honey", subtitle: "Straight from Forest to Your Table", desc: "Unfiltered, raw, and brimming with enzymes and antioxidants that nature intended.", cta: "Shop Honey", bg: "#FDF3DC", accent: COLORS.gold, emoji: "🍯", badge: "100% Raw" },
  { title: "Nature's Pharmacy", subtitle: "Herbs & Superfoods for Modern Life", desc: "Ancient Ayurvedic wisdom, tested by science, delivered to your doorstep.", cta: "Explore Herbs", bg: "#EAF5EE", accent: COLORS.green, emoji: "🌿", badge: "Certified Organic" },
  { title: "Wellness Reimagined", subtitle: "Cold-Pressed Oils & Extracts", desc: "Every bottle is a promise of purity — no heat, no chemicals, no compromise.", cta: "View Collection", bg: "#FFF8EE", accent: COLORS.brownLight, emoji: "✨", badge: "Premium Quality" },
];

export const benefits = [
  { icon: "🌿", title: "100% Organic", desc: "Every product is certified organic, grown without synthetic pesticides or fertilizers." },
  { icon: "🚫", title: "Zero Chemicals", desc: "No additives, preservatives, or artificial ingredients — ever. What you see is what you get." },
  { icon: "💪", title: "Boosts Immunity", desc: "Carefully curated for maximum bioavailability and immune-supporting properties." },
  { icon: "🌍", title: "Ethically Sourced", desc: "Direct from trusted farmers who share our commitment to land and community." },
  { icon: "🔬", title: "Lab Tested", desc: "Every batch is independently tested for purity, potency, and contaminants." },
  { icon: "♻️", title: "Eco Packaging", desc: "Sustainable, biodegradable packaging that respects the planet as much as you do." },
];

export const categories = ["All", "Honey", "Herbs", "Oils", "Superfood"];

export const CART_ITEMS = [
  { name: "Wild Forest Honey", price: 1596, qty: 2, emoji: "🍯", bg: "#FDF5E0", weight: "500g" },
  { name: "Ashwagandha Root", price: 1890, qty: 1, emoji: "🌿", bg: "#EAF5EE", weight: "200g" },
  { name: "Black Seed Oil", price: 2099, qty: 1, emoji: "🖤", bg: "#F5F0FF", weight: "200ml" },
];

export const ORDERS = [
  { id: "HM-2024-0892", date: "12 Apr 2026", status: "delivered", total: 7281, items: [{ name: "Wild Forest Honey", emoji: "🍯" }, { name: "Moringa Powder", emoji: "🌱" }] },
  { id: "HM-2024-0881", date: "28 Mar 2026", status: "processing", total: 3779, items: [{ name: "Manuka Honey", emoji: "✨" }] },
  { id: "HM-2024-0856", date: "14 Mar 2026", status: "delivered", total: 5275, items: [{ name: "Ashwagandha Root", emoji: "🌿" }, { name: "Spirulina Powder", emoji: "💚" }] },
  { id: "HM-2024-0821", date: "2 Feb 2026", status: "cancelled", total: 1596, items: [{ name: "Raw Cacao Powder", emoji: "🍫" }] },
];

export const TEAM = [
  { name: "Arjun Sharma", role: "Founder & CEO", emoji: "👨💼", bio: "Former pharma researcher turned wellness entrepreneur. 12 years in organic sourcing." },
  { name: "Priya Mehta", role: "Head of Products", emoji: "👩🔬", bio: "Nutritionist and food scientist dedicated to verifying every product's authenticity." },
  { name: "Rahul Nair", role: "Supply Chain", emoji: "🌾", bio: "Built direct farmer networks across 8 states ensuring ethical and traceable sourcing." },
];

export const FAQS = [
  { q: "What makes H-Motive products different?", a: "Every product is third-party lab tested, certified organic, and sourced directly from farmers without intermediaries. We maintain full traceability from farm to doorstep." },
  { q: "Do you ship pan India?", a: "Yes! We deliver to 19,000+ pin codes. Orders above ₹999 get free shipping. Typical delivery is 3–5 business days." },
  { q: "Can I return or exchange products?", a: "We offer a 7-day return policy on all unopened products. For quality issues, we also accept opened products with evidence." },
  { q: "Are products suitable for diabetics?", a: "Many products like Jamun Honey and Moringa Powder are beneficial. Please consult your healthcare provider for personalized advice." },
];
