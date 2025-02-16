import {
  CaseChannels,
  CaseFont,
  CaseHosting,
  CaseIcons,
  CaseImages,
  CasePallettes,
  CasePodcast,
} from "../Cases/Cases";

interface RenderProps {
  selectedItem: number | null;
}

const RenderContent = ({ selectedItem }: RenderProps) => {
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
      return <CaseChannels />;
    default:
      return null;
  }
};

export default RenderContent;
