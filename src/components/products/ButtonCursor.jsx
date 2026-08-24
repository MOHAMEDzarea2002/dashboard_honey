
export default function ButtonNextAndPrevious({ title, disabled ,onClick}) {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        className="bg-amber-400 px-2 rounded cursor-pointer"
      >
        {title}
      </button>
    </div>
  );
}
