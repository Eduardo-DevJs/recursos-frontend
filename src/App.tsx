import { useState } from "react";
import Aside from "./components/Aside";
import RenderContent from "./components/Render";
import { itensAside } from "./data/ItemAside";

export default function App() {
  const [selectedItem, setSelectedItem] = useState<number | null>(1);
  const [title, setTitle] = useState<string>(itensAside[0].name);

  function handleClickItem(id: number) {
    const selected = itensAside.find((item) => item.id === id);
    setSelectedItem(id);
    setTitle(selected ? selected.name : "");
  }

  return (
    <div className="grid grid-cols-[256px_auto]">
      <Aside onItemClick={handleClickItem} />
      <main className="p-12 pt-4 bg-gray-800">
        <h1 className="font-semibold text-white text-3xl mb-6">{title}</h1>
        <RenderContent selectedItem={selectedItem} />
      </main>
    </div>
  );
}
