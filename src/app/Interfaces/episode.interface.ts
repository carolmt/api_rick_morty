export interface Info {
    info:    InfoClass;
    results: Episode[];
}

export interface InfoClass {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface Episode {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    Date;
}
