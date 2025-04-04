let groceryList = [];
let nextId = 1;

const smartCategorize = (name) => {
  const dairy = ['milk', 'cheese', 'yogurt'];
  const produce = ['apple', 'banana', 'carrot', 'spinach'];
  const snacks = ['chips', 'cookies', 'crackers'];

  const lower = name.toLowerCase();

  if (dairy.includes(lower)) return 'Dairy';
  if (produce.includes(lower)) return 'Produce';
  if (snacks.includes(lower)) return 'Snacks';
  return 'Other';
};

function getAllItems() {
  return groceryList;
}

function addItem(name) {
  const item = {
    id: nextId++,
    name,
    category: smartCategorize(name),
    bought: false,
  };
  groceryList.push(item);
  return item;
}

function updateItem(id, updates) {
  const item = groceryList.find((i) => i.id === id);
  if (!item) return null;
  Object.assign(item, updates);
  return item;
}

function deleteItem(id) {
  const index = groceryList.findIndex((i) => i.id === id);
  if (index === -1) return false;
  groceryList.splice(index, 1);
  return true;
}

module.exports = {
  getAllItems,
  addItem,
  updateItem,
  deleteItem,
};
