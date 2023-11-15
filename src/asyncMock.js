const products = [
  {
    id: "1",
    nombre: "Rolex",
    img: "https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/p/r/preowned-rolex-seadweller-automatic-chronometer-black-dial-mens-watch-116660bkso.jpg?width=546&height=546",
    precio: 100000,
    category: "diver",
    descripcion: "Reloj de lujo",
    stock: 3,
  },
  {
    id: "2",
    nombre: "Rolex",
    img: "https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/r/o/rolex-submariner-smurf-black-dial-blue-bezel-automatic-chronometer-mens-watch-126619lbbkso.jpg?width=546&height=546",
    precio: 10000,
    category: "choronoracer",
    descripcion: "Reloj de lujo",
    stock: 5,
  },
  {
    id: "3",
    nombre: "Rolex",
    img: "https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/p/r/preowned-rolex-submariner-automatic-chronometer-blue-dial-mens-watch-126613lb_1.jpg?width=546&height=546",
    precio: 4500,
    category: "chronofly",
    descripcion: "Reloj de lujo",
    stock: 5,
  },
  {
    id: "4",
    nombre: "Citizen",
    img: "https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/c/i/citizen-chandler-dark-blue-dial-men_s-brown-leather-watch-bm8478-01l.jpg?width=546&height=546",
    precio: 20000,
    category: "dress",
    descripcion: "Reloj de lujo",
    stock: 4,
  },
  {
    id: "5",
    nombre: "Citizen",
    img: "https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/c/i/citizen-automatic-blue-dial-mens-watch-nj015188l.jpg?width=546&height=546",
    precio: 1000,
    category: "dress",
    descripcion: "Reloj de lujo",
    stock: 15,
  },
  {
    id: "6",
    nombre: "Citizen",
    img: "https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/c/i/citizen-automatic-blue-dial-mens-watch-nj015188x.jpg?width=546&height=546",
    precio: 5000,
    category: "dress",
    descripcion: "Reloj de lujo",
    stock: 5,
  },
  {
    id: "7",
    nombre: "Patek Phillippe",
    img: "https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/p/a/patek-philippe-complications-18kt-white-gold-automatic-blue-dial-watch-7234g001.jpg?width=546&height=546",
    precio: 12500,
    category: "chrono",
    descripcion: "Reloj de lujo",
    stock: 2,
  },
  {
    id: "8",
    nombre: "Patek Phillippe",
    img: "https://cdn2.jomashop.com/media/catalog/product/cache/76ca28a553ae7feaf63d5d8d3b95ff3e/p/a/patek-philippe-complications-silvery-opaline-dial-ladies-hand-wound-diamond-watch-7150250r001-7150250r001.jpg?width=546&height=546",
    precio: 11000,
    category: "chrono",
    descripcion: "Reloj de lujo",
    stock: 1,
  },
  {
    id: "9",
    nombre: "Patek Phillippe",
    img: "https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/p/r/preowned-patek-philippe-calatrava-hand-wind-mens-watch-5196r001_1.jpg?width=546&height=546",
    precio: 9500,
    category: "chrono",
    descripcion: "Reloj de lujo",
    stock: 9,
  },
  {
    id: "10",
    nombre: "Richard Mille",
    img: "https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/r/i/richard-mille-le-mans-chronograph-automatic-mens-watch-rm1103-ca-atz.jpg?width=546&height=546",
    precio: 350000,
    category: "chronoracer",
    descripcion: "Reloj de lujo",
    stock: 10,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("-No existen productos-");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const product = products.find((product) => product.id === id);
    setTimeout(() => {
      if (!product) {
        reject(
          "El producto solicitado no se encuentra disponible,haremos lo posible por tenerlo en catalogo la proxima vez :D"
        );
      } else {
        resolve(product);
      }
    }, 2000);
  });
};
