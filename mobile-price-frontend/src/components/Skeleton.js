import Skeleton from '@mui/material/Skeleton';



export default function Loading() {
  return (
    <div className=''>
        <div className="loader">
        <Skeleton variant="rectangular" width={235} height={280} />
        <Skeleton width="100%" />
        <Skeleton width="60%" />
        </div>
       

    </div>
  )
}
