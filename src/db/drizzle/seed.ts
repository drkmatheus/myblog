import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    //await drizzleDb.delete(postsTable); //deleta tudo da base de dados
    await drizzleDb.insert(postsTable).values(posts);
  } catch (e) {
    console.log("Ocorreu um erro: " + e);
  }
})();
