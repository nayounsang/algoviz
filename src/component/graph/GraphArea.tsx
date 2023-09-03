import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Graph from "react-vis-network-graph";
import SelectDiv from './SelectDiv';
import { PagePropType } from 'src/types/proptype';
import '../../style/layout/graphpage.css';



/**
 * @deprecated
 */
const GraphArea = ({ options, direct, graph, setGraph, message, setMessage }: PagePropType) => {




    return (
        <div>
            <SelectDiv graph={graph} setGraph={setGraph} direct={direct} message={message} setMessage={setMessage} />
            <Graph className="graph" graph={graph} options={options} />
        </div>
    )
};


export default GraphArea;

