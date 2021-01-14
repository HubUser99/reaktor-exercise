import { QuantityType } from "types/types";

export const parseAvailabilityDataPayload = (payload: string): QuantityType => {
    const result = payload.split("<INSTOCKVALUE>")[1].split("</INSTOCKVALUE>")[0] as QuantityType;

    return result;
};
