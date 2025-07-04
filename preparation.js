import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Modal,
  FlatList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const categories = [
   {
    title: '👗 Clothes',
    description: 'Stylish outfits for a festive look 💃',
    captions: [
  '👗 AlKaram\nElegant unstitched collection\n🛒 Buy Now | ⭐ 4.5 (210 reviews)',
  '🌸 Sana Safinaz\nFestive Luxury Lawn 2024\n🛍️ Shop Now | 💬 “Premium quality!”',
  '🎀 Khaadi\nVibrant ready-to-wear suits\n🛒 Add to Cart | ❤️ Liked by 1.2k',
  '✨ Gul Ahmed\nSignature embroidered lawn\n🧵 Designer’s Choice | ⭐ 4.7 (300+)',
  '🌼 Limelight\nTrendy prints for Eid glam\n🛍️ Order Now | 💬 “Light & comfy”',
  '👘 Bonanza\nChic chiffon styles\n🛒 Add to Wishlist | ⭐ 4.2',
  '💐 Beechtree\nCasual & festive vibes\n🛍️ Buy Today | 💬 “Colors are vibrant!”',
  '🌹 Maria B\nFormal Eid edition – Luxe\n🎁 Eid Offer: Free scarf | ⭐ 4.8',
],
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5X7Q9sFg6zJygopLTl_PSq40wMnFTcIVSYw&s',
      'https://declarepakistan.com/cdn/shop/files/Web-Banner-Desktop.jpg?v=1721987760&width=3840',
      'https://cdn.shopify.com/s/files/1/0083/4692/7181/files/saphire.jpg?v=1610616107',
      'https://declarepakistan.com/cdn/shop/files/Web-Banner-Desktop_75f5867f-3013-4b1b-8a02-a59f206235e8.jpg?v=1730460577&width=3840',
      'https://declarepakistan.com/cdn/shop/files/drop_down_41385fbd-7f7e-49a5-8d03-28c14571566b.jpg?v=1726134831',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ557s0yQbS0UeJalc_K-aKUL5EP7hMacQo7w&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCCqn6Nru5dCv1iJYcG_9N8xPPX-ebYiUjg&s',
      'https://polawn.com/cdn/shop/files/TempelatePolawn_0001_Layer6_0000_Layer11-min.jpg?v=1747943954&width=533',
    ],
  },
  {
    title: '👠 Shoes',
    description: 'Step into Eid with glamour ✨',
    captions: [
  '👠 Stylo\nTrendy & chic heels\n💸 Rs. 3,499 | ⭐ 4.7\n🛍️ Buy Now | 💬 230 Reviews',
  '🥿 Borjan\nElegant flats & sandals\n💸 Rs. 2,850 | ⭐ 4.5\n🛍️ Buy Now | 💬 180 Reviews',
  '👡 Metro\nDesigner collection for Eid\n💸 Rs. 4,200 | ⭐ 4.6\n🛍️ Limited Stock | 💬 320 Reviews',
  '👢 Insignia\nPremium luxury shoes\n💸 Rs. 5,500 | ⭐ 4.8\n🛍️ Exclusive | 💬 95 Reviews',
  '👞 Servis\nComfort meets tradition\n💸 Rs. 2,200 | ⭐ 4.3\n🛍️ Family Picks | 💬 150 Reviews',
  '👠 ECS\nStylish & budget friendly\n💸 Rs. 2,999 | ⭐ 4.4\n🛍️ Buy 1 Get 1 | 💬 200 Reviews',
  '🥾 Hush Puppies\nImported comfort & quality\n💸 Rs. 6,800 | ⭐ 4.9\n🛍️ Premium Deal | 💬 110 Reviews',
  '👟 Ndure\nTrendy & bold looks\n💸 Rs. 3,250 | ⭐ 4.2\n🛍️ Buy Now | 💬 140 Reviews',
],
    images: [
      'https://www.retrowalk.com/cdn/shop/files/1_87ab10c2-30d8-44a4-bb67-874b7610989d.png?v=1743239273&width=3840',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmN4Sd1CGQXmcvSdvpQst7yx-tRG8Ot2ta1A&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrrSjqmz3ZIEJH-N9nR5tv541JxRWJSYjfg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmLCjs19-xhSdUcMwO8ibGHKt3DV42JWpZcg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbKR6_YbugBXgPKNU-c3_ZvIGKl1VCMfkBA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWD39sFqipvw5DK4PIiqj0OMpaR-BIPwhSKA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNHfSUhc58aCmqppod3qI0tRAyCFlav60Dg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreA_K-Ktm8e1udDBXzZWw3r2UWpI3ZmG5ZA&s',
    ],
  },
  {
    title: '🌿 Mehndi',
    description: 'Beautiful henna for your hands ✋',
    captions: [
  '🌸 Floral\nElegant flower designs\n💸 Rs. 599 | ⭐ 4.8\n💬 210 Reviews | ✋ Best Seller',
  '🌙 Moon Style\nTraditional crescent patterns\n💸 Rs. 499 | ⭐ 4.6\n💬 180 Reviews | 🎉 Trending',
  '💫 Spiral\nModern spiral elegance\n💸 Rs. 550 | ⭐ 4.7\n💬 160 Reviews | 🖌️ Artist Pick',
  '🖤 Intricate\nDeep detailed artwork\n💸 Rs. 650 | ⭐ 4.9\n💬 240 Reviews | 🔥 Top Rated',
  '🌺 Rose\nBold rose patterns\n💸 Rs. 520 | ⭐ 4.5\n💬 130 Reviews | 🌹 Elegant Touch',
  '🧕 Bridal\nFull bridal hands & arms\n💸 Rs. 950 | ⭐ 5.0\n💬 300 Reviews | 💍 Premium Choice',
  '⭐ Star Touch\nUnique star-lined motifs\n💸 Rs. 480 | ⭐ 4.4\n💬 110 Reviews | ✨ Creative',
  '✨ Glittery\nShimmer with glitter henna\n💸 Rs. 700 | ⭐ 4.6\n💬 150 Reviews | 🎨 Glam Look',
],
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjC40PRVE1ZnXCY17WnkGUtlFi0yIg4S5sQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZ3afkMnrRcCqxG5YsioeaERE1lsxLRREbg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KVwuHOmcsCnof5rYCmcZVpWgSKh5AUkSTQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbInCc5NrM3Os1x6RYXwBou5ewO-59ex5FR0a6GLRrWhoG4LJ_kDlXuU2qM-Mip44k2RQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3_JV5tJ2TGhAeIQaWYTyPSkez5drCYuSy1A&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0MyiGP0s0UOefl66OiTbnTTAIrnIJWaPWw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXm78W_d-lS6sjVe_SxI5wrXrr4D2EqAUFQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQMy4vj6A5qucJnJ6Fzx8AcPzd3YLRsjU1w&s',
    ],
  },
  {
    title: '💫 Chooriyan',
    description: 'Colorful bangles that sparkle 💖',
    captions: [
  '🔴 Red Mix\nBold & festive combo\n💸 Rs. 450 | ⭐ 4.7\n💬 125 Reviews | ❤️ Popular Pick',
  '💚 Green Touch\nElegant green vibes\n💸 Rs. 420 | ⭐ 4.6\n💬 98 Reviews | 🌿 Traditional Style',
  '🟡 Gold Shine\nGolden glow on wrists\n💸 Rs. 520 | ⭐ 4.8\n💬 140 Reviews | ✨ Premium Glam',
  '💜 Purple Glam\nGlamorous purple charm\n💸 Rs. 480 | ⭐ 4.5\n💬 110 Reviews | 🎉 Trending Now',
  '🎀 Pink Spark\nSoft & vibrant look\n💸 Rs. 430 | ⭐ 4.4\n💬 85 Reviews | 💕 Loved by Teens',
  '🌈 Rainbow\nMulti-color fun style\n💸 Rs. 500 | ⭐ 4.9\n💬 160 Reviews | 🌟 Top Rated',
  '🤍 Classic Set\nTraditional wedding wear\n💸 Rs. 600 | ⭐ 5.0\n💬 200 Reviews | 🏆 Best Seller',
  '🧨 Neon Twist\nModern bright tones\n💸 Rs. 470 | ⭐ 4.3\n💬 70 Reviews | 🔆 Youth Favorite',
],
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhaFdtB2wMMU4g2liQyi15I7c6__H8gJLNPA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuRBoSLBPHHVy2MFJbuzk-n4r2EuIiBjiS6g&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHbJ_vyZGfh0qzt84KQCb38jbp5Znvh68Eg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeaVsJ6ZMNZtLR5-lyEH1wov3qbiLwhh78BQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGUI5nxItrTRYsR09-Ty74CSEOrbgb0dnW_w&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJ5SPf__t0djXeTmpFty4q7ITQfCw_dPL-w&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZbhGqrooBt34fXmrfQEIS1B234_J8ds_3w&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl60jKDJz9AHmPy-4tf8eEvuec3F_5ca-zTw&s',
    ],
  },
  {
    title: '💄 Makeup',
    description: 'Shine with stunning Eid glam 💋',
    captions: [
  '🧴 Foundation\nFlawless base coverage\n💸 Rs. 850 | ⭐ 4.8\n💬 220 Reviews | 🔥 Smooth Finish',
  '💄 Lipstick\nBold & lasting shades\n💸 Rs. 550 | ⭐ 4.7\n💬 310 Reviews | 💋 Top Favorite',
  '🌸 Blush\nRosy glow for cheeks\n💸 Rs. 430 | ⭐ 4.6\n💬 190 Reviews | 🌷 Soft Finish',
  '👁️ Mascara\nLash volume booster\n💸 Rs. 620 | ⭐ 4.9\n💬 270 Reviews | 🔥 Most Loved',
  '✨ Highlighter\nShiny glow-up pop\n💸 Rs. 700 | ⭐ 4.8\n💬 160 Reviews | 🌟 Festival Must',
  '🎨 Palette\nAll-in-one beauty kit\n💸 Rs. 1200 | ⭐ 5.0\n💬 340 Reviews | 🏆 Makeup Essential',
  '🖋️ Eyeliner\nBold and sharp eyes\n💸 Rs. 400 | ⭐ 4.5\n💬 150 Reviews | 🎯 Smudge-Free',
  '🧊 Setting Spray\nKeeps makeup fresh\n💸 Rs. 490 | ⭐ 4.6\n💬 130 Reviews | 💦 Long-Lasting Hold',
],

    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5HluoE3g5LbgteyErvLDIC7tOAwOyv_aBIXNNlvvEBtGAsLlAQ2Wp7utpNMlgo9CKflk&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREcX4yySIc9H6CV8TmrhyyENqHAYRuyvUwwHLgVDJzNzwiJ7oLyd6XrUe6wY6460HUwwE&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4Ja92ZTt_uRRACZ-s38bKezh7PiWESZvWQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRd1prelUrtFqgflQuk4ZbBAji_BDqWfqk6A&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMOWEuC2MeAIl1YPTCp1DiscwfssrX400KXA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqpwEjc6FxGEUiKGoXezSaFzBxedMItlKww&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8p55pxkjdvh7_voHx4I_s168KUN5ouo6vzw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQycgkLwzvRxOswpMnieRBIS14JTE6qaitROw&s',
    ],
  },
  {
    title: '💅 Nail Art',
    description: 'Glossy tips for a festive touch 🎨',
    captions: [
  '🔴 Red Tips\nClassic bold nails\n💸 Rs. 300 | ⭐ 4.7\n💬 Elegant & timeless look',
  '🌸 Floral Art\nSpring-inspired designs\n💸 Rs. 350 | ⭐ 4.8\n💬 Delicate and trendy',
  '💖 Pink Gloss\nShiny & soft pink finish\n💸 Rs. 320 | ⭐ 4.6\n💬 Sweet and glossy style',
  '✨ Glitter Glam\nSparkly party nails\n💸 Rs. 400 | ⭐ 4.9\n💬 Perfect for festive vibes',
  '🌈 Pastel Dream\nSoft pastel blend\n💸 Rs. 370 | ⭐ 4.7\n💬 Calm & dreamy tones',
  '🖤 Matte Magic\nChic and velvety look\n💸 Rs. 330 | ⭐ 4.5\n💬 Trendy matte perfection',
  '🌟 Rainbow Shine\nVibrant multi-color nails\n💸 Rs. 420 | ⭐ 4.9\n💬 Fun and eye-catching!',
  '🏅 Gold Touch\nLuxurious golden finish\n💸 Rs. 390 | ⭐ 4.8\n💬 Royal and glamorous feel',
],
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhsvbO_MinEwc3s02Lce_hQO5bdwFgil4Riw&s',
      'https://i.pinimg.com/736x/f0/1d/86/f01d86b7e7db3d0e4885d486c4760f3f.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCE-AwpDCBQCkA1DpQcgQF1SBLTaalTOJjg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXP2A_AW-LmiTXgyHnypoAz9XrSRLOt0HgfNXLs3sHrmoR1YYAgILRQrFqVaA5hr_Nv8I&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx9xg-O4BPQfvDBYxl3JUel2SDR79sVkm9k8AOXL1B-McLo_dptNgkyaKDuhfx2Vs1AcE&usqp=CAU',
      'https://i.pinimg.com/736x/25/75/3a/25753a22ea96d137eac706bbf6b3be67.jpg',
      'https://i.pinimg.com/564x/95/e5/f8/95e5f8407c48053cff020d7304232cbe.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmw-rm7hm1GrXIUj6rkbHgzy0Y3FQL4RBvbjG4Hy3lz9yJlq6HwHBiEwVSV7_KglmszA&usqp=CAU',
    ],
  },
  {
    title: '🎁 Gifts',
    description: 'Wrap your love in Eid presents 🎀',
    captions: [
  '🌹 Perfumes\nLong-lasting fragrance\n💰 Rs. 1,200 | ⭐ 4.8\n💬 Smells like celebration!',
  '🍫 Chocolates\nSweet Eid delight\n💰 Rs. 500 | ⭐ 4.7\n💬 Melts hearts instantly!',
  '👜 Bags\nTrendy & spacious\n💰 Rs. 2,000 | ⭐ 4.6\n💬 Perfect Eid accessory',
  '🧸 Toys\nFun for all ages\n💰 Rs. 800 | ⭐ 4.5\n💬 Kids absolutely love it!',
  '⌚ Watches\nElegant timepieces\n💰 Rs. 3,000 | ⭐ 4.9\n💬 A classy Eid gift!',
  '💌 Eid Cards\nPersonalized wishes\n💰 Rs. 150 | ⭐ 4.8\n💬 Heartfelt and traditional',
  '💍 Jewelry\nShiny and graceful\n💰 Rs. 2,500 | ⭐ 4.7\n💬 Adds charm to your look!',
  '🎁 Box Sets\nAll-in-one surprise\n💰 Rs. 2,200 | ⭐ 4.6\n💬 Eid hamper everyone loves!',
],
    images: [
      'https://www.arabianbusiness.com/wp-content/uploads/sites/3/cloud/2024/03/27/perfumes-hero-image-scaled.jpg',
      'https://img.drz.lazcdn.com/g/kf/S418e1d61126f4fb2ab0ef14cd2ba37ccb.jpg_720x720q80.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmb9K2L5_KaTWt6SFtagWYfJ1nyCThQ_mwig&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIi-j7sz_Eo6mZW0RH3wAP4GeN-tMOu0MsGg&ss',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFeZIZq9kmzYFyqZIIdP85dINw1mu_hIELg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLeQKWjPRTTvRzzbtM9ee2sRIAbw6PyFDUjQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKtz9fzlDw7fJkszEYxGdWmLZ6kop440yog&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttZGqAtNqLfxz71edCHo3fuivuMJSBdAg2A&s',
    ],
  },
  {
    title: '🧕 Hijabs',
    description: 'Graceful and elegant Eid looks 🧣',
    captions: [
  '🌬️ Chiffon\nLight & breezy texture\n💰 Rs. 800 | ⭐ 4.7\n💬 Perfect for hot days!',
  '✨ Silk\nSmooth & luxurious feel\n💰 Rs. 1,200 | ⭐ 4.9\n💬 Elegant for formal wear',
  '🌿 Cotton\nSoft & breathable\n💰 Rs. 650 | ⭐ 4.6\n💬 Everyday comfort',
  '🎀 Georgette\nFlowy & sheer\n💰 Rs. 900 | ⭐ 4.5\n💬 Easy to drape, looks fab!',
  '🖼️ Printed\nTrendy patterns\n💰 Rs. 750 | ⭐ 4.8\n💬 Makes every outfit pop!',
  '🌸 Lawn\nLightweight & comfy\n💰 Rs. 600 | ⭐ 4.6\n💬 Summer essential',
  '🕊️ Net\nDelicate & fancy\n💰 Rs. 950 | ⭐ 4.7\n💬 Great for festive events',
  '💫 Crinkle\nWrinkle style texture\n💰 Rs. 700 | ⭐ 4.5\n💬 No ironing needed!',
],
    images: [
      'https://img.drz.lazcdn.com/static/bd/p/ec36ce92671924cdc50aec4ba8b0fac0.jpg_720x720q80.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauGen_Kg1i4bqgli3p9kD3qkNbga9uWcLXA&s',
      'https://images-cdn.ubuy.com.pk/660d62a0d6fc5326c83b348f-jersey-premium-cotton-hijab-scarf-for.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsf2sjLmAtcIHU56YUZUq29sEObpvoc9VE-w&s',
      'https://5.imimg.com/data5/ZG/PQ/GU/SELLER-4079724/jk5179-jk5187-500x500.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8dDhbHutQOL26e51hSE_RaKDdVjlESaScdH-4nuiE4I22VzaUEYbG4XnAFmWgPxywj0&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPu-uJZoNdQA2byil4O6Po-1gG56n3vl9vw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9kfRETs-WJNE3GtyWIqeX5XOZOX8atg1sA&s',
    ],
  },
  {
    title: '💆‍♀️ Skincare Essentials',
    description: 'Glow up with daily skincare 💧',
    captions: [
      '🌞 Sunblock\nSPF 50+ protection\n💸 Rs. 999 | ⭐ 4.8',
      '🧼 Cleanser\nGentle daily use\n💸 Rs. 750 | ⭐ 4.6',
      '🧴 Moisturizer\nHydrating & light\n💸 Rs. 850 | ⭐ 4.7',
      '🍃 Toner\nMinimizes pores\n💸 Rs. 600 | ⭐ 4.5',
      '💧 Hyaluronic Serum\nDeep hydration magic\n💸 Rs. 1,050 | ⭐ 4.8\n💬 “Skin feels plump & refreshed!”',
      '🌸 Rose Water Gel\nHydrating & calming\n💸 Rs. 680 | ⭐ 4.7\n💬 “Fragrant & soothing!”',
      '💖 Aloe Vera Lip Balm\nSoothing & healing\n💸 Rs. 250 | ⭐ 4.6\n💬 “No more chapped lips”',
      '👁️ Under Eye Gel\nReduces puffiness & dark circles\n💸 Rs. 890 | ⭐ 4.6\n💬 “Bright eyes in 1 week”',
    ],
    images: [
      'https://www.skincarebyabs.com/cdn/shop/files/skincarebyabs.png?v=1749533291',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahhUHSBOO6-kTnITyNkPi9NhKtYljlnVcqA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCv3Zfc0l8C8mM5M16a6xJVnQZ-f1o28w16A&s',
      'https://wishtrend.com/cdn/shop/articles/glam-8-Face-Toner-Recommendations-thumbnail_4dcd975a-64e5-4f2d-84ae-a7fce14f38b1.jpg?v=1652773744',
      'https://www.hamme.com.pk/cdn/shop/files/hyaluronic2.jpg?v=1726746329&width=1200',
      'https://i.ytimg.com/vi/6PemR4HZbrQ/maxresdefault.jpg',
      'https://cutish.pk/wp-content/uploads/2020/09/Aloe-Vera-Lip-Balm-2.jpg',
      'https://img.drz.lazcdn.com/static/pk/p/95462c06feea140cf2a6ff77c08fefde.png_720x720q80.png',
    ],
  },
  {
    title: '🕶️ Accessories',
    description: 'Trendy details to complete your style 👜',
    captions: [
      '🎀 From shades to sparkles\nEverything you need to complete your look!\n💎 Glam up head-to-toe | ⭐ Loved by fashionistas!',
      '🕶️ Oversized Shades\nBold summer glam\n💸 Rs. 1,200 | ⭐ 4.7\n💬 “Total diva vibes!”',
      '🌸 Pearl Hair Band\nElegant and graceful\n💸 Rs. 350 | ⭐ 4.6\n💬 “Soft and chic”',
      '👜 Tote Bag\nStylish + spacious\n💸 Rs. 1,800 | ⭐ 4.7\n💬 “Fits everything in!”',
      '💍 Gold-Tone Ring\nMinimal glam touch\n💸 Rs. 650 | ⭐ 4.6\n💬 “Elegant and dainty”',
      '✨ Glitter Strap\nShiny & festive\n💸 Rs. 600 | ⭐ 4.7\n💬 “Stands out beautifully”',
    ],
    images: [
      'https://media.theeverygirl.com/wp-content/uploads/2024/07/the-everygirl-feature-amazon-summer-accessories-2025.jpg',
      'https://img.drz.lazcdn.com/static/pk/p/3f028cf7bc939600be4c87de17d8f7ea.jpg_720x720q80.jpg',
      'https://img.drz.lazcdn.com/static/pk/p/aac3e15fd291f7119cb260735099337d.jpg_720x720q80.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxB1HXtswEFkSuYT47uHXuj8r5b6uC-HDeA&s',
      'https://img.lazcdn.com/g/ff/kf/Sfa7bc1a2e8114a999b418250991739b4e.jpg_360x360q75.jpg_.webp',
      'https://m.media-amazon.com/images/I/71fNDd7LUnL._AC_UY350_.jpg',
    ],
  },
  {
  title: '💎 Jewelry',
  description: 'Shiny pieces to elevate your glam ✨',
  captions: [
    '👑 Maala Set\nTraditional bridal style\n💸 Rs. 2,500 | ⭐ 4.8\n💬 “Regal and elegant”',
    '✨ Stud Earrings\nMinimal daily wear\n💸 Rs. 499 | ⭐ 4.6\n💬 “Simple & pretty”',
    '💖 Heart Pendant\nRomantic vibes\n💸 Rs. 750 | ⭐ 4.7\n💬 “So cute for gifting!”',
    '🌟 Hoop Earrings\nTrendy bold look\n💸 Rs. 850 | ⭐ 4.5\n💬 “Statement piece!”',
    '🥰 Bracelet Set\nMatching hand beauty\n💸 Rs. 1,200 | ⭐ 4.9\n💬 “Elegant sparkle”',
    '🎀 Charm Necklace\nStylish layered chain\n💸 Rs. 999 | ⭐ 4.6\n💬 “My fav accessory”',
    '💫 Anklet Pair\nBoho foot glam\n💸 Rs. 600 | ⭐ 4.4\n💬 “Cute & trendy for summer”',
    '🧿 Evil Eye Set\nChic & protective\n💸 Rs. 980 | ⭐ 4.7\n💬 “Stylish with meaning”',
  ],
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWHj8kYFVf7Z2jkerV6_a1TxGxnEvuuu2NDw&s',
    'https://s.alicdn.com/@sc04/kf/H7dba9099f89c4c6db98f8ab55b6717abf.png',
    'https://kinclimg7.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BIMM0063P13_YAA18DIG6XXXXXXXX_ABCD00-PICS-00004-1024-34372.png',
    'https://salty.co.in/cdn/shop/files/Salty-4168049.jpg?v=1733840456&width=1000',
    'https://www.dressyzone.com/cdn/shop/files/p16481-pair-of-adjustable-bracelet_ca4d1daa-0711-44ce-8f76-63e834b7c021.jpg?v=1747219507',
    'https://hips.hearstapps.com/hmg-prod/images/charmnecklackes-1508344986.jpg',
    'https://loto.pk/cdn/shop/products/DSC_2187_1200x1200.jpg?v=1735730770',
    'https://m.media-amazon.com/images/I/71L2a6-r3aL._AC_SL1500_.jpg',
  ],
  },
  {
  title: '⌚ Watches',
  description: 'Elegant timepieces that shine on your wrist 🕰️',
  captions: [
    '🌸 Floral Dial\nFeminine beauty\n💸 Rs. 1,800 | ⭐ 4.7\n💬 “Matches every dress”',
    '💎 Stone Strap\nGlam watch vibes\n💸 Rs. 2,200 | ⭐ 4.9\n💬 “Sparkly and stunning!”',
    '🖤 Black Leather\nClassic & bold\n💸 Rs. 1,500 | ⭐ 4.6\n💬 “Timeless pick”',
    '🧁 Pastel Pink\nCute & soft look\n💸 Rs. 1,300 | ⭐ 4.5\n💬 “Sweet and stylish”',
    '⚪ Silver Mesh\nSleek and modern\n💸 Rs. 2,000 | ⭐ 4.8\n💬 “Elegant finish”',
    '🌙 Moon Phase Dial\nTrendy & unique\n💸 Rs. 2,400 | ⭐ 4.7\n💬 “So aesthetic!”',
    '🔗 Chain Bracelet Watch\n2-in-1 elegance\n💸 Rs. 2,700 | ⭐ 4.6\n💬 “Perfect for occasions”',
    '✨ Crystal Bezel\nLuxury feel\n💸 Rs. 3,000 | ⭐ 4.9\n💬 “Love the sparkle!”',
  ],
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWmlV2HJJrwsQMM4sqiGSy7e0ryP7h89I_Q&s',
    'https://img.drz.lazcdn.com/static/pk/p/b55469f1e9d55ba867e3ed0ea518ed17.jpg_960x960q80.jpg_.webp',
    'https://img.drz.lazcdn.com/static/pk/p/97ee495a99566b678b069a6a5d2ef56f.jpg_720x720q80.jpg',
    'https://cdn.shopify.com/s/files/1/0316/2705/1053/files/Packshot-template-v1.jpg?v=1689774365',
    'https://img.drz.lazcdn.com/static/pk/p/86645bb19fbdca8dd07ec4dc408de2f9.jpg_720x720q80.jpg',
    'https://lh3.googleusercontent.com/proxy/l0OcAW-TifolkoDxcHpJmGgrTpsoXQGOOeuB_tUY7ZdOFdDdqyEwOIjcPDs0ep-jCMWI4kigAPWgjRzKqfAF9bJ6mRhi2zSVWs_i1xrcz1U',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_F42Vi36uJ0CJ41BScyohQwGq8aC6aUTJKA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8kg-h6SV_YiUbU_4jixeeCvRjSN-AVruXw&s',
  ],
  },
];

const EidPreparations = () => {
  const [selected, setSelected] = useState(null);

  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1qPRzDSvtr9aFoaQ_W5MXtX0VkSIkCx_Hw&s',
      }}
      style={styles.background}
      blurRadius={5}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>✨ Girl's Glam Gallery by Kinza🎀</Text>
        <Text style={styles.subHeader}>
            Step into a world of style, self-care, and sparkle —{"\n"}
            curated with love for every girl who loves to glow!
        </Text>

        <View style={styles.grid}>
          {categories.map((cat, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => setSelected(cat)}
            >
              <Image source={{ uri: cat.images[0] }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{cat.title}</Text>
              <Text style={styles.cardDesc}>{cat.description}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Modal visible={selected !== null} transparent animationType="slide">
          <View style={styles.modal}>
            <TouchableOpacity onPress={() => setSelected(null)} style={styles.backArrow}>
              <AntDesign name="arrowleft" size={28} color="#fbc531" />
            </TouchableOpacity>

            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selected?.title}</Text>

              <View style={styles.flatListWrapper}>
                <FlatList
                  horizontal
                  contentContainerStyle={styles.flatListContent}
                  showsHorizontalScrollIndicator={false}
                  data={selected?.images}
                  keyExtractor={(item, idx) => idx.toString()}
                  renderItem={({ item, index }) => (
                    <View style={styles.modalItem}>
                      <Image source={{ uri: item }} style={styles.modalImage} />
                      <Text style={styles.modalCaption}>
                        {selected?.captions?.[index] || '🎀 Special Item'}
                      </Text>
                      <Text style={styles.modalPrice}>💸 PKR 1,499</Text>
                      <Text style={styles.modalReview}>⭐ 4.8 | 120 reviews</Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: {
    padding: 20,
    paddingBottom: 100,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  header: {
    fontSize: 26,
    color: '#f5c542',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    width: '48%',
    marginBottom: 15,
    padding: 10,
    borderRadius: 14,
    alignItems: 'center',
    borderColor: '#fbc531',
    borderWidth: 1,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fefefe',
  },
  cardDesc: {
    fontSize: 12,
    color: '#ddd',
    textAlign: 'center',
  },
  modal: {
    backgroundColor: 'rgba(30,30,30,0.95)',
    flex: 1,
  },
  backArrow: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  modalContent: {
    flex: 1,
    paddingTop: 60,
  },
  modalTitle: {
    fontSize: 24,
    color: '#fbc531',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  flatListWrapper: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
  },
  flatListContent: {
    alignItems: 'center',
  },
  modalItem: {
    width: 280,
    marginHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    padding: 12,
  },
  modalImage: {
    width: 280,
    height: 280,
    borderRadius: 14,
    borderColor: '#fbc531',
    borderWidth: 2,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  modalCaption: {
    color: '#fbc531',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    paddingHorizontal: 8,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    paddingVertical: 4,
    overflow: 'hidden',
  },
  modalPrice: {
    color: '#fefefe',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
  modalReview: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 2,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  subHeader: {
  fontSize: 14,
  color: '#eee',
  textAlign: 'center',
  marginBottom: 20,
  lineHeight: 20,
  fontStyle: 'italic',
},

});

export default EidPreparations;
