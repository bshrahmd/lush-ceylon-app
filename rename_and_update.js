const fs = require('fs');
const path = require('path');

const rawDir = 'C:\\Users\\Owner\\.gemini\\antigravity\\scratch\\lush-ceylon-app\\lush_raw_photos';
const imagesDir = 'C:\\Users\\Owner\\.gemini\\antigravity\\scratch\\lush-ceylon-app\\images';
const indexFile = 'C:\\Users\\Owner\\.gemini\\antigravity\\scratch\\lush-ceylon-app\\index.html';

const items = [
  { file: '12b9e73a-a313-4cbe-a3b3-e53138758349.jpg', name: 'bioaqua_nenhong_cream.jpg', title: 'Bioaqua Nenhong Cream', price: 1200, category: 'cosmetics', desc: 'Moisturizing and brightening cream.' },
  { file: '16F930F6-F520-4E18-8064-16B8573772DE.jpeg', name: 'jovees_cleansing_cream.jpeg', title: 'Jovees Cleansing Cream', price: 1800, category: 'cosmetics', desc: 'Gentle cleansing cream for face.' },
  { file: '28e46db0-6b8f-48a8-8e37-532cc07a3061.jpg', name: 'bioaqua_nenhong_pink.jpg', title: 'Bioaqua Nenhong Pink', price: 1250, category: 'cosmetics', desc: 'Pink brightening cream.' },
  { file: '30271039-16c0-45c9-b618-9a2d03e46ac5.jpg', name: 'bioaqua_pure_skin.jpg', title: 'Bioaqua Pure Skin Acne', price: 1500, category: 'cosmetics', desc: 'Anti-acne clearing cream.' },
  { file: '335f0a80-d196-4cc6-b16c-8c506db7f559.jpg', name: 'bioaqua_anti_acne.jpg', title: 'Bioaqua Anti-Acne', price: 1550, category: 'cosmetics', desc: 'Effective acne removal treatment.' },
  { file: '33CFE8FF-7676-451A-AD32-1C2DFBA54463.jpeg', name: 'jovees_bridal_masque.jpeg', title: 'Jovees Bridal Masque', price: 2100, category: 'cosmetics', desc: 'Brightening face masque.' },
  { file: '3C5E1376-B701-4206-AE49-B20C38EE56AC.jpeg', name: 'viana_liquid_foundation.jpeg', title: 'Viana Liquid Foundation', price: 2800, category: 'makeup', desc: 'Flawless liquid foundation.' },
  { file: '44EF5A2F-33DA-4CDA-8766-219559E07D06.jpeg', name: 'garnier_vit_c.jpeg', title: 'Garnier Vitamin C', price: 1900, category: 'cosmetics', desc: 'Brightening face wash.' },
  { file: '5a525aba-b6dc-44c2-b647-e3507b91eea6.jpg', name: 'dr_rashel_vit_c_cream.jpg', title: 'Dr Rashel Vitamin C Cream', price: 2200, category: 'cosmetics', desc: 'Vitamin C brightening cream.' },
  { file: '61BCF716-D460-4BBC-B94C-EA335D3789CB.jpeg', name: 'garnier_booster_serum.jpeg', title: 'Garnier Booster Serum', price: 2500, category: 'cosmetics', desc: '30x Vitamin C Booster.' },
  { file: '7027c1cb-cd7f-4c9e-943d-9f721f23a585.jpg', name: 'viana_compact_powder.jpg', title: 'Viana Compact Powder', price: 1500, category: 'makeup', desc: 'Moisturizing compact powder.' },
  { file: '707a2b71-f266-4f4c-b64a-7a9d0aebfe0e.jpg', name: 'viana_foundation_stick.jpg', title: 'Viana Foundation Stick', price: 1750, category: 'makeup', desc: 'Easy to blend foundation stick.' },
  { file: '829e1eb7-89fb-4b53-b1d5-bc4944d1880f.jpg', name: 'la_fresh_papaya_scrub.jpg', title: 'La Fresh Papaya Scrub', price: 1300, category: 'cosmetics', desc: 'Exfoliating papaya scrub.' },
  { file: 'a2bcbf8c-1e24-4f36-8cdd-e9b28b7eec9b.jpg', name: 'vatika_hair_oil.jpg', title: 'Vatika Hair Oil', price: 950, category: 'cosmetics', desc: 'Black seed enriched hair oil.' },
  { file: 'B2E929E5-C80A-49AC-8B41-C68C603C4B64.jpeg', name: 'gold_chains_1.jpeg', title: 'Classic Gold Chains', price: 4500, category: 'jewelry', desc: 'Elegant gold-plated chains.' },
  { file: 'eebf4244-6725-4b05-9e67-d8c9735d5526.jpg', name: 'dr_rashel_rose_oil.jpg', title: 'Dr Rashel Rose Oil', price: 2600, category: 'cosmetics', desc: 'Vitality glow restoring serum.' },
  { file: 'F8AC39CE-00EA-449D-B1A1-E722CBA107A0.jpeg', name: 'jovees_sandalwood_cream.jpeg', title: 'Jovees Sandalwood Cream', price: 1600, category: 'cosmetics', desc: 'Protection day cream.' },
  { file: 'FE7DD791-32C9-4C8D-981F-7BF2B74DEFC2.jpeg', name: 'garnier_vit_c_30ml.jpeg', title: 'Garnier Vitamin C 30ml', price: 2600, category: 'cosmetics', desc: 'Brightening booster serum.' },
  { file: 'IMG_2276.JPG', name: 'tresemme_shampoo.jpg', title: 'Tresemme Shampoo', price: 2400, category: 'cosmetics', desc: 'Keratin smooth shampoo.' },
  { file: 'IMG_2295.JPG', name: 'viana_matte_foundation.jpg', title: 'Viana Matte Foundation', price: 2900, category: 'makeup', desc: 'Mattifying liquid foundation.' },
  { file: 'IMG_5500.JPG', name: 'gold_bracelets.jpg', title: 'Gold Bracelets', price: 3500, category: 'jewelry', desc: 'Stylish gold bracelets.' },
  { file: 'IMG_5548.JPG', name: 'jovees_skin_toner.jpg', title: 'Jovees Rose Toner', price: 1400, category: 'cosmetics', desc: 'Refreshing rose skin toner.' },
  { file: 'IMG_5944.JPG', name: 'xhc_argan_oil.jpg', title: 'XHC Argan Oil', price: 2200, category: 'cosmetics', desc: 'Argan oil shampoo.' },
  { file: 'IMG_5966.JPG', name: 'carotone_cream.jpg', title: 'Carotone Cream', price: 1100, category: 'cosmetics', desc: 'Clarifying face cream.' },
  { file: 'IMG_5970.JPG', name: 'dr_rashel_gold_serum_1.jpg', title: 'Dr Rashel Gold Serum', price: 2800, category: 'cosmetics', desc: '24K gold VIP serum.' },
  { file: 'IMG_5971.JPG', name: 'dr_rashel_gold_serum_2.jpg', title: 'Dr Rashel Gold Serum Pack', price: 2900, category: 'cosmetics', desc: '24K gold VIP serum pack.' },
  { file: 'IMG_5972.JPG', name: 'dr_rashel_rose_serum_2.jpg', title: 'Dr Rashel Rose Serum', price: 2700, category: 'cosmetics', desc: 'Glow restoring serum.' },
  { file: 'IMG_5973.JPG', name: 'dr_rashel_argan_oil.jpg', title: 'Dr Rashel Argan Oil', price: 2500, category: 'cosmetics', desc: 'Multi-lift facial beauty oil.' },
  { file: 'IMG_5974.JPG', name: 'gold_pendants.jpg', title: 'Gold Pendants', price: 3200, category: 'jewelry', desc: 'Beautiful gold pendants.' },
  { file: 'IMG_5990.JPG', name: 'bio_glow_cream.jpg', title: 'Bio Glow Cream', price: 1800, category: 'cosmetics', desc: 'Evening primrose oil cream.' },
  { file: 'IMG_6451.JPG', name: 'gold_chains_2.jpg', title: 'Assorted Gold Chains', price: 4200, category: 'jewelry', desc: 'Variety of gold chains.' },
  { file: 'IMG_6452.JPG', name: 'gold_pendants_2.jpg', title: 'Assorted Gold Pendants', price: 3100, category: 'jewelry', desc: 'Variety of gold pendants.' },
  { file: 'IMG_6463.JPG', name: 'gold_bangles.jpg', title: 'Assorted Gold Bangles', price: 3600, category: 'jewelry', desc: 'Variety of gold bangles.' },
  { file: 'IMG_6497.JPG', name: 'st_ives_body_wash.jpg', title: 'St Ives Body Wash', price: 2400, category: 'cosmetics', desc: 'Nourishing body wash.' },
  { file: 'IMG_6891.JPG', name: 'elf_nano_white.jpg', title: 'Elf Nano White Dose', price: 3200, category: 'cosmetics', desc: 'Advanced whitening serum.' },
  { file: 'temp_image_07CB15B5-4947-4AD0-98E8-E8AC511030E0.webp', name: 'bunny_backpack.webp', title: 'Bunny Plush Backpack', price: 3500, category: 'accessories', desc: 'Cute fluffy bunny backpack.' },
  { file: 'temp_image_09807FD2-0B13-4F50-BE60-646E0AE358EC.webp', name: 'garnier_sakura_lotion.webp', title: 'Garnier Sakura Lotion', price: 2800, category: 'cosmetics', desc: 'Sakura glow body lotion.' },
  { file: 'temp_image_27AA1318-4AC7-4FBB-AD49-EF507996B447.webp', name: 'couple_sculpture.webp', title: 'Couple Heart Sculpture', price: 2500, category: 'gifts', desc: 'Romantic couple sculpture.' },
  { file: 'temp_image_27E38B87-09B6-4D2A-892C-7C185101ADB1.webp', name: 'melody_backpack.webp', title: 'My Melody Backpack', price: 3800, category: 'accessories', desc: 'Pink My Melody plush backpack.' },
  { file: 'temp_image_2D1E4CD0-2E0E-46CF-BF47-E76AE5FCA76E.webp', name: 'love_decor.webp', title: 'LOVE Table Decor', price: 2200, category: 'gifts', desc: 'Red fluffy LOVE sign.' },
  { file: 'temp_image_44588D70-C416-4B51-843B-AAE90E8DCEF4.webp', name: 'cadbury_silk.webp', title: 'Cadbury Silk Valentine', price: 1500, category: 'chocolate', desc: 'Valentine edition chocolate.' },
  { file: 'temp_image_74D27415-E0CA-49E6-9382-4B788AFA3728.webp', name: 'blue_monster_plush.webp', title: 'Blue Monster Plush', price: 2600, category: 'gifts', desc: 'Cute monster plush toy.' },
  { file: 'temp_image_7DA2E022-EBA5-43F4-8B58-E88EB670D2A6.webp', name: 'couple_figurine.webp', title: 'Couple Figurine Gift', price: 2900, category: 'gifts', desc: 'Romantic couple in red frame.' },
  { file: 'temp_image_8B6E1098-A19F-402D-83DB-76B3E111AEEF.webp', name: 'regazza_perfume.webp', title: 'Regazza Femme Perfume', price: 4500, category: 'perfume', desc: 'Eau de parfum for women.' },
  { file: 'temp_image_9EBD319A-A688-4B02-BE14-F364559F7A86.webp', name: 'red_rose_bouquet.webp', title: 'Red Rose Bouquet', price: 2100, category: 'gifts', desc: 'Artificial red roses.' },
  { file: 'temp_image_AEFF3756-FA2F-4A4D-B573-25C8076FB855.webp', name: 'stitch_plush.webp', title: 'Stitch Plush Toy', price: 3200, category: 'gifts', desc: 'Large blue Stitch plush.' },
  { file: 'temp_image_AF2318D2-FCB9-48B4-AB5F-AE9925788630.webp', name: 'heart_photo_frame.webp', title: 'Heart Photo Frame', price: 2400, category: 'gifts', desc: 'Red heart-shaped frame.' },
  { file: 'temp_image_CAD29BA5-E49C-4D63-80BD-3CDC69C72586.webp', name: 'dove_body_polish.webp', title: 'Dove Body Polish', price: 2900, category: 'cosmetics', desc: 'Midnight lavender exfoliating scrub.' },
  { file: 'temp_image_EEF2A48F-C321-48E3-9CBF-418D40C2A8EC.webp', name: 'vaseline_body_oil.webp', title: 'Vaseline Body Oil', price: 2500, category: 'cosmetics', desc: 'Vitamin B3 intensive care oil.' }
];

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

items.forEach(item => {
  const src = path.join(rawDir, item.file);
  const dest = path.join(imagesDir, item.name);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  } else {
    console.log("Missing:", src);
  }
});

let html = fs.readFileSync(indexFile, 'utf8');

let productsArrayStr = 'const products = [\n';
items.forEach(item => {
  productsArrayStr += `            { title: "${item.title}", price: "Rs.${item.price}", category: "${item.category}", image: "images/${item.name}", description: "${item.desc}" },\n`;
});
productsArrayStr += '        ];';

html = html.replace(/const products = \[[\s\S]*?\];/, productsArrayStr);

fs.writeFileSync(indexFile, html);
console.log("Done updating images and index.html.");
