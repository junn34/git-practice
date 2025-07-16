import React, { useState } from "react";
import { useTodosDispatch } from "@/contexts/TodoContext"; // 실제 경로에 맞게 수정

function TodoSearch() {
  const [searchData, setSearchData] = useState('');
  const dispatch = useTodosDispatch();

  const handleChange = (event) => {
    const keyword = event.target.value;
    setSearchData(keyword);

    
    dispatch({
    
      type: 'SEARCH',
      keyword: keyword, // reducer에서 사용할 검색어 전달
    });
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded">
      <h1 className="text-lg font-bold mb-2">Search</h1>
      <input
        type="text"
        placeholder="검색어 입력"
        value={searchData}
        onChange={handleChange}
        className="w-full p-2 text-gray-900 bg-gray-200 rounded"
      />
    </div>
  );
}

export default TodoSearch;
