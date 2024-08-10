import { profile_pic } from '@/api/axios/axios';
import { useGetProfileQueries } from '@/hooks/customHooks/cmsQuery.hooks';
import React from 'react'


export default function index() {

    const {data, isError, isLoading} = useGetProfileQueries();
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading products</p>;

  return (
    <>
     <div style={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      <br /> <br /><img style={{width:"300px", height:"300px"}} src={profile_pic(data.profile_pic)} alt="" />
     <h4>{data?.first_name}</h4>
     <h4>{data?.last_name}</h4>
     <h4>{data?.email}</h4>
     </div>
    </>
  )
}
