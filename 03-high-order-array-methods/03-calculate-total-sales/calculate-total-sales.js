function calculateTotalSalesWithTax(products, tax) {
    const totalSales = products.map(product => product.price * product.quantity)
        .map(sale => (sale + sale * (tax / 100)))
        .reduce((sum, sale) => sum + sale, 0);

    return totalSales;
}

module.exports = calculateTotalSalesWithTax;
