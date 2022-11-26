type ButtonProps = {
  title: string;
  type?: "PRIMARY" | "SECONDARY";
  link?: string;
};

export function Button({ title, type = "PRIMARY", link }: ButtonProps) {
  return (
    <a
      href={link}
      className={`${
        type === "PRIMARY"
          ? "bg-secondary text-primary"
          : "bg-primary text-secondary"
      } px-4 py-2 rounded shadow-primary font-bold`}
    >
      {title}
    </a>
  );
}
