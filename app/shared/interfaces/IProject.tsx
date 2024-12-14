// Import types
import ILink from "./ILink";

export default interface IProject {
  title: string;
  subtitle: string;
  description: string;
  language_and_tools: string;
  source: { type: string; url: string };
  image: string;
  links: ILink[];
}
