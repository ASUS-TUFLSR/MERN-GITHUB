import React from 'react'

const HomePage = () => {
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