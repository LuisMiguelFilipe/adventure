export interface User {
    displayName: string;
    
}

export const getCurrentUser = (): User => {
    return {
        displayName: 'Luis Filipe',
    }
}