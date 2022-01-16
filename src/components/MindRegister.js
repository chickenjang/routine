import './MindRegister.scss'

//등록시 body, author의 값을 Mind의 onSubmit으로 넘김
const MindRegister = ({ onClick, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = e.target.body.value;
        const author = e.target.author.value;
        onSubmit(body, author)
    }

    return (
        <form className='mindRegister' onSubmit={handleSubmit}>
            <div className='body'>
                <p>내용</p>
                <textarea name="body"></textarea>
            </div>
            <div className='author'>
                <p>저자</p>
                <input type="text" name="author" />
            </div>
            <div className="buttons">
                <button type="sumbit">등록</button>
                {/* 취소시 모달창 닫기 */}
                <button type="button" onClick={()=>{onClick()}}>취소</button>
            </div>
        </form>
    )
}

export default MindRegister;