import {
  formatDatetime,
  formatRelativeDatetime,
} from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  postHeading,
  postLink,
  createdAt,
  excerpt,
  title,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-5 sm:justify-center">
      <time
        className="text-slate-600 text-sm/tight"
        dateTime={createdAt}
        title={formatRelativeDatetime(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>
      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
