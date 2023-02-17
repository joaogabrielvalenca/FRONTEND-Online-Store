export async function getCategories() {
  const urlApiCategories = 'https://api.mercadolibre.com/sites/MLB/categories';
  const data = await fetch(urlApiCategories);
  const dataJson = await data.json();
  return dataJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const urlApiCategoriesId = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const data = await fetch(urlApiCategoriesId);
  const dataJson = await data.json();
  return dataJson;
}

export async function getProductById(id) {
  const urlApiProductsId = `https://api.mercadolibre.com/items/${id}`;
  const data = await fetch(urlApiProductsId);
  const dataJson = await data.json();
  return dataJson;
}
