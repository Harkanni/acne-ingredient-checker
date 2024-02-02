const ingredients_db = [
  'Acetylated Lanolin',
  'Acetylated Lanolin Alcohol',
  'Algae Extract',
  'Algin',
  'Beeswax',
  'Butyl Stearate',
  'Carrageenan',
  'Cetearyl Alcohol + Ceteareth 20',
  'Cetyl Acetate',
  'Chlorella',
  'Chondrus Crispus (aka Irish Moss or Carageenan Moss)',
  'Coal Tar',
  'Cocoa Butter',
  'Coconut Alkanes',
  'Coconut Butter',
  'Coconut Oil',
  'Colloidal Sulfur',
  'Cotton Awws Oil',
  'Cotton Seed Oil',
  'Corn oil',
  'D & C Red # 17',
  'D & C Red # 21',
  'D & C Red # 3',
  'D & C Red # 30',
  'D & C Red # 36',
  'Decyl Oleate',
  'Dioctyl Succinate',
  'Disodium Monooleamido',
  'Ethoxylated Lanolin',
  'Ethylhexyl Palmitate',
  'Glyceryl Stearate SE',
  'Glyceryl-3 Diisostearate',
  'Hexadecyl Alcohol',
  'Hydrogenated Vegetable Oil',
  'Isocetyl Alcohol',
  'Isocetyl Stearate',
  'Isodecyl Oleate',
  'Isopropyl Isostearate',
  'Isopropyl Linolate',
  'Isopropyl Myristate',
  'Isopropyl Palmitate',
  'Isostearyl Isostearate',
  'Isostearyl Neopentanoate',
  'Jojoba wax',
  'Kelp',
  'Laminaria Digitata Extract',
  'Laminaria Saccharina Extract (Laminaria Saccharine)',
  'Laureth-23',
  'Laureth-4',
  'Lauric Acid',
  'Mango Butter',
  'Mink Oil',
  'Myristic Acid',
  'Myristyl Lactate',
  'Myristyl Myristate',
  'Octyl Palmitate',
  'Octyl Stearate',
  'Oleth-3',
  'Oleyl Alcohol',
  'PEG 2- Sulfosuccinate',
  'PEG 16 Lanolin',
  'PEG 200 Dilaurate',
  'PEG 8 Stearate',
  'PG Monostearate',
  'PPG 2 Myristyl Propionate',
  'Plankton',
  'Polyglyceryl-3 Diisostearate',
  'Potassium Chloride',
  'Propylene Glycol Monostearate',
  'Red Algae',
  'Seaweed',
  'Shark Liver Oil',
  'Shea',
  'Shea Butter',
  'Sodium Laureth Sulfate',
  'Sodium Lauryl Sulfate',
  'Solulan 16',
  'Sorbitan Oleate',
  'Soybean Oil',
  'Spirulina',
  'Steareth 10',
  'Stearic Acid Tea',
  'Stearyl Heptanoate',
  'Sulfated Castor Oil',
  'Sulfated Jojoba Oil',
  'Talc',
  'Wheat Germ Glyceride',
  'Wheat Germ Oil',
  'Xylene',
  'Kishan',
  'Kalathiya'
];

const textarea = document.getElementById('ingredientChecker');

//   DOM MANIPULATION
const resultDiv = document.getElementById('result');
const title = document.getElementById('title');
const content = document.getElementById('content');

const handleSubmit = (e) => {
  e.preventDefault();

  let ingredients = textarea.value.split(',');

  ingredients = ingredients.map((item) => item.trim());

  const regexPattern = ingredients_db.map(
    (item) => new RegExp(`\\b${item.trim()}\\b`, 'i')
  );

  const acneIngredients = ingredients.filter((item) =>
    regexPattern.some((regex) => regex.test(item.trim()))
  );

  console.log(acneIngredients);

  // Clear previous content
  content.innerHTML = '';

  // Update UI based on the presence of acne-causing ingredients
  if (acneIngredients.length) {
    title.innerHTML =
      'Unfortunately, there are some pore-clogging ingredients in your product!';
    ingredients.forEach((ingredient) => {
      content.innerHTML += `<span class='${
        acneIngredients.includes(ingredient) ? 'danger' : ''
      }'>${ingredient}, </span>`;
    });
  }

  return acneIngredients;
};

const handleReset = (e) => {
  e.preventDefault();

  textarea.value = '';

  content.innerHTML = '';

  title.innerHTML = '';
};
