import clsx from "clsx";

export default function NotFoundPage() {
  return (
    <>
      <title>Página não encontrada</title>
      <div
        className={clsx(
          "min-h-[320px] bg bg-slate-900 text-slate-100",
          "mb-16 p-8",
          "rounded-2xl",
          "flex items-center justify-center",
          "text-center"
        )}
      >
        <div>
          <h1 className="text-7xl/tight font font-extrabold mb-8">404</h1>
          <p>Página não encontrada nesse site</p>
        </div>
      </div>
    </>
  );
}
