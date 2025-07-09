import { PostModel } from "@/models/post/postModel";
import { PostRepository } from "@/repositories/post/post-repository";
import { drizzleDb } from ".";
import { logColor } from "@/utils/log-color";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublished(): Promise<PostModel[]> {
    logColor("findAllPublished", Date.now());
    const posts = await drizzleDb.query.posts.findMany({
      where: (posts, { eq }) => eq(posts.published, true),
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    logColor("findBySlug", Date.now());
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error(`Post com slug: ${slug}, não encontrado`);

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    logColor("findAll", Date.now());
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    logColor("findById", Date.now());
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error(`Post com id: ${id}, não encontrado`);

    return post;
  }
}

// (async () => {
//   const repo = new DrizzlePostRepository();
//   const posts = await repo.findById("1");
//   console.log(posts);

//   // posts.forEach((post) => console.log(post.slug, post.published));
// })();
