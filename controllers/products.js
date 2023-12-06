const getAllProductsStatic = (req, res) => {
  res.status(200).json({ msg: "Product routes static" });
};
const getAllProducts = (req, res) => {
  res.status(200).json({ msg: "Product routes" });
};

module.exports = { getAllProducts, getAllProductsStatic };
