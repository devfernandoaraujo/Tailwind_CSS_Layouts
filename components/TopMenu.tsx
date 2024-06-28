import { NextPage } from 'next';
const TopMenu = () => {

    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-xl font-bold">Tailwind CSS</div>
        <div>
            <a href="#" className="px-2">Home</a>
            <a href="#" className="px-2">About</a>
            <a href="#" className="px-2">Projects</a>
            <a href="#" className="px-2">Contact</a>
        </div>
        </div>
    );
}

export default TopMenu;