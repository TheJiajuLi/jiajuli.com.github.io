import { Track } from "../types/music";

export const sampleTracks: Track[] = [
  // Featured tracks - one from each genre
  {
    id: "1",
    title: "Forest Dreams",
    artist: "Nature Sounds",
    album: "Peaceful Forest",
    genre: "ambient",
    coverArt: "/assets/covers/forest.jpg", 
    audioSrc: "/assets/musics/single_tracks/forest_dreams.mp3",
    duration: 240,
    color: "#2d5d2a"
  },
  {
    id: "2",
    title: "Electronic Pulse",
    artist: "Electric Wave",
    album: "Digital Age",
    genre: "electronic",
    coverArt: "/assets/covers/electronic.jpg",
    audioSrc: "/assets/musics/single_tracks/electronic_pulse.mp3",
    duration: 195,
    color: "#3a1f7a"
  },
  {
    id: "3",
    title: "Jazz Café",
    artist: "Smooth Quartet",
    album: "Late Night Sessions",
    genre: "jazz",
    coverArt: "/assets/covers/jazz.jpg",
    audioSrc: "/assets/musics/single_tracks/jazz_cafe.mp3",
    duration: 320,
    color: "#7a4b1f"
  },
  {
    id: "4",
    title: "Classical Morning",
    artist: "String Orchestra",
    album: "Morning Classics",
    genre: "classical",
    coverArt: "/assets/covers/classical.jpg",
    audioSrc: "/assets/musics/single_tracks/classical_morning.mp3",
    duration: 285,
    color: "#7a1f1f"
  },
  {
    id: "5",
    title: "Rock Anthem",
    artist: "Stone Giants",
    album: "Electric Legends",
    genre: "rock",
    coverArt: "/assets/covers/rock.jpg",
    audioSrc: "/assets/musics/single_tracks/rock_anthem.mp3",
    duration: 263,
    color: "#585858"
  },
  // Add new featured tracks
  {
    id: "6",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    genre: "rock",
    coverArt: "/assets/covers/rock.jpg",
    audioSrc: "/assets/musics/single_tracks/bohemian_rhapsody.mp3",
    duration: 355,
    color: "#585858"
  },
  {
    id: "7",
    title: "Calm Down",
    artist: "Rema",
    album: "Rave & Roses",
    genre: "pop",
    coverArt: "/assets/covers/pop.jpg",
    audioSrc: "/assets/musics/single_tracks/calm_down.mp3",
    duration: 234,
    color: "#9c27b0"
  },
  {
    id: "8",
    title: "Nocturne Op. 9 No. 2",
    artist: "Frédéric Chopin",
    album: "Complete Nocturnes",
    genre: "classical",
    coverArt: "/assets/covers/classical.jpg",
    audioSrc: "/assets/musics/single_tracks/nocturne_2.mp3",
    duration: 270,
    color: "#7a1f1f"
  },
  {
    id: "9",
    title: "Legend Mode Theme",
    artist: "Epic Orchestra",
    album: "Game Soundtracks",
    genre: "soundtrack",
    coverArt: "/assets/covers/soundtrack.jpg",
    audioSrc: "/assets/musics/single_tracks/legend_mode_theme_song.mp3",
    duration: 228,
    color: "#1f5a7a"
  },
  {
    id: "10",
    title: "Stan (Instrumental)",
    artist: "Eminem",
    album: "The Marshall Mathers LP",
    genre: "hiphop",
    coverArt: "/assets/covers/hiphop.jpg",
    audioSrc: "/assets/musics/single_tracks/stan_instrumental.mp3",
    duration: 340,
    color: "#333333"
  }
];

export default sampleTracks;