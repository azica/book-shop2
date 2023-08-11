import React, { useState } from "react";
import { useAppSelector } from "../store/hooks";



const Toast = () => {
	const {errorMessage} = useAppSelector(state=>state.books)
	const [show, setShow] = useState(true)

	const clickHandler = (e:React.SyntheticEvent)=>{
		e.preventDefault()
		setShow(false)
	}
	setTimeout(()=>{
		setShow(false)
	}, 7000)
    return (
		<div className={`toast ${errorMessage!="" && show ? 'active': '' }`}>
			<p className="toast__message">{errorMessage}</p>
			<button onClick={clickHandler}>
				X
			</button>
		</div>
     )
}
export default Toast;
