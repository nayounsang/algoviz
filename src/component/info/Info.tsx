import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";
import '../../style/layout/graphpage.css';

const Info = ({className}) => {

    const info = useSelector((state: RootState) => state.info.info);


    return (
        <div className={className}>
            <h3>알고리즘 정보</h3>
            {info.map((child: React.JSX.Element) => child
            )}
        </div>
    )
}

export default Info;