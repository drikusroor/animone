const animatedFavicons = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVBzuIiGSoThZERRylikWwUNoKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdHJSdJES/5cUWsR4cNyPd/ced+8AoV5mqtkxAaiaZSRjUTGTXRUDr+jCCHoRRkRiph5PLabhOb7u4ePrXYRneZ/7c/QpOZMBPpF4jumGRbxBPLNp6Zz3iUOsKCnE58TjBl2Q+JHrsstvnAsOCzwzZKST88QhYrHQxnIbs6KhEk8ThxVVo3wh47LCeYuzWq6y5j35C4M5bSXFdZrDiGEJcSQgQkYVJZRhIUKrRoqJJO1HPfxDjj9BLplcJTByLKACFZLjB/+D392a+alJNykYBTpfbPtjFAjsAo2abX8f23bjBPA/A1day1+pA7OfpNdaWvgI6N8GLq5bmrwHXO4Ag0+6ZEiO5Kcp5PPA+xl9UxYYuAV61tzemvs4fQDS1NXyDXBwCIwVKHvd493d7b39e6bZ3w/PFnLM1AG0lgAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+YGHgsoA/tOl8IAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAJ0lEQVRYw+3OMREAIAwAsS/+PYMDNo4lUZCpdnfTQ6vPBAQEAAAADgKnARAnM5cyAAAAAElFTkSuQmCC",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVBzuIiGSoThZERRylikWwUNoKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdHJSdJES/5cUWsR4cNyPd/ced+8AoV5mqtkxAaiaZSRjUTGTXRUDr+jCCHoRRkRiph5PLabhOb7u4ePrXYRneZ/7c/QpOZMBPpF4jumGRbxBPLNp6Zz3iUOsKCnE58TjBl2Q+JHrsstvnAsOCzwzZKST88QhYrHQxnIbs6KhEk8ThxVVo3wh47LCeYuzWq6y5j35C4M5bSXFdZrDiGEJcSQgQkYVJZRhIUKrRoqJJO1HPfxDjj9BLplcJTByLKACFZLjB/+D392a+alJNykYBTpfbPtjFAjsAo2abX8f23bjBPA/A1day1+pA7OfpNdaWvgI6N8GLq5bmrwHXO4Ag0+6ZEiO5Kcp5PPA+xl9UxYYuAV61tzemvs4fQDS1NXyDXBwCIwVKHvd493d7b39e6bZ3w/PFnLM1AG0lgAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+YGHgsoKFfyboIAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAL0lEQVRYw+3OoQEAIAgAQXBKRmRL3QCDwXJXv3zGRVXtqXd3xoMVnxkwYAAAAOAAoGgEEGKdsLoAAAAASUVORK5CYII=",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVBzuIiGSoThZERRylikWwUNoKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdHJSdJES/5cUWsR4cNyPd/ced+8AoV5mqtkxAaiaZSRjUTGTXRUDr+jCCHoRRkRiph5PLabhOb7u4ePrXYRneZ/7c/QpOZMBPpF4jumGRbxBPLNp6Zz3iUOsKCnE58TjBl2Q+JHrsstvnAsOCzwzZKST88QhYrHQxnIbs6KhEk8ThxVVo3wh47LCeYuzWq6y5j35C4M5bSXFdZrDiGEJcSQgQkYVJZRhIUKrRoqJJO1HPfxDjj9BLplcJTByLKACFZLjB/+D392a+alJNykYBTpfbPtjFAjsAo2abX8f23bjBPA/A1day1+pA7OfpNdaWvgI6N8GLq5bmrwHXO4Ag0+6ZEiO5Kcp5PPA+xl9UxYYuAV61tzemvs4fQDS1NXyDXBwCIwVKHvd493d7b39e6bZ3w/PFnLM1AG0lgAAAAZiS0dEAFgAWABY9j+ZuwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+YGHgspApVSlhUAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAALklEQVRYw+3OoQEAMAjAMNhtnM1v2wcYxExia5qx1N136lWVUz/xmQEDBgAAAB5F6AQQo1D8EgAAAABJRU5ErkJggg==",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVBzuIiGSoThZERRylikWwUNoKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdHJSdJES/5cUWsR4cNyPd/ced+8AoV5mqtkxAaiaZSRjUTGTXRUDr+jCCHoRRkRiph5PLabhOb7u4ePrXYRneZ/7c/QpOZMBPpF4jumGRbxBPLNp6Zz3iUOsKCnE58TjBl2Q+JHrsstvnAsOCzwzZKST88QhYrHQxnIbs6KhEk8ThxVVo3wh47LCeYuzWq6y5j35C4M5bSXFdZrDiGEJcSQgQkYVJZRhIUKrRoqJJO1HPfxDjj9BLplcJTByLKACFZLjB/+D392a+alJNykYBTpfbPtjFAjsAo2abX8f23bjBPA/A1day1+pA7OfpNdaWvgI6N8GLq5bmrwHXO4Ag0+6ZEiO5Kcp5PPA+xl9UxYYuAV61tzemvs4fQDS1NXyDXBwCIwVKHvd493d7b39e6bZ3w/PFnLM1AG0lgAAAAZiS0dEAFgAWABY9j+ZuwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+YGHgspH/ZU+swAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAKUlEQVRYw+3OsREAMAjEMGD/nT8b0HFppNaNu44lydanPjNgwAAAAMADoIMEDOdxobAAAAAASUVORK5CYII=",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVBzuIiGSoThZERRylikWwUNoKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdHJSdJES/5cUWsR4cNyPd/ced+8AoV5mqtkxAaiaZSRjUTGTXRUDr+jCCHoRRkRiph5PLabhOb7u4ePrXYRneZ/7c/QpOZMBPpF4jumGRbxBPLNp6Zz3iUOsKCnE58TjBl2Q+JHrsstvnAsOCzwzZKST88QhYrHQxnIbs6KhEk8ThxVVo3wh47LCeYuzWq6y5j35C4M5bSXFdZrDiGEJcSQgQkYVJZRhIUKrRoqJJO1HPfxDjj9BLplcJTByLKACFZLjB/+D392a+alJNykYBTpfbPtjFAjsAo2abX8f23bjBPA/A1day1+pA7OfpNdaWvgI6N8GLq5bmrwHXO4Ag0+6ZEiO5Kcp5PPA+xl9UxYYuAV61tzemvs4fQDS1NXyDXBwCIwVKHvd493d7b39e6bZ3w/PFnLM1AG0lgAAAAZiS0dEAFgAWABY9j+ZuwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+YGHgsqA8l49UAAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAMElEQVRYw+3QsQ0AMAgEMZL9R2FHskE6RIHdfsGJCGC7032gMuu33+kPCBAgAADgAbsSA2Yn9JJJAAAAAElFTkSuQmCC",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVBzuIiGSoThZERRylikWwUNoKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdHJSdJES/5cUWsR4cNyPd/ced+8AoV5mqtkxAaiaZSRjUTGTXRUDr+jCCHoRRkRiph5PLabhOb7u4ePrXYRneZ/7c/QpOZMBPpF4jumGRbxBPLNp6Zz3iUOsKCnE58TjBl2Q+JHrsstvnAsOCzwzZKST88QhYrHQxnIbs6KhEk8ThxVVo3wh47LCeYuzWq6y5j35C4M5bSXFdZrDiGEJcSQgQkYVJZRhIUKrRoqJJO1HPfxDjj9BLplcJTByLKACFZLjB/+D392a+alJNykYBTpfbPtjFAjsAo2abX8f23bjBPA/A1day1+pA7OfpNdaWvgI6N8GLq5bmrwHXO4Ag0+6ZEiO5Kcp5PPA+xl9UxYYuAV61tzemvs4fQDS1NXyDXBwCIwVKHvd493d7b39e6bZ3w/PFnLM1AG0lgAAAAZiS0dEAFgAWABY9j+ZuwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+YGHgsqFEqrcIcAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAMElEQVRYw+3QsQ0AMAgEMZL12H8eskE6RIHdfsGJCABgu9N9oDLrt9/pDwgQIADgATlSAqSHJzbkAAAAAElFTkSuQmCC",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVBzuIiGSoThZERRylikWwUNoKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdHJSdJES/5cUWsR4cNyPd/ced+8AoV5mqtkxAaiaZSRjUTGTXRUDr+jCCHoRRkRiph5PLabhOb7u4ePrXYRneZ/7c/QpOZMBPpF4jumGRbxBPLNp6Zz3iUOsKCnE58TjBl2Q+JHrsstvnAsOCzwzZKST88QhYrHQxnIbs6KhEk8ThxVVo3wh47LCeYuzWq6y5j35C4M5bSXFdZrDiGEJcSQgQkYVJZRhIUKrRoqJJO1HPfxDjj9BLplcJTByLKACFZLjB/+D392a+alJNykYBTpfbPtjFAjsAo2abX8f23bjBPA/A1day1+pA7OfpNdaWvgI6N8GLq5bmrwHXO4Ag0+6ZEiO5Kcp5PPA+xl9UxYYuAV61tzemvs4fQDS1NXyDXBwCIwVKHvd493d7b39e6bZ3w/PFnLM1AG0lgAAAAZiS0dEAFgAWABY9j+ZuwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+YGHgsqLGKpyBkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAALklEQVRYw+3QsREAMAgDMZP9dyYb0OUoIrUu+CMBAAB+V68PdNLTfrY/IECAgAt0fgIO1zhYSAAAAABJRU5ErkJggg==",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVBzuIiGSoThZERRylikWwUNoKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdHJSdJES/5cUWsR4cNyPd/ced+8AoV5mqtkxAaiaZSRjUTGTXRUDr+jCCHoRRkRiph5PLabhOb7u4ePrXYRneZ/7c/QpOZMBPpF4jumGRbxBPLNp6Zz3iUOsKCnE58TjBl2Q+JHrsstvnAsOCzwzZKST88QhYrHQxnIbs6KhEk8ThxVVo3wh47LCeYuzWq6y5j35C4M5bSXFdZrDiGEJcSQgQkYVJZRhIUKrRoqJJO1HPfxDjj9BLplcJTByLKACFZLjB/+D392a+alJNykYBTpfbPtjFAjsAo2abX8f23bjBPA/A1day1+pA7OfpNdaWvgI6N8GLq5bmrwHXO4Ag0+6ZEiO5Kcp5PPA+xl9UxYYuAV61tzemvs4fQDS1NXyDXBwCIwVKHvd493d7b39e6bZ3w/PFnLM1AG0lgAAAAZiS0dEAFgAWABY9j+ZuwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+YGHgsxM0aXDnYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAM0lEQVRYw+3QMREAIAwEwQdX+C+QFRykoaBgV0D+JgkAAPC7cXugsqsfWO3GfP0BAQIEHHmlAxCCfGTbAAAAAElFTkSuQmCC",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVBzuIiGSoThZERRylikWwUNoKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdHJSdJES/5cUWsR4cNyPd/ced+8AoV5mqtkxAaiaZSRjUTGTXRUDr+jCCHoRRkRiph5PLabhOb7u4ePrXYRneZ/7c/QpOZMBPpF4jumGRbxBPLNp6Zz3iUOsKCnE58TjBl2Q+JHrsstvnAsOCzwzZKST88QhYrHQxnIbs6KhEk8ThxVVo3wh47LCeYuzWq6y5j35C4M5bSXFdZrDiGEJcSQgQkYVJZRhIUKrRoqJJO1HPfxDjj9BLplcJTByLKACFZLjB/+D392a+alJNykYBTpfbPtjFAjsAo2abX8f23bjBPA/A1day1+pA7OfpNdaWvgI6N8GLq5bmrwHXO4Ag0+6ZEiO5Kcp5PPA+xl9UxYYuAV61tzemvs4fQDS1NXyDXBwCIwVKHvd493d7b39e6bZ3w/PFnLM1AG0lgAAAAZiS0dEAFgAWABY9j+ZuwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+YGHg0ACUJLrMQAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAANElEQVRYw+3QoREAIAwEwQ/9US0FQgcgEAh27UfcJAEAAH5Xp4OROXd7T9VNQHv9AQECBCzXJQMQDXKLowAAAABJRU5ErkJggg==",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVBzuIiGSoThZERRylikWwUNoKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdHJSdJES/5cUWsR4cNyPd/ced+8AoV5mqtkxAaiaZSRjUTGTXRUDr+jCCHoRRkRiph5PLabhOb7u4ePrXYRneZ/7c/QpOZMBPpF4jumGRbxBPLNp6Zz3iUOsKCnE58TjBl2Q+JHrsstvnAsOCzwzZKST88QhYrHQxnIbs6KhEk8ThxVVo3wh47LCeYuzWq6y5j35C4M5bSXFdZrDiGEJcSQgQkYVJZRhIUKrRoqJJO1HPfxDjj9BLplcJTByLKACFZLjB/+D392a+alJNykYBTpfbPtjFAjsAo2abX8f23bjBPA/A1day1+pA7OfpNdaWvgI6N8GLq5bmrwHXO4Ag0+6ZEiO5Kcp5PPA+xl9UxYYuAV61tzemvs4fQDS1NXyDXBwCIwVKHvd493d7b39e6bZ3w/PFnLM1AG0lgAAAAZiS0dEAFgAWABY9j+ZuwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+YGHgw7GBWLCTkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAMklEQVRYw+3QsREAIAwDMYfBGJ7FwgZ0HAVS7eLPCQAA8Lta6T4NZqpuBozXDwgQIGADORQDECxCI1oAAAAASUVORK5CYII=",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVBzuIiGSoThZERRylikWwUNoKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdHJSdJES/5cUWsR4cNyPd/ced+8AoV5mqtkxAaiaZSRjUTGTXRUDr+jCCHoRRkRiph5PLabhOb7u4ePrXYRneZ/7c/QpOZMBPpF4jumGRbxBPLNp6Zz3iUOsKCnE58TjBl2Q+JHrsstvnAsOCzwzZKST88QhYrHQxnIbs6KhEk8ThxVVo3wh47LCeYuzWq6y5j35C4M5bSXFdZrDiGEJcSQgQkYVJZRhIUKrRoqJJO1HPfxDjj9BLplcJTByLKACFZLjB/+D392a+alJNykYBTpfbPtjFAjsAo2abX8f23bjBPA/A1day1+pA7OfpNdaWvgI6N8GLq5bmrwHXO4Ag0+6ZEiO5Kcp5PPA+xl9UxYYuAV61tzemvs4fQDS1NXyDXBwCIwVKHvd493d7b39e6bZ3w/PFnLM1AG0lgAAAAZiS0dEAFgAWABY9j+ZuwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+YGHgw7EBtQgQsAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAMklEQVRYw+3QsREAIAwDMYe5GJ+9wgZ0HAVS7eLPCQDwu5rpPg1Wqm4GjNcPCBAgAGADfYADEICU4gYAAAAASUVORK5CYII=",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtaIVBzuIiGSoThZERRylikWwUNoKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdHJSdJES/5cUWsR4cNyPd/ced+8AoV5mqtkxAaiaZSRjUTGTXRUDr+jCCHoRRkRiph5PLabhOb7u4ePrXYRneZ/7c/QpOZMBPpF4jumGRbxBPLNp6Zz3iUOsKCnE58TjBl2Q+JHrsstvnAsOCzwzZKST88QhYrHQxnIbs6KhEk8ThxVVo3wh47LCeYuzWq6y5j35C4M5bSXFdZrDiGEJcSQgQkYVJZRhIUKrRoqJJO1HPfxDjj9BLplcJTByLKACFZLjB/+D392a+alJNykYBTpfbPtjFAjsAo2abX8f23bjBPA/A1day1+pA7OfpNdaWvgI6N8GLq5bmrwHXO4Ag0+6ZEiO5Kcp5PPA+xl9UxYYuAV61tzemvs4fQDS1NXyDXBwCIwVKHvd493d7b39e6bZ3w/PFnLM1AG0lgAAAAZiS0dEAFgAWABY9j+ZuwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+YGHgw7CAg8GV0AAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAANUlEQVRYw+3QMREAIAwEwQQPmEUAZhERHNAxFOzWX9x8BPC7jD7quFgzbwa01w8IECAAAGADvCwDECNaiRkAAAAASUVORK5CYII=",
];

export function animateFavicon() {
  const favicon = document.querySelector('link[rel*="icon"]');

  let curr = 0;
  const max = 11;

  setInterval(() => {
    curr = curr >= max ? 0 : curr + 1;
    const value = animatedFavicons[curr];
    favicon?.setAttribute('href', value);
  }, 250);
};

export default animateFavicon;