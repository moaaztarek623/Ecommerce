import React, { useEffect, useState } from 'react';
import cat_1 from '../../images/category-01.png';
import cat_2 from '../../images/category-02.png';
import cat_3 from '../../images/category-03.png';
import cat_4 from '../../images/category-04.png';
import cat_5 from '../../images/category-05.png';

const CategoryCard = ({img, title, class_}) => {

  const [state, setstate] = useState("")

  const random = ["!cat-01", "!cat-02", "!cat-03", "!cat-04", "!cat-05"];
  
  useEffect(() => {
    setstate(random[Math.floor(Math.random() * random.length)]);
  }, [state])
  
  const hoverDiv = (e) => {
    e.classList.add(String(state));
  }

  const classArray = ["cat-01", "cat-02", "cat-03", "cat-04", "cat-05"];

  const [classes, setclasses] = useState("");

  useEffect(() => {
      setclasses(classArray[Math.floor(Math.random() * classArray.length)]);
  }, []);

  const imgArray = [cat_1, cat_2, cat_3, cat_4, cat_5];

  const imgRandom = imgArray[Math.floor(Math.random() * imgArray.length)];

  const [imgs, setimg] = useState("")

  useEffect(() => {
    setimg(imgRandom);
  }, [imgs])

  return (
    <div className="flex flex-col gap-2 items-center">
        <div onMouseEnter={(e) => hoverDiv(e.currentTarget)} onMouseLeave={(e) => { state != class_ ? e.currentTarget.classList.remove(String(state)) : setstate(state); setstate(random[Math.floor(Math.random() * random.length)])}} className = {classes+" "+"overflow-hidden rounded-full w-36 h-36 flex items-center gap-1 justify-center"}>
            <img src={img} alt='cat1' className='w-24'></img>
        </div>
        <spn className="font-bold text-center text-gray-600">{title}</spn>
    </div>
  )
}

export default CategoryCard
