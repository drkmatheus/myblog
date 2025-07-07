import { PostModel } from "@/models/post/postModel";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

// alerta: se importar o json direto, o next tem cache,
// o que significa que se voce buildar o projeto,
// nem por um milagre vai salvar um post atualizado ou exclui-lo.
// acontece por que o next transforma o json numa constante.

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);

const SIMULATING_LAG = 3000;

export class JsonPostRepository implements PostRepository {
  private async simulateLag() {
    if (SIMULATING_LAG <= 0) return;

    await new Promise((resolve) => setTimeout(resolve, SIMULATING_LAG));
  }

  private async readFromDisk() {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAllPublished(): Promise<PostModel[]> {
    await this.simulateLag();
    const posts = await this.readFromDisk();
    return posts.filter((post: PostModel) => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    await this.simulateLag();
    const posts = await this.findAllPublished();
    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error(`Post com id: ${id}, não encontrado`);

    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    await this.simulateLag;
    const posts = await this.findAllPublished();
    const post = posts.find((post) => post.slug === slug);

    if (!post) throw new Error(`Post com slug: ${slug}, não encontrado`);

    return post;
  }
}
