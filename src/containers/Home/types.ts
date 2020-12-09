export interface Photo {
	/**
	 * The id of the photo.
	 */
	id: number;
	/**
	 * The real width of the photo in pixels.
	 */
	width: number;
	/**
	 * The real height of the photo in pixels.
	 */
	height: number;
	/**
	 * The Pexels URL where the photo is located.
	 */
	url: string;
	/**
	 * The name of the photographer who took the photo.
	 */
	photographer: string;
	/**
	 * The URL of the photographer's Pexels profile.
	 */
	photographer_url: string;
	/**
	 * The id of the photographer.
	 */
	photographer_id: number;
	/**
	 * An assortment of different image sizes
	 * that can be used to display this Photo.
	 */
	src: Src;
}

export interface Src {
	/**
	 * The image without any size changes. It will be the same as the width and height attributes.
	 */
	original: string;
	/**
	 * The image resized to W 940px X H 650px DPR 1.
	 */
	large: string;
	/**
	 * The image resized W 940px X H 650px DPR 2.
	 */
	large2x: string;
	/**
	 * The image scaled proportionally so that it's new height is 350px.
	 */
	medium: string;
	/**
	 * The image scaled proportionally so that it's new height is 130px.
	 */
	small: string;
	/**
	 * The image cropped to W 800px X H 1200px.
	 */
	portrait: string;
	/**
	 * The image cropped to W 1200px X H 627px.
	 */
	landscape: string;
	/**
	 * The image cropped to W 280px X H 200px.}
	 */
	tiny: string;
}
export interface Photos {
	photos: Photo[];
}

export interface PhotosResponse {
	/**
	 * The total number of hits for the query.
	 */
	total_results: number;
	/**
	 * The current page number.
	 */
	page: number;
	/**
	 * The number of photos returned with each page.
	 */
	per_page: number;
	/**
	 * The URL to retrieve the next page of the search results.
	 */
	next_page: string;
	/**
	 * An array of Photo objects.
	 */
	photos: Photos[];
}
