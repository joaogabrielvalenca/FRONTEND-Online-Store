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

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você :sorriso_pequeno:
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
