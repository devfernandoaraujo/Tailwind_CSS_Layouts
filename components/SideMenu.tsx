import { NextPage } from 'next';

const SideMenu: NextPage = () => {
  return (
     <aside className="w-56 bg-gray-800 h-full"> 
        <ul className="grid grid-cols-1 gap-4 gap-y-0 place-items-center">
            <li className="p-1 text-white hover:bg-gray-700"><a href="#">QR Code Component</a></li>
             
        </ul>
    </aside>
  );
}

export default SideMenu;