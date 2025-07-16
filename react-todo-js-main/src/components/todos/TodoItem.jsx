import React, { useState } from 'react'
import { TODO_CATEGORY_ICON } from '@/constants/icon';
import IconButton from '../ui/IconButton';
import { createPortal } from 'react-dom';
import TodoForm from './TodoForm'
import { useTodosDispatch } from '../../contexts/TodoContext';
import ModalBox from '@/components/ui/ModalBox'
import Modal from '../ui/Modal';
const TodoItem = ({ todo }) => {

  const [openModal, open] = useState(false);
  const [openModal2, open2] = useState(false);
  
  // TodoContext에서 상태를 변경할 함수를 불러오기
  const dispatch = useTodosDispatch();

  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
        <div>
            <span className="text-lg font-medium text-gray-300">{ TODO_CATEGORY_ICON[todo.category] }</span>
            <div>
                <h2 onClick={()=>open2(true)} data-test="title" className="mb-0 text-lg font-bold text-gray-100 uppercase">{ todo.title }</h2>
                <p className="mt-2 text-base text-gray-200">{ todo.summary }</p>
            </div>
        </div>
        {openModal2 && createPortal(
          <ModalBox onClose={() => open2(false)}>
            <TodoForm actionTitle={'변경'} buttonText={'change'} onClose={() => open2(false)} todo={todo} />
          </ModalBox>,
          document.body
        )}

        <div className="flex items-center gap-1">
            <IconButton onClick={() => open(true)} icon={'✏️'}/>
            <IconButton onClick={() => dispatch({ type: 'DELETE', id: todo.id })} icon={'🗑'} />
        </div>
        {openModal && createPortal(
          <Modal onClose={() => open(false)}>
            <TodoForm actionTitle={'수정'} buttonText={'Update'} onClose={() => open(false)} todo={todo} />
          </Modal>,
          document.body
        )}
        
    </li>
  )
}
export default TodoItem