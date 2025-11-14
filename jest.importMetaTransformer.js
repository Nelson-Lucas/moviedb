export default {
  process(src) {
    return {
      code: src.replace(/import\.meta\.env\.([A-Z0-9_]+)/g, 'process.env.$1'),
    };
  },
};
