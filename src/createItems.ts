export interface ItemType {
    hasItem: boolean;
    clicked: boolean;
}

export const createItems = (): ItemType[] => {
    const items = Array.from({ length: 36 }, () => ({
        hasItem: false,
        clicked: false,
    }));

    const randomIndex = Math.floor(Math.random() * 36);
    items[randomIndex].hasItem = true;

    return items;
};

