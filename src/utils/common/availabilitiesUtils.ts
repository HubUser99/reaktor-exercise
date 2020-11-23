export const parseAvailabilityDataPayload = (payload: string) => {
    const result = payload.split("<INSTOCKVALUE>")[1].split("</INSTOCKVALUE>")[0];

    return result;
};
