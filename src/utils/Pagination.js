import React from 'react'
import Pagination from '@mui/material/Pagination';

const Paginationn = ({banksPerPage,totalBanks,handlePageChange}) => {
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(totalBanks/banksPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        < div className='float-end mt-2'>
            <Pagination count={Math.ceil(totalBanks/banksPerPage)} showFirstButton showLastButton onChange={handlePageChange} />
        </div>
    )
}


export default Paginationn