import { cn } from "@/lib/utils";

export default function IconHolder({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-8 h-8 flex justify-center items-center bg-background rounded-lg hover:cursor-pointer hover:bg-accent",
        className
      )}
    >
      {children}
    </div>
  );
}
