import React from "react";

const ProductsHeader = () => {
  return (
    <ul className="py-2 bg-gray-50 my-2 flex gap-4 lg:mb-0 lg:mt-0 flex-wrap lg:items-center px-2 justify-center lg:gap-6 text-gray-500 font-bold text-sm">
            <li className="hover:text-gray-900"><button>الكل</button></li>
            <li className="hover:text-gray-900"><button>الكترونيات</button></li>
            <li className="hover:text-gray-900"><button>ملابس</button></li>
            <li className="hover:text-gray-900"><button>كهربيه</button></li>
            <li className="hover:text-gray-900"><button>تخفيضات</button></li>
            <li className="hover:text-gray-900"><button>تخفيضات</button></li>
            <li className="hover:text-gray-900"><button>تخفيضات</button></li>
            <li className="hover:text-gray-900"><button>تخفيضات</button></li>
            <li className="hover:text-gray-900"><button>تخفيضات</button></li>
            <li className="hover:text-gray-900"><button>تخفيضات</button></li>
            <li className="hover:text-gray-900"><button>المزيد</button></li>
    </ul>
  );
};

export default ProductsHeader;
