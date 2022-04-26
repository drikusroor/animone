export class AnimationElement {
  id: number;
  name: string;
  style: { [key: string]: string };
  styleString: string;

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
}
