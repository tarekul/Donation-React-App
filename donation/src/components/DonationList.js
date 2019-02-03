import React from 'react'

const DonationList = (props) =>{
    const donations = props.donations
    return donations.map((e,i)=>{
        return <li className="media my-2" key={i}>
            {mapit(e.name,e.donation,e.caption)}
        </li>
    })
}

const mapit = (name,donation,caption)=>{
    return <div className="media-body">
                <h5 className="mt-0 mb-1">{name}  $ {donation}</h5>
                {caption}
            </div> 
}

export default DonationList
