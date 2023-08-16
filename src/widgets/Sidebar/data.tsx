import { BsBookmarkFill, BsCalendarEvent, BsHeartFill } from 'react-icons/bs';
import { FaCompass, FaHouse } from 'react-icons/fa6';
import { MdHistory, MdRadioButtonChecked, MdShowChart } from 'react-icons/md';

type SidebarLink = {
  id: number;
  icon: (className: string) => React.ReactNode;
  text: string;
  path: string;
};

type SidebarSection<T> = {
  id: number;
  title: string;
  links: T[];
};

type SidebarPlaylist = Omit<SidebarLink, 'icon'>;
type SidebarArtistOrSong = Omit<SidebarLink, 'icon'> & {
  imageSource: string;
  isImageCircle: boolean;
};

export const sidebarData: SidebarSection<SidebarLink>[] = [
  {
    id: 1,
    title: 'Main Categories',
    links: [
      {
        id: 1,
        icon: (className) => <FaHouse className={className} />,
        text: 'Home',
        path: '/',
      },
      {
        id: 2,
        icon: (className) => <FaCompass className={className} />,
        text: 'Explore',
        path: '/explore',
      },
      {
        id: 3,
        icon: (className) => <BsCalendarEvent className={className} />,
        text: 'New Releases',
        path: '/new',
      },
      {
        id: 4,
        icon: (className) => (
          <MdShowChart className={className} style={{ scale: '1.2' }} />
        ),
        text: 'Top Charts',
        path: '/charts',
      },
      {
        id: 5,
        icon: (className) => (
          <MdRadioButtonChecked
            className={className}
            style={{ scale: '1.2' }}
          />
        ),
        text: 'Radio',
        path: '/radio',
      },
      {
        id: 6,
        icon: (className) => <BsBookmarkFill className={className} />,
        text: 'Music News',
        path: '/news',
      },
    ],
  },
  {
    id: 2,
    title: 'Your Music',
    links: [
      {
        id: 1,
        icon: (className) => <BsHeartFill className={className} />,
        text: 'Favourites',
        path: '/favourites',
      },
      {
        id: 2,
        icon: (className) => (
          <MdHistory className={className} style={{ scale: '1.2' }} />
        ),
        text: 'History',
        path: '/history',
      },
    ],
  },
];

export const sidebarPlaylists: SidebarPlaylist[] = [
  {
    id: 1,
    text: 'My Rock Collection',
    path: '/playlists/1',
  },
  {
    id: 2,
    text: 'Best Music',
    path: '/playlists/2',
  },
  {
    id: 3,
    text: 'Hits of 90s',
    path: '/playlists/3',
  },
  {
    id: 4,
    text: 'Classic Music',
    path: '/playlists/4',
  },
  {
    id: 5,
    text: 'New Pop Music',
    path: '/playlists/5',
  },
  {
    id: 6,
    text: 'Slipknot',
    path: '/playlists/6',
  },
];

export const sidebarArtistsAndSongs: SidebarSection<SidebarArtistOrSong>[] = [
  {
    id: 1,
    title: 'Your Favourite Artists',
    links: [
      {
        id: 1,
        imageSource: '/images/ae0264a0-e665-4572-bcbc-aa2720ece85e.jpg',
        isImageCircle: true,
        text: 'Ariana Grande',
        path: '/artists/1',
      },
      {
        id: 2,
        imageSource: '/images/18504764-2a7b-488c-b70f-23bf1ed999fa.jpg',
        isImageCircle: true,
        text: 'Sabrina Carpenter',
        path: '/artists/2',
      },
      {
        id: 3,
        imageSource: '/images/48033653-c963-4882-98b7-ab9dc86b9fd1.jpg',
        isImageCircle: true,
        text: 'Rihanna',
        path: '/artists/3',
      },
      {
        id: 4,
        imageSource: '/images/02df6804-220c-42c1-83ff-36451fd8c500.jpg',
        isImageCircle: true,
        text: 'Little Mix',
        path: '/artists/4',
      },
      {
        id: 5,
        imageSource: '/images/5599a276-a658-4e99-8aef-2eda12c33886.jpg',
        isImageCircle: true,
        text: 'Doja Cat',
        path: '/artists/5',
      },
      {
        id: 6,
        imageSource: '/images/0abfabbb-08fc-477e-a9bf-f14873d82fc3.jpg',
        isImageCircle: true,
        text: 'Fifth Harmony',
        path: '/artists/6',
      },
      {
        id: 7,
        imageSource: '/images/d89307be-0d50-44fd-8d3f-98561d707273.jpg',
        isImageCircle: true,
        text: 'Selena Gomez',
        path: '/artists/7',
      },
      {
        id: 8,
        imageSource: '/images/268f8bd0-336a-4a53-a655-e7b646014a25.jpg',
        isImageCircle: true,
        text: 'Camila Cabello',
        path: '/artists/8',
      },
    ],
  },
  {
    id: 2,
    title: 'Your Last Songs',
    links: [
      {
        id: 1,
        imageSource: '/images/598bc143-c967-4538-bda0-eabb57ee826c.jpg',
        isImageCircle: false,
        text: 'Summertime Sadness - Lana Del Rey',
        path: '/songs/1',
      },
      {
        id: 2,
        imageSource: '/images/b196b3dc-1b5f-4ee4-a6bb-edfc98ced7de.jpg',
        isImageCircle: false,
        text: 'shut up - Ariana Grande',
        path: '/songs/2',
      },
      {
        id: 3,
        imageSource: '/images/0f1cca69-929d-4e3c-971e-662b6500405c.jpg',
        isImageCircle: false,
        text: 'Nothing Breaks Like a Heart - Mark Ronson',
        path: '/songs/3',
      },
      {
        id: 4,
        imageSource: '/images/b5426b60-cd37-42b3-b142-055c82605563.jpg',
        isImageCircle: false,
        text: 'Panic Room - Au/Ra',
        path: '/songs/4',
      },
      {
        id: 5,
        imageSource: '/images/68b5e8bf-943a-4fc5-93d2-70f87097980c.jpg',
        isImageCircle: false,
        text: 'Barking - Dame Dame (feat. Faruk Orman and Noti-Onna)',
        path: '/songs/5',
      },
    ],
  },
];
