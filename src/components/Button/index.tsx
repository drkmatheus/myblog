type ButtonProps = {} & React.ComponentProps<"button">;

export function Button({ ...props }: ButtonProps) {
  return (
    <div>
      <button {...props} />
    </div>
  );
}
