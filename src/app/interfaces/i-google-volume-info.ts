export interface IVolumeInfo {  
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    industryIdentifiers: IVolumeInfo_IndustryIdentifier[]
    readingModes: IVolumeInfo_ReadingModes
    pageCount: number
    printType: string
    categories: string[]
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary: IVolumeInfo_PanelizationSummary
    imageLinks: IVolumeInfo_ImageLinks
    language: string,
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
}

interface IVolumeInfo_IndustryIdentifier {
    type: string
    identifier: string
}

interface IVolumeInfo_ReadingModes {  
    text: boolean
    image: boolean
}

interface IVolumeInfo_PanelizationSummary {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
}

interface IVolumeInfo_ImageLinks {
    smallThumbnail: string
    thumbnail: string
}