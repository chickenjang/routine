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
            <div>
                <p className='titles'>내용</p>
                <textarea name="body" className='boxs' rows='10' required ></textarea>
            </div>
            <div className='author'>
                <p className='titles'>저자</p>
                <input type="text" name="author" className='boxs' required />
            </div>
            <div>
                <button type="sumbit" className='btns'>등록</button>
                {/* 취소시 모달창 닫기 */}
                <button type="button" className='btns' onClick={()=>{onClick()}}>취소</button>
            </div>
        </form>
    )
}

export default MindRegister;