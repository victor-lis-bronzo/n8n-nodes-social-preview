
const fontCache = new Map<string, ArrayBuffer>();

/**
 * Fetches a font from Google Fonts and returns it as an ArrayBuffer.
 * Implements a simple in-memory cache to avoid redundant downloads.
 */
export async function fetchFontBuffer(fontName: string): Promise<ArrayBuffer> {
	if (fontCache.has(fontName)) {
		return fontCache.get(fontName)!;
	}

	try {
		// Note: This is a simplified approach. In a production environment, 
		// you might want to resolve the actual CSS from Google Fonts to get the .ttf URL.
		// For this implementation, we assume a direct URL or a helper that provides the .ttf.
		// Example URL for Inter: https://github.com/google/fonts/raw/main/ofl/inter/Inter-Regular.ttf
		
		const fontUrls: Record<string, string> = {
			'Inter': 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.19/files/inter-latin-400-normal.woff',
			'Roboto': 'https://cdn.jsdelivr.net/npm/@fontsource/roboto@5.0.13/files/roboto-latin-400-normal.woff',
			'Open Sans': 'https://cdn.jsdelivr.net/npm/@fontsource/open-sans@5.0.28/files/open-sans-latin-400-normal.woff',
		};

		const url = fontUrls[fontName] || fontUrls['Inter']; // Default to Inter
		
		const response = await fetch(url);
		
		if (!response.ok) {
			throw new Error(`Failed to fetch font ${fontName}: ${response.statusText}`);
		}

		const buffer = await response.arrayBuffer();
		fontCache.set(fontName, buffer);
		
		return buffer;
	} catch (error) {
		throw new Error(`Error loading font ${fontName}: ${error.message}`);
	}
}
