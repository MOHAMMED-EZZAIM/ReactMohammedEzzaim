 function List(){
    const fruits=[
                  {id:1,name:"apple",categories:95},
                  {id:2,name:"orange",categories:45},
                  {id:3,name:"banan",categories:31},
                  {id:4,name:"kiwi",categories:120},
                  {id:4,name:"frise",categories:160}
                   ];
const fonDispalyName= fruits.map((fruit)=>{
  return (<li>{fruit.name}</li>);
});
const fonDispalyId= fruits.map((fruit)=>{
    return (<li>{fruit.id}</li>);
  });

// fruits.sort((frui1,frui2)=>frui1.id-frui2.id);
fruits.sort((frui1,frui2)=>frui2.id-frui1.id);
const functionFilter=fruits.filter(
  (fruid)=>fruid.categories>=100
);

const fonDispalyCategories= functionFilter.map((fruit)=>{
  return (<li>{fruit.categories}</li>);
});

return(<ul>{fonDispalyCategories}</ul>);
 }
 export default List;