export function formatCoursePrice(price: number) {
  const formattedPrice = new Intl.NumberFormat('uk-UA');
  return formattedPrice.format(price);
}
