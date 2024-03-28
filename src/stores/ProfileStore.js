import { create } from 'zustand'
import ProfileService from '@/services/ProfileService.js'

export const useProfilestore = create((set) => ({
  profiles: [],
  loadProfiles: () => {
    ProfileService.getProfile().then((result) => {
      set({ profiles: result })
    })
  }
}))


// export const useProfilestore = create((set) => ({
//   profiles: [{
//     name: 'Stone',
//     email: 'stoneosborne44@gmail.com',
//     number: 5,
//     active: true,
//     school: 'Owen',
//   },
//   {
//     name: 'Sydney',
//     email: 'stoneosborne44@gmail.com',
//     number: 11,
//     active: true,
//     school: 'Owen',
//   }],

// }))

// const useProfilestore = (set) => ({
//   tasks: [{ title: 'TestTask', state: 'ONGOING'}],
//   profiles: [{
//     name: 'Stone',
//     email: 'stoneosborne44@gmail.com',
//     number: 5,
//     active: true,
//     school: 'Owen',
//   },
//   {
//     name: 'Sydney',
//     email: 'stoneosborne44@gmail.com',
//     number: 11,
//     active: true,
//     school: 'Owen',
//   }],
// })

// export const useStore = create(useProfilestore)