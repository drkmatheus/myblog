import { PostModel } from "@/models/post/postModel";
import { PostRepository } from "@/repositories/post/post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";
import { desc, eq } from "drizzle-orm";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublished(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      where: (posts, { eq }) => eq(posts.published, true),
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  findAll(): Promise<PostModel[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<PostModel> {
    throw new Error("Method not implemented.");
  }
  findBySlug(slug: string): Promise<PostModel> {
    throw new Error("Method not implemented.");
  }
}

(async () => {
  const repo = new DrizzlePostRepository();
  const posts = await repo.findAllPublished();

  posts.forEach((post) => console.log(post.slug, post.published));
})();
