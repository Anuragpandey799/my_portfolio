import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight, FiHeart, FiThumbsDown, FiX } from "react-icons/fi";

function Blog({ dark }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [activePost, setActivePost] = useState(null);
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [commentInput, setCommentInput] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "How I Built My Developer Portfolio from Scratch",
      summary:
        "A complete walkthrough of how I designed, structured, and built this portfolio using React, Tailwind, and modern web animation libraries.",
      content: `This article details my journey...`,
      date: "July 2025",
      slug: "/blog/portfolio-case-study",
      image: "/Images/blog-portfolio.png",
    },
    {
      id: 2,
      title: "Understanding Dark Mode in React",
      summary:
        "A beginner-friendly guide to implementing smooth dark/light theme toggling using TailwindCSS and React state management.",
      content: `Here's how you implement dark mode...`,
      date: "June 2025",
      slug: "/blog/dark-mode-react",
      image: "/Images/blog-darkmode.png",
    },
    {
      id: 3,
      title: "Top UI Libraries for React Developers",
      summary:
        "Explore the top libraries to speed up your UI/UX workflow including Shadcn UI, Framer Motion, Radix UI and more.",
      content: `There are many UI libraries that...`,
      date: "May 2025",
      slug: "/blog/top-ui-libraries",
      image: "/Images/blog-ui.png",
    },
  ];

  const handleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleComment = (id) => {
    if (commentInput.trim()) {
      setComments((prev) => ({
        ...prev,
        [id]: [...(prev[id] || []), commentInput.trim()],
      }));
      setCommentInput("");
    }
  };

  return (
    <section
      className={`min-h-screen px-6 py-16 transition-all ${
        dark
          ? "bg-gradient-to-br from-blue-950 via-slate-900 to-black text-white"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-300 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-center text-4xl font-bold mb-12 bg-clip-text text-transparent ${
          dark
            ? "bg-gradient-to-r from-teal-300 via-pink-400 to-yellow-300"
            : "bg-gradient-to-r from-pink-500 to-purple-700"
        }`}>
          📚 Developer Blog
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:scale-105 ${
                dark ? "bg-slate-900 text-white" : "bg-white text-gray-900"
              }`}
              data-aos="fade-up"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-auto">
                <div>
                  <p className={`text-sm mb-1 ${dark ? "text-gray-400" : "text-gray-600"}`}>{post.date}</p>
                  <h3 className={`text-xl font-bold mb-2 ${dark ? "text-pink-400" : "text-purple-700"}`}>
                    {post.title}
                  </h3>
                  <p className={`text-sm text-justify ${dark ? "text-gray-300" : "text-gray-800"}`}>{post.summary}</p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => setActivePost(post)}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-all ${
                      dark
                        ? "text-teal-400 hover:text-yellow-400"
                        : "text-purple-600 hover:text-purple-800"
                    }`}
                  >
                    Read More <FiArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activePost && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
            <div className={`max-w-2xl w-full rounded-xl p-6 overflow-y-auto max-h-[90vh] relative ${
              dark ? "bg-slate-900 text-white" : "bg-white text-gray-900"
            }`}>
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-3 right-3 text-xl"
              >
                <FiX />
              </button>
              <img src={activePost.image} alt={activePost.title} className="w-full h-48 object-cover rounded" />
              <h3 className="text-2xl font-bold mt-4 mb-2">{activePost.title}</h3>
              <p className="text-sm mb-4">{activePost.date}</p>
              <p className="text-base leading-relaxed mb-4">{activePost.content}</p>
              <div className="flex items-center gap-4 mb-4">
                <button
                  className="flex items-center gap-1 text-green-500"
                  onClick={() => handleLike(activePost.id)}
                >
                  <FiHeart /> Like ({likes[activePost.id] || 0})
                </button>
                <button className="flex items-center gap-1 text-red-400">
                  <FiThumbsDown /> Dislike
                </button>
              </div>
              <div>
                <textarea
                  rows="2"
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Leave a comment..."
                  className="w-full p-2 border rounded mb-2 text-black"
                />
                <button
                  className="bg-blue-600 text-white px-4 py-1 rounded"
                  onClick={() => handleComment(activePost.id)}
                >
                  Comment
                </button>
                <ul className="mt-3 space-y-2">
                  {(comments[activePost.id] || []).map((c, idx) => (
                    <li key={idx} className="border-b pb-1 text-sm">{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;
