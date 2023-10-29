import React from 'react'

export default function Pagination({pagination,onChangePage}) {
  const {_page,_limit,_totalRows} = pagination;
  const lastPage = Math.ceil(_totalRows/_limit);
  const handleChangePage = (newPage) => {
    console.log("Giá trị page truyền về:" + newPage);
    if(onChangePage){
      onChangePage(newPage);
    }
  }
  return (
    <div style={{textAlign:"center"}}>
        <button style={{marginRight:"10px"}}
        disabled = {_page<= 1}
        onClick={()=> handleChangePage(_page - 1)}
        className='btn btn-primary'>Previous</button>
        {_page}/{lastPage}
        <button style={{marginLeft:"10px"}}
        disabled = {_page >= lastPage}
        onClick={()=> handleChangePage(_page + 1)}
        className='btn btn-primary'>Next</button>
    </div>
  )
}
