module.exports = {
    random() {
      const segment = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return `${segment()}-${segment()}-${segment()}`;
    }
};

//keeps asset cache fresh so users still have up-to-date css
//even after Eleventy re-builds