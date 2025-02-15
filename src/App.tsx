import { useState } from "react";
import Aside from "./components/Aside";
import {
  CaseFont,
  CaseHosting,
  CaseIcons,
  CaseImages,
  CasePallettes,
  CasePodcast,
} from "./components/Cases/Cases";

export default function App() {
  const [selectedItem, setSelectedItem] = useState<number | null>(1);

  function handleClickItem(id: number) {
    setSelectedItem(id);
  }

  function renderContent() {
    switch (selectedItem) {
      case 1:
        return <CaseImages />;
      case 2:
        return <CasePallettes />;
      case 3:
        return <CaseIcons />;
      case 4:
        return <CaseHosting />;
      case 5:
        return <CaseFont />;
      case 6:
        return <CasePodcast />;
      case 7:
        return <CasePodcast />;
      default:
        break;
    }
  }

  return (
    <div className="grid grid-cols-[256px_auto]">
      <Aside onItemClick={handleClickItem} />
      <main className="pl-4 pr-4 pt-4 bg-gray-800">{renderContent()}</main>
    </div>
  );
}
