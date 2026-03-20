import styles from "./BlogSection.module.css";
import Heading from "@theme/Heading";

const posts = [
  {
    image: "/img/blog1.jpg",
    category: "BUDDHISM",
    title: "How the Loving-Kindness Meditation Helps",
    date: "Apr 24, 2022",
  },
  {
    image: "/img/blog2.jpg",
    category: "BUDDHISM",
    title: "Use These Three Mantras to Calm Your Mind",
    date: "Apr 24, 2022",
  },
  {
    image: "/img/blog3.jpg",
    category: "BUDDHISM",
    title: "How Buddhism is Used in Modern Psychology?",
    date: "Apr 24, 2022",
  },
  {
    image: "/img/blog4.jpg",
    category: "BUDDHISM",
    title: "The Positive Effects of Giving Back or Dana",
    date: "Apr 24, 2022",
  },
];

export default function BlogSection() {
  return (
    <section className={styles.blogSection}>
      <p className={styles.subheading}>FROM OUR BLOG</p>
      <h2 className={styles.heading}>Latest News & Stories</h2>

      <div className={styles.grid}>
        {posts.map((post, index) => (
          <div className={styles.card} key={index}>
            <img src={post.image} alt={post.title} />

            <p className={styles.category}>{post.category}</p>

            <h3 className={styles.title}>{post.title}</h3>

            <p className={styles.meta}>{post.date} • 0 Comments</p>
          </div>
        ))}
      </div>
    </section>
  );
}
