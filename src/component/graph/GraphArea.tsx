import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Graph from "react-vis-network-graph";
import SelectDiv from './SelectDiv';
import { GraphType } from 'src/types/graphtype';
import { PagePropType } from 'src/types/proptype';


//ex https://github.com/crubier/react-graph-vis/blob/master/example/src/index.js
const GraphArea = ({ options, direct, graph, setGraph, message, setMessage }: PagePropType) => {




    return (
        <div>
            <SelectDiv graph={graph} setGraph={setGraph} direct={direct} message={message} setMessage={setMessage} />
            <Graph graph={graph} style={{ width: 800, height: 700, }} options={options} />
        </div>
    )
};


export default GraphArea;

