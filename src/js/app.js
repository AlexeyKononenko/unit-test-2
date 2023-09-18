export default function SortHeros(hero) {
  const sorting = [...hero].sort((a, b) => b.health - a.health);
  return sorting;
}

console.log('app work');
