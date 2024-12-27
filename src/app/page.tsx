import Hero from "@/components/Hero";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <>
    <div className="max-w-[1440px] mx-auto bg-red-100">
    <Hero />
    <Posts />
    </div>
    </>
  );
}
