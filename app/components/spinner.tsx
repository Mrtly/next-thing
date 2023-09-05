export default function Spinner() {
  return (
    <div>
      <div className="m-2 h-8 w-8 animate-spin rounded-full bg-gradient-to-r from-yin via-violet to-coral p-1">
        <div className="h-6 w-6 rounded-full bg-white" />
      </div>
    </div>
  );
}
