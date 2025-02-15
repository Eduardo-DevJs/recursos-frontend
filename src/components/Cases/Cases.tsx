import { channelsResources } from "../../data/channelsResources";
import { fontResources } from "../../data/fontsResources";
import { hostingResources } from "../../data/HostingResources";
import { iconResources } from "../../data/iconsResources";
import { imageResources } from "../../data/images";
import { palettesResources } from "../../data/paletas";
import { podcastResources } from "../../data/podcastResources";
import ItemList from "../Item";
import List from "../List";

export const CasePallettes = () => (
  <List>
    {palettesResources.map((item) => (
      <ItemList
        id={item.id}
        description={item.description}
        link={item.link}
        key={item.id}
        name={item.name}
      />
    ))}
  </List>
);

export const CaseImages = () => (
  <List>
    {imageResources.map((item) => (
      <ItemList
        id={item.id}
        description={item.description}
        link={item.link}
        key={item.id}
        name={item.name}
      />
    ))}
  </List>
);

export const CaseIcons = () => (
  <List>
    {iconResources.map((item) => (
      <ItemList
        id={item.id}
        description={item.description}
        link={item.link}
        key={item.id}
        name={item.name}
      />
    ))}
  </List>
);
export const CaseHosting = () => (
  <List>
    {hostingResources.map((item) => (
      <ItemList
        id={item.id}
        description={item.description}
        link={item.link}
        key={item.id}
        name={item.name}
      />
    ))}
  </List>
);
export const CaseFont = () => (
  <List>
    {fontResources.map((item) => (
      <ItemList
        id={item.id}
        description={item.description}
        link={item.link}
        key={item.id}
        name={item.name}
      />
    ))}
  </List>
);
export const CasePodcast = () => (
  <List>
    {podcastResources.map((item) => (
      <ItemList
        id={item.id}
        description={item.description}
        link={item.link}
        key={item.id}
        name={item.name}
      />
    ))}
  </List>
);
export const CaseChannels = () => (
  <List>
    {channelsResources.map((item) => (
      <ItemList
        id={item.id}
        description={item.description}
        link={item.link}
        key={item.id}
        name={item.name}
      />
    ))}
  </List>
);
