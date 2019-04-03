import { VolumeInfo } from './google-volume-info';

export interface GoogleBookResponse {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: VolumeInfo
    saleInfo: any
    accessInfo: any
}
