import cssData from "/src/database/Books/css.json";
import Card from "../Card";
const jsonData = cssData;

console.log(jsonData);

export const CssB = () => {
  const cardComponents = jsonData.map((item, i) => (
    //  CARD
    <Card
      key={i}
      title={item.title}
      link={item.link}
      description={item.description}
      i={i}
      img={item.img}
    />
  ));
  return (
    <>
      <div className="grid grid-cols-3 gap-x-12 gap-y-16  px-36 my-12">
        {cardComponents}
      </div>
      <div className="p-4 w-full h-[20rem]"></div>
    </>
  );
};
