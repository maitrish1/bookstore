import FeaturedBooks from "../Components/Books";
import Books from "../books/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <FeaturedBooks/>
    </main>
  )
}
