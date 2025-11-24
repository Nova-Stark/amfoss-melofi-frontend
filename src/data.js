import thumbnail from './assets/thumbnail.jpg';

export const playlists = [
  {
    id: '1',
    name: 'Chill Mix',
    thumbnail: thumbnail,
    songs: [
      { id: '101', song: 'Sunset', artist: 'The xx', duraction: '03:39', link: thumbnail },
      { id: '102', song: 'Bloom', artist: 'ODESZA', duraction: '03:04', link: thumbnail },
      { id: '103', song: 'Intro', artist: 'alt-J', duraction: '02:37', link: thumbnail },
    ],
  },
  {
    id: '2',
    name: 'Focus Flow',
    thumbnail: thumbnail,
    songs: [
        { id: '201', song: 'Music To Focus', artist: 'Concentration', duraction: '05:00', link: thumbnail },
        { id: '202', song: 'Study Beats', artist: 'Lo-fi Girl', duraction: '04:20', link: thumbnail },
    ],
  },
    {
    id: '3',
    name: 'Workout',
    thumbnail: thumbnail,
    songs: [
        { id: '301', song: 'Energy Boost', artist: 'Gym Hits', duraction: '03:10', link: thumbnail },
    ],
  },
];

export const songs = [
    { id: '101', song: 'Sunset', artist: 'The xx', duraction: '03:39', link: thumbnail },
    { id: '102', song: 'Bloom', artist: 'ODESZA', duraction: '03:04', link: thumbnail },
    { id: '103', song: 'Intro', artist: 'alt-J', duraction: '02:37', link: thumbnail },
    { id: '201', song: 'Music To Focus', artist: 'Concentration', duraction: '05:00', link: thumbnail },
    { id: '202', song: 'Study Beats', artist: 'Lo-fi Girl', duraction: '04:20', link: thumbnail },
    { id: '301', song: 'Energy Boost', artist: 'Gym Hits', duraction: '03:10', link: thumbnail },
];
