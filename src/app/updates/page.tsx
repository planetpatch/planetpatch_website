import Footer from "@/components/Footer"
import Navbar from "@/components/navbar"
import { gemunuLibre } from "@/components/ui/fonts"
import Image from "next/image"

interface UpdatePost {
  id: string
  title: string
  date: string
  excerpt: string
  category: "News" | "Research" | "Community" | "Partnership"
  readTime: string
  image: string
}

const updatePosts: UpdatePost[] = [
  {
    id: "1",
    title: "New Partnership with Local Climate Research Institute",
    date: "January 15, 2025",
    excerpt:
      "We're excited to announce our collaboration with the Regional Climate Research Institute to develop innovative adaptation strategies for coastal communities.",
    category: "Partnership",
    readTime: "3 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "2",
    title: "Community Resilience Workshop Series Launches",
    date: "January 10, 2025",
    excerpt:
      "Our first series of community-led workshops begins this month, focusing on sustainable agriculture practices and water conservation techniques.",
    category: "Community",
    readTime: "2 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "3",
    title: "Climate Data Platform Beta Release",
    date: "December 28, 2024",
    excerpt:
      "We've launched the beta version of our climate data visualization platform, making critical environmental data accessible to communities worldwide.",
    category: "News",
    readTime: "4 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "4",
    title: "Research: Impact of Micro-Grids on Rural Resilience",
    date: "December 20, 2024",
    excerpt:
      "Our latest research study examines how community-owned micro-grids are transforming energy resilience in rural areas across three continents.",
    category: "Research",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "5",
    title: "Year-End Impact Report: 2024 Achievements",
    date: "December 15, 2024",
    excerpt:
      "Reflecting on a year of growth, community partnerships, and meaningful climate action. See how we've made a difference together.",
    category: "News",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "6",
    title: "Indigenous Knowledge Integration Initiative",
    date: "November 30, 2024",
    excerpt:
      "Launching our new program to integrate traditional ecological knowledge with modern climate adaptation strategies.",
    category: "Community",
    readTime: "4 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const getCategoryColor = (category: UpdatePost["category"]) => {
  switch (category) {
    case "News":
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

export default function Updates() {
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
              Latest Updates
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Stay informed about our latest initiatives, research findings, community partnerships, and climate
              resilience developments.
            </p>
          </div>
        </div>
      </section>

      {/* Updates Grid */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updatePosts.map((post) => (
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
                  {/* Read Time */}
                  <div className="flex justify-end mb-3">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2
                    className={`text-xl font-bold text-slate-800 dark:text-white mb-3 leading-tight hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer ${gemunuLibre.className}`}
                  >
                    {post.title}
                  </h2>

                  {/* Date */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{post.date}</p>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{post.excerpt}</p>

                  {/* Read More Link */}
                  <button className="text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg">
              Load More Updates
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-green-50 dark:bg-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 ${gemunuLibre.className}`}>
            Stay Updated
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates on climate resilience initiatives and community
            impact stories.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
