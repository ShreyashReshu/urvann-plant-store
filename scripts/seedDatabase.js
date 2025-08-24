const mongoose = require('mongoose');
const Plant = require('../models/Plant');

const plants = [
  {
    name: "Money Plant (Golden Pothos)",
    price: 299,
    categories: ["Indoor", "Air Purifying", "Low Maintenance"],
    description: "Popular trailing plant known for bringing good luck and purifying air",
    careLevel: "Easy",
    lightRequirement: "Low Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Snake Plant (Sansevieria)",
    price: 399,
    categories: ["Indoor", "Air Purifying", "Low Maintenance"],
    description: "Excellent air purifier that releases oxygen at night",
    careLevel: "Easy",
    lightRequirement: "Low Light",
    wateringFrequency: "Bi-weekly",
    height: "Tall"
  },
  {
    name: "Peace Lily",
    price: 599,
    categories: ["Indoor", "Air Purifying", "Flowering"],
    description: "Beautiful white flowers with excellent air purification properties",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Aloe Vera",
    price: 199,
    categories: ["Indoor", "Outdoor", "Succulent", "Herb"],
    description: "Medicinal plant with soothing gel properties",
    careLevel: "Easy",
    lightRequirement: "Bright Light",
    wateringFrequency: "Bi-weekly",
    height: "Small"
  },
  {
    name: "Spider Plant",
    price: 249,
    categories: ["Indoor", "Air Purifying", "Low Maintenance"],
    description: "Produces plantlets and removes formaldehyde from air",
    careLevel: "Easy",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "ZZ Plant",
    price: 799,
    categories: ["Indoor", "Low Maintenance"],
    description: "Nearly indestructible plant perfect for beginners",
    careLevel: "Easy",
    lightRequirement: "Low Light",
    wateringFrequency: "Monthly",
    height: "Medium"
  },
  {
    name: "Monstera Deliciosa",
    price: 1299,
    categories: ["Indoor", "Home Decor"],
    description: "Trendy split-leaf plant with distinctive foliage",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Large"
  },
  {
    name: "Fiddle Leaf Fig",
    price: 1899,
    categories: ["Indoor", "Home Decor"],
    description: "Statement plant with large, violin-shaped leaves",
    careLevel: "Hard",
    lightRequirement: "Bright Light",
    wateringFrequency: "Weekly",
    height: "Large"
  },
  {
    name: "Chinese Evergreen",
    price: 449,
    categories: ["Indoor", "Low Maintenance"],
    description: "Colorful foliage plant that thrives in low light",
    careLevel: "Easy",
    lightRequirement: "Low Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Pothos Marble Queen",
    price: 349,
    categories: ["Indoor", "Air Purifying", "Home Decor"],
    description: "Variegated version of the classic pothos plant",
    careLevel: "Easy",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Rubber Plant",
    price: 899,
    categories: ["Indoor", "Home Decor"],
    description: "Large glossy leaves perfect for statement decor",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Large"
  },
  {
    name: "Philodendron Brasil",
    price: 499,
    categories: ["Indoor", "Home Decor"],
    description: "Heart-shaped leaves with yellow variegation",
    careLevel: "Easy",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Calathea Orbifolia",
    price: 699,
    categories: ["Indoor", "Home Decor"],
    description: "Striking round leaves with silver stripes",
    careLevel: "Hard",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "String of Pearls",
    price: 299,
    categories: ["Indoor", "Succulent", "Home Decor"],
    description: "Unique trailing succulent with bead-like leaves",
    careLevel: "Medium",
    lightRequirement: "Bright Light",
    wateringFrequency: "Bi-weekly",
    height: "Small"
  },
  {
    name: "Jade Plant",
    price: 199,
    categories: ["Indoor", "Outdoor", "Succulent"],
    description: "Symbol of good luck and prosperity",
    careLevel: "Easy",
    lightRequirement: "Bright Light",
    wateringFrequency: "Bi-weekly",
    height: "Small"
  },
  {
    name: "Bamboo Palm",
    price: 899,
    categories: ["Indoor", "Air Purifying", "Home Decor"],
    description: "Tropical palm that removes benzene and formaldehyde",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Large"
  },
  {
    name: "English Ivy",
    price: 249,
    categories: ["Indoor", "Outdoor", "Air Purifying"],
    description: "Classic trailing plant that removes mold from air",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Boston Fern",
    price: 399,
    categories: ["Indoor", "Air Purifying"],
    description: "Lush fern that adds humidity to indoor spaces",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Areca Palm",
    price: 1199,
    categories: ["Indoor", "Air Purifying", "Home Decor"],
    description: "Elegant palm that removes indoor air toxins",
    careLevel: "Medium",
    lightRequirement: "Bright Light",
    wateringFrequency: "Weekly",
    height: "Large"
  },
  {
    name: "Dracaena Marginata",
    price: 599,
    categories: ["Indoor", "Air Purifying"],
    description: "Dragon tree with red-edged leaves",
    careLevel: "Easy",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Tall"
  },
  {
    name: "Pilea Peperomioides",
    price: 449,
    categories: ["Indoor", "Home Decor"],
    description: "Popular 'Pancake Plant' with round leaves",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Small"
  },
  {
    name: "Tradescantia Zebrina",
    price: 199,
    categories: ["Indoor", "Home Decor"],
    description: "Purple wandering jew with striped leaves",
    careLevel: "Easy",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Small"
  },
  {
    name: "Hoya Carnosa",
    price: 399,
    categories: ["Indoor", "Flowering"],
    description: "Wax plant with fragrant star-shaped flowers",
    careLevel: "Medium",
    lightRequirement: "Bright Light",
    wateringFrequency: "Bi-weekly",
    height: "Medium"
  },
  {
    name: "Peperomia Obtusifolia",
    price: 299,
    categories: ["Indoor", "Low Maintenance"],
    description: "Baby rubber plant with thick, glossy leaves",
    careLevel: "Easy",
    lightRequirement: "Medium Light",
    wateringFrequency: "Bi-weekly",
    height: "Small"
  },
  {
    name: "Schefflera Arboricola",
    price: 799,
    categories: ["Indoor", "Home Decor"],
    description: "Umbrella tree with glossy compound leaves",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Large"
  },
  {
    name: "Aglaonema Silver Bay",
    price: 549,
    categories: ["Indoor", "Low Maintenance"],
    description: "Chinese evergreen with silver-green foliage",
    careLevel: "Easy",
    lightRequirement: "Low Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Ficus Lyrata",
    price: 2499,
    categories: ["Indoor", "Home Decor"],
    description: "Large fiddle leaf fig for statement spaces",
    careLevel: "Hard",
    lightRequirement: "Bright Light",
    wateringFrequency: "Weekly",
    height: "Large"
  },
  {
    name: "Pachira Aquatica",
    price: 999,
    categories: ["Indoor", "Home Decor"],
    description: "Money tree with braided trunk and palm-like leaves",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Large"
  },
  {
    name: "Dieffenbachia",
    price: 449,
    categories: ["Indoor", "Home Decor"],
    description: "Dumb cane with large variegated leaves",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Croton Petra",
    price: 399,
    categories: ["Indoor", "Home Decor"],
    description: "Colorful foliage with red, orange, and yellow leaves",
    careLevel: "Medium",
    lightRequirement: "Bright Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Bromeliad",
    price: 299,
    categories: ["Indoor", "Flowering"],
    description: "Tropical plant with colorful flower bracts",
    careLevel: "Easy",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Small"
  },
  {
    name: "Anthurium",
    price: 599,
    categories: ["Indoor", "Flowering"],
    description: "Flamingo flower with bright red spathes",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Orchid Phalaenopsis",
    price: 899,
    categories: ["Indoor", "Flowering"],
    description: "Moth orchid with long-lasting flowers",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "African Violet",
    price: 199,
    categories: ["Indoor", "Flowering"],
    description: "Compact flowering plant perfect for windowsills",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Small"
  },
  {
    name: "Begonia Rex",
    price: 349,
    categories: ["Indoor", "Home Decor"],
    description: "Colorful foliage with metallic and iridescent leaves",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Small"
  },
  {
    name: "Coleus",
    price: 149,
    categories: ["Indoor", "Outdoor", "Home Decor"],
    description: "Colorful foliage plant with vibrant leaf patterns",
    careLevel: "Easy",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Small"
  },
  {
    name: "Polka Dot Plant",
    price: 199,
    categories: ["Indoor", "Home Decor"],
    description: "Pink polka dot plant with spotted leaves",
    careLevel: "Easy",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Small"
  },
  {
    name: "Nerve Plant",
    price: 249,
    categories: ["Indoor", "Home Decor"],
    description: "Fittonia with white or pink veined leaves",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Small"
  },
  {
    name: "Prayer Plant",
    price: 299,
    categories: ["Indoor", "Home Decor"],
    description: "Maranta with leaves that fold at night",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Small"
  },
  {
    name: "Stromanthe Triostar",
    price: 699,
    categories: ["Indoor", "Home Decor"],
    description: "Colorful calathea relative with pink variegation",
    careLevel: "Hard",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Alocasia Polly",
    price: 799,
    categories: ["Indoor", "Home Decor"],
    description: "African mask plant with dramatic arrow-shaped leaves",
    careLevel: "Hard",
    lightRequirement: "Bright Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Colocasia Esculenta",
    price: 399,
    categories: ["Indoor", "Outdoor", "Home Decor"],
    description: "Elephant ear plant with large heart-shaped leaves",
    careLevel: "Medium",
    lightRequirement: "Bright Light",
    wateringFrequency: "Weekly",
    height: "Large"
  },
  {
    name: "Caladium",
    price: 299,
    categories: ["Indoor", "Outdoor", "Home Decor"],
    description: "Angel wings with colorful heart-shaped leaves",
    careLevel: "Medium",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Small"
  },
  {
    name: "Cordyline Fruticosa",
    price: 449,
    categories: ["Indoor", "Outdoor", "Home Decor"],
    description: "Ti plant with colorful sword-shaped leaves",
    careLevel: "Medium",
    lightRequirement: "Bright Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Dracaena Reflexa",
    price: 599,
    categories: ["Indoor", "Air Purifying"],
    description: "Song of India with yellow-edged leaves",
    careLevel: "Easy",
    lightRequirement: "Medium Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Yucca Elephantipes",
    price: 899,
    categories: ["Indoor", "Outdoor", "Home Decor"],
    description: "Spineless yucca with sword-like leaves",
    careLevel: "Easy",
    lightRequirement: "Bright Light",
    wateringFrequency: "Bi-weekly",
    height: "Large"
  },
  {
    name: "Beaucarnea Recurvata",
    price: 1299,
    categories: ["Indoor", "Outdoor", "Home Decor"],
    description: "Ponytail palm with swollen trunk base",
    careLevel: "Easy",
    lightRequirement: "Bright Light",
    wateringFrequency: "Monthly",
    height: "Large"
  },
  {
    name: "Cycas Revoluta",
    price: 1899,
    categories: ["Indoor", "Outdoor", "Home Decor"],
    description: "Sago palm with feathery fronds",
    careLevel: "Medium",
    lightRequirement: "Bright Light",
    wateringFrequency: "Bi-weekly",
    height: "Large"
  },
  {
    name: "Chamaedorea Elegans",
    price: 699,
    categories: ["Indoor", "Air Purifying", "Home Decor"],
    description: "Parlor palm perfect for low light spaces",
    careLevel: "Easy",
    lightRequirement: "Low Light",
    wateringFrequency: "Weekly",
    height: "Medium"
  },
  {
    name: "Livistona Chinensis",
    price: 999,
    categories: ["Indoor", "Outdoor", "Home Decor"],
    description: "Chinese fan palm with large fan-shaped leaves",
    careLevel: "Medium",
    lightRequirement: "Bright Light",
    wateringFrequency: "Weekly",
    height: "Large"
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/urvann-plants', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing plants
    await Plant.deleteMany({});
    console.log('Cleared existing plants');

    // Insert new plants
    const result = await Plant.insertMany(plants);
    console.log(`Successfully seeded ${result.length} plants`);

    // Disconnect
    await mongoose.disconnect();
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 