// Deezer API - free 30-second previews, no auth needed!
const DEEZER_SEARCH = 'https://api.deezer.com/search';

// We use a CORS proxy since Deezer doesn't support CORS from browsers
const CORS_PROXY = 'https://corsproxy.io/?';

export async function searchTrack(query) {
  try {
    const url = `${CORS_PROXY}${encodeURIComponent(`${DEEZER_SEARCH}?q=${encodeURIComponent(query)}&limit=5`)}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.data && data.data.length > 0) {
      const track = data.data[0];
      return {
        title: track.title,
        artist: track.artist?.name,
        album: track.album?.title,
        albumArt: track.album?.cover_big || track.album?.cover_medium,
        albumArtSmall: track.album?.cover_medium || track.album?.cover_small,
        previewUrl: track.preview, // Deezer always provides this!
        duration: track.duration,
        deezerLink: track.link,
      };
    }
    return null;
  } catch (e) {
    console.warn('Deezer search failed:', e);
    return null;
  }
}
