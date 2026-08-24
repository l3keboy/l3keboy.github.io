import clsx from "clsx";

export type ISummaryItem = {
  description: string;
  key: number;
  title: string;
};

export default function SummaryItem({ item }: { item: ISummaryItem }) {
  return (
    <div
      className={clsx(
        "py-6 grow border-y flex flex-col gap-0",
        item.key !== 1 ? "md:px-3 md:border-l " : "",
      )}
      key={item.key}
    >
      <label className="font-family-mono text-xs text-muted">
        {item.title.toUpperCase()}
      </label>
      <label>{item.description}</label>
    </div>
  );
}
