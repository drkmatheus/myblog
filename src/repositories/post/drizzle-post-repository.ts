import { PostModel } from "@/models/post/postModel";
import { PostRepository } from "@/repositories/post/post-repository";
import { drizzleDb } from "../../db/drizzle";
import { logColor } from "@/utils/log-color";
import { simulateLag } from "@/utils/simulate-lag";
import { SIMULATING_LAG } from "@/lib/post/constants";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublished(): Promise<PostModel[]> {
    await simulateLag(SIMULATING_LAG, true);
    logColor("findAllPublished", Date.now());
    const posts = await drizzleDb.query.posts.findMany({
      where: (posts, { eq }) => eq(posts.published, true),
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    await simulateLag(SIMULATING_LAG, true);
    logColor("findBySlug", Date.now());
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error(`Post com slug: ${slug}, não encontrado`);

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    await simulateLag(SIMULATING_LAG, true);
    logColor("findAll", Date.now());
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await simulateLag(SIMULATING_LAG, true);
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
