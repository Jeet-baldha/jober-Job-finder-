import React, { useState, useEffect, useRef } from 'react';
import itProfessions from '../data/role.js';

function RoleAskingPopup({ getJobs }) {
    const [userRole, setUserRole] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProfession, setSelectedProfession] = useState('');
    const dropdownRef = useRef(null);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (profession) => {
        setSelectedProfession(profession);
        setIsOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const filteredProfessions = itProfessions.filter(profession =>
        profession.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='flex w-full h-full fixed top-0 left-0 items-center justify-center z-50 bg-slate-50 bg-opacity-70'>
            <div ref={dropdownRef} className='bg-primary w-96 h-56 p-10 rounded-md flex flex-col'>
                <h1 className='text-2xl mb-5 font-semibold text-white'>Select Your Profession</h1>
                <div className="relative">
                    <div className="selected-option bg-white border border-gray-300 p-2 cursor-pointer rounded-sm" onClick={toggleDropdown}>
                        {selectedProfession || 'Select'}
                    </div>
                    {isOpen && (
                        <div>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-2 border-b mt-0 border-gray-300 stca focus:outline-none"
                            />
                        <div className="options absolute left-0  w-full bg-white border-t-0 border border-gray-300 z-10 max-h-40 overflow-y-auto ">
                            {filteredProfessions.map((profession, index) => (
                                <div key={index} className="option px-2 py-1 cursor-pointer hover:bg-gray-200 border-gray-200  border-b" onClick={() => handleSelectOption(profession)}>
                                    {profession}
                                </div>
                            ))}
                        </div>
                        </div>
                    )}
                </div>
                <button className='bg-white py-1  hover:shadow-xl hover:w-full w-36 duration-200 mt-5 rounded-sm hover:font-bold text-lg text-primary font-medium' onClick={() => getJobs(selectedProfession)}>Submit</button>
            </div>
        </div>
    );
}

export default RoleAskingPopup;
