import clsx from "clsx";

export function Header() {
  return (
    <header>
      <h1
        className={clsx(
          "text-4xl/normal font-extrabold py-8",
          "sm:text-5xl/snug sm:py-9",
          "md:text-6xl/snug sm:py-10",
          "lg:text-7xl/snug sm:py-11"
        )}
      >
        <a href="">myBlog</a>
      </h1>
    </header>
  );
}
