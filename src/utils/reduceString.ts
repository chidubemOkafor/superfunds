export const reduceString = (input: string, length: number) => {
    if (input.length <= length) {
      return input;
    }

    return `${input.slice(0, length)}`;
  }