import Navigation from "./components/navigation/navigation"
import Post from "./components/post/post";

export default function Home() {
  return (
    <div>
      <Navigation></Navigation>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Post></Post>
      </div>
    </div>
    
  );
}
