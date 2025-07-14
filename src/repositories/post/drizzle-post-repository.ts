import { PostModel } from "@/models/post/postModel";
import { PostRepository } from "@/repositories/post/post-repository";
import { drizzleDb } from "../../db/drizzle";
import { logColor } from "@/utils/log-color";
import { simulateLag } from "@/utils/simulate-lag";
import { SIMULATING_LAG } from "@/lib/post/constants";
import { postsTable } from "@/db/drizzle/schemas";
import { eq } from "drizzle-orm";
import { postRepository } from ".";
import { PostCoverImage } from "@/components/PostCoverImage";

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
  async create(post: PostModel): Promise<PostModel> {
    const postFound = await drizzleDb.query.posts.findFirst({
      where: (posts, { or, eq }) =>
        or(eq(posts.id, post.id), eq(posts.slug, post.slug)),
      columns: { id: true },
    });

    if (!!postFound) {
      throw new Error(
        `Post com id ${post.id} ou slug ${post.slug} já existente no banco de dados`
      );
    }

    await drizzleDb.insert(postsTable).values(post);
    return post;
  }
  async delete(id: string): Promise<PostModel> {
    const postFound = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!postFound) {
      throw new Error(`Post com id ${id} não existe`);
    }

    await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

    return postFound;
  }

  async update(
    id: string,
    newPost: Omit<PostModel, "id" | "slug" | "createdAt" | "updatedAt">
  ): Promise<PostModel> {
    const oldPost = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!oldPost) {
      throw new Error(`Post com id ${id} não existe`);
    }

    const updatedAt = new Date().toISOString();
    const postData = {
      author: newPost.author,
      content: newPost.content,
      coverImageUrl: newPost.coverImageUrl,
      excerpt: newPost.excerpt,
      published: newPost.published,
      title: newPost.title,
      updatedAt,
    };

    await drizzleDb
      .update(postsTable)
      .set(postData)
      .where(eq(postsTable.id, id));

    return {
      ...oldPost,
      ...postData,
    };
  }
}

// (async () => {
//   const repo = new DrizzlePostRepository();
//   const posts = await repo.findById("1");
//   console.log(posts);

//   // posts.forEach((post) => console.log(post.slug, post.published));
// })();
