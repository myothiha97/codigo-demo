const sortCategories = (target, categories) => {
  return categories.filter((category) => {
    if (category.type.includes(target.tag)) {
      return category;
    }
  });
};

export default sortCategories;
