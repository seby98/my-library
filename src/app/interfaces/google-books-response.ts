import { VolumeInfo } from './google-volume-info';

export interface GoogleBooksResponse {
    kind: string
    totalItems: number
    items: GoogleBooksResponse_Item[]
}

export interface GoogleBooksResponse_Item {
    id: string
    volumeInfo: VolumeInfo
}
