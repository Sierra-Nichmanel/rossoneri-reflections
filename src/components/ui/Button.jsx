export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-[#C8102E] px-6 py-3 font-medium transition hover:bg-red-700"
    >
      {children}
    </button>
  );
}
