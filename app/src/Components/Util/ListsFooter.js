import React from 'react'
import { Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom'

const ListsFooter = () => {
    const SITEMAP = [
        {
          title: "Company",
          links: ["About Us", "Careers", "Our Team", "Projects"],
        },
        {
          title: "Help Center",
          links: ["Discord", "Twitter", "GitHub", "Contact Us"],
        },
        {
          title: "Resources",
          links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
        },
        {
          title: "Products",
          links: ["Templates", "UI Kits", "Icons", "Mockups"],
        },
      ];

    return (
    <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
    {SITEMAP.map(({ title, links }, key) => (
      <div key={key} className="w-full">
        <Typography variant="small" color="blue-gray" className="mb-4 font-bold uppercase opacity-50">
          {title}
        </Typography>
        <ul className="space-y-1">
          {links.map((link, key) => (
            <Typography key={key} as="li" color="blue-gray" className="font-normal">
              <Link className="inline-block py-1 pr-2 transition-transform hover:scale-105" >
                {link}
              </Link>
            </Typography>
          ))}
        </ul>
      </div>
    ))}
  </div>
  )
}

export default ListsFooter
