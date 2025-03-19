import { Track } from "../types/music";

// Fix the paths to assets - remove "public" prefix as Vite serves from /
const coverArt = {
  classical: "/assets/covers/classical_cover.jpg",
  rock: "/assets/covers/rock_cover.jpeg",
  pop: "/assets/covers/pop_cover.jpeg",
  electronic: "/assets/covers/electronic_cover.jpeg",
  jazz: "/assets/covers/jazz_cover.jpeg",
  ambient: "/assets/covers/ambient_cover.jpeg",
  soundtrack: "/assets/covers/galaxy_2.gif",
  hiphop: "/assets/covers/hiphop_cover.jpg"
};

// Add specific album covers for important artists/albums
const artistCovers = {
  chopin: "/assets/covers/chopin.jpeg",
  chopin_etudes: "/assets/covers/chopin_etudes.jpeg",
  bach: "/assets/covers/bach.jpeg",
  queen: "/assets/covers/rock_cover.jpg",
  bonJovi: "/assets/covers/bon_jovi.jpeg",
  rema: "/assets/covers/rema.jpg",
  rosalia: "/assets/covers/rosalia.jpg",
  eminem: "/assets/covers/eminem.jpg",
  liebestraume: "/assets/covers/liebestraume.jpg",
  rema_calm_down: "/assets/covers/rema_calm_down.jpeg",
  memory_reboot: "/assets/covers/memory_reboot.jpeg"
};

const trackCovers = {
  Stan: "/assets/covers/stan.jpeg"
};

const albumCovers = {
  urban_blues: "/assets/covers/urban_blues.jpeg",
  miss_g: "/assets/covers/miss_g.jpeg"
};

// Define colors by genre
const genreColors = {
  classical: "#7a1f1f",
  rock: "#585858",
  pop: "#9c27b0",
  electronic: "#3a1f7a",
  jazz: "#7a4b1f",
  ambient: "#2d5d2a",
  soundtrack: "#1f5a7a",
  hiphop: "#333333"
};

export const musicLibrary: Track[] = [
  // Classical Music
  {
    id: "classical-1",
    title: "Air on G String",
    artist: "Johann Sebastian Bach",
    album: "Orchestral Suites",
    genre: "classical",
    coverArt: artistCovers.bach, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/air_on_g_string.mp3",
    duration: 180, // Updated from 285
    color: genreColors.classical
  },

  {
    id: "classical-3",
    title: "Etude Op. 10 No. 4",
    artist: "Frédéric Chopin",
    album: "Etudes",
    genre: "classical",
    coverArt: artistCovers.chopin_etudes,
    audioSrc: "/assets/musics/single_tracks/etudes_no_4.mp3",
    duration: 120, // Updated from 240
    color: genreColors.classical
  },
  {
    id: "classical-4",
    title: "Etude Op. 25 No. 11",
    artist: "Frédéric Chopin",
    album: "Etudes",
    genre: "classical",
    coverArt: artistCovers.chopin_etudes,
    audioSrc: "/assets/musics/single_tracks/etudes_no_23.mp3",
    duration: 260,
    color: genreColors.classical
  },
  {
    id: "classical-5",
    title: "Liebestraume No. 3",
    artist: "Franz Liszt",
    album: "Piano Dreams",
    genre: "classical",
    coverArt: artistCovers.liebestraume,
    audioSrc: "/assets/musics/single_tracks/liebestraume_no_3.mp3",
    duration: 295,
    color: genreColors.classical
  },
  
  // Chopin's Nocturnes Collection
  {
    id: "nocturne-1",
    title: "Nocturne Op. 9 No. 1",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_1.mp3",
    duration: 310,
    color: genreColors.classical
  },
  {
    id: "nocturne-2",
    title: "Nocturne Op. 9 No. 2",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_2.mp3",
    duration: 270,
    color: genreColors.classical
  },
  {
    id: "nocturne-3",
    title: "Nocturne Op. 9 No. 3",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_3.mp3",
    duration: 330,
    color: genreColors.classical
  },
  {
    id: "nocturne-4",
    title: "Nocturne Op. 15 No. 1",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_4.mp3",
    duration: 305,
    color: genreColors.classical
  },
  {
    id: "nocturne-5",
    title: "Nocturne Op. 15 No. 2",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_5.mp3",
    duration: 315,
    color: genreColors.classical
  },
  {
    id: "nocturne-6",
    title: "Nocturne Op. 15 No. 3",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_6.mp3",
    duration: 290,
    color: genreColors.classical
  },
  {
    id: "nocturne-7",
    title: "Nocturne Op. 27 No. 1",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes Vol. 2",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_7.mp3",
    duration: 340,
    color: genreColors.classical
  },
  {
    id: "nocturne-8",
    title: "Nocturne Op. 27 No. 2",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes Vol. 2",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_8.mp3",
    duration: 320,
    color: genreColors.classical
  },
  {
    id: "nocturne-9",
    title: "Nocturne Op. 32 No. 1",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes Vol. 2",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_9.mp3",
    duration: 280,
    color: genreColors.classical
  },
  {
    id: "nocturne-10",
    title: "Nocturne Op. 32 No. 2",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes Vol. 2",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_10.mp3",
    duration: 300,
    color: genreColors.classical
  },
  {
    id: "nocturne-11",
    title: "Nocturne Op. 37 No. 1",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes Vol. 2",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_11.mp3",
    duration: 325,
    color: genreColors.classical
  },
  {
    id: "nocturne-12",
    title: "Nocturne Op. 37 No. 2",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes Vol. 2",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_12.mp3",
    duration: 310,
    color: genreColors.classical
  },
  {
    id: "nocturne-13",
    title: "Nocturne Op. 48 No. 1",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes Vol. 3",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_13.mp3",
    duration: 350,
    color: genreColors.classical
  },
  {
    id: "nocturne-14",
    title: "Nocturne Op. 48 No. 2",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes Vol. 3",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_14.mp3",
    duration: 335,
    color: genreColors.classical
  },
  {
    id: "nocturne-15",
    title: "Nocturne Op. 55 No. 1",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes Vol. 3",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_15.mp3",
    duration: 295,
    color: genreColors.classical
  },
  {
    id: "nocturne-17",
    title: "Nocturne Op. 55 No. 2",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes Vol. 3",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_17.mp3",
    duration: 330,
    color: genreColors.classical
  },
  {
    id: "nocturne-18",
    title: "Nocturne Op. 62 No. 1",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes Vol. 3",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_18.mp3",
    duration: 360,
    color: genreColors.classical
  },
  {
    id: "nocturne-19",
    title: "Nocturne Op. 62 No. 2",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes Vol. 3",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_19.mp3",
    duration: 340,
    color: genreColors.classical
  },
  {
    id: "nocturne-20",
    title: "Nocturne Op. 72 No. 1",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes Vol. 3",
    genre: "classical",
    coverArt: artistCovers.chopin, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/nocturne_20.mp3",
    duration: 315,
    color: genreColors.classical
  },
  
  // Rock Music
  {
    id: "rock-1",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    genre: "rock",
    coverArt: coverArt.rock, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/bohemian_rhapsody.mp3",
    duration: 355,
    color: genreColors.rock
  },
  {
    id: "rock-2",
    title: "It's My Life",
    artist: "Bon Jovi",
    album: "Crush",
    genre: "rock",
    coverArt: artistCovers.bonJovi, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/its_my_life.mp3",
    duration: 224,
    color: genreColors.rock
  },
  
  // Pop Music
  {
    id: "pop-1",
    title: "Calm Down",
    artist: "Rema",
    album: "Rave & Roses",
    genre: "pop",
    coverArt: artistCovers.rema_calm_down, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/calm_down.mp3",
    duration: 234,
    color: genreColors.pop
  },
  {
    id: "pop-2",
    title: "Candy",
    artist: "Naoko Gushima",
    album: "Motomami",
    genre: "pop",
    coverArt: albumCovers.miss_g, // Use artist-specific cover
    audioSrc: "/assets/musics/single_tracks/candy.mp3",
    duration: 185,
    color: genreColors.pop
  },
  {
    id: "pop-3",
    title: "Missing You",
    artist: "Naoko Gushima",
    album: "Love Stories",
    genre: "pop",
    coverArt: albumCovers.urban_blues,
    audioSrc: "/assets/musics/single_tracks/missing_you.mp3",
    duration: 210,
    color: genreColors.pop
  },
  
  // Electronic Music
  {
    id: "electronic-2",
    title: "Memory Reboot",
    artist: "Cyber Dreams",
    album: "Neural Network",
    genre: "electronic",
    coverArt: artistCovers.memory_reboot,
    audioSrc: "/assets/musics/single_tracks/memory_reboot.mp3",
    duration: 240,
    color: genreColors.electronic
  },
  {
    id: "electronic-3",
    title: "Monochrome",
    artist: "Naoko Gushima",
    album: "Color Code",
    genre: "electronic",
    coverArt: albumCovers.urban_blues,
    audioSrc: "/assets/musics/single_tracks/monochrome.mp3",
    duration: 218,
    color: genreColors.electronic
  },
  
  // Jazz Music

  // Ambient Music
  
  // Soundtrack
  
  // Hip-hop
  {
    id: "hiphop-1",
    title: "Stan (Instrumental)",
    artist: "Eminem",
    album: "The Marshall Mathers LP",
    genre: "hiphop",
    coverArt: trackCovers.Stan,
    audioSrc: "/assets/musics/single_tracks/stan_instrumental.mp3",
    duration: 340,
    color: genreColors.hiphop
  },
  {
    id: "hiphop-2",
    title: "Stan (MIDI Version)",
    artist: "Eminem",
    album: "The Marshall Mathers LP",
    genre: "hiphop",
    coverArt: trackCovers.Stan,
    audioSrc: "/assets/musics/single_tracks/stan_midi.mp3",
    duration: 330,
    color: genreColors.hiphop
  }
];

// Export grouped tracks by genre for easy access
export const classicalTracks = musicLibrary.filter(track => track.genre === 'classical');
export const rockTracks = musicLibrary.filter(track => track.genre === 'rock');
export const popTracks = musicLibrary.filter(track => track.genre === 'pop');
export const electronicTracks = musicLibrary.filter(track => track.genre === 'electronic');
export const jazzTracks = musicLibrary.filter(track => track.genre === 'jazz');
export const ambientTracks = musicLibrary.filter(track => track.genre === 'ambient');
export const soundtrackTracks = musicLibrary.filter(track => track.genre === 'soundtrack');
export const hiphopTracks = musicLibrary.filter(track => track.genre === 'hiphop');

export default musicLibrary;