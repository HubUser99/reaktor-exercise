export const getChunks = <T>(items: T[], chunkSize: number) => {
    return items.reduce((chunks: T[][], item, index) => {
        if (index % chunkSize === 0) {
            chunks.push([item]);
        } else {
            chunks[chunks.length - 1].push(item);
        }
        return chunks;
    }, []);
};

export const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
