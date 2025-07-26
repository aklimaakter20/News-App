import Image from "next/image";
import Banner from "@/components/Shared/Banner";
import NewsCard from "@/components/Shared/NewsCard";

const Home = async() => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts?&limit=12"');
  const news = await data.json();
  const limitedNews = news.slice(0, 12);
  return (
   <div className="py-12">
    <Banner/>
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-8">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {
           limitedNews.map((item) => (
        <div key={item.id} className="mb-6 p-4 bg-gray-100 rounded-lg">
          <NewsCard key={item?._id} item={item}/>
          {/* <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-700">{item.body}</p> */}
        </div>
      ))}
      </div>
    </div>
   </div>
  );
}
export default Home