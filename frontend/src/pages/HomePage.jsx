import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import SortRepos from '../components/SortRepos'
import ProfileInfo from '../components/ProfileInfo'
import Repos from '../components/Repos'
import Spinner from '../components/Spinner'


const HomePage = () => {

  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = (false);

  const [sortType, setSortType] = useState("forks")

  const getUserProfileAndRepos = async () => {
      try {
        // Fetch USer Profile And Repos Using Github API
      } catch (error) {
        toast.error(error.message)
      }
  }

  useEffect(() => {
    getUserProfileAndRepos();
  }, [])

  return (
    <div className='m-4' >
      <Search/>
      <SortRepos/>
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-center' >
        <ProfileInfo/> 
        <Repos/>
        <Spinner />
      </div>
    </div>
  )
}

export default HomePage