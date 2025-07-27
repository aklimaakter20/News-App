import Image from "next/image";
import Banner from "@/components/Shared/Banner";
import NewsCard from "@/components/Shared/NewsCard";
import { NewsItem } from "@/types/news";

const Home = async() => {
  const data = await fetch('https://dummyjson.com/products');
  const product = await data.json();
  const limitedProducts = product.products.slice(0, 3);

  return (
   <div className="py-12">
    <Banner/>
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-8">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {
           limitedProducts.map((item:NewsItem) => (
        <div key={item.id} className="mb-6 p-4 bg-gray-100 rounded-lg">
          <NewsCard key={item.id} item={item}/>
          <h2 className="text-lg font-semibold">{item.title}</h2>
        </div>
      ))}
      </div>
    </div>
   </div>
  );
}
export default Home