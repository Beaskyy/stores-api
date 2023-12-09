const getAllProductsStatic = (req, res) => {
  res.status(200).json({ msg: "Products testing route" });
};
const getAllProducts = (req, res) => {
  res.status(200).json({ msg: "Products route" });
};

module.exports = { getAllProducts, getAllProductsStatic };
