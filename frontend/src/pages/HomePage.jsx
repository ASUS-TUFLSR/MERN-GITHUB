import React, { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Search from '../components/Search'
import SortRepos from '../components/SortRepos'
import ProfileInfo from '../components/ProfileInfo'
import Repos from '../components/Repos'
import Spinner from '../components/Spinner'


const HomePage = () => {

  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sortType, setSortType] = useState("forks")
 

  const getUserProfileAndRepos = useCallback( async () => {
    setLoading(true);  
    try {
        const userRes = await fetch("https://api.github.com/users/ASUS-TUFLSR");
        const userProfile = await userRes.json();
        setUserProfile(userProfile);

        const reposRes = await fetch(userProfile.repos_url);
        const repos = await reposRes.json();
        setRepos(repos);
        console.log("userProfile", userProfile)
        console.log("userRepos", repos)
                
      } catch (error) {
        toast.error(error.message)
      }finally{
        setLoading(false);
      }
  }, [])
 
  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos])

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