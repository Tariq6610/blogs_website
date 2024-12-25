import Hero from "@/components/Hero";
import Posts from "@/components/Posts";
import RecipesIntro from "@/components/RecipesIntro";

export default function Home() {
  return (
    <>
    <div className="max-w-[1440px] mx-auto bg-red-100">
    <Hero />
    <RecipesIntro />
    <h1 className="sm:px-6 px-3 xl:text-[40px] md:text-[30px] text-[24px]">Featured Recipes</h1>
    <Posts />
    </div>
    </>
  );
}
