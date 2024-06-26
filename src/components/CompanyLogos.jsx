
import { companyLogos } from "../constants/constant"
const CompanyLogos = ({className}) => {
  return (
    <div className={className}>
      <h5 className='text-center tagline text-n-1/50 mb-6'>helping people create beautiful content at</h5> 
      <ul className='flex '>
      {companyLogos.map((item ,index)=>(
          <li className="flex justify-center items-center h-[8.5rem] flex-1" key={index}>
            <img src={item} width={134} height={34} alt="logos" />
          </li>
      ))}
      </ul>
    </div>
  )
}

export default CompanyLogos
