import React, { useState } from 'react';

const Pagination = ({ totalPages, visiblePages = 3 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const getPageNumbers = () => {
        let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
        let endPage = startPage + visiblePages - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(endPage - visiblePages + 1, 1);
        }

        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="flex justify-center items-center space-x-2 mt-4">
            <button 
                className="text-teal-600"
                onClick={handlePrevious}
                disabled={currentPage === 1}
            >
                &larr;
            </button>
            {getPageNumbers().map(page => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-2 py-1 ${currentPage === page ? 'text-xl font-bold text-teal-800' : 'text-teal-500'}`}
                >
                    {page}
                </button>
            ))}
            {currentPage < totalPages - Math.floor(visiblePages / 2) && (
                <>
                    <span>...</span>
                    <button
                        onClick={() => handlePageChange(totalPages)}
                        className={`px-2 py-1 ${currentPage === totalPages ? 'font-bold text-teal-800' : 'text-gray-600'}`}
                    >
                        {totalPages}
                    </button>
                </>
            )}
            <button 
                className="text-teal-600"
                onClick={handleNext}
                disabled={currentPage === totalPages}
            >
                &rarr;
            </button>
        </div>
    );
};

export default Pagination;
