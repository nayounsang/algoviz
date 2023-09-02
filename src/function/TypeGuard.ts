import { EdgeType } from "src/types/graphtype"

export const isEdgeType = (value: any): value is EdgeType => {
    return typeof value === 'object' && 'from' in value && 'to' in value
}

export const isVisitType = (value: any): value is { [key: string]: (string | boolean | number) } => {
    if (typeof value !== 'object') {
        return false;
    }

    for (const key in value) {
        if (typeof value[key] !== 'number' || typeof value[key] !== 'string' || typeof value[key] !== 'boolean') {
            return false;
        }
    }
    return true;
}

export const isPqType = (value: any): value is [number, string][] => {
    if (!Array.isArray(value)) {
        return false;
    }
    for (const e of value) {
        if (!Array.isArray(e) || e.length !== 2 || typeof e[0] !== 'number' || typeof e[1] !== 'string') {
            return false;
        }
    }
    return true;
}