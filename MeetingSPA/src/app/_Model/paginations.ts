export interface Paginations {
    currentPage: number;
    itemPerPage: number;
    totalItems: number;
    totalPages: number;
}


export class PaginatedResult<T> {
    result: T;
    pagination: Paginations;
}
