export function camelize(s: string) {
  return s.replace(/-./g, (x) => x[1].toUpperCase());
}

// function that trims the string, 
// replaces an uppercase character by a lowercase character and a hyphen,
// and converts all spaces to a single hyphen
export function kebabify(s: string) {
  return s
    .replace(/[A-Z]/g, (x) => ` ${x.toLowerCase()}`)
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export function stringifyStyle(style: { [key: string]: string }) {
  return Object.keys(style)
    .map((key) => {
      return `${key}: ${style[key]};`;
    })
    .join("\n");
}

export function parseStyleString(styleString: string): {
  [key: string]: string;
} {
  return styleString.split(/;/).reduce((style, line) => {
    const [key, value] = line.split(":").map((v) => v.trim());
    return { ...style, [camelize(key)]: value };
  }, {});
}
