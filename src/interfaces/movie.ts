export interface Movie {
    title: string;
    release_date: string;
    overview: string;
}

export interface MovieAPIResponse {
    page: number;
    results: Movie[];
    total_page: number;
    tota_results: number;
}
