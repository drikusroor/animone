export function camelize(s: string) {
  return s.replace(/-./g, (x) => x[1].toUpperCase());
}

export function hyphenify(s: string) {
  // replace all non-alphanumeric characters with hyphens and lowercase
  return s.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
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
