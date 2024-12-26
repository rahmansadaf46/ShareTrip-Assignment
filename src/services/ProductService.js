const API_URL = "https://dummyjson.com/products/category/mens-shirts?select=title,price,thumbnail,brand,discountPercentage";
const ProductService = {
    getProducts: async () => {
        try {
            const res = await fetch(API_URL);

            if (!res.ok) {
                throw new Error("Failed to fetch products.");
            }

            const data = await res.json();
            return data;
        } catch (error) {
            console.error("Error fetching men's shirts:", error);
            throw error;
        }
    }
};

export default ProductService;
