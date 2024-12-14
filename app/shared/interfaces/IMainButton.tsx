// Import types
import { PressEvent } from "@react-types/shared";

export default interface IMainButton {
  text: string;
  type: 1 | 2;
  onButtonClick: (e: PressEvent) => void;
  customClass?: string | undefined;
}
