import BucketSection from "../components/BucketSection";
import styled from "styled-components";

const Bucket = ({ data, bucketRegister }) => {
    return (
        <BucketStyle>
            <BucketSection title="BE" data={data} />
            <BucketSection title="DO" data={data} />
            <BucketSection title="HAVE" data={data} />
            <BucketSection title="WHERE" data={data} />
        </BucketStyle>
    )
}

export default Bucket;

const BucketStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`