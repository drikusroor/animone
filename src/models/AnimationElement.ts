import { kebabify, parseStyleString } from "@/helpers/style";

export class AnimationElement {
  id: number;
  name: string;
  styleString: string;
  image: string;

  public get css(): { [key: string]: string } {
    const css = parseStyleString(this.styleString);
    if (this.image) {
      css.background = `url(${this.image})`;
      css.backgroundPosition = "center";
      css.backgroundSize = "cover";
      css.overflow = "visible";
    }

    return css;
  }

  public get className(): string {
    return kebabify(this.name);
  }

  public constructor({ id, name, styleString }: IAnimationElement) {
    this.id = id;
    this.name = name;
    this.styleString = styleString;
    this.image = "";
  }
}

export interface IAnimationElement {
  id: number;
  name: string;
  styleString: string;
  className?: string;
}
