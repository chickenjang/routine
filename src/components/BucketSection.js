import './BucketSection.scss';

const BucketSection = ({ title, data }) => {
    const items = data[title.toLowerCase()].map((item)=>{
        return <li key={item}>{item}</li>
    })
    return (
        <div className='bucketSection'>
            <p>{title}</p>
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default BucketSection;