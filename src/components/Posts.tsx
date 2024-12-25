import axios from "axios"
import Card from "./Card";

interface Data{
    id: string,
    image: string,
    name: string,
    tags:[],
    ingredients: []
}

const Posts = async () => {
    const res = await axios.get("https://dummyjson.com/recipes");
    const recipes = res.data.recipes
  return (
    <div className="flex flex-wrap max-w-[1440px] mx-auto gap-4 p-4 justify-center ">
      {recipes.map((data : Data) => (
      <Card key={data.id} data={data}/>
    ))}
    </div>
  )
}

export default Posts