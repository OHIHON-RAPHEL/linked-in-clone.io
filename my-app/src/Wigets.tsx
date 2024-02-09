import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const NewsArticle = ({heading, subtitle}: {heading: string, subtitle: string}) => {
    return (
        <div className='flex p-2.5 cursor-pointer hover:bg-[whitesmoke]'>
          <div className='mr-[5px] text-[#0177b7]'>
            <FiberManualRecordIcon className='text-[15px]' /> 
          </div>
          <div className='flex-[1]'>
            <h4 className='text-[14px]'>{heading}</h4>
            <p className='text-[12px] text-[gray]'>{subtitle}</p>
          </div>
        </div>
    )
};

const Wigets = () => {
  return (
    <div className='sticky top-20 flex-[0.2] bg-white rounded-md border-2 border-[1px_solid_lightgray] h-fit pb-2.5'>
      <div className='flex items-center justify-between p-2.5'>
        <h2 className='text-lg font-semibold text-[16px] '>Linkedin News</h2>
        <InfoIcon />
      </div>
      <NewsArticle heading={"Raphking React is back"} subtitle={"Top news 9099 readers"} />
      <NewsArticle heading={"Raphking React is back"} subtitle={"Top news 9099 readers"} />
      <NewsArticle heading={"Raphking React is back"} subtitle={"Top news 9099 readers"} />
      <NewsArticle heading={"Raphking React is back"} subtitle={"Top news 9099 readers"} />
      <NewsArticle heading={"Raphking React is back"} subtitle={"Top news 9099 readers"} />
      <NewsArticle heading={"Raphking React is back"} subtitle={"Top news 9099 readers"} />
      <NewsArticle heading={"Raphking React is back"} subtitle={"Top news 9099 readers"} />
      <NewsArticle heading={"Raphking React is back"} subtitle={"Top news 9099 readers"} />
    </div>
  )
}

export default Wigets