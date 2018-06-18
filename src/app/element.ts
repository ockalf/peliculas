export class Element {
    private imbdID: string;
    private title: string;
    private year: number;
    private cover: string;
    private resume: string;
    private relase: Date;
    private runTime: string;
    private genre: String;
    private director: string;
    private rating: string;
    private type: string;


	constructor($imbdID: string, $title: string, $year: number, $cover: string, $type?: string, $resume?: string, $relase?: Date, $runTime?: string, $genre?: String, $director?: string, $rating?: string ) {
		this.imbdID = $imbdID;
		this.title = $title;
		this.year = $year;
		this.cover = $cover;
		this.resume = $resume;
		this.relase = $relase;
		this.runTime = $runTime;
		this.genre = $genre;
		this.director = $director;
		this.rating = $rating;
		this.type = $type;
	}

	getType():string{
		return this.type
	}
}
