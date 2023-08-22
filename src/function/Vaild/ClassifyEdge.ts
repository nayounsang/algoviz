export const ClassifyEdge = (line: string): string => {

    const tmp = line.split(' ');
    if (tmp.length == 1) {
        if (tmp[0] == ''){
            return ''
        }
        return 'node'
    }
    if (tmp.length == 2){
        if (tmp[1] == '' || tmp[0] == ''){
            return ''
        }
        return 'uwedge'
    }
    if (tmp.length == 3){
        if (/^[0-9]+$/.test(tmp[2])){
            return 'wedge'
        } 
        return ''
    }


    return ''
}