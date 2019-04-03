export interface VolumeInfo {  
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    industryIdentifiers: VolumeInfo_IndustryIdentifier[]
    readingModes: VolumeInfo_ReadingModes
    pageCount: number
    printedPageCount?: number
    dimension?: any
    printType: string
    categories?: string[]
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary?: VolumeInfo_PanelizationSummary
    imageLinks: VolumeInfo_ImageLinks
    language: string,
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
}

export interface VolumeInfo_IndustryIdentifier {
    type: string
    identifier: string
}

interface VolumeInfo_ReadingModes {  
    text: boolean
    image: boolean
}

interface VolumeInfo_PanelizationSummary {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
}

export interface VolumeInfo_ImageLinks {
    smallThumbnail: string
    thumbnail: string
    small?: string
    medium?: string
}