import { IDepartment } from '../interfaces/interfaces';

export const mapIdToValue = (refId: string, refArray: IDepartment[]) => {
    for (const obj of refArray) {
        if (obj.id === refId) {
            return obj.value;
        }
    }
    return 'N/A';
};
