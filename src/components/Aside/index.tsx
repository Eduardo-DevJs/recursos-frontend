import { itensAside } from "../../data/ItemAside";

interface AsideProps {
  onItemClick: (id: number) => void;
}

export default function Aside({ onItemClick }: AsideProps) {
  return (
    <aside className="w-64 min-h-screen p-4 bg-gray-900 text-white shadow-xl">
      <h2 className="text-xl py-2 font-bold mb-6 text-center">
        Recursos Didáticos FrontEnd
      </h2>
      <ul className="space-y-5">
        {itensAside.map(({ id, name, icon }) => (
          <li
            onClick={() => onItemClick(id)}
            key={id}
            className="flex items-center gap-3 p-3 bg-gray-800 rounded-xl cursor-pointer hover:bg-gray-700 transition"
          >
            <span className="text-lg">{icon}</span>
            <span className="text-sm font-medium">{name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
