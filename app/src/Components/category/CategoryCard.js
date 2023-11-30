import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const CategoryCard = ({img, title, class_, id}) => {

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

  return (
    <Link to={`/products/category/${id}`}>
      <div className="flex flex-col gap-2 items-center">
          <div onMouseEnter={(e) => hoverDiv(e.currentTarget)} onMouseLeave={(e) => { state != class_ ? e.currentTarget.classList.remove(String(state)) : setstate(state); setstate(random[Math.floor(Math.random() * random.length)])}} className = {classes+" "+"overflow-hidden rounded-full w-36 h-36 flex items-center gap-1 justify-center"}>
              <img src={img} alt='cat1' className='w-24'></img>
          </div>
          <spn className="font-bold text-center text-gray-600">{title}</spn>
      </div>
    </Link>
  )
}

export default CategoryCard
