import { IVolumeInfo } from './i-google-volume-info';

export interface IGoogleBooksResponse {
    kind: string
    totalItems: number
    items: IGoogleBooksResponse_Item[]
}

export interface IGoogleBooksResponse_Item {
    id: string
    volumeInfo: IVolumeInfo
}
