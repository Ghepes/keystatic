import Link from 'next/link';
import { reader } from './reader';
import './styles.css';

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  return (
    <div>
      <h1>Iulian Ghepes⚡️</h1>
      <p>Collection Blog Page.</p>
      <p>
        <a href="/ghepes-iulian">Click here to visit my Blog</a>, collection.
      </p>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
