const fs = require('fs');
const path = require('path');

const rawDir = 'C:\\Users\\Owner\\.gemini\\antigravity\\scratch\\lush-ceylon-app\\lush_raw_photos';
const imagesDir = 'C:\\Users\\Owner\\.gemini\\antigravity\\scratch\\lush-ceylon-app\\images';
const indexFile = 'C:\\Users\\Owner\\.gemini\\antigravity\\scratch\\lush-ceylon-app\\index.html';

const files = fs.readdirSync(rawDir);
let html = fs.readFileSync(indexFile, 'utf8');

// We'll append missing files to the existing array. Wait, let's just generate a clean array.
let products = [];
let counter = 1;

for (const file of files) {
    const ext = path.extname(file);
    const newName = `product_${counter}${ext}`;
    const src = path.join(rawDir, file);
    const dest = path.join(imagesDir, newName);
    
    fs.copyFileSync(src, dest);
    
    // Guess category based on name
    let title = "Lush Product " + counter;
    let price = "Rs." + (1000 + (counter * 100));
    let category = "cosmetics";
    
    products.push({
        title: title,
        price: price,
        category: category,
        image: "images/" + newName,
        desc: "High quality product."
    });
    
    counter++;
}

let productsArrayStr = 'const products = [\n';
products.forEach(item => {
  productsArrayStr += `            { title: "${item.title}", price: "${item.price}", category: "${item.category}", image: "${item.image}", description: "${item.desc}" },\n`;
});
productsArrayStr += '        ];';

html = html.replace(/const products = \[[\s\S]*?\];/, productsArrayStr);
fs.writeFileSync(indexFile, html);
console.log("Fixed missing files.");
