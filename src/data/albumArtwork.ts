/**
 * Collection of cover art URLs for albums, artists, and tracks
 */

// Cover art for genres
export const coverArt: Record<string, string> = {
  rock: '/assets/covers/genres/rock.jpg',
  pop: '/assets/covers/genres/pop.jpg',
  classical: '/assets/covers/genres/classical.jpg',
  electronic: '/assets/covers/genres/electronic.jpg',
  hiphop: '/assets/covers/genres/hiphop.jpg',
  jazz: '/assets/covers/genres/jazz.jpg',
  blues: '/assets/covers/genres/blues.jpg',
  country: '/assets/covers/genres/country.jpg',
  folk: '/assets/covers/genres/folk.jpg',
  ambient: '/assets/covers/genres/ambient.jpg'
};

// Cover art for specific albums
export const albumCovers: Record<string, string> = {
  // Classical
  bach_orchestral_suites: '/assets/covers/albums/bach_orchestral_suites.jpg',
  chopin_etudes: '/assets/covers/albums/chopin_etudes.jpg',
  miss_g: '/assets/covers/albums/miss_g.jpg',
  urban_blues: '/assets/covers/albums/urban_blues.jpg',
  
  // Pop/Rock
  queen_night_at_opera: '/assets/covers/albums/queen_night_at_opera.jpg',
  bon_jovi_crush: '/assets/covers/albums/bon_jovi_crush.jpg',
  rema_rave_roses: '/assets/covers/albums/rema_rave_roses.jpg',
  
  // Electronic
  neural_network: '/assets/covers/albums/neural_network.jpg',
  color_code: '/assets/covers/albums/color_code.jpg'
};

// Cover art for specific artists
export const artistCovers: Record<string, string> = {
  // Classical
  bach: '/assets/covers/artists/bach.jpg',
  chopin: '/assets/covers/artists/chopin.jpg',
  chopin_etudes: '/assets/covers/artists/chopin_etudes.jpg',
  liszt: '/assets/covers/artists/liszt.jpg',
  liebestraume: '/assets/covers/artists/liebestraume.jpg',
  
  // Pop/Rock
  queen: '/assets/covers/artists/queen.jpg',
  bonJovi: '/assets/covers/artists/bon_jovi.jpg',
  rema_calm_down: '/assets/covers/artists/rema_calm_down.jpg',
  
  // Electronic
  cyber_dreams: '/assets/covers/artists/cyber_dreams.jpg',
  memory_reboot: '/assets/covers/artists/memory_reboot.jpg'
};

// Cover art for specific tracks
export const trackCovers = {
  Stan: '/assets/covers/tracks/stan.jpg',
  BohemianRhapsody: '/assets/covers/tracks/bohemian_rhapsody.jpg'
};