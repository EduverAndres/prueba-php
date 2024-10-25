import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePrincipalStore = defineStore('principal', () => {
  const artistas = ref([])

  function getArtistas() {
    artistas.value = [
      {
        genres: [
          'argentine rock',
          'latin alternative',
          'latin pop',
          'latin rock',
          'mexican pop',
          'rock en espanol',
          'ska argentino'
        ],
        href: 'https://api.spotify.com/v1/artists/4TK1gDgb7QKoPFlzRrBRgR',
        id: '4TK1gDgb7QKoPFlzRrBRgR',
        images: [
          {
            height: 1000,
            url: 'https://i.scdn.co/image/0a44319db623b112c3fddca7a1ef88b5756265cd',
            width: 1000
          },
          {
            height: 640,
            url: 'https://i.scdn.co/image/1c47795e21794ab947aa466283026148163d4bf5',
            width: 640
          },
          {
            height: 200,
            url: 'https://i.scdn.co/image/f611096759364ce80a459c8fcc3e47d789ba34a7',
            width: 200
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/4957431c9881f30a238aeb0c2bc76e05e6a46831',
            width: 64
          }
        ],
        name: 'Los Enanitos Verdes',
        popularity: 72,
        type: 'artist',
        uri: 'spotify:artist:4TK1gDgb7QKoPFlzRrBRgR'
      },
      {
        genres: [
          'chilean hardcore',
          'chilean rock',
          'latin alternative',
          'latin rock',
          'rock en espanol',
          'ska chileno'
        ],
        href: 'https://api.spotify.com/v1/artists/2mSHY8JOR0nRi3mtHqVa04',
        id: '2mSHY8JOR0nRi3mtHqVa04',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb3e37d9994c60ed38760ecb72',
            width: 640
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab676161000051743e37d9994c60ed38760ecb72',
            width: 320
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f1783e37d9994c60ed38760ecb72',
            width: 160
          }
        ],
        name: 'Los Prisioneros',
        popularity: 63,
        type: 'artist',
        uri: 'spotify:artist:2mSHY8JOR0nRi3mtHqVa04'
      },
      {
        genres: ['cantautor', 'spanish new wave', 'spanish pop'],
        href: 'https://api.spotify.com/v1/artists/4VIU80QkcrMEdKoiWmnWvr',
        id: '4VIU80QkcrMEdKoiWmnWvr',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb6cc95e0edb756ada9fbe08d5',
            width: 640
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab676161000051746cc95e0edb756ada9fbe08d5',
            width: 320
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f1786cc95e0edb756ada9fbe08d5',
            width: 160
          }
        ],
        name: 'Cómplices',
        popularity: 47,
        type: 'artist',
        uri: 'spotify:artist:4VIU80QkcrMEdKoiWmnWvr'
      },
      {
        genres: [
          'argentine rock',
          'latin alternative',
          'latin pop',
          'latin rock',
          'rock en espanol',
          'ska',
          'ska argentino'
        ],
        href: 'https://api.spotify.com/v1/artists/2FS22haX3FYbyOsUAkuYqZ',
        id: '2FS22haX3FYbyOsUAkuYqZ',
        images: [
          {
            height: 751,
            url: 'https://i.scdn.co/image/fa61694bc1b21f212fef31d4f6b89e1d0b9ff7fa',
            width: 1000
          },
          {
            height: 480,
            url: 'https://i.scdn.co/image/356b77649f85211b2f9f1da048a98122cfe7f007',
            width: 639
          },
          {
            height: 150,
            url: 'https://i.scdn.co/image/b256571c95995b91e6881e80de553abfe3cac74b',
            width: 200
          },
          {
            height: 48,
            url: 'https://i.scdn.co/image/c49b77f926f128d2b6ed9e9b146f49df3c8deee2',
            width: 64
          }
        ],
        name: 'Los Fabulosos Cadillacs',
        popularity: 67,
        type: 'artist',
        uri: 'spotify:artist:2FS22haX3FYbyOsUAkuYqZ'
      },
      {
        genres: ['latin alternative', 'latin rock', 'rock en espanol', 'ska argentino'],
        href: 'https://api.spotify.com/v1/artists/60nua3AsVSfADZtg5Hdz3W',
        id: '60nua3AsVSfADZtg5Hdz3W',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb8e68c46c331c2eb026c13460',
            width: 640
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab676161000051748e68c46c331c2eb026c13460',
            width: 320
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f1788e68c46c331c2eb026c13460',
            width: 160
          }
        ],
        name: 'La Mosca Tse-Tse',
        popularity: 62,
        type: 'artist',
        uri: 'spotify:artist:60nua3AsVSfADZtg5Hdz3W'
      },
      {
        genres: [
          'latin arena pop',
          'latin pop',
          'latin rock',
          'mexican pop',
          'mexican rock',
          'rock en espanol'
        ],
        href: 'https://api.spotify.com/v1/artists/7okwEbXzyT2VffBmyQBWLz',
        id: '7okwEbXzyT2VffBmyQBWLz',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb152dcec8175d19fb12eeb8e0',
            width: 640
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab67616100005174152dcec8175d19fb12eeb8e0',
            width: 320
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f178152dcec8175d19fb12eeb8e0',
            width: 160
          }
        ],
        name: 'Maná',
        popularity: 77,
        type: 'artist',
        uri: 'spotify:artist:7okwEbXzyT2VffBmyQBWLz'
      },
      {
        genres: [
          'latin alternative',
          'latin pop',
          'mexican pop',
          'rock en espanol',
          'spanish rock'
        ],
        href: 'https://api.spotify.com/v1/artists/60uh2KYYSCqAgJNxcU4DA0',
        id: '60uh2KYYSCqAgJNxcU4DA0',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb75b47b1df7cbb577259a0c9d',
            width: 640
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab6761610000517475b47b1df7cbb577259a0c9d',
            width: 320
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f17875b47b1df7cbb577259a0c9d',
            width: 160
          }
        ],
        name: 'Hombres G',
        popularity: 71,
        type: 'artist',
        uri: 'spotify:artist:60uh2KYYSCqAgJNxcU4DA0'
      },
      {
        genres: [
          'argentine rock',
          'latin alternative',
          'latin rock',
          'post-punk argentina',
          'rock en espanol',
          'ska argentino'
        ],
        href: 'https://api.spotify.com/v1/artists/7An4yvF7hDYDolN4m5zKBp',
        id: '7An4yvF7hDYDolN4m5zKBp',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb4a6d2f5e161c011cdb9cef69',
            width: 640
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab676161000051744a6d2f5e161c011cdb9cef69',
            width: 320
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f1784a6d2f5e161c011cdb9cef69',
            width: 160
          }
        ],
        name: 'Soda Stereo',
        popularity: 74,
        type: 'artist',
        uri: 'spotify:artist:7An4yvF7hDYDolN4m5zKBp'
      },
      {
        genres: ['colombian pop', 'latin pop', 'mexican pop', 'rock en espanol'],
        href: 'https://api.spotify.com/v1/artists/0UWZUmn7sybxMCqrw9tGa7',
        id: '0UWZUmn7sybxMCqrw9tGa7',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb330d24db775125dcec2c7b4c',
            width: 640
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab67616100005174330d24db775125dcec2c7b4c',
            width: 320
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f178330d24db775125dcec2c7b4c',
            width: 160
          }
        ],
        name: 'Juanes',
        popularity: 75,
        type: 'artist',
        uri: 'spotify:artist:0UWZUmn7sybxMCqrw9tGa7'
      },
      {
        genres: ['colombian pop'],
        href: 'https://api.spotify.com/v1/artists/49Z1AvGeUaBSanPaOmplK6',
        id: '49Z1AvGeUaBSanPaOmplK6',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb5510c81243ec1b4eeafb75d2',
            width: 640
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab676161000051745510c81243ec1b4eeafb75d2',
            width: 320
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f1785510c81243ec1b4eeafb75d2',
            width: 160
          }
        ],
        name: 'Andrés Cepeda',
        popularity: 63,
        type: 'artist',
        uri: 'spotify:artist:49Z1AvGeUaBSanPaOmplK6'
      },
      {
        genres: ['colombian pop', 'latin viral pop'],
        href: 'https://api.spotify.com/v1/artists/5C4PDR4LnhZTbVnKWXuDKD',
        id: '5C4PDR4LnhZTbVnKWXuDKD',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb08c3b70e494bd0ea0ef56fb7',
            width: 640
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab6761610000517408c3b70e494bd0ea0ef56fb7',
            width: 320
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f17808c3b70e494bd0ea0ef56fb7',
            width: 160
          }
        ],
        name: 'Morat',
        popularity: 81,
        type: 'artist',
        uri: 'spotify:artist:5C4PDR4LnhZTbVnKWXuDKD'
      }
    ]
  }

  return { artistas, getArtistas }
})
