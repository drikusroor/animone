import { kebabify, parseStyleString } from "@/helpers/style";

export class AnimationElement {
  id: number;
  name: string;
  styleString: string;

  public get css(): { [key: string]: string } {
    return parseStyleString(this.styleString);
  }

  public get className(): string {
    return kebabify(this.name);
  }

  public constructor({ id, name, style, styleString }: IAnimationElement) {
    this.id = id;
    this.name = name;
    this.style = style;
    this.styleString = styleString;
  }
}

export interface IAnimationElement {
  id: number;
  name: string;
  style: { [key: string]: string };
  styleString: string;
  className?: string;
}
