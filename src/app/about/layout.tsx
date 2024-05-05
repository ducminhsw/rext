export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>This is the outside of the about page</div>
      {children}
    </div>
  );
}
