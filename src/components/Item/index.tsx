interface ItemListProps {
  id: number;
  name: string;
  description: string;
  image?: string;
  link: string;
}

export default function ItemList({
  id,
  name,
  description,
  image,
  link,
}: ItemListProps) {
  return (
    <li
      key={id}
      className="p-4 flex flex-col justify-between gap-4 bg-gray-900 rounded-lg shadow-sm"
    >
      {image && (
        <img src={image} alt={name} className="w-full h-auto mb-4 rounded-lg" />
      )}
      <h3 className="text-lg text-gray-200 font-semibold">{name}</h3>
      <p className="text-sm text-gray-400 leading-6">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 hover:bg-gray-700 hover:transition-colors text-white text-center block p-2 rounded"
      >
        Acessar
      </a>
    </li>
  );
}
