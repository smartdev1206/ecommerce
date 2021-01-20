import Category from '../services/category/category.type';
import { plainToClass } from 'class-transformer';

const loadCategories = (): Category[] => {
  return plainToClass(Category, [
    {
      id: 1,
      name: 'Fruits & Vegetables',
      slug: 'fruits-and-vegetables',
      products: [],
      type: 'grocery',
      icon: 'FruitsVegetable',
      children: [
        {
          id: 2,
          name: 'Fruits',
          slug: 'fruits',
          products: [],
          type: 'grocery',
        },
        {
          id: 3,
          name: 'vegetables',
          slug: 'vegetables',
          products: [],
          type: 'grocery',
        },
      ],
    },

    {
      id: 9,
      name: 'Meat & Fish',
      slug: 'meat-and-fish',
      products: [],
      type: 'grocery',
      icon: 'MeatFish',
      children: [
        {
          id: 10,
          name: 'Frozen Fish',
          slug: 'frozen-fish',
          products: [],
          type: 'grocery',
        },
        {
          id: 11,
          name: 'Dried Fish',
          slug: 'dried-fish',
          products: [],
          type: 'grocery',
        },
        {
          id: 12,
          name: 'Fresh Fish',
          slug: 'fresh-fish',
          products: [],
          type: 'grocery',
        },
        {
          id: 13,
          name: 'Meat',
          slug: 'meat',
          products: [],
          type: 'grocery',
        },
      ],
    },

    {
      id: 14,
      name: 'Purse',
      slug: 'purse',
      products: [],
      type: 'bags',
      icon: 'Purse',
      children: [],
    },

    {
      id: 15,
      name: 'Hand bags',
      slug: 'hand-bags',
      products: [],
      type: 'bags',
      icon: 'HandBags',
      children: [],
    },

    {
      id: 16,
      name: 'Shoulder bags',
      slug: 'shoulder-bags',
      products: [],
      type: 'bags',
      icon: 'ShoulderBags',
      children: [],
    },
    {
      id: 17,
      name: 'Wallet',
      slug: 'wallet',
      products: [],
      type: 'bags',
      icon: 'Wallet',
      children: [],
    },
    {
      id: 18,
      name: 'Laptop bags',
      slug: 'laptop-bags',
      products: [],
      type: 'bags',
      icon: 'LaptopBags',
      children: [],
    },

    {
      id: 19,
      name: 'Women Dress',
      slug: 'women-dress',
      products: [],
      type: 'women-cloths',
      icon: 'WomenDress',
      children: [
        {
          id: 20,
          name: 'Printed',
          slug: 'printed',
          products: [],
          type: 'women-cloths',
        },
        {
          id: 21,
          name: 'Floral',
          slug: 'floral',
          products: [],
          type: 'women-cloths',
        },
        {
          id: 22,
          name: 'Single Color',
          slug: 'single-color',
          products: [],
          type: 'women-cloths',
        },
      ],
    },
    {
      id: 23,
      name: 'Outer Wear',
      slug: 'outer-wear',
      products: [],
      type: 'women-cloths',
      icon: 'OuterWear',
      children: [
        {
          id: 24,
          name: 'Hoodie',
          slug: 'hoodie',
          products: [],
          type: 'women-cloths',
        },
        {
          id: 25,
          name: 'Jacket',
          slug: 'jacket',
          products: [],
          type: 'women-cloths',
        },
        {
          id: 26,
          name: 'Blazer',
          slug: 'blazer',
          products: [],
          type: 'women-cloths',
        },
        {
          id: 27,
          name: 'Waist Coat',
          slug: 'waist-coat',
          products: [],
          type: 'women-cloths',
        },
      ],
    },
    {
      id: 28,
      name: 'Pants',
      slug: 'pants',
      products: [],
      type: 'women-cloths',
      icon: 'Pants',
      children: [
        {
          id: 29,
          name: 'Jeans',
          slug: 'jeans',
          products: [],
          type: 'women-cloths',
        },
        {
          id: 30,
          name: 'Chinos',
          slug: 'chinos',
          products: [],
          type: 'women-cloths',
        },
        {
          id: 31,
          name: 'Sports',
          slug: 'sports',
          products: [],
          type: 'women-cloths',
        },
      ],
    },

    {
      id: 32,
      name: 'Tops',
      slug: 'tops',
      products: [],
      type: 'women-cloths',
      icon: 'Tops',
      children: [],
    },
    {
      id: 33,
      name: 'Skirts',
      slug: 'skirts',
      products: [],
      type: 'women-cloths',
      icon: 'Skirts',
      children: [],
    },
    {
      id: 34,
      name: 'Shirts',
      slug: 'shirts',
      products: [],
      type: 'women-cloths',
      icon: 'Shirts',
      children: [],
    },

    {
      id: 35,
      name: 'Face',
      slug: 'face',
      products: [],
      type: 'makeup',
      icon: 'Face',
      children: [
        {
          id: 36,
          name: 'Blusher',
          slug: 'blusher',
          products: [],
          type: 'makeup',
        },
        {
          id: 37,
          name: 'Foundation',
          slug: 'foundation',
          products: [],
          type: 'makeup',
        },
        {
          id: 38,
          name: 'Face Powder',
          slug: 'face-powder',
          products: [],
          type: 'makeup',
        },
      ],
    },

    {
      id: 39,
      name: 'Eyes',
      slug: 'eyes',
      products: [],
      type: 'makeup',
      icon: 'Eyes',
      children: [
        {
          id: 40,
          name: 'Eye Shadow',
          slug: 'eye-shadow',
          products: [],
          type: 'makeup',
        },
        {
          id: 41,
          name: 'Glitter',
          slug: 'glitter',
          products: [],
          type: 'makeup',
        },
        {
          id: 42,
          name: 'Mascara',
          slug: 'mascara',
          products: [],
          type: 'makeup',
        },
      ],
    },

    {
      id: 43,
      name: 'Lips',
      slug: 'lips',
      products: [],
      type: 'makeup',
      icon: 'Lips',
      children: [
        {
          id: 44,
          name: 'Lip Gloss',
          slug: 'lip-gloss',
          products: [],
          type: 'makeup',
        },
        {
          id: 45,
          name: 'Lipstick',
          slug: 'lipstick',
          products: [],
          type: 'makeup',
        },
        {
          id: 46,
          name: 'Lip Kit',
          slug: 'lip-kit',
          products: [],
          type: 'makeup',
        },
      ],
    },

    {
      id: 47,
      name: 'Accessories',
      slug: 'accessories',
      products: [],
      type: 'makeup',
      icon: 'Accessories',
      children: [],
    },
    {
      id: 48,
      name: 'Snacks',
      slug: 'snacks',
      products: [],
      type: 'grocery',
      icon: 'Snacks',
      children: [
        {
          id: 49,
          name: 'Biscuits',
          slug: 'biscuits',
          products: [],
          type: 'grocery',
        },
        {
          id: 50,
          name: 'Chocolates',
          slug: 'chocolates',
          products: [],
          type: 'grocery',
        },
        {
          id: 51,
          name: 'Crisps',
          slug: 'crisps',
          products: [],
          type: 'grocery',
        },
        {
          id: 52,
          name: 'Noodles',
          slug: 'noodles',
          products: [],
          type: 'grocery',
        },
        {
          id: 53,
          name: 'Nuts',
          slug: 'nuts',
          products: [],
          type: 'grocery',
        },
        {
          id: 54,
          name: 'Pasta',
          slug: 'pasta',
          products: [],
          type: 'grocery',
        },
        {
          id: 55,
          name: 'Sauce',
          slug: 'sauce',
          products: [],
          type: 'grocery',
        },
        {
          id: 56,
          name: 'Soup',
          slug: 'soup',
          products: [],
          type: 'grocery',
        },
      ],
    },

    {
      id: 57,
      name: 'Pet Care',
      slug: 'petcare',
      products: [],
      type: 'grocery',
      icon: 'PetCare',
      children: [
        {
          id: 58,
          name: 'Cat Food',
          slug: 'catfood',
          products: [],
          type: 'grocery',
        },
        {
          id: 59,
          name: 'Dog Food',
          slug: 'dogfood',
          products: [],
          type: 'grocery',
        },
        {
          id: 60,
          name: 'KItten Food',
          slug: 'kittenfood',
          products: [],
          type: 'grocery',
        },
        {
          id: 61,
          name: 'Pet Accessories',
          slug: 'petaccessories',
          products: [],
          type: 'grocery',
        },
      ],
    },
    {
      id: 62,
      name: 'Home & Cleaning',
      slug: 'home-cleaning',
      products: [],
      type: 'grocery',
      icon: 'HomeCleaning',
      children: [
        {
          id: 63,
          name: 'Air Freshner',
          slug: 'air_freshner',
          products: [],
          type: 'grocery',
        },
        {
          id: 64,
          name: 'Cleaning Products',
          slug: 'cleanin_products',
          products: [],
          type: 'grocery',
        },
        {
          id: 65,
          name: 'Dishwasher',
          slug: 'dishwasher',
          products: [],
          type: 'grocery',
        },
        {
          id: 66,
          name: 'Kitchen Accessories',
          slug: 'kitchenaccessories',
          products: [],
          type: 'grocery',
        },
        {
          id: 67,
          name: 'Laundry ',
          slug: 'laundry',
          products: [],
          type: 'grocery',
        },
        {
          id: 68,
          name: 'Pest Control',
          slug: 'Pest_control',
          products: [],
          type: 'grocery',
        },
      ],
    },
    {
      id: 69,
      name: 'Dairy',
      slug: 'dairy',
      products: [],
      type: 'grocery',
      icon: 'Dairy',
      children: [
        {
          id: 70,
          name: 'Butter',
          slug: 'butter',
          products: [],
          type: 'grocery',
        },
        {
          id: 71,
          name: 'Egg',
          slug: 'egg',
          products: [],
          type: 'grocery',
        },
        {
          id: 72,
          name: 'Milk',
          slug: 'milk',
          products: [],
          type: 'grocery',
        },
        {
          id: 73,
          name: 'Milk Cream',
          slug: 'milk _cream',
          products: [],
          type: 'grocery',
        },
        {
          id: 74,
          name: 'Powder Milk ',
          slug: 'Powder_Milk',
          products: [],
          type: 'grocery',
        },
        {
          id: 75,
          name: 'Yogourt',
          slug: 'yogourt',
          products: [],
          type: 'grocery',
        },
      ],
    },
    {
      id: 76,
      name: 'Cooking',
      slug: 'cooking',
      products: [],
      type: 'grocery',
      icon: 'Cooking',
      children: [
        {
          id: 77,
          name: 'Oil',
          slug: 'oil',
          products: [],
          type: 'grocery',
        },
        {
          id: 78,
          name: 'Rice ',
          slug: 'rice',
          products: [],
          type: 'grocery',
        },
        {
          id: 79,
          name: 'Salt & Sugar',
          slug: 'Salt_sugar',
          products: [],
          type: 'grocery',
        },
        {
          id: 80,
          name: 'Spices',
          slug: 'milr_cream',
          products: [],
          type: 'grocery',
        },
      ],
    },
    {
      id: 82,
      name: 'Breakfast',
      slug: 'breakfast',
      products: [],
      type: 'grocery',
      icon: 'Breakfast',
      children: [
        {
          id: 83,
          name: 'Bread',
          slug: 'bread',
          products: [],
          type: 'grocery',
        },
        {
          id: 84,
          name: 'Cereal ',
          slug: 'cereal',
          products: [],
          type: 'grocery',
        },
        {
          id: 85,
          name: 'Honey',
          slug: 'honey',
          products: [],
          type: 'grocery',
        },
        {
          id: 86,
          name: 'Jam',
          slug: 'jam',
          products: [],
          type: 'grocery',
        },
        {
          id: 87,
          name: 'Mayonnaise',
          slug: 'mayonnaise',
          products: [],
          type: 'grocery',
        },
        {
          id: 88,
          name: 'Oats',
          slug: 'oats',
          products: [],
          type: 'grocery',
        },
      ],
    },
    {
      id: 90,
      name: 'Beverage',
      slug: 'beverage',
      products: [],
      type: 'grocery',
      icon: 'Beverage',
      children: [
        {
          id: 91,
          name: 'Coffee',
          slug: 'coffee',
          products: [],
          type: 'grocery',
        },
        {
          id: 92,
          name: 'Energy Drinks ',
          slug: 'energy_drinks',
          products: [],
          type: 'grocery',
        },
        {
          id: 93,
          name: 'Juice',
          slug: 'juice',
          products: [],
          type: 'grocery',
        },
        {
          id: 94,
          name: 'Fizzy Drinks',
          slug: 'fizzy_drinks',
          products: [],
          type: 'grocery',
        },
        {
          id: 95,
          name: 'Syrup & powder',
          slug: 'syrup_powder',
          products: [],
          type: 'grocery',
        },
        {
          id: 96,
          name: 'Tea',
          slug: 'tea',
          products: [],
          type: 'grocery',
        },
        {
          id: 97,
          name: 'Water',
          slug: 'water',
          products: [],
          type: 'grocery',
        },
      ],
    },
    {
      id: 98,
      name: 'Beauty & Health',
      slug: 'healt_beauty',
      products: [],
      type: 'grocery',
      icon: 'BeautyHealth',
      children: [
        {
          id: 99,
          name: 'Bath',
          slug: 'bath',
          products: [],
          type: 'grocery',
        },
        {
          id: 100,
          name: 'Cream ',
          slug: 'cream',
          products: [],
          type: 'grocery',
        },
        {
          id: 101,
          name: 'Deodarant',
          slug: 'deodarent',
          products: [],
          type: 'grocery',
        },
        {
          id: 102,
          name: 'Face Care',
          slug: 'face_care',
          products: [],
          type: 'grocery',
        },
        {
          id: 105,
          name: 'Oral Care',
          slug: 'Oral_care',
          products: [],
          type: 'grocery',
        },
        {
          id: 106,
          name: 'Shaving Needs',
          slug: 'shaving_needs',
          products: [],
          type: 'grocery',
        },
      ],
    },
    {
      id: 107,
      name: 'Shaving Needs',
      slug: 'shaving_needs',
      products: [],
      type: 'makeup',
      icon: 'ShavingNeeds',
      children: [],
    },
    {
      id: 108,
      name: 'Oral Care',
      slug: 'Oral_care',
      products: [],
      type: 'makeup',
      icon: 'OralCare',
      children: [],
    },
    {
      id: 109,
      name: 'Facial Care',
      slug: 'face_care',
      products: [],
      type: 'makeup',
      icon: 'FacialCare',
      children: [],
    },
    {
      id: 110,
      name: 'Deodarent',
      slug: 'deodarent',
      products: [],
      type: 'makeup',
      icon: 'Deodorent',
      children: [],
    },
    {
      id: 111,
      name: 'Bath & Oil',
      slug: 'bath',
      products: [],
      type: 'makeup',
      icon: 'BathOil',
      children: [],
    },
  ]);
};

export default loadCategories;
