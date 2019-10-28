const pad = (original, length, padString) => {
  if (!padString) {
    padString = " ";
  } else {
    padString += "";
  }

  let padding;

  padding = "";

  if (original.length < length) {
    while (padding.length < length - original.length) {
      padding += padString;
    }

    padding = padding.slice(0, length - original.length);
  }

  return padding + original;
};

export default pad;
