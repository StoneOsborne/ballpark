import { useState, useEffect } from 'react'
import ProfileService from '@/services/ProfileService.js'


function useProfile() {
  const [name, setName] = useState('Stone')

  function updateName() {
    setName('Sydney')
  }
}

  export default {
    useProfile,
  }