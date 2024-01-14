export const getBorderClass = (priority) => {
  switch (Number(priority)) {
    case 1: {
      return "border-danger";
    }
    case 2: {
      return "border-warning";
    }
    case 3: {
      return "border-info";
    }
    default: {
      return "";
    }
  }
};

export const getListCategoriesByPriority = (tasks) => {
  const highPriorities = tasks.filter((task) => Number(task.priority) === 1);
  const mediumPriorities = tasks.filter((task) => Number(task.priority) === 2);
  const lowPriorities = tasks.filter((task) => Number(task.priority) === 3);

  return {
    highPriorities,
    mediumPriorities,
    lowPriorities,
  };
};
