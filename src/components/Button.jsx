function Button({ children, ...props }) {
  return (
    <button
      className="bg-slate-400 p-2 rounded-md text-white cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
