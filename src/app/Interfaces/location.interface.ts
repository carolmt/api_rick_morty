export interface Info {
    info:    InfoClass;
    results: Location[];
}

export interface InfoClass {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface Location {
    id:        number;
    name:      string;
    type:      string;
    dimension: string;
    residents: string[];
    url:       string;
    created:   Date;
}

