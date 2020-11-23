import { AvailabilitiesApi } from "types/api";

const MAX_TRIES = 5;

const requestInit: RequestInit = {
    method: "GET",
    mode: "cors",
    cache: "default",
    headers: {
        Accept: "application/json",
        // "x-force-error-mode": "all",
    },
};

export const tryFetch = async (url: string, filterDelegate: (data: any) => boolean) => {
    let response = await fetch(url, requestInit);
    let data = await response.json();

    for (let i = 0; i < MAX_TRIES; i++) {
        if (!filterDelegate(data)) {
            let response = await fetch(url, requestInit);
            data = await response.json();
        } else {
            return data;
        }
    }

    return undefined;
};
