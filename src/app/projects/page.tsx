import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { gemunuLibre } from "@/components/ui/fonts"
import Image from "next/image"
import Link from "next/link"
import { modernButtonBase,donateButtonStyles } from "@/components/ui/buttons"

interface ProjectPost {
  id: string
  title: string
  excerpt: string
  category: "Tech" | "Research" | "Community" | "Partnership"
  image: string
  href: string
}

const projectPosts: ProjectPost[] = [
  {
    id: "1",
    title: "Energy Tracker",
    excerpt:
      `The PlanetPatch energy tracker is a tool to inform residents about energy, renewables, and how they can take action.`,
    category: "Tech",
    image: "/youthClimateAction.png",
    href: 'https://www.cityofmadison.com/news/2025-04-24/new-round-of-youth-climate-fund-projects',
  },
 
  {
    id: "2",
    title: "Indigenous Flora Rain Garden",
    excerpt:
      `Our Indigenous Flora Rain Garden project is a community oriented project where we build rain gardens around the city of Madison.
      Rain gardens serve as an attractors for pollinators that keep our ecosystem healthy and to reduce flooding by being an absorbing
      power for our city.`,
    category: "Community",
    image: "/youthClimateAction.png",
    href: 'https://www.cityofmadison.com/news/2025-04-24/new-round-of-youth-climate-fund-projects',
  },
  
]

const getCategoryColor = (category: ProjectPost["category"]) => {
  switch (category) {
    case "Tech":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
    case "Research":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
    case "Community":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
    case "Partnership":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
  }
}

export default function Projects() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white dark:from-slate-800 dark:to-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1
              className={`text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 ${gemunuLibre.className}`}
            >
              Projects
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Stay informed about our latest projects!
            </p>
          </div>
        </div>
      </section>

{/* Projects Grid */}
<section className="py-16 md:py-20 bg-white dark:bg-slate-900">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectPosts.map((post) => (
        <article
          key={post.id}
          className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 group"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Category Badge Overlay */}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-6">
            {/* Title */}
            <h2
              className={`text-xl font-bold text-slate-800 dark:text-white mb-3 leading-tight hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer ${gemunuLibre.className}`}
            >
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{post.excerpt}</p>

            {/* Read More Link */}
            <Link
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${modernButtonBase.trim()} ${donateButtonStyles.trim()} mt-auto self-start text-center w-full sm:w-auto`}
            >
              Read More
            </Link>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <Footer />
    </>
  )
}
