export interface Service {
    search: (query: string[]) => Promise<any[]>;
}

export interface MovieService extends Service {
    search: (query: string[]) => Promise<string[][]>;
}
