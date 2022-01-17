import { useState } from 'react';
import './Mind.scss';
import MindRegister from '../components/MindRegister';

const Mind = ({ data, mindRegister }) => {
    // 등록을 위한 모달창 on/off기능
    const [ modalOn, setModalOn ] = useState(false);

    // mindData값 출력
    const items = data.map(item=>(
        <div key={item.id} className='mindContent'>
            <div className='mindBody'>{item.body}</div>
            <div className='mindAuthor'>- {item.author} -</div>
        </div>
    ))

    const handleClick = () => {
        setModalOn(!modalOn)
    }

    // 전달받은 body, author를 다시 App으로 넘겨주고, 모달 창은 닫음
    const handleSubmit = (body, author) => {
        mindRegister(body, author)
        setModalOn(!modalOn)
    }

    return (
        <div>
            {items}
            {modalOn && <MindRegister onClick={handleClick} onSubmit={handleSubmit} />}
            <button className='registerBtn' onClick={handleClick}>+</button>
        </div>
    )
}

export default Mind;