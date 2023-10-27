

const productsData = [{ 'productId': 0, 'viewCount': 5, 'category': 'Electronics', 'imgs': ['https://pic.imgdb.cn/item/630ccd2a16f2c2beb1654770.jpg'], 'title': 'IPhone 13 Pro Max', 'price': '€3', 'desc': '90% news,good condition, black color', 'seller': 'zhenxu' },
{ 'productId': 1, 'viewCount': 5, 'category': 'Electronics', 'imgs': ['https://pic.imgdb.cn/item/630ccd3d16f2c2beb1655514.jpg'], 'title': 'Trust Nito Wireless Mouse', 'price': '€10', 'desc': 'original price is €50, I bought it in 2020', 'seller': 'Fengshi' },
{ 'productId': 2, 'viewCount': 5, 'category': 'Make-up', 'imgs': ['https://pic.imgdb.cn/item/630ccd6f16f2c2beb1656d88.jpg'], 'title': 'Fenty Beauty Highlight', 'price': '€15', 'desc': 'it is suitable for all skins', 'seller': 'Fengshi' },
{ 'productId': 3, 'viewCount': 5, 'category': 'Electronics', 'imgs': ['https://pic.imgdb.cn/item/630ccdef16f2c2beb165b273.jpg'], 'title': 'phoneApple Watch SE', 'price': '€150', 'desc': '', 'seller': 'qunqun' },
{ 'productId': 4, 'viewCount': 5, 'category': 'Clothes & Lifestyle', 'imgs': ['https://pic.imgdb.cn/item/630ccd9e16f2c2beb1658b53.jpg'], 'title': 'Japanese Thread Incense', 'price': '€8', 'desc': '', 'seller': 'harper' },
{ 'productId': 5, 'viewCount': 5, 'category': 'Electronics', 'imgs': ['https://pic.imgdb.cn/item/630ccdab16f2c2beb165915e.jpg'], 'title': 'Mobile phone stand', 'price': '€1.5', 'desc': '', 'seller': 'Chunyan' },
{ 'productId': 6, 'viewCount': 5, 'category': 'Sport & Hobby', 'imgs': ['https://pic.imgdb.cn/item/631614d316f2c2beb1d272e3.jpg'], 'title': 'A pair of Lightweight Shinguards', 'price': '€10', 'desc': '', 'seller': 'qunqun' },
{ 'productId': 7, 'viewCount': 5, 'category': 'Sport & Hobby', 'imgs': ['https://pic.imgdb.cn/item/63163be216f2c2beb100c1e6.jpg'], 'title': 'Brompton ML3', 'price': '€1220', 'desc': '', 'seller': 'Ellen' },
{ 'productId': 8, 'viewCount': 5, 'category': 'Sport & Hobby', 'imgs': ['https://pic.imgdb.cn/item/63163c9016f2c2beb1013b6a.jpg'], 'title': 'Ridgeback MX16 Kids Bike', 'price': '€150', 'desc': '', 'seller': 'harper' },
{ 'productId': 9, 'viewCount': 5, 'category': 'Sport & Hobby', 'imgs': ['https://pic.imgdb.cn/item/63163cc516f2c2beb101626a.jpg'], 'title': 'Trek Marlin 6', 'price': '€120', 'desc': '', 'seller': 'Jujj' },
{ 'productId': 10, 'viewCount': 5, 'category': 'Sport & Hobby', 'imgs': ['https://pic.imgdb.cn/item/63163cf916f2c2beb10189f5.jpg'], 'title': 'Titleist 710 AP1 Irons', 'price': '€500', 'desc': '', 'seller': 'Davis' },
{ 'productId': 11, 'viewCount': 11, 'category': 'Sport & Hobby', 'imgs': ['https://pic.imgdb.cn/item/63163ef516f2c2beb102b591.jpg'], 'title': 'Ping Zing Karsten 35 Inch Putter', 'price': '€69', 'desc': '', 'seller': 'Hary' },
{ 'productId': 12, 'viewCount': 11, 'category': 'Sport & Hobby', 'imgs': ['https://pic.imgdb.cn/item/63163f5616f2c2beb10300a2.jpg'], 'title': 'FOAM MATS INTERLOCKING', 'price': '€79', 'desc': '', 'seller': 'Lovely' },
{ 'productId': 13, 'viewCount': 11, 'category': 'Sport & Hobby', 'imgs': ['https://pic.imgdb.cn/item/6316407816f2c2beb103dddc.jpg'], 'title': 'Shiatsu Foot Massaer', 'price': '€30', 'desc': '', 'seller': 'Caijx' },
{ 'productId': 14, 'viewCount': 11, 'category': 'Sport & Hobby', 'imgs': ['https://pic.imgdb.cn/item/63163faf16f2c2beb1034408.jpg'], 'title': 'Mobility scooter Veo Sport', 'price': '€850', 'desc': '', 'seller': 'SmailDay' },
{ 'productId': 15, 'viewCount': 11, 'category': 'Home', 'imgs': ['https://pic.imgdb.cn/item/6316419916f2c2beb104beb8.jpg'], 'title': 'Bunk bed', 'price': '€90', 'desc': '', 'seller': 'Hary' },
{ 'productId': 16, 'viewCount': 11, 'category': 'Home', 'imgs': ['https://pic.imgdb.cn/item/63164ede16f2c2beb10e60ce.jpg'], 'title': 'Side table', 'price': '€100', 'desc': '', 'seller': 'Happyyzx' },
{ 'productId': 17, 'viewCount': 22, 'category': 'Home', 'imgs': ['https://pic.imgdb.cn/item/63164f3f16f2c2beb10e9c10.jpg'], 'title': 'Sofa - 3 Seater with Chez Long', 'price': '€20', 'desc': '', 'seller': 'Trees' },
{ 'productId': 18, 'viewCount': 22, 'category': 'Home', 'imgs': ['https://pic.imgdb.cn/item/63164f9616f2c2beb10ed2d0.jpg'], 'title': 'Gazebo, 3x6m Gazebo with sititleg ', 'price': '€170', 'desc': '', 'seller': 'Niaoniao' },
{ 'productId': 19, 'viewCount': 22, 'category': 'Home', 'imgs': ['https://pic.imgdb.cn/item/63164ff616f2c2beb10f0b60.jpg'], 'title': 'Beautiful Ceiling Light', 'price': '€120', 'desc': '', 'seller': 'Caijx' },
{ 'productId': 20, 'viewCount': 22, 'category': 'Home', 'imgs': ['https://pic.imgdb.cn/item/6316502816f2c2beb10f29dc.jpg'], 'title': 'Waterford Range Cooker', 'price': '€300', 'desc': '', 'seller': 'Hary' },
{ 'productId': 21, 'viewCount': 22, 'category': 'Home', 'imgs': ['https://pic.imgdb.cn/item/631658ca16f2c2beb1166b5d.jpg'], 'title': 'Beautiful Copper Island Light', 'price': '€250', 'desc': '', 'seller': 'Leo' },
{ 'productId': 22, 'viewCount': 22, 'category': 'Home', 'imgs': ['https://pic.imgdb.cn/item/6316597216f2c2beb1172798.jpg'], 'title': 'Office Stationery Gift Kit titlektop Supplies Set Hand Account Making Tools', 'price': '€1.5', 'desc': '', 'seller': 'Trees' },
{ 'productId': 23, 'viewCount': 4, 'category': 'Home', 'imgs': ['https://pic.imgdb.cn/item/6316597216f2c2beb1172798.jpg'], 'title': 'Office Stationery Gift Kit titlektop Supplies Set Hand Account Making Tools', 'price': '€1.5', 'desc': '', 'seller': 'Fengshi' },
{ 'productId': 24, 'viewCount': 4, 'category': 'Home', 'imgs': ['https://pic.imgdb.cn/item/6316597216f2c2beb1172798.jpg'], 'title': 'Office Stationery Gift Kit titlektop Supplies Set Hand Account Making Tools', 'price': '€1.5', 'desc': '', 'seller': 'huihui' },
{ 'productId': 25, 'viewCount': 4, 'category': 'Stationary', 'imgs': ['https://pic.imgdb.cn/item/6316597216f2c2beb1172798.jpg'], 'title': 'Office Stationery Gift Kit titlektop Supplies Set Hand Account Making Tools', 'price': '€1.5', 'desc': '', 'seller': 'yaoyuan' },
{ 'productId': 26, 'viewCount': 4, 'category': 'Stationary', 'imgs': ['https://pic.imgdb.cn/item/6316789216f2c2beb123913d.jpg'], 'title': 'Black 36 Sheets Silver Starry Sky Stationary Writing Paper', 'price': '€10', 'desc': '', 'seller': 'shengMing' },
{ 'productId': 27, 'viewCount': 4, 'category': 'Stationary', 'imgs': ['https://pic.imgdb.cn/item/6316773916f2c2beb122f9bd.jpg'], 'title': 'Bumper Stationery Wallet', 'price': '€5.00', 'desc': '', 'seller': 'Jujj' },
{ 'productId': 28, 'viewCount': 4, 'category': 'Stationary', 'imgs': ['https://pic.imgdb.cn/item/6316778b16f2c2beb1231e09.jpg'], 'title': '49pcs Landscape Print Stationery Set,one-size', 'price': '€16.00', 'desc': '', 'seller': 'Davis' },
{ 'productId': 29, 'viewCount': 4, 'category': 'Stationary', 'imgs': ['https://pic.imgdb.cn/item/6316780416f2c2beb1235289.jpg'], 'title': '4STUDENT SOLUTIONS 38pce BUMPER STATIONERY STARTER SET', 'price': '€7.95', 'desc': '', 'seller': 'Chunyan' },
{ 'productId': 30, 'viewCount': 4, 'category': 'Stationary', 'imgs': ['https://pic.imgdb.cn/item/6316784b16f2c2beb12371d5.jpg'], 'title': 'England A4 Stationery Set', 'price': '€9.5', 'desc': '', 'seller': 'Hui' },
{ 'productId': 31, 'viewCount': 111, 'category': 'Books', 'imgs': ['https://pic.imgdb.cn/item/6316791d16f2c2beb123cc34.jpg'], 'title': 'RICHEULIEU by T CAHU and M LELOIR', 'price': '€5', 'desc': '', 'seller': 'Huali' },
{ 'productId': 32, 'viewCount': 33, 'category': 'Books', 'imgs': ['https://pic.imgdb.cn/item/6316795916f2c2beb123ea96.jpg'], 'title': 'The Deputy', 'price': '€3', 'desc': '', 'seller': 'hahaHa' },
{ 'productId': 33, 'viewCount': 33, 'category': 'Books', 'imgs': ['https://pic.imgdb.cn/item/6316798516f2c2beb123fb48.jpg'], 'title': 'William McIlvanney', 'price': '€8', 'desc': '', 'seller': 'Hui' },
{ 'productId': 34, 'viewCount': 33, 'category': 'Books', 'imgs': ['https://pic.imgdb.cn/item/631679d116f2c2beb1241954.jpg'], 'title': 'The Number Two Man', 'price': '€5', 'desc': '', 'seller': 'xiaoyangg' },
{ 'productId': 35, 'viewCount': 33, 'category': 'Clothes & Lifestyle', 'imgs': ['https://pic.imgdb.cn/item/63167a5c16f2c2beb1245407.jpg'], 'title': 'ANNA Kara Wedding dress', 'price': '€1000', 'desc': '', 'seller': 'Trees' },
{ 'productId': 36, 'viewCount': 33, 'category': 'Clothes & Lifestyle', 'imgs': ['https://pic.imgdb.cn/item/63167aaa16f2c2beb1247bb3.jpg'], 'title': 'ICON CAPS NEW', 'price': '€50', 'desc': '', 'seller': 'qunqun' },
{ 'productId': 37, 'viewCount': 33, 'category': 'Clothes & Lifestyle', 'imgs': ['https://pic.imgdb.cn/item/63167ad816f2c2beb1248ff9.jpg'], 'title': 'Disney Bag', 'price': '€10', 'desc': '', 'seller': 'Tongtong' },
{ 'productId': 38, 'viewCount': 33, 'category': 'Clothes & Lifestyle', 'imgs': ['https://pic.imgdb.cn/item/63167b2616f2c2beb124baac.jpg'], 'title': 'River Island Bag', 'price': '€20', 'desc': '', 'seller': 'XiaoBei' },
{ 'productId': 39, 'viewCount': 33, 'category': 'Clothes & Lifestyle', 'imgs': ['https://pic.imgdb.cn/item/63167b5916f2c2beb124d7b9.jpg'], 'title': 'LOVE Leather Apple Watch Strap/Band for Women', 'price': '€22', 'desc': '', 'seller': 'Sskill' },
{ 'productId': 40, 'viewCount': 33, 'category': 'Clothes & Lifestyle', 'imgs': ['https://pic.imgdb.cn/item/63167ba716f2c2beb12503f5.jpg'], 'title': 'LGHD unplugged White', 'price': '€220', 'desc': '', 'seller': 'Davis' },
{ 'productId': 41, 'viewCount': 33, 'category': 'Pets', 'imgs': ['https://pic.imgdb.cn/item/63167c0f16f2c2beb1253e86.jpg'], 'title': 'Stunning Blue kitten male', 'price': '€100', 'desc': '', 'seller': 'Ellen' },
{ 'productId': 42, 'viewCount': 8, 'category': 'Pets', 'imgs': ['https://pic.imgdb.cn/item/63167c4e16f2c2beb1255d31.jpg'], 'title': 'Breeding pair of moustached', 'price': '€480', 'desc': '', 'seller': 'shengMing' },
{ 'productId': 43, 'viewCount': 8, 'category': 'Pets', 'imgs': ['https://pic.imgdb.cn/item/63167c8616f2c2beb1257768.jpg'], 'title': 'Dwarf rabbits', 'price': '€50', 'desc': '', 'seller': 'yaoyuan' },
{ 'productId': 44, 'viewCount': 8, 'category': 'Pets', 'imgs': ['https://pic.imgdb.cn/item/63167cd116f2c2beb1259d51.jpg'], 'title': 'Abyssinian male cat', 'price': '€750', 'desc': '', 'seller': 'KELLY' },
{ 'productId': 45, 'viewCount': 8, 'category': 'Pets', 'imgs': ['https://pic.imgdb.cn/item/63167d3b16f2c2beb125d29d.jpg'], 'title': 'British Shorthair Blue kittens - pedigree GCCFI', 'price': '€1200', 'desc': '', 'seller': 'Louis' },
{ 'productId': 46, 'viewCount': 8, 'category': 'Car & Motor', 'imgs': ['https://pic.imgdb.cn/item/63167da816f2c2beb12603da.jpg'], 'title': 'Volkswagen Caddy 1.6TDI', 'price': '€7000', 'desc': '', 'seller': 'Hary' },
{ 'productId': 47, 'viewCount': 8, 'category': 'Car & Motor', 'imgs': ['https://pic.imgdb.cn/item/63167da816f2c2beb12603da.jpg'], 'title': 'Volkswagen Caddy 1.6TDI', 'price': '€7000', 'desc': '', 'seller': 'Happyyzx' },
{ 'productId': 48, 'viewCount': 15, 'category': 'Car & Motor', 'imgs': ['https://pic.imgdb.cn/item/63167e1816f2c2beb12639cd.jpg'], 'title': 'Yamaha XT660Z Tenere', 'price': '€4000', 'desc': '', 'seller': 'Tiger' },
{ 'productId': 49, 'viewCount': 15, 'category': 'Make-up', 'imgs': ['https://pic.imgdb.cn/item/63167e7516f2c2beb126623e.jpg'], 'title': 'Sculpted By Aimee Connolly Perfecting Duo Brush', 'price': '€10', 'desc': '', 'seller': 'XiaoBei' },
{ 'productId': 50, 'viewCount': 15, 'category': 'Make-up', 'imgs': ['https://pic.imgdb.cn/item/63167ed416f2c2beb1268e63.jpg'], 'title': 'HM-Patterned make-up bag', 'price': '€2', 'desc': '', 'seller': 'Jujj' },
{ 'productId': 51, 'viewCount': 15, 'category': 'Make-up', 'imgs': ['https://pic.imgdb.cn/item/63167f1216f2c2beb126aa9e.jpg'], 'title': 'Natalie Loves Beauty Make Up For Ever Matte Velvet Skin Blurring Powder Foundation', 'price': '€30', 'desc': '', 'seller': 'Tiger' },
{ 'productId': 52, 'viewCount': 15, 'category': 'Make-up', 'imgs': ['https://pic.imgdb.cn/item/63167f5316f2c2beb126d3b0.jpg'], 'title': 'Vintage Make Up Blush Pink Domino', 'price': '€5', 'desc': 'Vintage Make Up Blush Pink Domino', 'seller': 'xiaoyu' }]



const categorysData = [{ 'categoryId': 1, 'title': 'Sport & Hobby' },
{ 'categoryId': 2, 'title': 'Home' },
{ 'categoryId': 3, 'title': 'Stationary' },
{ 'categoryId': 4, 'title': 'Books' },
{ 'categoryId': 5, 'title': 'Electronics' },
{ 'idcategoryId': 6, 'title': 'Clothes & Lifestyle' },
{ 'categoryId': 7, 'title': 'Pets' },
{ 'categoryId': 8, 'title': 'Car & Motor' },
{ 'categoryId': 9, 'title': 'Make-up' }]




const allUserInfos = {
  'Alex': { 'wishList': [], 'messageInfos': {}, 'postList': [], 'avatarUrl': 'https://pic.imgdb.cn/item/6316784b16f2c2beb12371d5.jpg', 'offers': [], 'orders': [], 'userName': 'Alex', 'userId': 'Alex', 'password': 'Alex', 'email': 'Alex@gmail.com' },
  'harper': {
    'wishList': [],
    'messageInfos': {
      'Alex': [
        { 'obj': 'other', 'time': '2022/03/22 10:27', 'content': 'Hello' },
        { 'obj': 'me', 'time': '2022/03/22 11:20', 'content': 'Hello Alex, which item are you insteresting?' },
        { 'obj': 'other', 'time': '2022/03/22 17:40', 'content': 'Hey harper, I would like buy your red bike, can you lower the price ? how about €200?' }
      ],
      'qunqun': [
        { 'obj': 'me', 'time': '2022/03/21 17:40', 'content': 'Hello qunqun, can you send more detail about your Shhinguards?' },
      ],
      'stone': [
        { 'obj': 'me', 'time': '2022/03/22 19:40', 'content': 'Hello, when are your available?' },
      ]
    },
    'postList': [4, 8], 'avatarUrl': 'https://pic.imgdb.cn/item/63167f1216f2c2beb126aa9e.jpg', 'offers': [], 'orders': [], 'userName': 'harper', 'userId': 'harper', 'password': 'harper', 'email': 'harper@gmail.com'
  },
  'stone': { 'wishList': [], 'messageInfos': {}, 'postList': [], 'avatarUrl': 'https://pic.imgdb.cn/item/63167ad816f2c2beb1248ff9.jpg', 'offers': [], 'orders': [], 'userName': 'stone', 'userId': 'stone', 'password': 'stone', 'email': 'stone@gmail.com' },
  'yuan': { 'wishList': [], 'messageInfos': {}, 'postList': [], 'avatarUrl': 'https://pic.imgdb.cn/item/63167c0f16f2c2beb1253e86.jpg', 'offers': [], 'orders': [], 'userName': 'yuan', 'userId': 'yuan', 'password': 'yuan', 'email': 'yuan@gmail.com' },
  'Leo': { 'wishList': [], 'messageInfos': {}, 'postList': [21], 'avatarUrl': 'https://pic.imgdb.cn/item/63164ff616f2c2beb10f0b60.jpg', 'offers': [], 'orders': [], 'userName': 'Leo', 'userId': 'Leo', 'password': 'Leo', 'email': 'Leo@gmail.com' },
  'Louis': { 'wishList': [], 'messageInfos': {}, 'postList': [45], 'avatarUrl': 'https://pic.imgdb.cn/item/6316798516f2c2beb123fb48.jpg', 'offers': [], 'orders': [], 'userName': 'Louis', 'userId': 'Louis', 'password': 'Louis', 'email': 'Louis@gmail.com' },
  'qunqun': { 'wishList': [], 'messageInfos': {}, 'postList': [3, 6, 36], 'avatarUrl': 'https://pic.imgdb.cn/item/6316407816f2c2beb103dddc.jpg', 'offers': [], 'orders': [], 'userName': 'qunqun', 'userId': 'qunqun', 'password': 'qunqun', 'email': 'qunqun@gmail.com' },
  'xiaoming': { 'wishList': [], 'messageInfos': {}, 'postList': [], 'avatarUrl': 'https://pic.imgdb.cn/item/63164f9616f2c2beb10ed2d0.jpg', 'offers': [], 'orders': [], 'userName': 'xiaoming', 'userId': 'xiaoming', 'password': 'xiaoming', 'email': 'xiaoming@gmail.com' },
  'huihui': { 'wishList': [], 'messageInfos': {}, 'postList': [24], 'avatarUrl': 'https://pic.imgdb.cn/item/63167f5316f2c2beb126d3b0.jpg', 'offers': [], 'orders': [], 'userName': 'huihui', 'userId': 'huihui', 'password': 'huihui', 'email': 'huihui@gmail.com' },
  'XiaoBei': { 'wishList': [], 'messageInfos': {}, 'postList': [38, 49], 'avatarUrl': 'https://pic.imgdb.cn/item/6316784b16f2c2beb12371d5.jpg', 'offers': [], 'orders': [], 'userName': 'XiaoBei', 'userId': 'XiaoBei', 'password': 'XiaoBei', 'email': 'XiaoBei@gmail.com' },
  'Caijx': { 'wishList': [], 'messageInfos': {}, 'postList': [13, 19], 'avatarUrl': 'https://pic.imgdb.cn/item/6316419916f2c2beb104beb8.jpg', 'offers': [], 'orders': [], 'userName': 'Caijx', 'userId': 'Caijx', 'password': 'Caijx', 'email': 'Caijx@gmail.com' },
  'BeiBei': { 'wishList': [], 'messageInfos': {}, 'postList': [], 'avatarUrl': 'https://pic.imgdb.cn/item/63167e7516f2c2beb126623e.jpg', 'offers': [], 'orders': [], 'userName': 'BeiBei', 'userId': 'BeiBei', 'password': 'BeiBei', 'email': 'BeiBei@gmail.com' },
  'Huahua': { 'wishList': [], 'messageInfos': {}, 'postList': [], 'avatarUrl': 'https://pic.imgdb.cn/item/630ccd3d16f2c2beb1655514.jpg', 'offers': [], 'orders': [], 'userName': 'Huahua', 'userId': 'Huahua', 'password': 'Huahua', 'email': 'Huahua@gmail.com' },
  'Niaoniao': { 'wishList': [], 'messageInfos': {}, 'postList': [18], 'avatarUrl': 'https://pic.imgdb.cn/item/63167da816f2c2beb12603da.jpg', 'offers': [], 'orders': [], 'userName': 'Niaoniao', 'userId': 'Niaoniao', 'password': 'Niaoniao', 'email': 'Niaoniao@gmail.com' },
  'xiaoyangg': { 'wishList': [], 'messageInfos': {}, 'postList': [34], 'avatarUrl': 'https://pic.imgdb.cn/item/6316502816f2c2beb10f29dc.jpg', 'offers': [], 'orders': [], 'userName': 'xiaoyangg', 'userId': 'xiaoyangg', 'password': 'xiaoyangg', 'email': 'xiaoyangg@gmail.com' },
  'Hary': { 'wishList': [], 'messageInfos': {}, 'postList': [11, 15, 20, 46], 'avatarUrl': 'https://pic.imgdb.cn/item/6316773916f2c2beb122f9bd.jpg', 'offers': [], 'orders': [], 'userName': 'Hary', 'userId': 'Hary', 'password': 'Hary', 'email': 'Hary@gmail.com' },
  'henny': { 'wishList': [], 'messageInfos': {}, 'postList': [], 'avatarUrl': 'https://pic.imgdb.cn/item/63163faf16f2c2beb1034408.jpg', 'offers': [], 'orders': [], 'userName': 'henny', 'userId': 'henny', 'password': 'henny', 'email': 'henny@gmail.com' },
  'Happyyzx': { 'wishList': [], 'messageInfos': {}, 'postList': [16, 47], 'avatarUrl': 'https://pic.imgdb.cn/item/63164ede16f2c2beb10e60ce.jpg', 'offers': [], 'orders': [], 'userName': 'Happyyzx', 'userId': 'Happyyzx', 'password': 'Happyyzx', 'email': 'Happyyzx@gmail.com' },
  'Sskill': { 'wishList': [], 'messageInfos': {}, 'postList': [39], 'avatarUrl': 'https://pic.imgdb.cn/item/6316502816f2c2beb10f29dc.jpg', 'offers': [], 'orders': [], 'userName': 'Sskill', 'userId': 'Sskill', 'password': 'Sskill', 'email': 'Sskill@gmail.com' },
  'SmailDay': { 'wishList': [], 'messageInfos': {}, 'postList': [14], 'avatarUrl': 'https://pic.imgdb.cn/item/63167c4e16f2c2beb1255d31.jpg', 'offers': [], 'orders': [], 'userName': 'SmailDay', 'userId': 'SmailDay', 'password': 'SmailDay', 'email': 'SmailDay@gmail.com' },
  'Lovely': { 'wishList': [], 'messageInfos': {}, 'postList': [12], 'avatarUrl': 'https://pic.imgdb.cn/item/6316597216f2c2beb1172798.jpg', 'offers': [], 'orders': [], 'userName': 'Lovely', 'userId': 'Lovely', 'password': 'Lovely', 'email': 'Lovely@gmail.com' },
  'Jujj': { 'wishList': [], 'messageInfos': {}, 'postList': [9, 27, 50], 'avatarUrl': 'https://pic.imgdb.cn/item/63167ed416f2c2beb1268e63.jpg', 'offers': [], 'orders': [], 'userName': 'Jujj', 'userId': 'Jujj', 'password': 'Jujj', 'email': 'Jujj@gmail.com' },
  'hahaHa': { 'wishList': [], 'messageInfos': {}, 'postList': [32], 'avatarUrl': 'https://pic.imgdb.cn/item/63167f5316f2c2beb126d3b0.jpg', 'offers': [], 'orders': [], 'userName': 'hahaHa', 'userId': 'hahaHa', 'password': 'hahaHa', 'email': 'hahaHa@gmail.com' },
  'zhenxu': { 'wishList': [], 'messageInfos': {}, 'postList': [0], 'avatarUrl': 'https://pic.imgdb.cn/item/63163ef516f2c2beb102b591.jpg', 'offers': [], 'orders': [], 'userName': 'zhenxu', 'userId': 'zhenxu', 'password': 'zhenxu', 'email': 'zhenxu@gmail.com' },
  'xiaoyu': { 'wishList': [], 'messageInfos': {}, 'postList': [52], 'avatarUrl': 'https://pic.imgdb.cn/item/63167c0f16f2c2beb1253e86.jpg', 'offers': [], 'orders': [], 'userName': 'xiaoyu', 'userId': 'xiaoyu', 'password': 'xiaoyu', 'email': 'xiaoyu@gmail.com' },
  'yaoyuan': { 'wishList': [], 'messageInfos': {}, 'postList': [25, 43], 'avatarUrl': 'https://pic.imgdb.cn/item/63164f3f16f2c2beb10e9c10.jpg', 'offers': [], 'orders': [], 'userName': 'yaoyuan', 'userId': 'yaoyuan', 'password': 'yaoyuan', 'email': 'yaoyuan@gmail.com' },
  'shengMing': { 'wishList': [], 'messageInfos': {}, 'postList': [26, 42], 'avatarUrl': 'https://pic.imgdb.cn/item/6316597216f2c2beb1172798.jpg', 'offers': [], 'orders': [], 'userName': 'shengMing', 'userId': 'shengMing', 'password': 'shengMing', 'email': 'shengMing@gmail.com' },
  'Chunyan': { 'wishList': [], 'messageInfos': {}, 'postList': [5, 29], 'avatarUrl': 'https://pic.imgdb.cn/item/63167cd116f2c2beb1259d51.jpg', 'offers': [], 'orders': [], 'userName': 'Chunyan', 'userId': 'Chunyan', 'password': 'Chunyan', 'email': 'Chunyan@gmail.com' },
  'Huali': { 'wishList': [], 'messageInfos': {}, 'postList': [31], 'avatarUrl': 'https://pic.imgdb.cn/item/6316597216f2c2beb1172798.jpg', 'offers': [], 'orders': [], 'userName': 'Huali', 'userId': 'Huali', 'password': 'Huali', 'email': 'Huali@gmail.com' },
  'CarryU': { 'wishList': [], 'messageInfos': {}, 'postList': [], 'avatarUrl': 'https://pic.imgdb.cn/item/63164ede16f2c2beb10e60ce.jpg', 'offers': [], 'orders': [], 'userName': 'CarryU', 'userId': 'CarryU', 'password': 'CarryU', 'email': 'CarryU@gmail.com' },
  'Fengshi': { 'wishList': [], 'messageInfos': {}, 'postList': [1, 2, 23], 'avatarUrl': 'https://pic.imgdb.cn/item/63163f5616f2c2beb10300a2.jpg', 'offers': [], 'orders': [], 'userName': 'Fengshi', 'userId': 'Fengshi', 'password': 'Fengshi', 'email': 'Fengshi@gmail.com' },
  'Hui': { 'wishList': [], 'messageInfos': {}, 'postList': [30, 33], 'avatarUrl': 'https://pic.imgdb.cn/item/6316407816f2c2beb103dddc.jpg', 'offers': [], 'orders': [], 'userName': 'Hui', 'userId': 'Hui', 'password': 'Hui', 'email': 'Hui@gmail.com' },
  'Tiger': { 'wishList': [], 'messageInfos': {}, 'postList': [48, 51], 'avatarUrl': 'https://pic.imgdb.cn/item/63163cf916f2c2beb10189f5.jpg', 'offers': [], 'orders': [], 'userName': 'Tiger', 'userId': 'Tiger', 'password': 'Tiger', 'email': 'Tiger@gmail.com' },
  'Monkey': { 'wishList': [], 'messageInfos': {}, 'postList': [], 'avatarUrl': 'https://pic.imgdb.cn/item/630ccdab16f2c2beb165915e.jpg', 'offers': [], 'orders': [], 'userName': 'Monkey', 'userId': 'Monkey', 'password': 'Monkey', 'email': 'Monkey@gmail.com' },
  'Ellen': { 'wishList': [], 'messageInfos': {}, 'postList': [7, 41], 'avatarUrl': 'https://pic.imgdb.cn/item/63167da816f2c2beb12603da.jpg', 'offers': [], 'orders': [], 'userName': 'Ellen', 'userId': 'Ellen', 'password': 'Ellen', 'email': 'Ellen@gmail.com' },
  'Davis': { 'wishList': [], 'messageInfos': {}, 'postList': [10, 28, 40], 'avatarUrl': 'https://pic.imgdb.cn/item/6316597216f2c2beb1172798.jpg', 'offers': [], 'orders': [], 'userName': 'Davis', 'userId': 'Davis', 'password': 'Davis', 'email': 'Davis@gmail.com' },
  'Trees': { 'wishList': [], 'messageInfos': {}, 'postList': [17, 22, 35], 'avatarUrl': 'https://pic.imgdb.cn/item/6316502816f2c2beb10f29dc.jpg', 'offers': [], 'orders': [], 'userName': 'Trees', 'userId': 'Trees', 'password': 'Trees', 'email': 'Trees@gmail.com' },
  'Emily': { 'wishList': [], 'messageInfos': {}, 'postList': [], 'avatarUrl': 'https://pic.imgdb.cn/item/63163cc516f2c2beb101626a.jpg', 'offers': [], 'orders': [], 'userName': 'Emily', 'userId': 'Emily', 'password': 'Emily', 'email': 'Emily@gmail.com' },
  'KELLY': { 'wishList': [], 'messageInfos': {}, 'postList': [44], 'avatarUrl': 'https://pic.imgdb.cn/item/63164f3f16f2c2beb10e9c10.jpg', 'offers': [], 'orders': [], 'userName': 'KELLY', 'userId': 'KELLY', 'password': 'KELLY', 'email': 'KELLY@gmail.com' },
  'Tongtong': { 'wishList': [], 'messageInfos': {}, 'postList': [37], 'avatarUrl': 'https://pic.imgdb.cn/item/631679d116f2c2beb1241954.jpg', 'offers': [], 'orders': [], 'userName': 'Tongtong', 'userId': 'Tongtong', 'password': 'Tongtong', 'email': 'Tongtong@gmail.com' }
}





const allProductCommentInfos = {
  1: [{ 'username': 'harper', 'content': 'Does it still available?', 'time': '10:27 22/03/2022' },
  { 'username': 'stone', 'content': 'When can face-to-face delivery be available?', 'time': '11:10 23/07/2022' }
  ],
}


const clearLocalStorage = () => {
  let storage = window.localStorage
  console.log("clearLocalStorage!!!!")
  storage.removeItem('productsData')
  storage.removeItem('categorysData')
  storage.removeItem('allUserInfos')
  storage.removeItem('userName')
  storage.removeItem('allProductCommentInfos')
  storage.removeItem('appversion')
}
export default function initData (appversion) {

  // clearLocalStorage()
  let storage = window.localStorage
  let lastappversion = storage.getItem('appversion')
  console.log(`lastappversion=${lastappversion}; appversion=${appversion}}`)
  if (lastappversion == null || Number(lastappversion) < appversion) {
    clearLocalStorage()

    storage.setItem('userName', 'harper')
    storage.setItem('appversion', appversion)
  }

  if (!storage.getItem('productsData')) {
    storage.setItem('productsData', JSON.stringify(productsData))
  }

  if (!storage.getItem('categorysData'))
    storage.setItem('categorysData', JSON.stringify(categorysData))


  if (!storage.getItem('allUserInfos'))
    storage.setItem('allUserInfos', JSON.stringify(allUserInfos))


  if (!storage.getItem('allProductCommentInfos'))
    storage.setItem('allProductCommentInfos', JSON.stringify(allProductCommentInfos))
}