import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";

const Info = ({style}) => {

    const info = useSelector((state: RootState) => state.info.info);


    return (
        <div style={style}>
            <h3>알고리즘 정보</h3>
            {info.map((child: React.JSX.Element) => child
            )}
        </div>
    )
}

export default Info;